import React from 'react'
import ClientDirectory from '../components/ClientPage/ClientDirectory'
import { clientCategories } from '../data/clientLogoData'
import ContactBanner from '../components/common/ContactBanner'
function ClientsPage() {
  return (
    <>
        <ClientDirectory categories={clientCategories} />
        <ContactBanner/>
    </>
  )
}
export default ClientsPage