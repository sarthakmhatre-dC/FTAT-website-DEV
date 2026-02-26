import React from 'react'
import FAQSection from '../components/common/FAQSection'
import ValueBentoGrid from '../components/common/ValueBentoGrid'
import MetricStrip from '../components/common/MetricStrip'
import PackageHeroCTA from '../components/PackagePage/PackageHeroCTA'
import BottomCTA from '../components/common/bottomCTA'

function PackagesPage() {
  return (
    <>
      <PackageHeroCTA />
      <MetricStrip />
      <ValueBentoGrid />
      <FAQSection setId='packages'/>

      <BottomCTA/>
    </>
  )
}
export default PackagesPage