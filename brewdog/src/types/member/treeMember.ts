import Member from "./member";

export default interface TreeMember extends Member {
  parent: TreeMember | null;
  childs: TreeMember[] | null;
}
