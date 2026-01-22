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
  LucideIcon
} from 'lucide-react';

// Hero images for service pages
import heroUiux from '@/assets/service-hero-uiux.jpg';
import heroBrand from '@/assets/service-hero-brand.jpg';
import heroMarketing from '@/assets/service-hero-marketing.jpg';
import heroStrategy from '@/assets/service-hero-strategy.jpg';

export interface ServiceMeta {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export const allServices: ServiceMeta[] = [
  { name: 'UI/UX Design', slug: 'ui-ux-design', description: 'User-centered designs that drive engagement and conversions', icon: Palette },
  { name: 'Graphic Design', slug: 'graphic-design', description: 'Visual storytelling that captures your brand essence', icon: PenTool },
  { name: 'Merchandise Design', slug: 'merchandise-design', description: 'Custom merchandise that builds brand loyalty', icon: ShoppingBag },
  { name: 'Brand Identity', slug: 'brand-identity', description: 'Memorable brand identities that stand out', icon: Fingerprint },
  { name: 'Creative Strategy', slug: 'creative-strategy', description: 'Strategic planning for maximum business impact', icon: Compass },
  { name: 'Content Services', slug: 'content-services', description: 'Compelling content that connects and converts', icon: FileText },
  { name: 'Digital Marketing', slug: 'digital-marketing', description: 'Data-driven campaigns that deliver results', icon: TrendingUp },
  { name: 'Social Media Marketing', slug: 'social-media-marketing', description: 'Social strategies that grow your audience', icon: Share2 },
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

export const brandIdentityData: ServiceData = {
  name: 'Brand Identity',
  headline: 'Brand Identity & Voice',
  subheadline: 'Build a distinctive brand that resonates with your audience and stands the test of time.',
  icon: Fingerprint,
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
