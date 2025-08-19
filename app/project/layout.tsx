import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';

export const metadata: Metadata = {
  title: 'All Projects',
  description: 'sugam chaudhary all projects list',
};

export default function projectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
    </div>
  );
}
