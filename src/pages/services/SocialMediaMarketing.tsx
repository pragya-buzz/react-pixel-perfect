import ServicePageTemplate from '@/components/ServicePageTemplate';
import { socialMediaMarketingData, getOtherServices } from '@/data/servicesData';

const SocialMediaMarketing = () => {
  return (
    <ServicePageTemplate
      service={socialMediaMarketingData}
      otherServices={getOtherServices('social-media-marketing')}
    />
  );
};

export default SocialMediaMarketing;
