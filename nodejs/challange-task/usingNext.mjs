const treeCollection = [
    {
        "id": "T1",
        "name": "Tree-1",
        "blocks": [
            "B1",
            "B2"
        ],
        "nextTree": "T2"
    },
    {
        "id": "T2",
        "name": "Tree-2",
        "blocks": [
            "B7",
            "B8"
        ],
        "nextTree": null
    }
]

const blockCollection = [
    {
        "id": "B1",
        "name": "Block-1",
        "nodes": [
            "N1",
            "N2",
            "N3"
        ],
        "nextBlock": "B2"
    },
    {
        "id": "B2",
        "name": "Block-2",
        "nodes": [
            "N4",
            "N5"
        ],
        "nextBlock": null
    },
    {
        "id": "B7",
        "name": "Block-2",
        "nodes": [
            "N8"
        ],
        "nextBlock": "B8"
    },
    {
        "id": "B8",
        "name": "Block-2",
        "nodes": [
            "N9",
            "N10"
        ],
        "nextBlock": null
    }
]

const nodeCollection = [
    {
        "id": "N1",
        "name": "Node-1",
        "message": "Execute Node-1",
        "nextNode": "N2"
    },
    {
        "id": "N2",
        "name": "Node-2",
        "message": "Execute Node-2",
        "nextNode": "N3"
    },
    {
        "id": "N4",
        "name": "Node-4",
        "message": "Execute Node-4",
        "nextNode": "N5"
    },
    {
        "id": "N3",
        "name": "Node-3",
        "message": "Execute Node-3",
        "nextNode": null
    },
    {
        "id": "N5",
        "name": "Node-5",
        "message": "Execute Node-5",
        "nextNode": null
    },
    {
        "id": "N8",
        "name": "Node-8",
        "message": "Execute Node-8",
        "nextNode": null
    },
    {
        "id": "N9",
        "name": "Node-9",
        "message": "Execute Node-9",
        "nextNode": "N10"
    },
    {
        "id": "N10",
        "name": "Node-10",
        "message": "Execute Node-10",
        "nextNode": null
    }
]

function travelTree(tree){
    const blocks = tree.blocks;
    if(blocks.length){
        const block = blockCollection.find(block => block.id === blocks[0])
        travelBlock(block)
    }
    if(tree.nextTree){
        const nextTree = treeCollection.find(treeToMatch => treeToMatch.id === tree.nextTree)
        travelTree(nextTree)
    }
    return;
}

function travelBlock(block){
    const nodes = block.nodes;
    if(nodes.length){
        const node = nodeCollection.find(node => node.id == nodes[0]);
        travelNode(node)
    }
    if(block.nextBlock){
        const nextBlock = blockCollection.find(blockToMatch => blockToMatch.id === block.nextBlock)
        travelBlock(nextBlock)
    }
    return;
}

function travelNode(node){
    console.log(node.message);
    if(node.nextNode){
        const nextNode = nodeCollection.find(nodeToMatch => nodeToMatch.id === node.nextNode);
        travelNode(nextNode)
    }
    return;
}

const start = Date.now();
travelTree(treeCollection[0])
console.log("Time : ", Date.now() - start);

// single function 