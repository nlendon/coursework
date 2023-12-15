import { useEffect } from 'react';
import Schema from '../../Visualization/Schema';

const Animations = () => {


  useEffect(() => {
    const container = document.getElementById('animations');
    if(container) {
      Schema();
    }
  }, []);

  return (
    <div id={'animations'} />
  );
};

export default Animations;
