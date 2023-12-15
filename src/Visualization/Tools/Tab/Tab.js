import React, {useEffect, useState} from 'react';
import {Drawer} from 'antd';
import {getById} from "../../../api/serviceApi";
import TabComponent from "./TabComponent";

const Tab = ({id, setId, setTab, tab}) => {

    const [allData, setAllData] = useState('');

    useEffect(() => {
        getById(id).then((data) => {
            setAllData(data);
            id = null;
            setId(null);
        });
    }, []);

    return (
        <>
            <Drawer title={allData[0]?.name} placement="right" onClose={() => setTab(false)} open={tab}
                    style={{textAlign: 'center'}}>
                <TabComponent data={allData}/>
            </Drawer>
        </>
    );
};
export default Tab;
