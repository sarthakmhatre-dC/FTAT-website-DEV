import React from 'react'
import ClientDirectory from '../components/ClientPage/ClientDirectory'
import { clientCategories } from '../data/clientLogoData'
import BottomCTA from '../components/common/bottomCTA'
function ClientsPage() {
  return (
    <>
        <ClientDirectory categories={clientCategories} />
        <BottomCTA/>
    </>
  )
}
export default ClientsPage