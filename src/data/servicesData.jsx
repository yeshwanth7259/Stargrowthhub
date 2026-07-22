import React from 'react';
import { FaSearch, FaHashtag, FaRocket, FaPenNib, FaLaptopCode, FaChartLine, FaDatabase } from 'react-icons/fa';
import socialPileImg from '../assets/service_social_pile.png';
import crmImg from '../assets/service_crm.png';

export const servicesData = [
  {
    id: 1,
    slug: 'seo',
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    shortDesc: "Rank higher on Google and drive organic traffic that converts.",
    fullDesc: "Our advanced SEO strategies go beyond basic keyword stuffing. We perform deep technical audits, build high-authority backlinks, and optimize your on-page content to ensure you dominate the search engine results pages (SERPs). Stop losing customers to your competitors and start capturing high-intent organic traffic.",
    benefits: [
      "Comprehensive Technical Audits",
      "High-Authority Link Building",
      "Content Gap Analysis",
      "Local & International SEO"
    ],
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    slug: 'social-media-marketing',
    icon: <FaHashtag />,
    title: "Social Media Marketing",
    shortDesc: "Engage your audience and build a brand that people love.",
    fullDesc: "We craft viral, engaging social media campaigns that turn casual scrollers into loyal brand advocates. From Instagram Reels to LinkedIn thought leadership, our team of creatives and strategists build communities that drive real revenue, not just vanity metrics.",
    benefits: [
      "Platform-Specific Strategies",
      "Viral Content Creation",
      "Community Management",
      "Influencer Partnerships"
    ],
    image: socialPileImg
  },
  {
    id: 3,
    slug: 'google-ads',
    icon: <FaRocket />,
    title: "Google Ads & PPC",
    shortDesc: "Get instant visibility and maximum ROI with smart ad campaigns.",
    fullDesc: "Turn your ad budget into a highly predictable revenue engine. We design, launch, and aggressively optimize Pay-Per-Click campaigns across Google, Bing, and Meta. By leveraging advanced bidding algorithms and hyper-targeted ad copy, we drive down your Cost Per Acquisition (CPA) while scaling your sales.",
    benefits: [
      "Hyper-Targeted Audience Segmentation",
      "Continuous A/B Testing",
      "Advanced Bidding Strategies",
      "Cross-Channel Retargeting"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    slug: 'content-marketing',
    icon: <FaPenNib />,
    title: "Content Marketing",
    shortDesc: "Content that attracts, informs, and converts your audience.",
    fullDesc: "Words matter. We produce high-converting, authoritative content that positions your brand as the industry leader. From long-form SEO blog posts and whitepapers to punchy email newsletters and video scripts, our content is designed to educate your audience and seamlessly guide them down the funnel.",
    benefits: [
      "Data-Backed Content Strategy",
      "High-Converting Copywriting",
      "SEO-Optimized Blog Articles",
      "Lead Magnet Creation"
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    slug: 'web-development',
    icon: <FaLaptopCode />,
    title: "Web Design & Dev",
    shortDesc: "Beautiful, fast, and conversion-focused websites.",
    fullDesc: "Your website is your best salesperson. We build ultra-fast, responsive, and visually stunning websites engineered specifically to convert traffic into leads. Using the latest tech stacks (React, Next.js, Framer Motion), we deliver digital experiences that leave a lasting impression and outperform the competition.",
    benefits: [
      "Custom UI/UX Design",
      "High-Performance Tech Stack",
      "Mobile-First Responsive Builds",
      "Conversion Rate Optimization (CRO)"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    slug: 'crm-integration',
    icon: <FaDatabase />,
    title: "CRM Integration",
    shortDesc: "Centralize customer data and automate your sales pipeline.",
    fullDesc: "Stop letting leads slip through the cracks. We seamlessly integrate powerful CRM software (like HubSpot or Salesforce) into your marketing funnel. We automate your lead nurturing, score your prospects, and give your sales team the exact data they need to close deals faster and more efficiently.",
    benefits: [
      "Seamless Tech Stack Integration",
      "Automated Lead Nurturing",
      "Advanced Lead Scoring",
      "Closed-Loop Revenue Reporting"
    ],
    image: crmImg
  }
];
