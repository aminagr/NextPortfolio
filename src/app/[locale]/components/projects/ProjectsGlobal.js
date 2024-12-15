"use client";

import React, { useState } from 'react';
import { FaGithub, FaTimes, FaGlobe, FaEye } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const ProjectsGlobal = () => {
    const t = useTranslations('projects');

    const projectKeys = [
        'project1', 
        'project2', 
        'project3', 
    
    ];

    const projectDetails = {
        project1: { github: "#", website: "#" },
        project2: {},
        project3: { website: "#" },
        
    };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (key) => {
        setSelectedProject(key);
        setCurrentImageIndex(0);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedProject(null);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % projectGallery[selectedProject].gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + projectGallery[selectedProject].gallery.length) % projectGallery[selectedProject].gallery.length);
    };

    const projectGallery = projectKeys.reduce((acc, key) => {
        acc[key] = {
            title: t(`${key}.title`),
            description: t(`${key}.description`),
            image: t(`${key}.image`),
            gallery: t(`${key}.gallery`) ? t(`${key}.gallery`).split(',') : [],
            ...projectDetails[key]  
        };
        return acc;
    }, {});

    return (
        <section className="pt-12 px-6 md:px-24 bg-white" id="projects">
            <div className="container mx-auto text-center">
                <h1 className="font-bold mb-6 text-[#133E87]">{t('titleProjects')}</h1>
                <p className="text-gray-600 mb-12 text-center">{t('subprojects')}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectKeys.map((key, index) => {
                        const project = projectGallery[key];
                        return (
                            <div
                                key={index}
                                className="bg-white shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
                                onClick={() => openModal(key)}
                            >
                                <img src={project.image} alt={project.title} className="w-full h-48 object-contain" />
                                <div className="p-6">
                                    <h3 className="text-xl font-extrabold mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex justify-center space-x-4">
                                        <button onClick={(e) => { e.stopPropagation(); openModal(key); }} className="text-gray-600 hover:text-[#133E87] transition duration-300">
                                            <FaEye size={24} />
                                        </button>
                                        {project.website && (
                                            <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#133E87]">
                                                <FaGlobe size={24} />
                                            </a>
                                        )}
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#133E87]">
                                                <FaGithub size={24} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {isOpen && selectedProject && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50" onClick={closeModal}>
                        <div className="bg-white overflow-hidden w-full sm:w-[62%] h-[calc(80vh-60px)] relative mx-auto mt-16" onClick={(e) => e.stopPropagation()}>
                            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-2xl z-10">
                                <FaTimes />
                            </button>

                            <div className="relative flex flex-col items-center h-full">
                                <img src={projectGallery[selectedProject].gallery[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="w-full h-[80%] object-contain rounded-lg" />
                                <div className="flex justify-center space-x-2 mt-1 flex-wrap">
                                    {projectGallery[selectedProject].gallery.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className={`w-16 h-16 sm:w-24 sm:h-24 object-cover cursor-pointer rounded-md transition transform ${currentImageIndex === index ? 'border-2 border-[#E26D5C]' : ''}`}
                                            onClick={() => setCurrentImageIndex(index)}
                                        />
                                    ))}
                                </div>
                                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#E26D5C] rounded-full p-2 hover:bg-gray-300 transition">
                                    &lt;
                                </button>
                                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#E26D5C] rounded-full p-2 hover:bg-gray-300 transition">
                                    &gt;
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsGlobal;
