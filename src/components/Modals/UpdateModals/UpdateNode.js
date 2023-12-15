import React, {useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';
import {EditOutlined} from "@ant-design/icons";
import {NodeTypeProps} from "../../../helpers/constant";
import {TextSplitter} from "../../../Visualization/Tools/TextFormat";
import {updateNode} from "../../../api/serviceApi";

const UpdateNode = ({info}) => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState(null);
    const [form] = Form.useForm();

    const handleCancel = () => {
        setInput(null);
        setOpen(false);
    };

    const handleOpen = () => {
        setInput(NodeTypeProps.find((nodeType) => nodeType.type === info?.type[0]));
        setOpen(true);
    }

    const onFinish = (values) => {
        for (let x in values) {
            if (!values[x]) {
                delete values[x];
            }
        }
        updateNode(info.key, values).then(() => handleCancel());
    }

    return (
        <>
            <Button style={{margin: "5px", background: '#4850e3'}} onClick={() => handleOpen()}>
                <EditOutlined/>
            </Button>
            <Modal
                title="Update Node"
                open={open}
                onCancel={handleCancel}
                centered={true}
                width={700}
                footer={null}
            >
                {input?.props?.length &&
                    <Form onFinish={onFinish} form={form} style={{textAlign: 'right'}}>
                        {input?.props?.map((nodeType, i) => {
                            return (
                                <Form.Item key={i} name={nodeType}
                                           initialValue={TextSplitter(info.description[nodeType])} label={nodeType}>
                                    <Input placeholder={nodeType}/>
                                </Form.Item>
                            );
                        })}
                        <Button htmlType={'submit'}>Update</Button>
                    </Form>
                }
            </Modal>
        </>
    );
};
export default UpdateNode;
