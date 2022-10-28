import { getAllTeamMembers } from "../../../helper/api";

function handler(request, response) {
  const team = getAllTeamMembers();
  response.status(200).json(team);
}

export default handler;
