import Link from 'next/link';
import ProductCard from './components/ProductCard';
import Header from './components/Header';

const Home = () => {
  return (
    <main>
      {/* Client-side navigation */}
      {/* <Header /> */}
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}

export default Home;
