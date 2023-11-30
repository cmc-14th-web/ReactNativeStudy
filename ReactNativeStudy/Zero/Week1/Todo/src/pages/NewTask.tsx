import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../constants';
import { useTodos } from '../store/todosState';

function NewTask() {
    const [value, setValue] = useState('');
    const addTask = useTodos().addTodos;
    const clearValue = () => setValue('');
    const handleSubmit = () => {
        addTask(value);
        Alert.alert('할 일이 추가되었습니다!');
        clearValue();
    };

    return (
        <View>
            <Text>할 일을 추가해주세요!</Text>
            <Button title="완료" onPress={handleSubmit} />
            <View style={style.container}>
                <TextInput style={style.textInput} placeholder="할 일을 입력해주세요" onChangeText={setValue} value={value} />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 31,
    },
    button: {

    },
    textInput: {
        borderRadius: 20,
        backgroundColor: theme.color.White,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
});

export default NewTask;
