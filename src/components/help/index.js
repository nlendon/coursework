import { Card } from 'antd';

const Help = () => {
  return (
    <>
      <div style={{ display: 'grid', justifyContent: 'center', gridGap: '10px', margin: '15px' }}>
        <Card style={{ border: '0.5px solid' }} title={'Տվյալներ'}>
          Տվյալների բաժինը ներկայացնում է տվյալները տեքստային տեսքով<br />
          Այնեղ կարող եք ծանոթանալ ցանկացած մարդու ինֆորմացիային։
          Ցանկացած տվյալ կարող եք ձևափոխել և հեռացնել, օգտագործելով աջ կողմի կապույտ և կարմիր կոճակները․<br/>
          Հնարավորություն ունեք օգտվելու Փնտրման կոճակից, փնտրելով ցանկացած տվյալ իր անունով
        </Card>
        <Card style={{ border: '0.5px solid' }} title={'Տվյալների Վիզուալիզացիա'}>
          Տվյալների Վիզուալիզացիա բաժինը ներկայացնում է տվյալները վիզուալ տեսքով<br />
          Այնեղ կարող եք ծանոթանալ ամբողջ տվյալների հետ, որը ներկայացված է "Տվյալներ" բաժնում։<br/>
          Տվյալները կարող եք տեղաշարժել օգտագործելով մկնիկը։ Տվյալները կարող են կապված լինեն իրար հետ տարբեր կապերի
          անուններով։<br/>
          Դուք հնարավորություն ունեք բացելու ցանկացած տվյալ և տեսնել նրա հետ անմիջական կապ ունեցող մնացաց տվյալները
          օգտագործելով մկնիկի աջ կոճակը և սեղմելով Expand կոճակը<br/>
          Դուք հնարավորություն ունեք հեռացնելու բոլոր տվյալները էկրանից, հնարավորուքյուն ունեք հեռացնելու կոնկրետ տվյալ
          կամ կենտրոնանալ տվյալի վրա (Օգտագործելով մկնիկի աջ կոճակը)<br/>
          Հնարավորություն ունեք օգտվելու Փնտրման կոճակից, փնտրելով ցանկացած տվյալ իր անունով
        </Card>
        <Card style={{ border: '0.5px solid', marginTop: '25px' }} title={'Հեղինակ'}>
          Համակարգը գրվել է Վահե Արմենի Նարիմանյանի կողմից<br/>
          Երևանի Ինֆորմատիկայի Պետական Քոլեջ<br/>
          Տվյալների Վիզուալիզացիա
        </Card>
      </div>
    </>
  );
};

export default Help;