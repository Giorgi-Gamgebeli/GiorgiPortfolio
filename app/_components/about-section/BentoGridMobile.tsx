import BentoGridItem from "./BentoGridItem";
import FlexBox from "../FlexBox";

function BentoGridMobile() {
  return (
    <FlexBox className="mx-auto my-10 flex-col gap-3 xs:my-20 xs:grid xs:grid-cols-2 xs:grid-rows-4 xs:gap-2 md:hidden">
      <BentoGridItem
        initial={{
          gridColumnStart: 1,
          gridColumnEnd: 3,
          y: "-100%",
          opacity: 0,
        }}
      >
        A dedicated React frontend developer with a strong background in HTML,
        CSS, and JavaScript. I enjoy creating responsive, interactive user
        interfaces that enhance the user experience. My focus is on building
        scalable and modern applications with the latest frontend technologies
        like React, Tailwind CSS, and Next.js.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          x: "-100%",
          opacity: 0,
        }}
      >
        With no working experience yet. Learning coding and solving problems in
        frontend for almost a year. Continually increasing and building
        skillset.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          x: "100%",
          opacity: 0,
        }}
      >
        Building dynamic, responsive and modern single-page applications with
        reusable components. Using advanced features for more efficient, dry,
        readable code.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          x: "-100%",
          opacity: 0,
        }}
      >
        Developing optimized, scalable web applications. Adding smooth, engaging
        animations to enhance user interactions with framer motion.
      </BentoGridItem>
      <BentoGridItem
        initial={{
          x: "100%",
          opacity: 0,
        }}
      >
        Journey from learning the foundations of HTML, CSS, and JavaScript, to
        expanding into frameworks like React.
      </BentoGridItem>

      <BentoGridItem
        initial={{
          gridColumnStart: -3,
          gridColumnEnd: -1,
          y: "100%",
          opacity: 0,
        }}
      >
        I prioritize clean, maintainable code and love incorporating animations
        that make interactions feel more engaging. With a keen eye on
        performance, I work to optimize load times and responsiveness for a
        seamless experience. I&apos;m always excited to learn new techniques and
        push the boundaries of my knowledge!
      </BentoGridItem>
    </FlexBox>
  );
}

export default BentoGridMobile;
