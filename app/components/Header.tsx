// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', background: '#333', color: '#fff', textAlign: 'center' }}>
      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/users">Users</Link>
        {" | "}
        <Link href="/about">About</Link>
        {" | "}
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
