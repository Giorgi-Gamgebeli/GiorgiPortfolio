import CVh3 from "../CVh3";
import CVProject from "./CVProject";

function CVProjects() {
  return (
    <div>
      <CVh3 icon="fluent-emoji-high-contrast:briefcase" text="PROJECTS" />
      <CVProject
        title="The Wild Oasis Admin Side"
        description="Complete fullstack hotel staff app for tracking customers. Initially
          built with React, JavaScript, Styled Components with no responsive design, and Supabase. Later
          improved with Next.js, server actions, Prisma, and PostgreSQL.
          Supabase now handles images only. Secured with Zod, using SSG/ISR for
          performance. Optimistic UI applied throughout, clearly visible on the
          cabins page."
        skills="ReactJS, Styled Components, Supabase, NextJS, Tailwind CSS,
          TypeScript, Zod, SEO, SSG, ISR, authentiaction, optimistic UI, git/github, vercel,
          performance optimization, responsive design, PrismaORM and PostgreSQL."
        liveLink="the-wild-oasis-admin-nextjs.vercel.app"
      />

      <CVProject
        title="WayBack"
        description="Google Maps-like app built after learning React. Uses Supabase for the backend, TypeScript for type safety, and email-confirmed authentication with Git OAuth."
        skills="ReactJS, Supabase, Tailwind CSS,
          TypeScript, Zod, authentiaction, git/github, netlify,
         responsive design."
        liveLink="waybackk.netlify.app"
      />

      <CVProject
        title="Friends Porfolio"
        description="Collaborated with another developer to create a friend's portfolio as they learn UE5 and 3D modeling. Showcases my ability to handle basic web 3D modeling, 3D model optimization and teamwork."
        skills="NextJS, Tailwind CSS,
          TypeScript, performance optimization,SEO, react three fiber, teamwork, git/github, vercel,
         responsive design."
        liveLink="uta-portfolio.vercel.app"
      />
    </div>
  );
}

export default CVProjects;
