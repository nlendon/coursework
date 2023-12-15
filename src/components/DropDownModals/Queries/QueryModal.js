import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import QueryDropDown from "./QueryDropDown";

const QueryModal = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <Button type="ghost" style={{width: '100%'}} onClick={() => setModal(true)}>Queries</Button>
            <Modal
                title="Queries"
                centered
                style={{textAlign: 'center'}}
                open={modal}
                onOk={() => setModal(false)}
                onCancel={() => setModal(false)}
                footer={null}
                width={1000}
            >
                <div className={'query'}>
                    <QueryDropDown setModal={setModal}/>
                </div>
            </Modal>
        </>
    );
};

export default QueryModal;