import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          I'm Amr Kalany, a software engineer with experience in full-stack, backend, and embedded systems.
          I enjoy solving complex problems, building scalable systems, and exploring AI/ML applications.
        </p>
      </main>
    </>
  );
}
