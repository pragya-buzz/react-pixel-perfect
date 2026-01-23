import ServicePageTemplate from '@/components/ServicePageTemplate';
import { seoData, getOtherServices } from '@/data/servicesData';

const SEO = () => {
  return (
    <ServicePageTemplate
      service={seoData}
      otherServices={getOtherServices('seo')}
    />
  );
};

export default SEO;
