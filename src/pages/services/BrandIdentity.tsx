import ServicePageTemplate from '@/components/ServicePageTemplate';
import { brandIdentityData, getOtherServices } from '@/data/servicesData';

const BrandIdentity = () => {
  return (
    <ServicePageTemplate
      service={brandIdentityData}
      otherServices={getOtherServices('brand-identity')}
    />
  );
};

export default BrandIdentity;
