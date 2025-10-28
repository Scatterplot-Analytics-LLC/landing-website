'use client'

import Header from '@/src/components/homepage/Header'
import HeroSection from '@/src/components/homepage/HeroSection'
import ValueProposition from '@/src/components/homepage/ValueProposition'
// import ExtraComponent from '@/src/components/homepage/ExtraComponent'
// import ComingSoonBanner from '@/src/components/homepage/ComingSoonBanner'
import Footer from '@/src/components/homepage/Footer'
import SmarterPresentation from '@/src/components/homepage/SmarterPresentation'
import FAQ from '@/src/components/homepage/FAQ'
import HowItWorks from '@/src/components/homepage/HowItWorks'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Header />
      <HeroSection />
      <section id='value' className='scroll-mt-24'>
        <ValueProposition />
      </section>
      <section id='solutions' className='scroll-mt-24'>
        <SmarterPresentation />
      </section>
      <section id='features' className='scroll-mt-24'>
        <HowItWorks />
      </section>
      {/* <ComingSoonBanner /> */}
      {/* <ExtraComponent /> */}
      <section id='faq' className='scroll-mt-24'>
        <FAQ />
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
