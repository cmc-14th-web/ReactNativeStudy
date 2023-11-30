import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants';
import Icon from './Icon';
import React from 'react';
import { useTodos } from '../store/todosState';

interface TodoProps {
    isDone: boolean;
    task: string;
    id: number;
}

function Todo({ isDone, task, id }: TodoProps) {
    const toggleTodo = useTodos().toggleTask;
    const handlePress = (id: number) => {
        toggleTodo(id);
    }
    return (
        <View style={{ ...style.container, backgroundColor: isDone ? theme.color.Pink : theme.color.White }}
            onTouchEnd={() => handlePress(id)}
        >
            <Icon width="24" height="24"
                fill={isDone ? theme.color.White : theme.color.Pink}
                type={isDone ? 'check' : 'circle'} />
            <Text
                style={{ ...style.text, color: isDone ? theme.color.White : theme.color.Black }}
            >{task}</Text>
            <Icon width="24" height="24"
                fill={isDone ? theme.color.White : theme.color.Pink}
                type="trash" />
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingVertical: 16,
        paddingHorizontal: 20,

    },
    text: {
        fontSize: 18,
        fontWeight: '400',
    },
});

export default Todo;
