import ServicePageTemplate from '@/components/ServicePageTemplate';
import { contentServicesData, getOtherServices } from '@/data/servicesData';

const ContentServices = () => {
  return (
    <ServicePageTemplate
      service={contentServicesData}
      otherServices={getOtherServices('content-services')}
    />
  );
};

export default ContentServices;
