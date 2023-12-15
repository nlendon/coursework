import React, {useState} from 'react';
import {Button, Divider, Modal, Select, Space} from 'antd';
import {shortestPath, visualizationSearch} from "../../../api/serviceApi";
import {
    AllShortestPaths,
    PH_D_since_date,
    Profession_and_PMI,
    Professions,
    Professions_and_PMI,
    ShortestPath,
    SimilarNodes,
    Winner,
    Working_for_and_PMI
} from "./QueriesFunctions";
import {selectProps} from "../../../helpers/constant";

const QueryDropDown = ({setModal}) => {

    const [modal, setNewModal] = useState(false);
    const [query, setQuery] = useState(null);
    const [input, setInput] = useState(true);
    const [okButt, setOkButt] = useState(true);
    const [data, setData] = useState([]);
    const [options, setOptions] = useState([]);
    const [type, setType] = useState(null);

    const handleOk = () => {
        switch (query) {
            case 'shortestPath':
                ShortestPath(data[0], data[1]);
                handleCancel();
                setModal(false);
                break;
            case 'similar':
                console.log(data,type)
                SimilarNodes(data, type);
                handleCancel();
                setModal(false);
                break;
            case 'allShortestPath':
                AllShortestPaths(data[0], data[1]);
                handleCancel();
                setModal(false);
                break;
        }
        setOkButt(true);
    }

    const handleCancel = () => {
        setData([]);
        setQuery(null);
        setInput(true);
        setOptions([]);
        setType(null);
        setOkButt(true);
        setNewModal(false);
    }

    const SearchNode = (searchData) => {
        if (searchData) {
            const search = options.find((option) => option.id === searchData);
            setType(search.cluster)
            setData([...data, searchData]);
            if (query === 'similar') {
                console.log(search)
                setData(search.label);
                setOkButt(false);
            } else if (data.concat(searchData).length === 2) {
                setOkButt(false);
            }
        }
    }

    const SetOptions = (searchData) => {
        if (searchData && searchData.length >= 3) {
            visualizationSearch(searchData).then((node) => {
                if (node) {
                    setOptions(node.nodes);
                    setInput(false);
                }
            });
        }
    }

    return (
        <>
            <div className={'queryModal'}>
                <Button onClick={() => {
                    Professions();
                    setModal(false);
                }}>Persons, Toxicology</Button>
                <Button onClick={() => {
                    Professions();
                    setModal(false);
                }}> Persons, Materials science</Button>
                <Button onClick={() => {
                    Professions_and_PMI();
                    setModal(false);
                }}>Persons, Materials science or/and Aerosols, PMI programs</Button>
                <Button onClick={() => {
                    Professions_and_PMI();
                    setModal(false);
                }}>Persons, Toxicology, Aerosols, PMI programs</Button>
                <Button onClick={() => {
                    PH_D_since_date();
                    setModal(false);
                }}>Persons, Ph.D by 2005</Button>
                <Button onClick={() => {
                    Working_for_and_PMI();
                    setModal(false);
                }}>Persons working for NPUA, PMI programs</Button>
                <Button onClick={() => {
                    Profession_and_PMI();
                    setModal(false);
                }}>Persons, Chemistry, PMI programs</Button>

                <Button onClick={() => {
                    setQuery('similar');
                    setNewModal(true);
                }}>
                    Similar node
                </Button>

                <Button onClick={() => {
                    setQuery('shortestPath');
                    setNewModal(true);
                }}>
                    Shortest path between 2 persons
                </Button>

                <Button onClick={() => {
                    setQuery('allShortestPath');
                    setNewModal(true);
                }}>
                    All the shortest paths between 2 persons
                </Button>
                <Button onClick={() => Winner()}>
                    Persons defended PhD after 2002 and won the program, related to Materials science
                </Button>

                <Button onClick={() => Winner()}>
                    Persons defended PhD after 2002 and won the program, related to Chemistry
                </Button>

                {modal && query &&
                    <Modal
                        title={query === 'similar' ? 'Similar Node' : query === 'shortestPath' ? 'Shortest Path Between 2 Nodes'
                            : 'All Shortest Paths Between 2 Nodes'}
                        open={modal} onOk={handleOk}
                        onCancel={handleCancel}
                        okButtonProps={{disabled: okButt}}>
                        <Divider type={'horizontal'}/>
                        <Space style={{display: 'grid'}}>
                            <Select onSearch={(e) => SetOptions(e)}
                                    {...selectProps}
                                    onChange={(e) => SearchNode(e)}
                                    placeholder={query === 'similar' ? 'Enter Node Name' : 'Enter First Node Name'}
                                    options={options?.map((option) => {
                                        return {
                                            value: option.id,
                                            label: option.label,
                                        }
                                    })}
                            />
                            {query !== 'similar' &&
                                <Select
                                    {...selectProps}
                                    onSearch={(e) => SetOptions(e)}
                                    onChange={(e) => SearchNode(e)}
                                    placeholder={'Enter Second Node Name'}
                                    disabled={input}
                                    options={options?.map((option) => {
                                        return {
                                            value: option.id,
                                            label: option.label,
                                        }
                                    })}
                                />
                            }
                        </Space>
                    </Modal>}
            </div>
        </>
    );
};
export default QueryDropDown;
