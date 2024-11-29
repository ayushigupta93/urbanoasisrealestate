import React, { useState, useEffect } from "react";
import { assets, projectsData } from "../assets/assets";
import {motion} from "framer-motion"

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1); // Correctly defined as a state

  // Function to handle the next project
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  // Function to handle the previous project
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Update `cardsToShow` based on window width
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length); // Show all cards for large screens
      } else {
        setCardsToShow(1); // Show 1 card for smaller screens
      }
    };

    // Initial call to set the state based on current window size
    updateCardsToShow();

    // Add resize event listener
    window.addEventListener("resize", updateCardsToShow);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCardsToShow);
    };
  }, [projectsData.length]); // Depend on `projectsData.length`

  return (
    <motion.div
    initial={{ opacity: 0, x: -200 }}   // Fixed typo here
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}

      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2 text-center">
        Projects
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 md:text-3xl mb-8 max-w-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider buttons */}
      <div className="flex justify-end items-center">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {projectsData && projectsData.length > 0 ? (
            projectsData.map((project, index) => (
              <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto mb-14"
                />
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} <span className="px-1">|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
