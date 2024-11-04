"use client";
import React from 'react';
import { FaSearch, FaThumbsUp, FaFileAlt, FaEnvelope, FaBullseye } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const MiniServices = () => {
    const t = useTranslations(); 

    const services = [
        {
            title: t('services.0.title'),
            description: t('services.0.description')
        },
        {
            title: t('services.1.title'),
            description: t('services.1.description')
        },
        {
            title: t('services.2.title'),
            description: t('services.2.description')
        },
        {
            title: t('services.3.title'),
            description: t('services.3.description')
        }
    ];

    const subheader = t('subheader');

    const icons = [
        <FaSearch className="w-10 h-10 text-blue-500" />,
        <FaThumbsUp className="w-10 h-10 text-green-500" />,
        <FaFileAlt className="w-10 h-10 text-purple-500" />,
        <FaEnvelope className="w-10 h-10 text-red-500" />,
 
    ];

    return (
        <div>
            <br />
            <p className="text-gray-600 mb-12 text-center text-lg">{subheader}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-24 py-1">
                {services.map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
                        <div className="bg-gray-100 p-4 rounded-full mb-3">
                            {icons[index]}
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-center">{service.title}</h3>
                        <p className="text-gray-600 text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniServices;
