import { Card } from 'antd';
import Advices from './advices.json';

const DayAdvice = () => {
return (
  <>
    {Advices && Advices.map((adv, index) => {
      return (
        <Card key={adv.id} style={{border: '1px solid black', margin: '20px'}} title={`Օր ${index + 1}`}>
          {adv.text}
        </Card>
      )
    })}

  </>
)
}

export default DayAdvice;
