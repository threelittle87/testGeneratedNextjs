import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Products - Figma Demo</title>
      </Head>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Products</h1>
        <Link href="/">Back to Home</Link>
      </header>
      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Our Featured Products</h2>
        <p className="mt-2 text-gray-600">Discover our range of carefully designed products.</p>
      </section>
    </div>
  );
}