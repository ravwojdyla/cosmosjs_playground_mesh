import "./index.css";
import { Cosmograph, CosmographInputConfig } from '@cosmograph/cosmograph';
import { nodes, edges, Node, Edge } from "./mesh_data";

const targetElement = document.createElement('div')
document.body.appendChild(targetElement)

const nodeClickHandler = (node: Node | undefined) => {
  if (!node) return;
  graph.selectNode(node, true);
  graph.zoomToNode(node);
}

const config: CosmographInputConfig<Node, Edge> = {
  disableSimulation: true,

  linkWidth: 0.2,
  linkArrows: false,
  linkColor: () => {
    // TODO: get the opacity from link data
    const opacity_hex = (80).toString(16);
    return `#666666${opacity_hex}`;
  },
  
  nodeSize: node => node.size,
  nodeSizeScale: 8,
  nodeColor: () => {
    const opacity_hex = (80).toString(16);
    return `#FF416F${opacity_hex}`
  },
  nodeLabelAccessor: node => {
    return node.name;
  },
  nodeLabelClassName: "text-white font-light",
  hoveredNodeLabelClassName: "text-white font-light hover:font-bold",
  showHoveredNodeLabel: true,
  showTopLabels: true,
  showDynamicLabels: false,

  onClick(clickedNode) {
    nodeClickHandler(clickedNode);
  },
};

const graph = new Cosmograph(targetElement, config);


Promise.all([nodes, edges]).then(([nodes, edges]) => {
  graph.setData(nodes, edges, false);
})
