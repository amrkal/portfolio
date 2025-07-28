'use client';

import Head from 'next/head';

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4 text-neutral-800">
        <h1 className="text-4xl font-bold mb-10">Resume</h1>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="border-l-2 border-blue-500 pl-4">
            <div className="mb-6">
              <h3 className="font-bold">B.Sc. in Software Engineering</h3>
              <p className="text-sm text-neutral-600">Braude College of Engineering, Karmiel (2019–2024)</p>
              <ul className="list-disc list-inside mt-2 text-sm text-neutral-700">
                <li>Capstone: Inventory system for electrical supply chain</li>
                <li>Relevant courses: OS, Real-Time, ML, Cybersecurity, UI/UX</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <div className="border-l-2 border-blue-500 pl-4 space-y-4">
            <div>
              <h3 className="font-bold">Machine Learning Specialization</h3>
              <p className="text-sm text-neutral-600">DeepLearning.AI (Coursera) – 2024</p>
            </div>
            <div>
              <h3 className="font-bold">Google Data Analytics Certificate</h3>
              <p className="text-sm text-neutral-600">Coursera – 2024</p>
            </div>
            <div>
              <h3 className="font-bold">React Native – The Practical Guide</h3>
              <p className="text-sm text-neutral-600">Udemy – 2024</p>
            </div>
            <div>
              <h3 className="font-bold">100 Days of Code: Python Bootcamp</h3>
              <p className="text-sm text-neutral-600">Udemy – 2024</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="border-l-2 border-blue-500 pl-4">
            <div className="mb-6">
              <h3 className="font-bold">Automation Technician</h3>
              <p className="text-sm text-neutral-600">Golan Heights (Jan 2024 – Jun 2024)</p>
              <ul className="list-disc list-inside mt-2 text-sm text-neutral-700">
                <li>Programmed and maintained robotic systems (Unitronics, Assembly)</li>
                <li>Diagnosed and repaired electromechanical faults in automation lines</li>
                <li>Gained hands-on experience with low-level control systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Optional: Additional Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Additional Education</h2>
          <div className="border-l-2 border-blue-500 pl-4">
            <div className="mb-4">
              <h3 className="font-bold">High School Certificate – Majdal Shams (2016)</h3>
              <ul className="list-disc list-inside mt-2 text-sm text-neutral-700">
                <li>Physics, Math, and English – 5 units</li>
                <li>Computer Science – 10 units</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
