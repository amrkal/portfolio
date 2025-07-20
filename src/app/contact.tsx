import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-lg mb-2">You can reach me at:</p>
        <ul className="text-lg list-disc list-inside">
          <li>Email: <a href="mailto:amrkalany@gmail.com" className="text-blue-600">amrkalany@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/amrkal" className="text-blue-600">amrkal</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/amrkal" className="text-blue-600">linkedin.com/in/amrkal</a></li>
        </ul>
      </main>
    </>
  );
}
