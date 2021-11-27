import React, { useContext } from "react";
import TodoStore from './store';
import { observer } from "mobx-react-lite";
import { Table, Tag, Space } from 'antd';

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
        },
    ];

    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo } = todoStore;
    return (
        <Table dataSource={todos} columns={columns} />
    )
}

export default observer(Homepage);