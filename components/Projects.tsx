'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vidly',
    description:
      'A full-stack YouTube-like video-sharing platform with secure JWT authentication, Cloudinary-based media storage, playlist management, and a channel subscription model.',
    tech: [
      'React',
      'Next.js',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Cloudinary',
    ],
    github: {
      frontend: 'https://github.com/SugamChaudharry/Vidly',
      backend: 'https://github.com/SugamChaudharry/Vidly_backend',
    },
    live: 'https://vidly-watch.vercel.app/',
  },
  {
    title: 'BloggerBlog',
    description:
      'A modern blogging platform featuring a rich-text editor, secure Appwrite authentication, Redux-based state management, and SEO-friendly architecture.',
    tech: [
      'React',
      'Redux Toolkit',
      'TailwindCSS',
      'Appwrite',
      'Rich Text Editor',
    ],
    github: 'https://github.com/SugamChaudharry/BloggerBlog',
    live: 'https://blogger-blog.vercel.app/',
  },
  {
    title: 'SocialCircle',
    description:
      'A LinkedIn-like professional networking platform with profile management, real-time chat using WebSockets, resume uploads, and interactive posts with likes and comments.',
    tech: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Cloudinary',
      'JWT',
      'WebSockets',
      'JSearch API',
    ],
    github: {
      frontend: 'https://github.com/SugamChaudharry/scFrontend',
      backend: 'https://github.com/SugamChaudharry/scBackend',
    },
    live: 'https://sc-frontend-sepia.vercel.app/',
  },
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto  mt-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100">Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" my-4 rounded-lg ">
            <h2 className="text-base font-semibold text-slate-200">
              {index + 1}. {project.title}
            </h2>
            <p className="text-slate-300 mt-1 text-base tracking-tight">
              {project.description || 'No description available.'}
            </p>
            <div className="mt-2">
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm flex gap-3">
              <a
                href={project.github}
                className="text-slate-100 hover:text-blue-400 transition-colors font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="text-slate-400">|</span>
              <a
                href={project.live}
                className="text-slate-100 hover:text-blue-400 transition-colors font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div >
  );
}
