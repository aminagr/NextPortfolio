"use client";
import React, { useState, useRef, useEffect } from 'react';
import { FaChartLine, FaChartPie, FaFileAlt } from 'react-icons/fa';
import MiniServices from './MiniServices';
import { useTranslations } from 'next-intl';

const ItemsServices = () => {
    const t = useTranslations(); 
    const [showMiniServices, setShowMiniServices] = useState(false);
    const miniServicesRef = useRef(null);

    const handleShowMiniServices = () => {
        setShowMiniServices(true);
    };

    useEffect(() => {
        if (showMiniServices && miniServicesRef.current) {
            miniServicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [showMiniServices]);

    const services = [
        {
            title: t('itemsServices.0.title'), 
            description: t('itemsServices.0.description')
        },
        {
            title: t('itemsServices.1.title'), 
            description: t('itemsServices.1.description')
        },
        {
            title: t('itemsServices.2.title'), 
            description: t('itemsServices.2.description')
        }
    ];

    return (
        <>
            <section className="py-12 bg-gradient-to-r from-[#133E87] to-[#FFB6C1]" id="services">
                <h1 className="font-bold text-center text-white mb-8">{t('header')}</h1>
             
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 cursor-pointer"
                                onClick={index === 0 ? handleShowMiniServices : null}
                            >
                                <div className="flex justify-center mb-4">
                                    {index === 0 ? <FaChartLine className="w-10 h-10 text-blue-500" /> 
                                    : (index === 1 ? <FaChartPie className="w-10 h-10 text-green-500" /> 
                                    : <FaFileAlt className="w-10 h-10 text-purple-500" />)}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[#133E87]">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {showMiniServices && (
                <div ref={miniServicesRef} className="py-12 bg-white">
                    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
                        <MiniServices />
                    </div>
                </div>
            )}
        </>
    );
};

export default ItemsServices;
