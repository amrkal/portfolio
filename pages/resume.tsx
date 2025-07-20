import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <p className="text-lg mb-2">
          You can download my resume <a href="/Amr_Kalany_CV.pdf" className="text-blue-600 underline">here</a>.
        </p>
      </main>
    </>
  );
}
