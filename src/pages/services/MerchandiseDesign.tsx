import ServicePageTemplate from '@/components/ServicePageTemplate';
import { merchandiseDesignData, getOtherServices } from '@/data/servicesData';

const MerchandiseDesign = () => {
  return (
    <ServicePageTemplate
      service={merchandiseDesignData}
      otherServices={getOtherServices('merchandise-design')}
    />
  );
};

export default MerchandiseDesign;
