"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Website using routing",
    description: "Clean & Modern Design to build a simple React app with single page application (also referred to as SPA ) that uses React Router. Work on the app from scratch Work on the app from scratch Define project architecture for Frontend using (html5,css3,bootstarp5,React.js)",
    image: "/images/projects/1.png",
    tag: ["All", "Frontend development"],
    gitUrl: "https://github.com/nadamaged/Start-React.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Weather App using Api",
    description: "By using Weather Api Knowing the country's climate through the search. It shows the weather for three days. using (html5,css3,bootstrap 5, vanilla js,Jquery) ",
    image: "/images/projects/2.png",
    tag: ["All", "Frontend development"],
    gitUrl: "https://github.com/nadamaged/Weather.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "CRUDs using local storage",
    description: "CRUD system is a web template for add or retrieve or update or delete or search a product . Define project architecture for Frontend using (html5,css3,bootstrap 5,vanilla js,validation and regular expression)",
    image: "/images/projects/3.png",
    tag: ["All", "Frontend development"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Egypt air UX case study",
    description: "UX case Study For redesign EgyptAir Mobile Application Using (user persona, user flow, user Jounrey, empathy map, affinity map)",
    image: "/images/projects/4.png",
    tag: ["All", "UI UX design"],
    gitUrl: "https://www.behance.net/gallery/158576417/ReDesign-EgyptAir/modules/894714227",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Restaurant using Api",
    description: "Using API to get meals and information about it Define project architecture for Frontend using (html5,css3,bootstarp5,vanilla js,JQuery)",
    image: "/images/projects/5.png",
    tag: ["All", "Frontend development"],
    gitUrl: "https://github.com/nadamaged/Yummy.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "La poire pastry Case study",
    description: "Designing UI model for mobile app. for la poire pastry using Figma",
    image: "/images/projects/6.png",
    tag: ["All", "UI UX design"],
    gitUrl: "https://www.behance.net/gallery/158576661/Le-poire-Pasrty-store/modules/894716513",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend development"
          isSelected={tag === "Frontend development"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI UX design"
          isSelected={tag === "UI UX design"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
