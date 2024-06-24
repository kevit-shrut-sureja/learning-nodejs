/**
 * Task to print all he message's with the in the nodeCollection by travelling to the nextTree.
 * or nextBlock and the nextNode and travel in the blocks and the nodes
 */

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

function travel(id){
    // Tree, Block, Node !!!
    if(id === null){
        return; 
    }

    if(id.includes("T")){
        // tree
        const tree = treeCollection.find(t => t.id === id);
        if(tree.blocks){
            travel(tree.blocks[0])
        }
        travel(tree.nextTree)
    }
    else if(id.includes("B")){
        const block = blockCollection.find(b => b.id === id);
        if(block.nodes){
            travel(block.nodes[0]);
        }
        travel(block.nextBlock);
    }
    else if(id.includes("N"))
    {
        const node = nodeCollection.find(n => n.id === id);
        console.log(node.message);
        travel(node.nextNode);
    }
}

const start = Date.now();
travel("T1")
console.log("Time :", Date.now() - start)