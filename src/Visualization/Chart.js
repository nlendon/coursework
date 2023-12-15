import G6 from '@antv/g6';
import { expandNode } from '../api/serviceApi';
import { LongTextFormat } from './Tools/TextFormat';
import { clearAllStats, contextMenu, tooltip } from './Tools/constants';

const globalFontSize = 20;
const offsetDiff = 50;
const multiEdgeType = 'quadratic';
const singleEdgeType = 'line';
const loopEdgeType = 'loop';
let graph;

const toolbar = new G6.ToolBar();

export const Tools = (tool, props) => {
  const animateCfg = { duration: 200, easing: 'easeCubic' };
  switch (tool) {
    case 'zoomOut':
      graph.zoom(0.8, undefined, true, animateCfg);
      break;
    case 'zoomIn':
      graph.zoom(1.2, undefined, true, animateCfg);
      break;
    case 'fit':
      graph.fitView(20, undefined, true, animateCfg);
      break;
    case 'layoutPlay':
      graph.updateLayout({
        type: props,
      });
      break;
  }
};
export const ClearScene = () => {
  graph.clear();
};

export const Expand = (node, index = 0, radius = 200, limit = 100) => {

  expandNode(node._cfg.id, limit).then((data) => {
    if (data.nodes.length >= 16) radius = 40 / Math.sin(Math.PI / data.nodes.length) + 30;
    data.nodes.forEach((nodeInfo) => {
      index++;
      graph.cfg.data.nodes.push({
        id: nodeInfo.id,
        x: (node._cfg.model.x + radius * Math.sin(Math.PI * 2 * index / data.nodes.length)),
        y: (node._cfg.model.y - radius * Math.cos(Math.PI * 2 * index / data.nodes.length)),
        label: LongTextFormat(nodeInfo.label, 250, globalFontSize),
        cluster: nodeInfo.cluster[0],
        icon: {
          img: nodeInfo.icon.img,
        },
        style: {
          fill: nodeInfo.style.fill,
        },
      });
    });
    graph.cfg.data.edges = graph.cfg.data.edges.concat(data.edges);
    graph.render();
  });
};

export const Dismiss = (item) => {
  graph.cfg.data.nodes = graph.cfg.data.nodes.filter((node) => node.id === item._cfg.id);
  graph.render();
};

const Chart = (dataInfo, container, setTab, setId) => {
  const width = window.innerWidth - 200;
  const height = window.innerHeight - 210;
  let canvas;
  if (container) {
    canvas = container.querySelector('canvas');
  } else {
    let container = document.getElementById('container');
    canvas = container.querySelector('canvas');
  }
  G6.Util.processParallelEdges(dataInfo.edges, offsetDiff, multiEdgeType, singleEdgeType, loopEdgeType);
  if (!canvas) {
    graph = new G6.Graph({
      container: 'container',
      width,
      height,
      plugins: [tooltip, toolbar, contextMenu],
      enabledStack: true,
      maxZoom: 2,
      animate: true,
      fitView: true,
      layout: {
        type: 'concentric',
        maxLevelDiff: 0.5,
        sortBy: 'degree',
        edgeLength: 10,
        preventOverlap: true,
        nodeSize: 80,
        center: [width / 2, height / 2],
        onLayoutEnd: () => {
          setTimeout(() => {
            Tools('layoutPlay', '');
          }, 1000);
        },
      },
      defaultNode: {
        size: 80,
        icon: {
          show: true,
          width: 40,
          height: 40,
        },
        style: {
          stroke: '',
        },
        labelCfg: {
          style: {
            fontSize: globalFontSize,
            lineHeight: 100,
            maxWidth: 20,
          },
          position: 'bottom',
        },
      },
      defaultEdge: {
        type: 'quadratic', labelCfg: {
          refY: 10,
          autoRotate: true,
          style: {
            fontSize: 25,
          },
        }, size: 4, color: '#7166F8', style: {
          endArrow: {
            path: G6.Arrow.triangle(),
          },
        },
      },
      nodeStateStyles: {
        highlight: {
          opacity: 1,
        }, dark: {
          opacity: 0.2,
        },
      },
      edgeStateStyles: {
        highlight: {
          stroke: '#999',
        }, dark: {
          stroke: '#C4C4C4', lineWidth: 7,
        },
      },
      modes: {
        default: [{
          type: 'zoom-canvas', enableOptimize: true, optimizeZoom: 0.1,
        }, {
          type: 'drag-canvas',
        }, 'drag-node'],
      },
    });
    toolbar.destroy();
    graph.data(dataInfo);
    graph.render();
  } else {
    dataInfo.nodes.forEach(function(node) {
      node.label = LongTextFormat(node.label, 250, globalFontSize);
    });
    graph.data(dataInfo);
    graph.render();
  }
  graph.on('node:mouseleave', () => clearAllStats(graph));


  graph.on('canvas:click', () => clearAllStats(graph));
  graph.on('node:dblclick', (e) => {
    if (setId) {
      setId(e.item._cfg.id);
      setTab(true);
    }
  });

  graph.on('edge:mouseenter', (e) => {
    const item = e.item;
    graph.setItemState(item, 'dark', true);
  });

  graph.on('edge:mouseleave', (e) => {
    const item = e.item;
    graph.setItemState(item, 'dark', false);
  });

  dataInfo.nodes.forEach(function(node) {
    node.label = LongTextFormat(node.label, 250, globalFontSize);
  });
};

export default Chart;
