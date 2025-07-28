// 'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const username = 'amrkal';

const featuredProjects = [
  {
    name: 'AdminPanelApp',
    image: '/projects/AdminPanelApp.png',
    description: 'Private admin dashboard built with TypeScript.',
    tech: ['TypeScript'],
    github: '',
  },
  {
    name: 'ElysianSoftech',
    image: '/projects/ElysianSoftech.png',
    description: 'Frontend for court booking built with JavaScript.',
    tech: ['JavaScript'],
    github: 'https://github.com/amrkal/ElysianSoftech',
  },
  {
    name: 'BACKEND',
    image: '/projects/BACKEND.png',
    description: 'Private backend built with Python.',
    tech: ['Python'],
    github: '',
  },
  {
    name: 'elysian-tech',
    image: '/projects/elysian-tech.png',
    description: 'Court management system (repo description not provided).',
    tech: ['JavaScript'],
    github: 'https://github.com/amrkal/elysian-tech',
  },
  {
    name: 'AdminPowerTrackApp',
    image: '/projects/AdminPowerTrackApp.png',
    description: 'Private admin interface for power tracking.',
    tech: ['TypeScript'],
    github: '',
  },
  {
    name: 'TennisCourt-BackEnd',
    image: '/projects/TennisCourt-BackEnd.png',
    description: 'Backend service for tennis court booking.',
    tech: ['Python'],
    github: 'https://github.com/amrkal/TennisCourt-BackEnd',
  },
  {
    name: 'TennisCourt-FrontEnd',
    image: '/projects/TennisCourt-FrontEnd.png',
    description: 'Frontend for tennis court booking system.',
    tech: ['JavaScript'],
    github: 'https://github.com/amrkal/TennisCourt-FrontEnd',
  },
  {
    name: 'TennisCourt',
    image: '/projects/TennisCourt.png',
    description: 'Full-stack tennis court booking system.',
    tech: ['Python'],
    github: 'https://github.com/amrkal/TennisCourt',
  },
  {
    name: 'newRepo',
    image: '/projects/newRepo.png',
    description: 'Java-based experimental project.',
    tech: ['Java'],
    github: 'https://github.com/amrkal/newRepo',
  },
  {
    name: 'Braude-Mid-Project',
    image: '/projects/Braude-Mid-Project.png',
    description: 'Forked flower shop project from Software Engineering course.',
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
      <Head>
        <title>Projects | Amr Kalany</title>
      </Head>

      <main className="max-w-6xl mx-auto py-10 px-4 text-neutral-800">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>

        {/* Manually Featured */}
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-20">
  {featuredProjects.map((proj, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
    >
      <div className="relative w-full h-40">
        <Image
          src={proj.image}
          alt={proj.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
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
            <span key={j} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
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
    <a
      key={repo.id}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white border border-neutral-200 rounded-xl p-5 shadow hover:shadow-lg transition"
    >
      <h3 className="font-semibold text-lg mb-1 truncate">{repo.name}</h3>
      <p className="text-sm text-gray-600 mb-3">
        {repo.description || 'No description provided.'}
      </p>
      {repo.language && (
        <span className="bg-gray-100 text-xs px-2 py-1 rounded-full text-gray-800">
          {repo.language}
        </span>
      )}
    </a>
  ))}
</div>

        )}
      </main>
    </>
  );
}
