export type Node = {
    id: string;
    x: number;
    y: number;
    name: string;
    // TODO: make this a timestamp/date
    mesh_date_created: string;
    mesh_depth: number;
    size: number;
  };
  
export type Edge = {
  source: string;
  target: string;
};

export const searchParams = new URLSearchParams(document.location.search);
export const InputArgs = {
  nodes: searchParams.get("nodes") || "cosmograph-mesh-nodes.json",
  edges: searchParams.get("edges") || "cosmograph-mesh-edges.json"
};

export async function fetch_url(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
    }
    return await response.json();
}

export const nodes: Promise<Node[]> = fetch_url(InputArgs.nodes).then(d => {
    console.log(`Fetched ${d.length} nodes from ${InputArgs.nodes}`);
    return d;
}).catch(error => {
    console.error(error);
});

export const edges: Promise<Edge[]> = fetch_url(InputArgs.edges).then(d => {
    console.log(`Fetched ${d.length} edges from ${InputArgs.edges}`);
    return d;
}).catch(error => {
    console.error(error);
});