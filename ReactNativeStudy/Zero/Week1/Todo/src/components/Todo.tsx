import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../constants';
import Icon from './Icon';
import React from 'react';

interface TodoProps {
    isDone: boolean;
    task: string;
}

function Todo({ isDone, task }: TodoProps) {
    return (
        <View style={{ ...style.container, backgroundColor: isDone ? theme.color.Pink : theme.color.White }}>
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
