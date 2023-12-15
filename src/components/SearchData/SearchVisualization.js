import React, {useState} from 'react';
import {Input, message} from 'antd';
import {visualizationSearch} from "../../api/serviceApi";

const {Search} = Input;

const SearchVisualization = ({setData, draw}) => {

    const [loading, setLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


    const SearchVisual = (searchData) => {
        if (searchData.length >= 3) {
            setLoading(true);
            visualizationSearch(searchData).then((data) => {
                if (data) {
                    setData(data);
                    draw(data);
                    setLoading(false);
                }
            });
        } else {
            error();
        }
    }

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'Minimum allowed number to search 3 letters',
            duration: 2,
        });
    };

    return (
        <>
            {contextHolder}
            <Search placeholder="Search Data" size="large" style={{width: "300px", margin: '20px'}}
                    loading={loading}
                    onSearch={(searchData) => SearchVisual(searchData)}/>
        </>
    );
}

export default SearchVisualization;
