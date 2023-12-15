import G6 from '@antv/g6';

const Schema = () => {
  const data = {
    nodes: [
      { id: 'node1', x: 300, y: 350, label: 'Node 1', style: {fill: '#98ce68'} },
      { id: 'node2', x: 300, y: 350, label: 'Node 2', style: {fill: '#5c8dcb'} },
    ],
  };

  const graph = new G6.Graph({
    container: 'animations',
    width: 800,
    height: 600,
    defaultNode: {
      size: 80,
      style: {
        stroke: null,
      }
    },
  });

  graph.data(data);
  graph.render();

  const node1 = graph.findById('node1');
  const node2 = graph.findById('node2');
  const radius1 = 100;
  const radius2 = 200;
  let index = 0;
  setInterval(() => {
    node1.updatePosition({
      x: (300 + radius1 * Math.sin(Math.PI * 2 * index / 100) + 100),
      y: (350 - radius1 * Math.cos(Math.PI * 2 * index / 100)),
    });
    node2.updatePosition({
      x: (300 + radius2 * Math.sin(Math.PI * 2 * index / 100) + 100),
      y: (350 - radius2 * Math.cos(Math.PI * 2 * index / 100)),
    });
    index--;
    if (index < 0) index = 100;
  }, 15);
};

export default Schema;
