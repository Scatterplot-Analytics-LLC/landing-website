import type { ReactNode } from 'react'

import Footer from '@/src/app/terms/Footer'
import Header from '@/src/components/homepage/Header'

type TermsLayoutProps = {
  children: ReactNode
}

const TermsLayout = ({ children }: TermsLayoutProps) => {
  return (
    <div className='min-h-screen bg-neutral-100'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default TermsLayout
