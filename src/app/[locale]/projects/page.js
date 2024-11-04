import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ProjectsAll from '../components/projects/ProjectsGlobal';

export default async function ProjectsPage({ params }) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>
        
   <ProjectsAll/>
    </div>
  );
}


export async function generateMetadata({ params }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('projects.title'),
    description: t('projects.description'),
    keywords: t('projects.keywords'),
    author: t('projects.author'),
    openGraph: {
      title: t('projects.og.title'),
      description: t('projects.og.description'),
      image: t('projects.og.image'),
      url: t('projects.og.url'),
    },
    twitter: {
      card: t('projects.twitter.card'),
      title: t('projects.twitter.title'),
      description: t('projects.twitter.description'),
      image: t('projects.twitter.image'),
    },
    viewport: 'user-scalable=no, width=device-width, initial-scale=1.0',
    mobileWebAppCapable: 'yes',
  };
}
