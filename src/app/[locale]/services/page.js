import { setRequestLocale } from 'next-intl/server';
import Services from '../components/services/ItemsServices';

export default async function ServicesPage({ params }) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>
        
   <Services/>
    </div>
  );
}



