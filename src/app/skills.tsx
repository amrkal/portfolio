'use client'

import { Code, Cpu, Database, GitBranch, Terminal, Brain, Server } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 text-neutral-800">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      {/* Programming Languages */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Code className="w-5 h-5 text-blue-600" /> Languages
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <span className="bg-neutral-100 px-4 py-2 rounded">C / C++</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Python</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">TypeScript</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">JavaScript</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Java</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">C#</span>
        </div>
      </div>

      {/* Frameworks & Tools */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Server className="w-5 h-5 text-blue-600" /> Frameworks & Libraries
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <span className="bg-neutral-100 px-4 py-2 rounded">React / Next.js</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Node.js</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Tailwind CSS</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">React Native</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">MongoDB / MySQL</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">OpenAI API</span>
        </div>
      </div>

      {/* Dev Tools & Systems */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-blue-600" /> Systems & Tools
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
          <span className="bg-neutral-100 px-4 py-2 rounded">Git / GitHub</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Docker</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">CI/CD</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Linux / Bash</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Unit Testing</span>
          <span className="bg-neutral-100 px-4 py-2 rounded">Embedded Systems / RTOS</span>
        </div>
      </div>
    </section>
  );
}
