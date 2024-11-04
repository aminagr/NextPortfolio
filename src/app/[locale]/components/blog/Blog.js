"use client"; 
import React from 'react'; 
import { useTranslations } from 'next-intl';

export default function Blog() {
    const t = useTranslations('blog'); 

    const posts = [
        {
            title: t('post1.title'),
            excerpt: t('post1.excerpt'),
            date: t('post1.date'),
            image: 'images/Blog/globe.jpg',
            url: '#' 
        },
        {
            title: t('post2.title'),
            excerpt: t('post2.excerpt'),
            date: t('post2.date'),
            image: 'images/Blog/alger.jpg',
            url: 'http://localhost/blog/post2'
        },
        {
            title: t('post3.title'),
            excerpt: t('post3.excerpt'),
            date: t('post3.date'),
            image: 'images/Blog/cyrilic.jpg',
            url: 'http://localhost/blog/post3'
        }
    ];

    return (
        <div>
            <h1 className="text-5xl text-center mb-6" style={{ color: 'white', background: 'linear-gradient(to right, #E26D5C, #FFB6C1)', padding: '25px 0' }}>
                <a href="http://localhost/blog" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {t('title')}
                </a>
            </h1>
            <div className="container mx-auto px-8 md:px-24">
                <p className="text-gray-600 mb-6" style={{ color: '#848484', textAlign: 'center' }}>
                    {t('intro')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-105">
                            <a href={post.url} style={{ textDecoration: 'none' }}>
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <span className="text-sm text-gray-400">{post.date}</span>
                                </div>
                            </a>
                      
                            <div className="p-6 text-center">
                                <a 
                                    href={post.url} 
                                    className="bg-white text-[#E26D5C] border border-[#E26D5C] py-2 px-4 rounded hover:bg-[#E26D5C] hover:text-white transition duration-300"
                                >
                                  {t('readmore')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <a 
                        href="http://localhost/blog" 
                        className="bg-[#E26D5C] text-white py-2 px-4 rounded hover:bg-[#D55C4B] transition duration-300"
                    >
                        {t('morearticles')}
                    </a>
                </div>
                <br />
            </div>
        </div>
    );
}
