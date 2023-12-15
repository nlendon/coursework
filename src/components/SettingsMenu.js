import React from 'react';
import {Layout, Menu} from 'antd';
import QueryModal from "./DropDownModals/Queries/QueryModal";
import {ClearScene} from "../Visualization/Chart";

const SettingsMenu = () => {

    const items = [
        {
            key: '1',
            label: 'Clear Scene',
            onClick: () => {
                ClearScene();
            }
        },
        {
            key: '2',
            label: <QueryModal/>
        }
    ];

    return (
        <Layout>
            <Layout>
                <Layout.Sider width={150}>
                    <Menu
                        mode="inline"
                        style={{
                            height: '100%', borderRight: 0,
                        }}
                        items={items}
                    />
                </Layout.Sider>
                <div id={'container'}/>
            </Layout>
        </Layout>
    );
};
export default SettingsMenu;