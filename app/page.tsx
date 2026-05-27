'use client';

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhatsComing from '../components/WhatsComing';
import WhyKrayaa from '../components/WhyKrayaa';
import Vision from '../components/Vision';
import ForCreators from '../components/ForCreators';
import ForBrands from '../components/ForBrands';
import Press from '../components/Press';
import FAQSection from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import VerticalCategoryCarousel from '../components/VerticalCategoryCarousel';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <VerticalCategoryCarousel
          items={[
            {
              key: 'hero',
              label: 'Hero',
              render: () => <Hero />,
            },
            {
              key: 'whats-coming',
              label: "What's Coming",
              render: () => <WhatsComing />,
            },
            {
              key: 'why-krayaa',
              label: 'Why Krayaa',
              render: () => <WhyKrayaa />,
            },
            // {
            //   key: 'vision',
            //   label: 'Vision',
            //   render: () => <Vision />,
            // },
            {
              key: 'creators',
              label: 'For Creators',
              render: () => <ForCreators />,
            },
            {
              key: 'brands',
              label: 'For Brands',
              render: () => <ForBrands />,
            },
            {
              key: 'press',
              label: 'Press',
              render: () => <Press />,
            },
            {
              key: 'faq',
              label: 'FAQ',
              render: () => <FAQSection />,
            },
            {
              key: 'final',
              label: 'Final CTA',
              render: () => <FinalCTA />,
            },
            {
              key: 'footer',
              label: 'Footer',
              render: () => <Footer />,
            },
          ]}
        />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
