import { Button } from "@/components/Button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>SimpliMuv Challenge</h1>

      <Link href={`/products?page=1&pageSize=5&type=all`}>
        <Button>Go to products listing</Button>
      </Link>
    </>
  );
}
