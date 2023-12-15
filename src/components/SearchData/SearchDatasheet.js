import React from 'react';
import {message, Input} from 'antd';

const {Search} = Input;

const SearchDatasheet = ({setSearchData, PaginationData, setDataProps, loading, setLoading}) => {

    const [messageApi, contextHolder] = message.useMessage();

    const SearchDatasheet = (searchData) => {
        if (searchData.length >= 3) {
            setLoading(true);
            setSearchData(searchData);
            setDataProps('Search');
            PaginationData(1, 'Search', searchData);
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
                    onSearch={(searchData) => SearchDatasheet(searchData)}/>
        </>
    );
}

export default SearchDatasheet;