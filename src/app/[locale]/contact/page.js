import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ContactHead from '../components/contact/ContactHead';
import ContactCard from '../components/contact/ContactCard';
import ContactForm from '../components/contact/ContactForm';
export default async function ContactPage({ params }) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>
       
   <ContactHead/>
   <ContactCard/>
   <ContactForm/>
    </div>
  );
}


export async function generateMetadata({ params }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contact.title'),
    description: t('contact.description'),
    keywords: t('contact.keywords'),
    author: t('contact.author'),
    openGraph: {
      title: t('contact.og.title'),
      description: t('contact.og.description'),
      image: t('contact.og.image'),
      url: t('contact.og.url'),
    },
    twitter: {
      card: t('contact.twitter.card'),
      title: t('contact.twitter.title'),
      description: t('contact.twitter.description'),
      image: t('contact.twitter.image'),
    },
    viewport: 'user-scalable=no, width=device-width, initial-scale=1.0',
    mobileWebAppCapable: 'yes',
  };
}
