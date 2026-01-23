import ServicePageTemplate from '@/components/ServicePageTemplate';
import { websiteDevelopmentData, getOtherServices } from '@/data/servicesData';

const WebsiteDevelopment = () => {
  return (
    <ServicePageTemplate
      service={websiteDevelopmentData}
      otherServices={getOtherServices('website-development')}
    />
  );
};

export default WebsiteDevelopment;
