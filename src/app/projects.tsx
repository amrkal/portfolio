// 'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const username = 'amrkal';

const featuredProjects = [
  {
    name: 'portfolio',
    image: '/placeholder.png',
    description: 'My personal portfolio website built with Next.js and Tailwind CSS.',
    tech: ['TypeScript', 'Next.js', 'Tailwind'],
    github: 'https://github.com/amrkal/portfolio',
  },
  {
    name: 'WorldAppTrivia',
    image: '/placeholder.png',
    description: 'Mobile trivia game built with Flutter and Dart, featuring multiple categories.',
    tech: ['Dart', 'Flutter'],
    github: 'https://github.com/amrkal/WorldAppTrivia',
  },
  {
    name: 'job-mail-tracker',
    image: '/placeholder.png',
    description: 'Python tool to parse job-related emails and track application metadata in Excel.',
    tech: ['Python'],
    github: 'https://github.com/amrkal/job-mail-tracker',
  },
  {
    name: 'ai-code-reviewer',
    image: '/placeholder.png',
    description: 'AI-powered GitHub code reviewer that analyzes repos using GPT and shows side-by-side diffs.',
    tech: ['Python', 'React'],
    github: 'https://github.com/amrkal/ai-code-reviewer',
  },
  {
    name: 'PowerTrack',
    image: '/placeholder.png',
    description: 'Final year project for order and inventory management, including admin control panel.',
    tech: ['TypeScript', 'React'],
    github: '', // You can link if made public
  },
  {
    name: 'AdminPanelApp',
    image: '/placeholder.png',
    description: 'Private admin dashboard for managing orders and inventory, built with TypeScript.',
    tech: ['TypeScript'],
    github: '',
  },
  {
    name: 'ElysianSoftech',
    image: '/placeholder.png',
    description: 'Authentication system with login and registration built using JavaScript.',
    tech: ['JavaScript'],
    github: 'https://github.com/amrkal/ElysianSoftech',
  },
  {
    name: 'TennisCourt-BackEnd',
    image: '/placeholder.png',
    description: 'Python-based backend API for managing tennis court reservations and user data.',
    tech: ['Python'],
    github: 'https://github.com/amrkal/TennisCourt-BackEnd',
  },
  {
    name: 'TennisCourt-FrontEnd',
    image: '/placeholder.png',
    description: 'React frontend for booking and managing tennis court reservations.',
    tech: ['JavaScript'],
    github: 'https://github.com/amrkal/TennisCourt-FrontEnd',
  },
  {
    name: 'Braude-Mid-Project',
    image: '/placeholder.png',
    description: 'Flower shop management system built in Java as part of a university software engineering project.',
    tech: ['Java'],
    github: 'https://github.com/amrkal/Braude-Mid-Project',
  },
];


export default function Projects() {
  const [githubRepos, setGithubRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
      const data = await res.json();

      const filtered = data
        .filter(
          (repo: any) =>
            !repo.fork &&
            !repo.private &&
            !featuredProjects.some((fp) => fp.name.toLowerCase() === repo.name.toLowerCase())
        )
        .slice(0, 12);

      setGithubRepos(filtered);
    };

    fetchRepos();
  }, []);

  return (
    <>

      <main className="max-w-6xl mx-auto py-10 px-4 text-neutral-800">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        {/* Manually Featured */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {featuredProjects.map((proj, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
<div className="relative w-full h-48 bg-gray-100 flex items-center justify-center text-gray-600 text-center text-lg font-semibold">
  {proj.image ? (
    <Image
      src={proj.image}
      alt={proj.name}
      fill
      className="object-cover"
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.onerror = null
        target.src = '/placeholder.png'
      }}
    />
  ) : (
    <span>{proj.name}</span>
  )}
</div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate">{proj.name}</h3>
          {proj.github && (
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
            >
              GitHub <ExternalLink size={14} />
            </a>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {proj.tech.map((tag, j) => (
            <span
              key={j}
              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>



        {/* Dynamic GitHub Projects */}
        <h2 className="text-2xl font-semibold mb-4">More from GitHub</h2>
        {githubRepos.length === 0 ? (
          <p className="text-neutral-500">Loading...</p>
        ) : (
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {githubRepos.map((repo) => (
    <div
      key={repo.id}
      className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center text-gray-600 text-center text-lg font-semibold">
        <Image
          src="/placeholder.png"
          alt={repo.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate">{repo.name}</h3>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-1 text-sm"
          >
            GitHub <ExternalLink size={14} />
          </a>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          {repo.description || 'No description provided.'}
        </p>
        {repo.language && (
          <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-800">
            {repo.language}
          </span>
        )}
      </div>
    </div>
  ))}
</div>


        )}
      </main>
    </>
  );
}
