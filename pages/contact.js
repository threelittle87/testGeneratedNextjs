import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact - Figma Demo</title>
      </Head>
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Contact Us</h1>
        <Link href="/">Back to Home</Link>
      </header>
      <section className="p-6 text-center">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        <p className="mt-2 text-gray-600">Reach out to us for more details.</p>
      </section>
    </div>
  );
}