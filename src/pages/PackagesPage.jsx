import React from 'react'
import FAQSection from '../components/common/FAQSection'
import ValueBentoGrid from '../components/common/ValueBentoGrid'
import MetricStrip from '../components/common/MetricStrip'
import PackageHeroCTA from '../components/PackagePage/PackageHeroCTA'
import ContactBanner from '../components/common/ContactBanner'


function PackagesPage() {
  return (
    <>
      <PackageHeroCTA />
      <MetricStrip />
      <ValueBentoGrid />
      <FAQSection setId='packages'/>

      <ContactBanner/>
    </>
  )
}
export default PackagesPage