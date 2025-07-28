'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Resume from './resume'
import Skills from './skills'

const navItems = [
  { name: 'Projects', href: '#projects' },
  { name: 'My Skills', href: '#skills' },
  { name: 'About', href: '#about' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('#about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'projects', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex bg-white text-neutral-900 font-sans scroll-smooth">
      {/* Sidebar */}
      <aside className="w-64 fixed h-screen bg-neutral-900 text-white px-6 py-10 flex flex-col items-center justify-between shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/hero.png"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full border border-neutral-700"
          />
          <div className="text-center">
            <h1 className="text-xl font-semibold">Amr Kalany</h1>
            <p className="text-sm text-neutral-400">Software Engineer</p>
          </div>
          <nav className="flex flex-col space-y-2 mt-6 w-full text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`py-2 px-4 rounded transition ${
                  activeSection === item.href
                    ? 'bg-neutral-800 text-white font-semibold'
                    : 'text-neutral-400 hover:bg-neutral-800'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/amrkal" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/in/amrkal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-white hover:text-blue-400 transition" />
            </a>
          </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Hero Image */}
<div className="relative w-full h-[300px] md:h-[400px]">
  <Image
    src="/hero.jpg"
    alt="Hero"
    width={1920}
    height={400}
    className="w-full h-full object-cover"
    priority
  />
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Amr Kalany</h1>
      <p className="text-lg md:text-xl mt-2 text-neutral-200">Software Engineer</p>
    </div>
  </div>
</div>





        {/* Page Sections */}
        <div className="space-y-40 max-w-4xl mx-auto px-8 md:px-20 py-16">
          <div id="projects"><Projects /></div>
          <div id="skills"><Skills /></div>
          <div id="about"><About /></div>
          <div id="resume"><Resume /></div>
          <div id="contact"><Contact /></div>
        </div>
      </main>
    </div>
  );
}
