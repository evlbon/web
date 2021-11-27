import React, { useContext, useState } from "react";
import { todoStore } from './store';
import { observer } from "mobx-react-lite";
import { Steps, Form, Input, Button } from 'antd';

const { Step } = Steps;

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const AddTodo = () => {
    const [title, setTitle] = useState("");
    return (
        <Form name="nest-messages" validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[{ required: true }]}
            >
                <Input value={title} onChange={e => setTitle(e.target.value)} />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={_ => {
                        todoStore.addTodo({
                            title: title,
                            completed: false
                        })
                        setTitle("");
                    }}
                >
                    Create
                </Button>
            </Form.Item>
        </Form>
    );
}

export default observer(AddTodo);
