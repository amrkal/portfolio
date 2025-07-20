'use client'

import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Amr Kalany - Software Engineer</title>
        <meta name="description" content="Portfolio of Amr Kalany, Full-Stack/Embedded/AI Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="max-w-4xl mx-auto p-8">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2">Amr Kalany</h1>
          <p className="text-xl text-gray-600">
            Full-Stack • Embedded Systems • AI/ML Engineer
          </p>
          <div className="flex gap-6 mt-4 text-blue-600">
            <Link href="https://github.com/amrkal" className="hover:underline">GitHub</Link>
            <Link href="https://linkedin.com/in/amrkal" className="hover:underline">LinkedIn</Link>
            <Link href="/Amr_Kalany_CV.pdf" className="hover:underline">Resume</Link>
            <Link href="https://leetcode.com/amrkal" className="hover:underline">LeetCode</Link>
            <Link href="https://www.hackerrank.com/amrkal" className="hover:underline">HackerRank</Link>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a systems-level problem solver with a solid foundation in C/C++ and deep experience building both modern full-stack web apps and low-level embedded systems. I’ve worked on everything from AI-powered code reviewers to sensor interfacing firmware, with a pragmatic mindset and an obsession for clean, maintainable code. I thrive in cross-disciplinary teams and build tools that are not only functional, but elegant and efficient. My portfolio demonstrates both engineering depth and end-to-end product ownership.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Certifications & Education</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>B.Sc. in Software Engineering</strong>, Braude College of Engineering (2019–2024) — GPA 88/100</li>
            <li>Capstone: Developed a complete inventory/order system for an electrical supply store with end-to-end software automation</li>
            <li><strong>Machine Learning Specialization</strong> – DeepLearning.AI (Coursera, 2024)</li>
            <li><strong>Google Data Analytics Professional Certificate</strong> (Coursera, 2024)</li>
            <li><strong>Meta Back-End Developer Certificate</strong> (Coursera, 2024)</li>
            <li><strong>React Native – The Practical Guide</strong> (Udemy, 2024)</li>
            <li><strong>100 Days of Code: Python Bootcamp</strong> (Udemy, 2024)</li>
            <li><strong>Embedded Systems Nanodegree</strong> – Udacity</li>
            <li><strong>Advanced C Programming</strong> – HackerRank Certified</li>
            <li><strong>Problem Solving (Intermediate)</strong> – HackerRank Certified</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
          <div className="space-y-8">
            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">PowerStock</h3>
              <p className="text-gray-700">An intelligent inventory management system powered by automation and analytics. Combines hardware sensors with a full-stack web dashboard for live data tracking and low-stock alerts. Designed for small businesses to optimize stock flow.</p>
              <a href="https://github.com/amrkal/PowerStock" className="text-blue-600 hover:underline mt-2 block">GitHub Repo</a>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">AI Code Reviewer</h3>
              <p className="text-gray-700">Built a smart GitHub-integrated code reviewer using OpenAI APIs. Performs diff analysis, comments on PRs, and scores repositories on maintainability, complexity, and readability.</p>
              <a href="https://github.com/amrkal/code-reviewer" className="text-blue-600 hover:underline mt-2 block">GitHub Repo</a>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Embedded Sensor Platform</h3>
              <p className="text-gray-700">Real-time sensor firmware for environmental data logging. BLE integration and efficient power handling using FreeRTOS.</p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Job Tracker Automation</h3>
              <p className="text-gray-700">Automated job application system using n8n to send resumes, track responses, and follow up dynamically based on rules.</p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Full-Stack Tennis Court Booker</h3>
              <p className="text-gray-700">Built a headless script that scans, solves captchas, and auto-books court slots with Telegram alerts.</p>
              <a href="https://github.com/amrkal/tennis-reservation" className="text-blue-600 hover:underline mt-2 block">GitHub Repo</a>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold">Embedded Automation Controller</h3>
              <p className="text-gray-700">Custom-built RTOS-powered controller with UART, ADC, and capacitive touch support.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Skills Snapshot</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc list-inside">
            <li>C/C++, Embedded Systems</li>
            <li>Python, TypeScript, Node.js</li>
            <li>React, Next.js, Tailwind CSS</li>
            <li>AI/ML, OpenAI APIs, GPT-4</li>
            <li>GitHub API, Git automation</li>
            <li>Linux, Docker, CI/CD</li>
          </ul>
        </section>

        <footer className="mt-16 border-t pt-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Amr Kalany — Built with Next.js & Tailwind CSS.
          </p>
        </footer>
      </main>
    </div>
  )
}