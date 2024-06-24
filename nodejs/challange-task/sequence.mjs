import {treeCollection, blockCollection, nodeCollection} from './sequencedData.mjs';


function main(){
    treeCollection.forEach(tree => {
        tree.blocks.forEach(blockIdFromTree => {
            const block = blockCollection.find(block => block.id === blockIdFromTree);
            block.nodes.forEach(nodeIdFromBlock => {
                const node = nodeCollection.find(node => node.id === nodeIdFromBlock);
                console.log(node.message);
            })
        })
    })
}

const start = Date.now();
main()
console.log("Time : ", Date.now() - start);