import ServicePageTemplate from '@/components/ServicePageTemplate';
import { creativeStrategyData, getOtherServices } from '@/data/servicesData';

const CreativeStrategy = () => {
  return (
    <ServicePageTemplate
      service={creativeStrategyData}
      otherServices={getOtherServices('creative-strategy')}
    />
  );
};

export default CreativeStrategy;
