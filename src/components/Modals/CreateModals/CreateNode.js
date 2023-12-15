import React, {useState} from 'react';
import {
    Button, Divider, Form, Input,
    Modal,
    Select
} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {NodeTypeProps, NodeTypes} from "../../../helpers/constant";
import {createNode} from "../../../Api/serviceApi";

const CreateNode = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [type, setType] = useState('Select Type');
    const [input, setInput] = useState('');
    const [form] = Form.useForm();

    const handleCancel = () => {
        setIsModalOpen(false);
        setType('Select Type');
        setInput(null);
    };

    const selectedType = (props) => {
        setType(props);
        setInput(NodeTypeProps.find((nodeType) => nodeType.type === props));
    }

    const onFinish = (value) => {
        for (let x in value) {
            if (!value[x]) {
                delete value[x];
            }
        }
        createNode(type, value).then(() => {
            handleCancel();
        })
    }

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)} type="default" style={{margin: '10px'}}>
                <PlusOutlined/>
            </Button>
            <Modal title="Create Node" open={isModalOpen} onCancel={handleCancel} onOk={form.submit}>
                <Select value={type} defaultValue={"Select Type"} onChange={(value) => {
                    selectedType(value);
                    form.resetFields();
                }}
                        options={NodeTypes.map((type) => ({
                            value: type,
                            label: type,
                        }))} size={'middle'}/>
                <Divider type={'horizontal'} orientation={'center'}/>
                {input?.props?.length &&
                    <Form onFinish={(e) => onFinish(e)} form={form}>
                        {input?.props?.map((nodeType, i) => {
                            return (
                                <Form.Item key={i} name={nodeType} label={nodeType === 'name' ? 'Node Name' : nodeType}>
                                    <Input placeholder={nodeType}/>
                                </Form.Item>
                            );
                        })}
                    </Form>
                }
            </Modal>
        </>
    );
};
export default CreateNode;