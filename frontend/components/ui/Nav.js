import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/details">Details</Link>
      <Link href="/ourstory">Our Story</Link>
      <Link href="/registry">Registry</Link>
    </nav>
  );
}
