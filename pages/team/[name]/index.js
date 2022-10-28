import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../../helper/api";

export default function Name() {
  const router = useRouter();
  const { name } = router.query;

  const { data: coachie, error } = useSWR(`/api/team/${name}`, fetcher);

  if (error) return <h2>Ooops... something went wrong</h2>;

  return (
    <>
      <h1>
        {coachie?.name} ... {coachie?.favorite}
      </h1>
    </>
  );
}
