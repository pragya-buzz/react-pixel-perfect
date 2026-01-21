import ServicePageTemplate from '@/components/ServicePageTemplate';
import { uiuxDesignData, getOtherServices } from '@/data/servicesData';

const UIUXDesign = () => {
  return (
    <ServicePageTemplate
      service={uiuxDesignData}
      otherServices={getOtherServices('ui-ux-design')}
    />
  );
};

export default UIUXDesign;
