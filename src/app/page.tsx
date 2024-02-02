'use client';
import { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import Header from './views/Header';
import MainPage from './views/MainPage';
import { homepageApis } from "./helpers/homepageApi"
import { globalApis } from './helpers/globalApi';
import { komisiApis } from './helpers/komisiApi';

const Home = () =>{
  const [globalData, setGlobalData] = useState([]);
  const [homepageData, setHomepageData] = useState([]);
  const [komisiData, setKomisiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {globalData} = await globalApis();
        setGlobalData(globalData);
        const { homePage } = await homepageApis();
        setHomepageData( homePage );
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
      <MainPage homepageData={homepageData} globalData={globalData} komisiData={komisiData}/>
    </div>
  );
}

export default Home;