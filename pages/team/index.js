import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../helper/api";

export default function Team() {
  const { data: coachies, error } = useSWR("/api/team", fetcher);

  if (error) return <h2>Ooops... something went wrong</h2>;

  return (
    <>
      <h1>Team content here</h1>
      <ul>
        {coachies ? (
          coachies.map((coachie) => (
            <li key={coachie.name}>
              {" "}
              <Link href={"/team/" + coachie.name}>{coachie.name}</Link>
            </li>
          ))
        ) : (
          <h2>We are still loading. Please be patient</h2>
        )}
      </ul>
    </>
  );
}
