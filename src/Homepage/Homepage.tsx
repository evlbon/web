import React, { useContext } from "react";
import TodoStore, { Todo } from './store';
import { observer } from "mobx-react-lite";
import { Table, Tag, Space } from 'antd';

const Homepage = () => {
    const todoStore = useContext(TodoStore);
    const { todos, toggleTodo, removeTodo } = todoStore;

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
                    <a onClick={_ => toggleTodo(v.id!)}>toggle {v.title}</a>
                    <a onClick={_ => removeTodo(v.id!)}>remove {v.title}</a>
                </Space >
            ),
        },
    ];
    return (
        <Table dataSource={todos} columns={columns} />
    )
}

export default observer(Homepage);