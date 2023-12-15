import React, {useEffect, useState} from 'react';
import {ArrowRightOutlined} from "@ant-design/icons";
import {LongTextFormat} from "../TextFormat";
import {expandForDatasheet} from "../../../api/serviceApi";

const Expand = ({record}) => {
    const [expandedData, setExpandedData] = useState([]);

    useEffect(() => {
        expandForDatasheet(record.key).then((info) => {
            setExpandedData(info);
        });
    }, []);

    if (expandedData) {
        return (
            <div>
                {expandedData?.edges && expandedData?.edges?.map(edge => {
                    if (record.key === edge.source) {
                        const target = expandedData.nodes.find((node) => node.ID === edge.target);
                        return <p key={edge.ID}>
                            <span>{record.name}</span> <ArrowRightOutlined
                            style={{marginLeft: '6px', marginRight: '10px'}}/>
                            <span>{LongTextFormat(target.name, 250, 20)}</span>
                        </p>
                    } else {
                        const source = expandedData.nodes.find((node) => node.ID === edge.source);
                        return <p key={edge.ID}>
                            <span>{LongTextFormat(source.name, 250, 20)}</span> <ArrowRightOutlined
                            style={{marginLeft: '6px', marginRight: '10px'}}/>
                            <span>{record.name}</span>
                        </p>
                    }
                })}
            </div>
        );
    }
}

export default Expand;
