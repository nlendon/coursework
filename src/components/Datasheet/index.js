import React, {useEffect, useState} from 'react';
import {Pagination, Table} from 'antd';
import {datasheetSearch, filterByEdge, getDataSheetFilter} from '../../api/serviceApi'
import SearchData from "../SearchData/SearchDatasheet";
import {columns, tableProps} from "../../helpers/constant";
import Expand from "./Expand";

const DataSheet = () => {

  const [info, setInfo] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [type, setType] = useState('');
  const [current, setCurrent] = useState(0);
  const [searchData, setSearchData] = useState(null);
  const [dataProps, setDataProps] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataSheetFilter('Person').then((data) => {
      setInfo(data.info);
      setTotalPages(data.pages);
      setCurrent(data.current_page);
      setDataProps('Node');
    });
  }, []);

  const PaginationData = (page, props, info) => {
    switch (props || dataProps) {
      case 'Node':
        getDataSheetFilter(info || type, page).then((data) => {
          setInfo(data.info);
          setTotalPages(data.pages);
          setCurrent(data.current_page);
        });
        break;
      case 'Search':
        datasheetSearch(info || searchData, page).then((data) => {
          setInfo(data.info);
          setTotalPages(data.pages);
          setCurrent(data.current_page);
          setLoading(false);
        });
        break;
      case 'Edge':
        filterByEdge(info || type, page).then((data) => {
          setInfo(data.info);
          setTotalPages(data.pages);
          setCurrent(data.current_page);
        });
        break;
    }
    return false;
  }

  return (
    <>
      <SearchData setSearchData={setSearchData} PaginationData={PaginationData} setDataProps={setDataProps}
                  loading={loading} setLoading={setLoading}/>
      {info &&
        <div className={'layout'}>
          <div style={{textAlign: 'left'}}>
            <Table
              {...tableProps}
              columns={columns}
              dataSource={info}
              expandable={{
                expandedRowRender: (record, expand) => {
                  return <Expand record={record}/>
                }
              }}
            />
            <Pagination style={{padding: '0 20px', textAlign: 'center'}} defaultCurrent={1}
                        total={totalPages}
                        defaultPageSize={1}
                        showSizeChanger={false} current={current} onChange={(e) => PaginationData(e)}
            />
          </div>
        </div>
      }
    </>
  );
}

export default DataSheet;
