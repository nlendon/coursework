import { Tabs } from 'antd';
import Profile from '../images/profile.jpg';
import Animation from '../components/animations/index'
import DataSheet from '../components/Datasheet/index'
import Visualization from '../components/Visualization/index'
import DayAdvice from '../components/DayAdvice/index'
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import Help from '../components/help';

const Home = () => {
  const token = localStorage.getItem('token');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  });


  if (loading) {
    return <Spinner />;
  }
  if (!token) window.location = '/sign-in';
  else
    return (
      <>
        <header>
          <div className={'logo'}>Narimanyan's <span
            style={{ color: 'green', fontSize: '21px' }}>Eco</span>system
          </div>
          <div className={'profile'}><img src={Profile} alt='Profile Img' /></div>
        </header>
        <div className={'navigation'}>
          <Tabs
            defaultActiveKey='3'
            items={[
              {
                label: `Անիմացիա`,
                key: '1',
                children: <Animation />,
              },
              {
                label: `Օրվա Խորհուրդ`,
                key: '2',
                children: <DayAdvice />,
              },
              {
                label: `Տվյալներ`,
                key: '3',
                children: <DataSheet />,
              },
              {
                label: `Տվյալների Վիզուալիզացիա`,
                key: '4',
                children: <Visualization />,
              },
              {
                label: `Օգնություն`,
                key: '5',
                children: <Help />,
              },
            ]}
          />
        </div>
      </>
    );
};

export default Home;
