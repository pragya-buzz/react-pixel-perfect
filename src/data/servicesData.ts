import { ServiceData } from '@/components/ServicePageTemplate';
import { 
  Palette, 
  PenTool, 
  ShoppingBag, 
  Fingerprint, 
  Compass, 
  FileText, 
  TrendingUp, 
  Share2,
  Globe,
  Smartphone,
  LayoutDashboard,
  Search,
  LucideIcon
} from 'lucide-react';

// Hero images for service pages
import heroUiux from '@/assets/service-hero-uiux.jpg';
import heroBrand from '@/assets/service-hero-brand.jpg';
import heroMarketing from '@/assets/service-hero-marketing.jpg';
import heroStrategy from '@/assets/service-hero-strategy.jpg';
import heroWebdev from '@/assets/service-hero-webdev.jpg';
import heroMobileapp from '@/assets/service-hero-mobileapp.jpg';
import heroCms from '@/assets/service-hero-cms.jpg';
import heroSeo from '@/assets/service-hero-seo.jpg';

// Service card images
import merchImage from '@/assets/service-merch.jpg';
import uiuxImage from '@/assets/service-uiux.jpg';
import graphicImage from '@/assets/service-graphic.jpg';
import brandImage from '@/assets/service-brand.jpg';
import strategyImage from '@/assets/service-strategy.jpg';
import contentImage from '@/assets/service-content.jpg';
import digitalImage from '@/assets/service-digital.jpg';
import socialImage from '@/assets/service-social.jpg';
import webdevImage from '@/assets/service-webdev.jpg';
import mobileappImage from '@/assets/service-mobileapp.jpg';
import cmsImage from '@/assets/service-cms.jpg';
import seoImage from '@/assets/service-seo.jpg';

export interface ServiceMeta {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

// Design & Development Services
export const designDevServices: ServiceMeta[] = [
  { name: 'Merchandise Design', slug: 'merchandise-design', description: 'Custom merchandise that builds brand loyalty', icon: ShoppingBag, image: merchImage },
  { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'User-centered designs that drive engagement', icon: Palette, image: uiuxImage },
  { name: 'Graphic Design', slug: 'graphic-design', description: 'Visual storytelling that captures your brand', icon: PenTool, image: graphicImage },
  { name: 'Website Development', slug: 'website-development', description: 'Modern websites that convert visitors', icon: Globe, image: webdevImage },
  { name: 'Mobile App Development', slug: 'mobile-app-development', description: 'Native & cross-platform mobile solutions', icon: Smartphone, image: mobileappImage },
  { name: 'CMS Development', slug: 'cms-development', description: 'Powerful content management systems', icon: LayoutDashboard, image: cmsImage },
];

// Branding & Strategy Services
export const brandingServices: ServiceMeta[] = [
  { name: 'Brand Identity', slug: 'brand-identity', description: 'Memorable brand identities that stand out', icon: Fingerprint, image: brandImage },
  { name: 'Creative Strategy', slug: 'creative-strategy', description: 'Strategic planning for maximum impact', icon: Compass, image: strategyImage },
  { name: 'Content Services', slug: 'content-services', description: 'Compelling content that connects', icon: FileText, image: contentImage },
];

// Growth & Marketing Services
export const marketingServices: ServiceMeta[] = [
  { name: 'Digital Marketing', slug: 'digital-marketing', description: 'Data-driven campaigns that deliver results', icon: TrendingUp, image: digitalImage },
  { name: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Social strategies that grow your audience', icon: Share2, image: socialImage },
  { name: 'SEO', slug: 'seo', description: 'Boost visibility and organic traffic', icon: Search, image: seoImage },
];

export const allServices: ServiceMeta[] = [
  ...designDevServices,
  ...brandingServices,
  ...marketingServices,
];

export const getOtherServices = (currentSlug: string) => {
  return allServices
    .filter(s => s.slug !== currentSlug)
    .map(s => ({
      name: s.name,
      description: s.description,
      href: `/services/${s.slug}`,
      icon: s.icon,
    }));
};

export const uiuxDesignData: ServiceData = {
  name: 'UI/UX Design',
  headline: 'UI/UX Design',
  subheadline: 'Create intuitive digital experiences that delight users and drive measurable business growth.',
  icon: Palette,
  heroImage: heroUiux,
  idealClients: [
    'Startups launching their first digital product',
    'Businesses looking to redesign outdated interfaces',
    'Companies experiencing low user engagement or high bounce rates',
    'Organizations wanting to improve conversion rates',
    'Teams needing a design system for consistency',
  ],
  problems: [
    'Users abandon your app or website before completing key actions',
    'Your interface looks outdated compared to competitors',
    'Customer feedback indicates confusion or frustration',
    'Development teams waste time without clear design specifications',
  ],
  solution: {
    title: 'Our Approach to UI/UX Design',
    description: 'We combine deep user research with strategic design thinking to create interfaces that feel natural and drive results. Every decision is backed by data, ensuring your investment translates directly into improved engagement, higher conversions, and satisfied customers.',
  },
  deliverables: [
    'User research and persona development',
    'Information architecture and user flows',
    'Wireframes and interactive prototypes',
    'High-fidelity UI designs',
    'Design system and component library',
    'Usability testing and iteration',
    'Developer handoff documentation',
    'Post-launch optimization recommendations',
  ],
  process: [
    { step: 'Discovery', description: 'We dive deep into your business goals, user needs, and competitive landscape to establish a solid foundation.' },
    { step: 'Research & Strategy', description: 'User interviews, surveys, and analytics review inform our strategic design decisions.' },
    { step: 'Design & Prototype', description: 'We create wireframes, then high-fidelity designs with interactive prototypes for testing.' },
    { step: 'Test & Refine', description: 'Real user feedback drives iterations until the experience meets our quality standards.' },
    { step: 'Handoff & Support', description: 'Comprehensive documentation ensures smooth development, with ongoing support as needed.' },
  ],
  whyChooseUs: [
    'We prioritize understanding your business before touching design tools',
    'Every design decision is grounded in user research, not assumptions',
    'We communicate clearly and meet deadlines consistently',
    'Our designs are built for real-world implementation, not just portfolios',
    'We stay involved through development to ensure design integrity',
    'Long-term partnerships matter more to us than one-off projects',
  ],
  faqs: [
    { question: 'How long does a typical UI/UX project take?', answer: 'Most projects range from 4-12 weeks depending on scope. A simple app redesign might take 4-6 weeks, while a complex platform could take 10-12 weeks. We\'ll provide a detailed timeline after our discovery call.' },
    { question: 'Do you work with existing development teams?', answer: 'Absolutely. We\'re experienced at collaborating with in-house teams and provide thorough handoff documentation, design systems, and ongoing support during implementation.' },
    { question: 'What if we need changes after the project is complete?', answer: 'We offer flexible support packages for post-launch iterations. Many clients retain us for ongoing optimization based on user feedback and analytics.' },
    { question: 'How do you measure the success of a design?', answer: 'We establish KPIs at project start—typically conversion rates, task completion rates, or user satisfaction scores—and measure against these post-launch.' },
  ],
  closingStatement: 'Ready to create an experience your users will love?',
};

export const graphicDesignData: ServiceData = {
  name: 'Graphic Design',
  headline: 'Graphic Design',
  subheadline: 'Visual communications that capture attention, convey your message, and leave lasting impressions.',
  icon: PenTool,
  heroImage: heroUiux,
  idealClients: [
    'Brands needing consistent visual marketing materials',
    'Companies launching new products or campaigns',
    'Organizations requiring presentation and pitch decks',
    'Businesses updating their marketing collateral',
    'Teams needing ongoing design support',
  ],
  problems: [
    'Your marketing materials look inconsistent and unprofessional',
    'In-house teams are overwhelmed with design requests',
    'Visual content isn\'t generating engagement or conversions',
    'You\'re struggling to stand out in a crowded market',
  ],
  solution: {
    title: 'Our Approach to Graphic Design',
    description: 'We create purposeful visuals that do more than look good—they communicate your brand story and drive action. From single assets to comprehensive campaigns, every design aligns with your strategic goals and maintains brand consistency.',
  },
  deliverables: [
    'Marketing collateral (brochures, flyers, posters)',
    'Digital assets for web and social media',
    'Presentation and pitch deck design',
    'Infographics and data visualization',
    'Print-ready files with specifications',
    'Brand-aligned templates for ongoing use',
  ],
  process: [
    { step: 'Brief & Discovery', description: 'We understand your objectives, audience, and brand guidelines to ensure aligned outcomes.' },
    { step: 'Concept Development', description: 'Multiple creative directions give you options that match your vision.' },
    { step: 'Design Execution', description: 'Your chosen concept is refined into polished, production-ready designs.' },
    { step: 'Review & Finalize', description: 'Collaborative feedback rounds ensure the final product exceeds expectations.' },
  ],
  whyChooseUs: [
    'We take time to understand your brand before designing',
    'Quick turnarounds without compromising quality',
    'Clear communication throughout every project',
    'Designs that work across all intended applications',
    'Flexible engagement models for ongoing needs',
    'We care about your results, not just aesthetics',
  ],
  faqs: [
    { question: 'What file formats will I receive?', answer: 'You\'ll receive all necessary formats for your use case—typically AI, PDF, PNG, and JPG. We also provide print-ready files with proper bleed and color profiles when needed.' },
    { question: 'Can you match our existing brand guidelines?', answer: 'Absolutely. We work within established brand guidelines to ensure consistency, or we can help develop guidelines if you don\'t have them yet.' },
    { question: 'How many revision rounds are included?', answer: 'Our standard projects include 2-3 revision rounds. We find that our discovery process means we usually nail it within this scope, but we\'re flexible for complex projects.' },
    { question: 'Do you offer ongoing design support?', answer: 'Yes, we offer retainer packages for businesses needing regular design work. This provides priority access and often better rates than project-by-project work.' },
  ],
  closingStatement: 'Ready for visuals that make an impact?',
};

export const merchandiseDesignData: ServiceData = {
  name: 'Merchandise Design',
  headline: 'Merchandise Design',
  subheadline: 'Custom branded merchandise that turns customers into walking ambassadors for your brand.',
  icon: ShoppingBag,
  heroImage: heroUiux,
  idealClients: [
    'Brands looking to create memorable promotional items',
    'Companies planning events, conferences, or trade shows',
    'Organizations building employee engagement programs',
    'Creators and influencers launching merchandise lines',
    'Businesses wanting premium client gifts',
  ],
  problems: [
    'Generic promotional items that end up in the trash',
    'Merchandise that doesn\'t reflect your brand quality',
    'Difficulty finding reliable production partners',
    'Designs that don\'t translate well to physical products',
  ],
  solution: {
    title: 'Our Approach to Merchandise Design',
    description: 'We design merchandise people actually want to keep and use. By understanding your audience and brand values, we create products that extend your brand experience beyond the screen—items that spark conversations and build lasting connections.',
  },
  deliverables: [
    'Custom apparel designs (t-shirts, hoodies, caps)',
    'Promotional product design (mugs, bags, stationery)',
    'Packaging and label design',
    'Production-ready artwork files',
    'Vendor recommendations and coordination',
    'Mockups for approval and marketing use',
  ],
  process: [
    { step: 'Discovery', description: 'We learn about your audience, occasion, budget, and brand to guide product selection.' },
    { step: 'Product Strategy', description: 'Recommending the right products for maximum impact and practical use.' },
    { step: 'Design Creation', description: 'Custom designs tailored to each product\'s specifications and your brand identity.' },
    { step: 'Production Support', description: 'We coordinate with trusted vendors to ensure quality from proof to delivery.' },
  ],
  whyChooseUs: [
    'We design with production constraints in mind from day one',
    'Strong relationships with quality manufacturers',
    'Focus on items people will actually use and keep',
    'Attention to details like fabric choice and print technique',
    'We can manage the entire process or hand off to your team',
    'Sustainable and eco-friendly options available',
  ],
  faqs: [
    { question: 'Do you handle production or just design?', answer: 'We can do both. We provide production-ready files for your vendors, or we can manage the entire production process through our trusted partner network.' },
    { question: 'What\'s the minimum order quantity?', answer: 'This depends on the product and vendor. Some items have minimums of 50-100 units, while others can be done in smaller batches. We\'ll advise based on your budget and needs.' },
    { question: 'How far in advance should we plan for events?', answer: 'We recommend 6-8 weeks for most merchandise projects, allowing time for design, production, and shipping. Rush orders are sometimes possible at additional cost.' },
    { question: 'Can you create sustainable merchandise options?', answer: 'Yes! We prioritize eco-friendly materials and ethical manufacturers. We can recommend sustainable alternatives for most product categories.' },
  ],
  closingStatement: 'Ready to create merchandise people love?',
};

export const websiteDevelopmentData: ServiceData = {
  name: 'Website Development',
  headline: 'Website Development',
  subheadline: 'Build modern, high-performance websites that convert visitors into customers and grow your business.',
  icon: Globe,
  heroImage: heroWebdev,
  idealClients: [
    'Businesses launching or redesigning their online presence',
    'Startups needing a professional website fast',
    'Companies requiring e-commerce or booking functionality',
    'Organizations wanting to improve website performance',
    'Teams needing custom web applications',
  ],
  problems: [
    'Your website looks outdated and doesn\'t represent your brand',
    'Slow loading times are hurting user experience and SEO',
    'The site isn\'t mobile-friendly or responsive',
    'You can\'t easily update content without developer help',
  ],
  solution: {
    title: 'Our Approach to Website Development',
    description: 'We build websites that are fast, beautiful, and easy to manage. Using modern technologies and best practices, we create digital experiences that load quickly, rank well in search engines, and convert visitors into customers.',
  },
  deliverables: [
    'Custom responsive website design',
    'Front-end and back-end development',
    'Content management system integration',
    'E-commerce functionality (if needed)',
    'SEO optimization and meta setup',
    'Analytics and tracking implementation',
    'Performance optimization',
    'Training and documentation',
  ],
  process: [
    { step: 'Discovery', description: 'Understanding your goals, audience, and technical requirements.' },
    { step: 'Design', description: 'Creating wireframes and visual designs for your approval.' },
    { step: 'Development', description: 'Building the website with clean, maintainable code.' },
    { step: 'Testing', description: 'Rigorous testing across devices and browsers.' },
    { step: 'Launch & Support', description: 'Smooth deployment and ongoing maintenance support.' },
  ],
  whyChooseUs: [
    'Modern tech stack for speed and scalability',
    'Mobile-first responsive design approach',
    'SEO best practices built in from the start',
    'Clean code that\'s easy to maintain',
    'We train you to manage your own content',
    'Ongoing support and maintenance available',
  ],
  faqs: [
    { question: 'How long does a website project take?', answer: 'Simple websites take 4-6 weeks, while complex sites with custom features can take 8-12 weeks. We\'ll provide a timeline based on your specific needs.' },
    { question: 'What platforms do you work with?', answer: 'We work with modern frameworks like React, Next.js, and Vue, as well as CMS platforms like WordPress, Webflow, and Shopify.' },
    { question: 'Do you provide hosting?', answer: 'We can recommend and set up hosting, or work with your existing hosting provider. We partner with reliable services for optimal performance.' },
    { question: 'What about ongoing maintenance?', answer: 'We offer maintenance packages for updates, security patches, and content changes. Most clients find this more cost-effective than ad-hoc requests.' },
  ],
  closingStatement: 'Ready to launch a website that works as hard as you do?',
};

export const mobileAppDevelopmentData: ServiceData = {
  name: 'Mobile App Development',
  headline: 'Mobile App Development',
  subheadline: 'Create powerful mobile experiences that engage users and drive business growth on iOS and Android.',
  icon: Smartphone,
  heroImage: heroMobileapp,
  idealClients: [
    'Startups with innovative app ideas',
    'Businesses wanting to reach mobile-first customers',
    'Companies needing internal mobile tools',
    'Organizations modernizing legacy systems',
    'Teams extending their web product to mobile',
  ],
  problems: [
    'Your competitors have apps and you don\'t',
    'Users expect mobile access to your services',
    'Web experience doesn\'t translate well to mobile',
    'Current app is slow, buggy, or outdated',
  ],
  solution: {
    title: 'Our Approach to Mobile Development',
    description: 'We build mobile apps that users love to use. Whether native iOS/Android or cross-platform, we focus on performance, usability, and maintainability to deliver apps that succeed in competitive app stores.',
  },
  deliverables: [
    'iOS and Android app development',
    'Cross-platform solutions (React Native, Flutter)',
    'UI/UX design for mobile',
    'API development and integration',
    'App store optimization and submission',
    'Push notifications and analytics',
    'Testing and quality assurance',
    'Post-launch support and updates',
  ],
  process: [
    { step: 'Discovery', description: 'Defining app features, user flows, and technical requirements.' },
    { step: 'Design', description: 'Creating intuitive mobile interfaces and prototypes.' },
    { step: 'Development', description: 'Building the app with scalable architecture.' },
    { step: 'Testing', description: 'Comprehensive testing on real devices.' },
    { step: 'Launch', description: 'App store submission and marketing support.' },
  ],
  whyChooseUs: [
    'Experience with both native and cross-platform development',
    'Focus on performance and battery efficiency',
    'We understand app store requirements and guidelines',
    'Agile approach with regular demos and feedback',
    'Post-launch analytics to inform improvements',
    'Ongoing maintenance and feature updates',
  ],
  faqs: [
    { question: 'Native or cross-platform?', answer: 'It depends on your needs. Cross-platform (React Native/Flutter) is cost-effective for most apps. Native is better for performance-critical or hardware-intensive apps.' },
    { question: 'How much does an app cost?', answer: 'Apps range from $30k for simple apps to $150k+ for complex ones. We provide detailed estimates after understanding your requirements.' },
    { question: 'How long does development take?', answer: 'Simple apps take 3-4 months, complex apps 6-12 months. We use agile methodology so you see progress every sprint.' },
    { question: 'Do you help with app store submission?', answer: 'Yes, we handle the entire submission process for both App Store and Google Play, including optimization for discoverability.' },
  ],
  closingStatement: 'Ready to bring your app idea to life?',
};

export const cmsDevelopmentData: ServiceData = {
  name: 'CMS Development',
  headline: 'CMS Development',
  subheadline: 'Empower your team to manage content effortlessly with custom content management solutions.',
  icon: LayoutDashboard,
  heroImage: heroCms,
  idealClients: [
    'Marketing teams needing content autonomy',
    'Publishers and media companies',
    'E-commerce businesses with large catalogs',
    'Organizations with multiple content contributors',
    'Companies outgrowing their current CMS',
  ],
  problems: [
    'You rely on developers for every content change',
    'Current CMS is slow, clunky, or hard to use',
    'Content is scattered across multiple systems',
    'No workflow for content approval and publishing',
  ],
  solution: {
    title: 'Our Approach to CMS Development',
    description: 'We build content management systems that your team actually wants to use. Whether customizing existing platforms or building headless CMS solutions, we focus on usability, flexibility, and integration with your existing tools.',
  },
  deliverables: [
    'Custom CMS development or customization',
    'Headless CMS implementation',
    'Content modeling and structure',
    'Workflow and permissions setup',
    'Third-party integrations',
    'Migration from existing systems',
    'Training and documentation',
    'Ongoing support and optimization',
  ],
  process: [
    { step: 'Analysis', description: 'Understanding your content types, workflows, and team needs.' },
    { step: 'Architecture', description: 'Designing the content model and system structure.' },
    { step: 'Development', description: 'Building and customizing the CMS solution.' },
    { step: 'Migration', description: 'Safely moving content from existing systems.' },
    { step: 'Training', description: 'Ensuring your team is confident using the new system.' },
  ],
  whyChooseUs: [
    'We focus on editor experience, not just developer features',
    'Scalable solutions that grow with your content needs',
    'Integration expertise with marketing and analytics tools',
    'Clean migrations that preserve your content history',
    'Comprehensive training for all user levels',
    'Ongoing support as your needs evolve',
  ],
  faqs: [
    { question: 'Which CMS platforms do you work with?', answer: 'We work with WordPress, Strapi, Contentful, Sanity, and custom headless solutions. We\'ll recommend the best fit for your needs.' },
    { question: 'What is a headless CMS?', answer: 'A headless CMS separates content management from presentation, allowing your content to power websites, apps, and other channels from one source.' },
    { question: 'Can you migrate our existing content?', answer: 'Yes, we have experience migrating content from various platforms. We ensure all content, metadata, and relationships are preserved.' },
    { question: 'How do you handle training?', answer: 'We provide hands-on training sessions, video tutorials, and documentation customized to your specific CMS setup and workflows.' },
  ],
  closingStatement: 'Ready to take control of your content?',
};

export const brandIdentityData: ServiceData = {
  name: 'Brand Identity',
  headline: 'Brand Identity & Voice',
  subheadline: 'Build a distinctive brand that resonates with your audience and stands the test of time.',
  icon: Fingerprint,
  heroImage: heroBrand,
  idealClients: [
    'Startups establishing their market presence',
    'Established businesses undergoing rebranding',
    'Companies expanding into new markets',
    'Organizations after mergers or acquisitions',
    'Brands that have outgrown their original identity',
  ],
  problems: [
    'Your brand doesn\'t reflect who you are today',
    'Customers confuse you with competitors',
    'Inconsistent brand application across touchpoints',
    'Difficulty attracting your ideal customer base',
  ],
  solution: {
    title: 'Our Approach to Brand Identity',
    description: 'We build brands from the inside out—starting with strategy before touching visuals. By deeply understanding your values, audience, and competitive position, we create identities that are authentic, memorable, and built to evolve with your business.',
  },
  deliverables: [
    'Brand strategy and positioning',
    'Logo design and variations',
    'Color palette and typography system',
    'Brand voice and messaging guidelines',
    'Visual identity system',
    'Brand guidelines document',
    'Collateral templates',
    'Brand launch support',
  ],
  process: [
    { step: 'Discovery & Research', description: 'Deep dive into your business, audience, competitors, and aspirations.' },
    { step: 'Strategy Development', description: 'Defining your brand positioning, personality, and key messages.' },
    { step: 'Visual Identity Creation', description: 'Designing the logo, color system, typography, and visual elements.' },
    { step: 'Brand System Build', description: 'Creating comprehensive guidelines and templates for consistent application.' },
    { step: 'Launch Support', description: 'Helping you roll out the new brand across all touchpoints.' },
  ],
  whyChooseUs: [
    'Strategy comes first—we don\'t jump straight to logos',
    'We involve key stakeholders to ensure buy-in',
    'Brands built for flexibility and growth',
    'Practical guidelines teams actually follow',
    'We consider implementation from the start',
    'Ongoing support as your brand evolves',
  ],
  faqs: [
    { question: 'How long does a branding project take?', answer: 'A comprehensive brand identity typically takes 8-12 weeks. Smaller refreshes might take 4-6 weeks. We\'ll provide a detailed timeline based on your specific scope.' },
    { question: 'What if we only need a logo?', answer: 'We can do logo-only projects, though we always recommend at least minimal brand strategy work to ensure the logo truly represents your business.' },
    { question: 'Do you help with naming?', answer: 'Yes, brand naming is one of our services. We can develop name options, check availability, and help with trademark considerations.' },
    { question: 'How do you handle brand rollout?', answer: 'We provide detailed guidelines and can create templates for common applications. We also offer extended support for teams implementing the new brand.' },
  ],
  closingStatement: 'Ready to build a brand that truly represents you?',
};

export const creativeStrategyData: ServiceData = {
  name: 'Creative Strategy',
  headline: 'Creative Strategy & Consulting',
  subheadline: 'Strategic creative direction that aligns your vision with market opportunities.',
  icon: Compass,
  heroImage: heroStrategy,
  idealClients: [
    'Businesses planning major marketing initiatives',
    'Companies launching new products or services',
    'Organizations needing fresh creative direction',
    'Teams wanting to improve campaign performance',
    'Leaders seeking an objective creative perspective',
  ],
  problems: [
    'Marketing efforts feel scattered and unfocused',
    'Creative work isn\'t driving business results',
    'Difficulty differentiating from competitors',
    'Internal teams need strategic direction',
  ],
  solution: {
    title: 'Our Approach to Creative Strategy',
    description: 'We bridge the gap between business objectives and creative execution. By combining market insights with creative expertise, we develop strategies that inspire exceptional work while delivering measurable outcomes.',
  },
  deliverables: [
    'Market and competitive analysis',
    'Creative strategy documentation',
    'Campaign concepts and creative briefs',
    'Content strategy and editorial planning',
    'Creative team workshops and alignment',
    'Performance measurement framework',
  ],
  process: [
    { step: 'Assessment', description: 'Evaluating your current positioning, past performance, and opportunities.' },
    { step: 'Research', description: 'Understanding your audience, market trends, and competitive landscape.' },
    { step: 'Strategy Development', description: 'Crafting creative direction that achieves your business goals.' },
    { step: 'Activation Planning', description: 'Translating strategy into actionable creative briefs and roadmaps.' },
    { step: 'Ongoing Advisory', description: 'Supporting execution and optimizing based on results.' },
  ],
  whyChooseUs: [
    'We combine creative thinking with business acumen',
    'Strategies grounded in research, not just intuition',
    'Focus on measurable outcomes and ROI',
    'We work well with existing creative teams',
    'Honest feedback and objective perspective',
    'Long-term strategic partnership focus',
  ],
  faqs: [
    { question: 'What\'s the difference between creative strategy and brand strategy?', answer: 'Brand strategy defines who you are; creative strategy determines how to express that through campaigns and content. They work together but serve different purposes.' },
    { question: 'Do you execute the creative work or just strategize?', answer: 'We can do both. Many clients engage us for strategy then have us execute key creative, while others take our strategy to their internal teams or other agencies.' },
    { question: 'How do you measure strategy success?', answer: 'We establish KPIs at the start—typically engagement, conversion, or awareness metrics—and track performance against these throughout execution.' },
    { question: 'Can you work with our existing agency relationships?', answer: 'Absolutely. We often collaborate with other agencies, providing strategic direction while they handle specific execution.' },
  ],
  closingStatement: 'Ready for creative work that drives real results?',
};

export const contentServicesData: ServiceData = {
  name: 'Content Services',
  headline: 'Content & Creativity Services',
  subheadline: 'Compelling content that builds trust, engages audiences, and drives conversions.',
  icon: FileText,
  heroImage: heroStrategy,
  idealClients: [
    'Brands building thought leadership',
    'Companies needing consistent content production',
    'Organizations launching content marketing initiatives',
    'Businesses wanting to improve SEO performance',
    'Teams lacking in-house content resources',
  ],
  problems: [
    'Struggling to produce content consistently',
    'Content isn\'t generating leads or engagement',
    'No clear content strategy or editorial direction',
    'In-house team overwhelmed with content demands',
  ],
  solution: {
    title: 'Our Approach to Content Services',
    description: 'We create content with purpose—every piece serves your broader business goals while genuinely helping your audience. From strategy to production, we ensure your content works hard across all channels and stages of the customer journey.',
  },
  deliverables: [
    'Content strategy and editorial calendar',
    'Blog posts and long-form articles',
    'Website copy and landing pages',
    'Email marketing content',
    'Video scripts and storyboards',
    'Case studies and whitepapers',
    'SEO optimization and keyword strategy',
    'Content performance reporting',
  ],
  process: [
    { step: 'Strategy', description: 'Developing content pillars, audience personas, and editorial direction.' },
    { step: 'Planning', description: 'Creating editorial calendars and content briefs aligned with your goals.' },
    { step: 'Creation', description: 'Producing high-quality content in your brand voice.' },
    { step: 'Optimization', description: 'Ensuring content is optimized for search and user experience.' },
    { step: 'Analysis', description: 'Measuring performance and refining strategy based on results.' },
  ],
  whyChooseUs: [
    'Strategy-first approach ensures purposeful content',
    'Writers who take time to understand your industry',
    'SEO best practices built into every piece',
    'Flexible capacity for consistent production',
    'Quality control processes that maintain standards',
    'Transparent reporting on content performance',
  ],
  faqs: [
    { question: 'How do you learn about our industry?', answer: 'We conduct thorough onboarding including stakeholder interviews, existing content review, and independent research. For technical industries, we may request subject matter expert access.' },
    { question: 'What\'s your content revision process?', answer: 'Each piece includes rounds of revision. We\'re not done until you\'re satisfied, and we learn from feedback to improve future content.' },
    { question: 'Can you work within our existing CMS?', answer: 'Yes, we can publish directly to most content management systems or deliver content in your preferred format for your team to publish.' },
    { question: 'How do you handle SEO?', answer: 'SEO is integrated into our process—from keyword research during planning to optimization during writing and technical recommendations for your site.' },
  ],
  closingStatement: 'Ready for content that actually works?',
};

export const digitalMarketingData: ServiceData = {
  name: 'Digital Marketing',
  headline: 'Digital Marketing',
  subheadline: 'Data-driven campaigns that reach the right audience and deliver measurable ROI.',
  icon: TrendingUp,
  heroImage: heroMarketing,
  idealClients: [
    'Businesses ready to scale their digital presence',
    'Companies seeking better marketing ROI',
    'Organizations launching new products or services',
    'Brands wanting to reach new audience segments',
    'Teams needing full-funnel marketing support',
  ],
  problems: [
    'Marketing spend isn\'t generating clear returns',
    'Difficulty reaching your ideal customers',
    'No clear visibility into campaign performance',
    'Struggling to compete in paid advertising',
  ],
  solution: {
    title: 'Our Approach to Digital Marketing',
    description: 'We combine creativity with analytics to build campaigns that perform. Every dollar is tracked, every decision is data-informed, and every campaign is optimized continuously to maximize your return on investment.',
  },
  deliverables: [
    'Digital marketing strategy',
    'Paid advertising (Google, Meta, LinkedIn)',
    'Search engine optimization (SEO)',
    'Email marketing campaigns',
    'Landing page optimization',
    'Analytics setup and reporting',
    'Conversion rate optimization',
    'Marketing automation setup',
  ],
  process: [
    { step: 'Audit & Strategy', description: 'Analyzing current performance and developing a comprehensive digital strategy.' },
    { step: 'Setup & Launch', description: 'Building campaigns, configuring tracking, and launching across channels.' },
    { step: 'Optimize', description: 'Continuous testing and optimization based on performance data.' },
    { step: 'Scale', description: 'Expanding successful campaigns and exploring new opportunities.' },
    { step: 'Report', description: 'Regular reporting with actionable insights and recommendations.' },
  ],
  whyChooseUs: [
    'We focus on revenue and ROI, not vanity metrics',
    'Full transparency with real-time reporting access',
    'No long-term contracts—results keep you with us',
    'Proactive optimization, not set-and-forget',
    'Clear communication without marketing jargon',
    'We treat your budget like it\'s our own',
  ],
  faqs: [
    { question: 'What\'s your minimum ad spend requirement?', answer: 'We typically work with clients spending $3,000+ monthly on ads. Below this, it\'s difficult to gather enough data for meaningful optimization.' },
    { question: 'How long before we see results?', answer: 'Initial results often appear within 2-4 weeks, but significant optimization takes 2-3 months. We set realistic expectations based on your industry and competition.' },
    { question: 'Do you require long-term contracts?', answer: 'No. We work month-to-month after an initial 3-month commitment. We believe our results should earn your continued partnership.' },
    { question: 'How often will we communicate?', answer: 'You\'ll receive weekly updates and monthly comprehensive reports. We\'re also available for calls whenever needed—we\'re partners, not distant vendors.' },
  ],
  closingStatement: 'Ready to get more from your marketing investment?',
};

export const socialMediaMarketingData: ServiceData = {
  name: 'Social Media Marketing',
  headline: 'Social Media Marketing',
  subheadline: 'Build genuine connections and grow an engaged community around your brand.',
  icon: Share2,
  heroImage: heroMarketing,
  idealClients: [
    'Brands wanting to build authentic social presence',
    'Companies struggling with consistent posting',
    'Organizations needing to reach younger demographics',
    'Businesses wanting to humanize their brand',
    'Teams lacking dedicated social media resources',
  ],
  problems: [
    'Inconsistent posting and engagement',
    'Content that doesn\'t resonate with your audience',
    'Difficulty keeping up with platform changes',
    'Social media feeling like a time sink without results',
  ],
  solution: {
    title: 'Our Approach to Social Media',
    description: 'We build social presence that feels human, not corporate. By understanding your audience and what matters to them, we create content that sparks genuine engagement and builds lasting community—not just follower counts.',
  },
  deliverables: [
    'Social media strategy and content pillars',
    'Content calendar and posting schedule',
    'Original content creation (graphics, copy, video)',
    'Community management and engagement',
    'Influencer partnership coordination',
    'Paid social advertising',
    'Analytics and performance reporting',
    'Platform-specific optimization',
  ],
  process: [
    { step: 'Audit & Strategy', description: 'Reviewing current presence and developing platform-specific strategies.' },
    { step: 'Content Planning', description: 'Creating content pillars and editorial calendars aligned with your goals.' },
    { step: 'Content Creation', description: 'Producing engaging content optimized for each platform.' },
    { step: 'Community Building', description: 'Active engagement to build relationships with your audience.' },
    { step: 'Optimize & Grow', description: 'Continuous analysis and refinement to improve performance.' },
  ],
  whyChooseUs: [
    'We prioritize engagement over vanity metrics',
    'Content that feels authentic to your brand',
    'We stay current with platform changes and trends',
    'Proactive community management that builds loyalty',
    'Integrated approach with your broader marketing',
    'Honest about what social media can (and can\'t) do',
  ],
  faqs: [
    { question: 'Which platforms should we focus on?', answer: 'It depends on your audience and goals. We\'ll recommend the right mix during strategy—better to excel on 2-3 platforms than spread thin across all of them.' },
    { question: 'How much content will you create?', answer: 'Typical packages include 12-20 posts per month across platforms, but we customize based on your needs and what works for your audience.' },
    { question: 'Do you handle comments and messages?', answer: 'Yes, community management is included. We can handle all engagement or work with your team on responses that require specific expertise.' },
    { question: 'Can you work with influencers?', answer: 'Absolutely. We can identify relevant influencers, manage outreach, and coordinate partnerships as part of your social strategy.' },
  ],
  closingStatement: 'Ready to build a community that cares about your brand?',
};

export const seoData: ServiceData = {
  name: 'SEO',
  headline: 'Search Engine Optimization',
  subheadline: 'Increase your visibility, drive organic traffic, and outrank your competitors in search results.',
  icon: Search,
  heroImage: heroSeo,
  idealClients: [
    'Businesses wanting to reduce paid ad dependency',
    'Companies with valuable content not getting found',
    'E-commerce stores needing product visibility',
    'Local businesses targeting geographic areas',
    'Startups building long-term organic presence',
  ],
  problems: [
    'Your website doesn\'t appear in search results',
    'Competitors outrank you for important keywords',
    'Organic traffic has plateaued or declined',
    'You\'re too dependent on paid advertising',
  ],
  solution: {
    title: 'Our Approach to SEO',
    description: 'We take a holistic approach to SEO that combines technical excellence with compelling content. No black-hat tricks—just sustainable strategies that build authority and drive qualified traffic over time.',
  },
  deliverables: [
    'Comprehensive SEO audit',
    'Keyword research and strategy',
    'Technical SEO optimization',
    'On-page SEO improvements',
    'Content optimization and creation',
    'Link building and outreach',
    'Local SEO (if applicable)',
    'Monthly reporting and insights',
  ],
  process: [
    { step: 'Audit', description: 'Complete analysis of your current SEO performance and opportunities.' },
    { step: 'Strategy', description: 'Developing a prioritized roadmap based on impact and effort.' },
    { step: 'Technical Fixes', description: 'Resolving site issues that hurt search performance.' },
    { step: 'Content & Links', description: 'Creating optimized content and building quality backlinks.' },
    { step: 'Monitor & Refine', description: 'Tracking rankings and adjusting strategy based on results.' },
  ],
  whyChooseUs: [
    'White-hat strategies that stand the test of time',
    'We focus on rankings AND business outcomes',
    'Transparent reporting with clear metrics',
    'Integrated with content and technical teams',
    'We stay ahead of algorithm changes',
    'No unrealistic promises—just honest projections',
  ],
  faqs: [
    { question: 'How long does SEO take to work?', answer: 'SEO is a long-term investment. You\'ll typically see initial improvements in 3-4 months, with significant results in 6-12 months. We set realistic expectations from the start.' },
    { question: 'Can you guarantee rankings?', answer: 'No reputable SEO agency can guarantee specific rankings. We can guarantee our process, effort, and transparency. Our track record speaks for itself.' },
    { question: 'What about Google algorithm updates?', answer: 'Our white-hat approach means algorithm updates typically don\'t hurt our clients. We stay informed and adjust strategies proactively.' },
    { question: 'Do you work with our existing content team?', answer: 'Absolutely. We can provide SEO guidance for your writers or create optimized content ourselves—whatever works best for your team.' },
  ],
  closingStatement: 'Ready to dominate search results?',
};
