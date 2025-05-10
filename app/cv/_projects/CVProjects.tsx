import CVh3 from "../CVh3";
import CVProject from "./CVProject";

function CVProjects() {
  return (
    <div>
      <CVh3 icon="fluent-emoji-high-contrast:briefcase" text="PROJECTS" />
      <CVProject
        title="The Wild Oasis admin side"
        description="Complete fullstack hotel staff app for tracking customers. Initially
          built with React, JavaScript, Styled Components with no responsive design, and Supabase. Later
          improved with NextJS, server actions, Prisma, and PostgreSQL.
          Supabase now handles images only. Secured with Zod, using SSG/ISR for
          performance. Optimistic UI applied throughout, clearly visible on the
          cabins page."
        skills="NextJS, Tailwind CSS,
          TypeScript, Zod, SEO, SSG, ISR, authentiaction, optimistic UI, git/github, vercel,
          performance optimization, responsive design, PrismaORM and PostgreSQL."
        liveLink="https://the-wild-oasis-admin-nextjs.vercel.app"
      />

      <CVProject
        title="The Wild Oasis customer side"
        description="Complete full-stack app with NextJS, initially built with JavaScript, later upgraded to TypeScript. It stays in sync with the admin side of the application, utilizing both dynamic and static pages."
        skills="NextJS, Tailwind CSS,
          TypeScript, Zod, SEO, SSG, ISR, optimistic UI, git/github, vercel,
          performance optimization, PrismaORM and PostgreSQL."
        liveLink="https://the-wild-oasis-costumer-side.vercel.app"
      />

      <CVProject
        title="Friend's Portfolio"
        description="Collaborated with another developer to create a friend's portfolio as they learn UE5 and 3D modeling. Showcases my ability to handle basic web 3D modeling, 3D model optimization and teamwork."
        skills="NextJS, Tailwind CSS,
          TypeScript, performance optimization,SEO, react three fiber, teamwork, git/github, vercel,
         responsive design."
        liveLink="https://uta-portfolio.vercel.app"
      />
    </div>
  );
}

export default CVProjects;
