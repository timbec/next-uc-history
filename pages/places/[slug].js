import { useRouter } from "next/router";

export default function PlacePage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Gunnar Mines</h1>
    </div>
  );
}
