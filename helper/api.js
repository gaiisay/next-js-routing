const coachies = [
  {
    name: "Andrea",
    favorite: "🤿",
  },
  {
    name: "Jessica",
    favorite: "🎨",
  },
  {
    name: "Michael",
    favorite: "☕️",
  },
];

function getAllTeamMembers() {
  return coachies;
}

function getTeamMemberByName(name) {
  return coachies.find((coachie) => coachie.name.toLowerCase() === name);
}

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

export default coachies;
export { getAllTeamMembers, getTeamMemberByName, fetcher };
