import React, {useState, useEffect} from 'react';
import Chart from '../../Visualization/Chart';
import PlusImg from "../../images/plus.svg";
import MinusImg from "../../images/minus.svg";
import FitImg from "../../images/Fit.svg";
import {Tools} from "../../Visualization/Chart";
import SettingsMenu from "../SettingsMenu";
import Tab from "../../Visualization/Tools/Tab/Tab";
import PlayButton from "../DropDownModals/PlayButton";
import {getMaxDegreeNodes} from "../../api/serviceApi";
import SearchVisualization from "../SearchData/SearchVisualization";

const Visualization = () => {
  const [data, setData] = useState(null);
  const [tab, setTab] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getMaxDegreeNodes('Person', 50).then((info) => {
      setData(info);
      Draw(info);
    });
  }, []);

  const Draw = (info) => {
    const container = document.querySelector('#container');
    if (container) {
      Chart(info, container, setTab, setId);
    }
  }
  const ZoomIn = () => {
    Tools('zoomIn');
  }

  const ZoomOut = () => {
    Tools('zoomOut');
  }

  const Fit = () => {
    Tools('fit');
  }
  const Play = (props) => {
    Tools('layoutPlay', props);
  }

  return (
    <>
      <SearchVisualization setData={setData} draw={Draw}/>
      <SettingsMenu/>
      {data &&
        <div id={'tools'}>
          <PlayButton Play={Play}/>
          <button onClick={() => ZoomIn()}><img src={PlusImg} alt="Plus Icon"/></button>
          <button onClick={() => ZoomOut()}><img src={MinusImg} alt="Minus Icon"/></button>
          <button onClick={() => Fit()}><img src={FitImg} alt="Fit Icon"/></button>
        </div>
      }
      {tab &&
        <Tab id={id} setId={setId} setTab={setTab} tab={tab}/>
      }
    </>
  );
}

export default Visualization;
