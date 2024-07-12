import Image from "next/image";
import Link from "next/link"
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <main><h1>Hello World</h1>
    {/* Client-side navigation */}
    <Link href ="/users/new">Users</Link>
    <ProductCard />
    </main>
  );
}
