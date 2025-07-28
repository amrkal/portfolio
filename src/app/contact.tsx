'use client';

import Head from 'next/head';
import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:amrkalany@gmail.com?subject=Message from ${form.name}&body=${encodeURIComponent(
      form.message + '\n\nReply to: ' + form.email
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Head>
        <title>Contact | Amr Kalany</title>
      </Head>
      <main className="max-w-3xl mx-auto py-10 px-4 text-neutral-800">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>

        <p className="text-lg mb-4">Feel free to reach out:</p>
        <ul className="space-y-2 mb-10 text-lg">
          <li className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <a href="mailto:amrkalany@gmail.com" className="text-blue-600 hover:underline">
              amrkalany@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Github className="w-5 h-5 text-gray-800" />
            <a href="https://github.com/amrkal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              github.com/amrkal
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <a href="https://linkedin.com/in/amrkal" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/amrkal
            </a>
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name<span className="text-red-500"> *</span></label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email<span className="text-red-500"> *</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message<span className="text-red-500"> *</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="mt-1 block w-full border border-gray-300 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
