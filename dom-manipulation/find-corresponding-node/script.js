/*
Objective:
Given two DOM trees (original and cloned) where the cloned tree is a deep copy of the original, the goal is to find the corresponding node in the cloned tree for a specific node in the original tree.
*/

function findCorrespondingNode(original, cloned, target) {
  if (original === target) return cloned;

  const originalChild = original.children;
  const clonedChild = cloned.children;
  let correspondingNode = null;

  if (originalChild?.length > 0) {
    for (const idk in originalChild) {
      correspondingNode = findCorrespondingNode(
        originalChild[idk],
        clonedChild[idk],
        target
      );
      if (correspondingNode) return correspondingNode;
    }
  }
  return correspondingNode;
}

const tree1 = document.getElementById("tree1");
const tree2 = document.getElementById("tree2");
const target = document.getElementById("target");
if (target) {
  target.style.background = "#f3c3c3";
}

const correspondingNode = findCorrespondingNode(tree1, tree2, target);
if (correspondingNode) {
  correspondingNode.style.background = "#9dee9d";
}
