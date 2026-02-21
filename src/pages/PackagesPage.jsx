import React from 'react'
import FAQSection from '../components/common/FAQSection'
import ValueBentoGrid from '../components/common/ValueBentoGrid'
import MetricStrip from '../components/common/MetricStrip'
import PackageHeroCTA from '../components/PackagePage/PackageHeroCTA'


function PackagesPage() {
  return (
    <>
      <PackageHeroCTA />
      <MetricStrip />
      <ValueBentoGrid />
      <FAQSection />
    </>
  )
}
export default PackagesPage