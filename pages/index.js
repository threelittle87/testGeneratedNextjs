import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Home - Figma Demo</title>
      </Head>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Figma Demo</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <section className="text-center py-10 bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
        <h2 className="text-3xl font-semibold">Welcome to Figma Demo</h2>
        <p className="mt-2">Explore our product designs.</p>
      </section>
    </div>
  );
}