import { getTeamMemberByName } from "../../../../helper/api";

function handler(request, response) {
  const name = request.query.name;
  const teamMember = getTeamMemberByName(name);
  response.status(200).json(teamMember);
}

export default handler;
