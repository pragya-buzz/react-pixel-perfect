import ServicePageTemplate from '@/components/ServicePageTemplate';
import { cmsDevelopmentData, getOtherServices } from '@/data/servicesData';

const CMSDevelopment = () => {
  return (
    <ServicePageTemplate
      service={cmsDevelopmentData}
      otherServices={getOtherServices('cms-development')}
    />
  );
};

export default CMSDevelopment;
