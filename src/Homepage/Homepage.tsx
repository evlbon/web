import React, { useContext } from "react";
import { Todo, todoStore } from './store';
import { observer } from "mobx-react-lite";
import { Table, Space } from 'antd';

const Homepage = () => {
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'is_completed',
            dataIndex: 'is_completed',
            key: 'is_completed',
            render: (k: string, v: Todo) => (
                <Space size="middle" >
                    <a onClick={_ => todoStore.toggleTodo(v.id!)}>toggle {v.title}</a>
                    <a onClick={_ => todoStore.removeTodo(v.id!)}>remove {v.title}</a>
                </Space >
            ),
        },
    ];
    return (
        <Table dataSource={todoStore.todos} columns={columns} />
    )
}

export default observer(Homepage);
