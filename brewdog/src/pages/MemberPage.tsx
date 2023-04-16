import LinkResult from "../components/Members/LinkResult";
import * as MemberLinkService from "../services/memberLinkService";
import { Member } from "../types/member";

const json = `[{
  "id": 1,
  "name" : "member A",
  "linkId": 3
},
{
  "id": 2,
  "name": "member B",
  "linkId": 1
},
{
  "id": 3,
  "name": "member C",
  "linkId": 2
},
{
  "id": 4,
  "name": "member D",
  "linkId": null
},
{
  "id": 5,
  "name": "member E",
  "linkId": null
},
{
  "id": 6,
  "name": "member F",
  "linkId": 1
},
{
  "id": 7,
  "name": "member G",
  "linkId": 9
},
{
  "id": 8,
  "name": "member H",
  "linkId": 9
},
{
  "id": 9,
  "name": "member I",
  "linkId": null
},
{
  "id": 10,
  "name": "member J",
  "linkId": 10
},
{
  "id": 11,
  "name": "member K",
  "linkId": null
},
{
  "id": 12,
  "name": "member L",
  "linkId": 8
}]`;

const MemberPage = (): JSX.Element => {
  let result = null;
  let error = "";

  try {
    const members: Member[] = JSON.parse(json);
    result = MemberLinkService.link(members);
  } catch (e: unknown) {
    error = (e as Error).message;
  }

  return (
    <div className="container">
      <h1>Members</h1>
      {result === null ? (
        <div>{error}</div>
      ) : (
        <LinkResult
          roots={result.roots}
          circularRelationship={result.circularRelationship}
        />
      )}
    </div>
  );
};

export default MemberPage;
