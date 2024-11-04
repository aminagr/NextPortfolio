import Hero from "./components/home/hero";
import Services from "./components/services/Services";
import Projects from "./components/projects/ProjectsGlobal";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

export default async function HomePage({ params }) {
  
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>

      <Hero />
      <Services/>
      <Projects/>
      <Contact/>
      <About/>
    </div>
  );
}


export async function generateMetadata({ params }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    keywords: t('home.keywords'),
    author: t('home.author'),
    openGraph: {
      title: t('home.og.title'),
      description: t('home.og.description'),
      image: t('home.og.image'),
      url: t('home.og.url'),
    },
    twitter: {
      card: t('home.twitter.card'),
      title: t('home.twitter.title'),
      description: t('home.twitter.description'),
      image: t('home.twitter.image'),
      viewport: 'user-scalable=no, width=device-width, initial-scale=1.0',
    mobileWebAppCapable: 'yes',
    },
  };
}
