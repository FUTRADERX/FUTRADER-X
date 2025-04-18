import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1 className="logo">FUTRADERX</h1>
      <p className="tagline">Get paid to trade. No cap, no fluff.</p>
      <Link href="/login">
        <button className="start-btn">Login</button>
      </Link>
    </div>
  );
}
