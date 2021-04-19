import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  return <pre>{JSON.stringify(query, null, 2)}</pre>;
}
