import React from 'react'
import { StyleSheet, View } from 'react-native';
import Todo from './Todo';

export type Todo = {
    id: number;
    task: string;
    isDone: boolean;
}

interface TodoListProps {
    data: Todo[];
}

function TodoList({ data }: TodoListProps) {
    return (
        <View style={style.container}>
            {data.map((todo) => (
                <Todo key={todo.id} isDone={todo.isDone} task={todo.task} />
            ))}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 31,
        gap: 18,
        width: '100%',
    },
});

export default TodoList;
