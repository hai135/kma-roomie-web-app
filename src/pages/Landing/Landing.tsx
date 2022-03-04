import React from 'react'
import UserLayout from '../../layouts/UserLayout'
import Banner from './Banner/Banner'
import ServicesOffered from './ServicesOffered/ServicesOffered'
import Reason from './Reason/Reason'
import NewestRoom from './NewestRoom/NewestRoom'
import NewestRoommate from './NewestRoommate/NewestRoommate'
import GetApp from './GetApp/GetApp'
import Subscribe from './Subscribe/Subscribe'

const Landing: React.FC = () => {
  return (
    <UserLayout>
      <Banner />
      <ServicesOffered />
      <Reason />
      <NewestRoom />
      {/* <GetApp /> */}
      {/* <NewestRoommate /> */}
      {/* <Subscribe /> */}
    </UserLayout>
  )
}

export default Landing
