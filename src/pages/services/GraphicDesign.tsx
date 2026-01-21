import ServicePageTemplate from '@/components/ServicePageTemplate';
import { graphicDesignData, getOtherServices } from '@/data/servicesData';

const GraphicDesign = () => {
  return (
    <ServicePageTemplate
      service={graphicDesignData}
      otherServices={getOtherServices('graphic-design')}
    />
  );
};

export default GraphicDesign;
