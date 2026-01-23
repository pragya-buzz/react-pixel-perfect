import ServicePageTemplate from '@/components/ServicePageTemplate';
import { mobileAppDevelopmentData, getOtherServices } from '@/data/servicesData';

const MobileAppDevelopment = () => {
  return (
    <ServicePageTemplate
      service={mobileAppDevelopmentData}
      otherServices={getOtherServices('mobile-app-development')}
    />
  );
};

export default MobileAppDevelopment;
