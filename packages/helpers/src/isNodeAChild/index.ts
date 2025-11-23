export function isNodeAChild(
  parent: HTMLElement | ChildNode,
  target: HTMLElement,
): boolean {
  if (parent === target) return true;

  const children = parent.childNodes;

  if (children.length === 0) return false;

  for (let index = 0; index < children.length; index++) {
    const result = isNodeAChild(children[index], target);
    if (result) return true;
  }

  return false;
}
