import React, { useEffect } from 'react';
import { Button } from 'antd';

const NotFound = () => {

  useEffect(() => {
    document.title = 'IT-Library | Not Found';
  }, []);

  return (
    <div className={'dot-background'}>
      <div className={'notFound'}>
        <div>
          <h1>Էջը չի գտնվել!</h1>
          <h5>Ներողություն ենք հայցում, փնտրվող էջը գոյություն չունի</h5>
          <Button size={'large'} onClick={() => window.location = '/'}>Վերադառնալ Հիմնական Էջ</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
