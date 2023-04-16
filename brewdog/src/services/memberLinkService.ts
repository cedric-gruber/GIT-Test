import { Member, TreeMember } from "../types/member";

type Dictionary<T> = { [key: number]: T };

const link = (members: Member[]) => {
  // Build a tree, and get all the root nodes
  const roots = buildTree(members);

  // Dictionary of ids found in the tree
  const found: Dictionary<boolean> = {};

  // Get all the descendants of the root and add them in the found list
  roots.forEach((root) => {
    root.childs = getDescendants(root, found);
    found[root.id] = true;
  });

  // Find all the member part of a circular relationship
  const circularRelationship: TreeMember[] = [];
  members.forEach((member) => {
    if (!found[member.id]) {
      circularRelationship.push(member as TreeMember);
    }
  });

  return { roots, circularRelationship };
};

/** Map a list of member to a tree, and return root elements. */
const buildTree = (members: Member[]): TreeMember[] => {
  // Create a dictionary id/object to simplify the parent search
  const dico: Dictionary<TreeMember> = {};

  // Instantiate the dictionary and the array of childs
  const treeMembers = members as TreeMember[];
  treeMembers.forEach((member) => {
    member.childs = [];
    dico[member.id] = member;
  });

  const roots: TreeMember[] = [];

  // Add childs to their parent node, and roots to the root list
  treeMembers.forEach((member) => {
    if (member.linkId != null) {
      const parent = dico[member.linkId];
      if (!parent) {
        //  If the parent is not found in the dictionary, throw an error
        throw Error(
          `Error in the data. A member has a parent not present in the list. (${JSON.stringify(
            member
          )})`
        );
      }
      member.parent = parent;
      parent.childs!.push(member);
    } else {
      roots.push(member);
    }
  });

  return roots;
};

/** Recurcive function to get all descendants of a node. */
const getDescendants = (
  node: TreeMember,
  found: Dictionary<boolean>
): TreeMember[] => {
  const result: TreeMember[] = [];

  node.childs?.forEach((child) => {
    // Add the child in the found list and return it
    found[child.id] = true;
    result.push(child);

    // Get the descendants of the child and return them
    const descendants = getDescendants(child, found);
    result.push(...descendants);
  });

  return result;
};

export { link };
