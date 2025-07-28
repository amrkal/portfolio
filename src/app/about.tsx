import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4 leading-relaxed text-neutral-800">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          I'm <strong>Amr Kalany</strong>, a multidisciplinary software engineer with a passion for building across the stack — from low-level embedded systems to AI-powered web applications. With a B.Sc. in Software Engineering and a diverse project portfolio, I thrive at the intersection of hardware, software, and intelligent automation.
        </p>
        <p className="text-lg mb-4">
          I’ve built tools that range from OpenAI-driven code reviewers to real-time embedded controllers, always aiming for clarity, performance, and purpose. Whether I’m working with <strong>C++ on microcontrollers</strong> or <strong>React and Python on the cloud</strong>, I value clean code, full ownership, and systems that scale.
        </p>
        <p className="text-lg">
          Beyond code, I’m driven by curiosity and continuous learning — from machine learning and backend infrastructure to CI/CD, DevOps, and everything in between. I’m always looking for opportunities to grow and contribute to meaningful projects that make an impact.
        </p>
      </main>
    </>
  );
}
