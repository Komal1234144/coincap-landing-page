import React from 'react'
import './HomePage.scss';
import Header from '../../Components/HomePage/Header/Header';
import CryptoTable from '../../Components/HomePage/Table/Table';

const HomePage = () => {
  return (
    <div className='home-page'>

        <Header/>

        <CryptoTable/>

    </div>
  )
}

export default HomePage;