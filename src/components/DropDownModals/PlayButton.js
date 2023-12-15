import React from 'react';
import {Button, Dropdown, Space} from 'antd';
import PlayIcon from '../../images/play.svg'

const PlayButton = ({Play}) => {

    const items = [
        {
            key: 'circular',
            label: (
                <a>
                    Circular
                </a>
            ),
            onClick: () => {
                Play('circular');
            }
        },
        {
            key: 'concentric',
            label: (
                <a>
                    Concentric
                </a>
            ),
            onClick: () => {
                Play('concentric');
            }
        },
        {
            key: 'grid',
            label: (
                <a>
                    Grid
                </a>
            ),
            onClick: () => {
                Play('grid');
            }
        },
    ];

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="top"
                >
                    <Button><img src={PlayIcon} alt="Play Icon"/></Button>
                </Dropdown>
            </Space>
        </Space>
    );
}

export default PlayButton;