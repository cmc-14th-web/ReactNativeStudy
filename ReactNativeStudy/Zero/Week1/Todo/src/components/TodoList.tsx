import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Todo from './Todo';
import { useTodos } from '../store/todosState';

export type TTodo = {
    id: number;
    task: string;
    isDone: boolean;
}

function TodoList() {
    const todosState = useTodos();

    return (
        <View style={style.container}>
            {todosState.todos.length > 0 ? todosState.todos.map((todo) => (
                <Todo task={todo.task} isDone={todo.isDone} key={todo.id} id={todo.id} />
            ))
                : <Text>할 일이 없어요!</Text>
            }
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
