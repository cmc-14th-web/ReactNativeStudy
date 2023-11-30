import { Alert, StyleSheet, Text, View } from 'react-native';
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
    };

    const deleteTodo = useTodos().removeTask;
    const handleDelete = (id: number) => {
        Alert.alert('삭제하시겠습니까?', '', [
            {
                text: '취소',
                onPress: () => { },
            },
            {
                text: '삭제',
                onPress: () => deleteTodo(id),
            },
        ]);
    };

    return (
        <View style={{ ...style.container, backgroundColor: isDone ? theme.color.Pink : theme.color.White }}
        >
            <Icon width="24" height="24"
                fill={isDone ? theme.color.White : theme.color.Pink}
                type={isDone ? 'check' : 'circle'}
                onPress={() => handlePress(id)}
            />
            <Text
                style={{ ...style.text, color: isDone ? theme.color.White : theme.color.Black }}
            >{task}</Text>
            <Icon width="24" height="24"
                fill={isDone ? theme.color.White : theme.color.Pink}
                type="trash" onPress={() => handleDelete(id)} />
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
        flex: 1,
        paddingLeft: 10,
    },
});

export default Todo;
