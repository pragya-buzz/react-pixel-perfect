import ServicePageTemplate from '@/components/ServicePageTemplate';
import { digitalMarketingData, getOtherServices } from '@/data/servicesData';

const DigitalMarketing = () => {
  return (
    <ServicePageTemplate
      service={digitalMarketingData}
      otherServices={getOtherServices('digital-marketing')}
    />
  );
};

export default DigitalMarketing;
