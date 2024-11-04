import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import AboutAll from '../components/about/About';

export default async function AboutPage({ params }) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>

   <AboutAll/>
    </div>
  );
}


export async function generateMetadata({ params }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('about.title'),
    description: t('about.description'),
    keywords: t('about.keywords'),
    author: t('about.author'),
    openGraph: {
      title: t('about.og.title'),
      description: t('about.og.description'),
      image: t('about.og.image'),
      url: t('about.og.url'),
    },
    twitter: {
      card: t('about.twitter.card'),
      title: t('about.twitter.title'),
      description: t('about.twitter.description'),
      image: t('about.twitter.image'),
    },
    viewport: 'user-scalable=no, width=device-width, initial-scale=1.0',
    mobileWebAppCapable: 'yes',
  };
}
