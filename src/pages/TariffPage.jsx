import React from 'react'
import RentalTariffTable from '../components/TariffPage/RentalTariffTable'
import TransferTariffTable from '../components/TariffPage/TransferTariffTable'
import TariffIntro from '../components/TariffPage/TariffIntro'
import TariffNotes from '../components/TariffPage/TariffNotes'
import BottomCTA from '../components/common/bottomCTA'

function TariffPage() {
  return (
    <>
        <TariffIntro/>
        <RentalTariffTable/>
        <TransferTariffTable/>

        <TariffNotes/>
        <BottomCTA/>
    </>
  )
}
export default TariffPage