'use client'

import Header from '@/src/components/homepage/Header'
import HeroSection from '@/src/components/homepage/HeroSection'
import ValueProposition from '@/src/components/homepage/ValueProposition'
// import ExtraComponent from '@/src/components/homepage/ExtraComponent'
// import ComingSoonBanner from '@/src/components/homepage/ComingSoonBanner'
import Footer from '@/src/components/homepage/Footer'
import SmarterPresentation from '@/src/components/homepage/SmarterPresentation'
import FAQ from '@/src/components/homepage/FAQ'

const HomePage = () => {
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Header />
      <HeroSection />
      <ValueProposition />
      <SmarterPresentation />
      {/* <ComingSoonBanner /> */}
      {/* <ExtraComponent /> */}
      <FAQ />

      <Footer />
    </div>
  )
}

export default HomePage
