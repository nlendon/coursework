import React, {useState} from 'react';
import {Button, Modal} from 'antd';
import {deleteNode} from "../../../api/serviceApi";
import {DeleteOutlined} from "@ant-design/icons";

const DeleteConfirm = ({info}) => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const handleOk = () => {
        deleteNode(info.key).then(() => {
            setConfirmLoading(true);
            setOpen(false);
        });
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <Button onClick={() => setOpen(true)}
                    style={{margin: "5px", background: '#FF0000'}}><DeleteOutlined/></Button>
            <Modal
                title="Are you Sure?"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                centered={true}
                width={500}
                okText={"Yes I'm sure"}
                style={{textAlign: 'center'}}
                okButtonProps={{
                    type: 'default',
                    className: 'deleteButt',
                }}
                cancelButtonProps={{
                    type: 'primary',
                }}
            >
                <p style={{marginTop: '50px', marginBottom: '50px'}}>Do you want to permanently delete this Node?</p>
            </Modal>
        </>
    );
};
export default DeleteConfirm;
