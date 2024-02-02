'use client';
import { useEffect, useState } from 'react';
import NavigationBar from '../app/components/NavigationBar';
import Header from '../app/views/Header';
import { komisiApis } from '@/app/helpers/komisiApi';
import { globalApis } from '@/app/helpers/globalApi';
import KomisiPage from '@/app/views/KomisiPage';


const commission_system = () =>{
    const [globalData, setGlobalData] = useState([]);
    const [komisiData, setKomisiData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const {globalData} = await globalApis();
        setGlobalData(globalData);
        const { komisiData } = await komisiApis();
        setKomisiData(komisiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavigationBar globalData={globalData} />
      <Header />
      <KomisiPage />
    </div>
  );
}

export default commission_system;