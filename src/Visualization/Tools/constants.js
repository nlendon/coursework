import G6 from "@antv/g6";
import {Dismiss, Expand} from "../Chart";

export const tooltip = new G6.Tooltip({
    offsetX: 10, offsetY: 10, fixToNode: [1, 0.5], itemTypes: ['node', 'edge'], getContent: (e) => {
        const outDiv = document.createElement('div');
        outDiv.style.width = 'fit-content';
        outDiv.style.height = 'fit-content';
        const model = e.item.getModel();
        if (e.item.getType() === 'node') {
            const linksCount = e.item.getEdges();
            outDiv.innerHTML = `Name: ${model.label}<br/>Links Count: ${linksCount?.length}`;
        } else {
            const source = e.item.getSource();
            const target = e.item.getTarget();
            outDiv.innerHTML = `Edge Name: ${e.item._cfg.model.label} <br/>Source：${source.getModel().label}<br/>Target：${target.getModel().label}`;
        }
        return outDiv;
    },
});

export const contextMenu = new G6.Menu({
    getContent() {
        return `
            <ul class="contextMenu">
              <li title="Expand Node">Expand</li>
              <li title="Dismiss">Dismiss</li>
            </ul>
        `;
    },
    handleMenuClick: (target, item) => {
        switch (target.title) {
            case 'Expand Node':
                Expand(item);
                break;
            case 'Dismiss':
                Dismiss(item);
                break;
        }
    },
    offsetX: 16 + 10,
    offsetY: 0,
    itemTypes: ['node'],
});

export const clearAllStats = (graph) => {
    graph.setAutoPaint(false);
    graph.refreshPositions();
    graph.getNodes().forEach(function (node) {
        graph.clearItemStates(node);
    });
    graph.getEdges().forEach(function (edge) {
        graph.clearItemStates(edge);
    });
    graph.paint();
    graph.setAutoPaint(true);
}