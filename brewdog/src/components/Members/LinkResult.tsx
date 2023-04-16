import React from "react";
import { TreeMember } from "../../types/member";

interface LinkResultProps {
  circularRelationship: TreeMember[];
  roots: TreeMember[];
}

const LinkResult = ({
  circularRelationship,
  roots,
}: LinkResultProps): JSX.Element => (
  <div className="row">
    <div className="col-md-6">
      <h2>Invoice Members</h2>
      <div>
        <ul>
          {roots.map((root) => (
            <React.Fragment key={root.id}>
              <li>{root.name}</li>
              <ul>
                {root.childs!.map((child) => (
                  <li key={child.id}>
                    {child.name}
                    {child.parent!.id !== root.id ? (
                      <> ({child.parent!.name})</>
                    ) : null}
                  </li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
    <div className="col-md-6">
      <h2>Circular Relationship</h2>
      <div>
        <ul>
          {circularRelationship.map((member) => (
            <li key={member.id}>
              {member.name} ({member.parent!.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default LinkResult;
