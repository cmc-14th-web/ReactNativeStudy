import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../constants';
import { useTodos } from '../store/todosState';
import { useColor } from '../store/colorState';
import PageTitle from '../components/PageTitle';
import Icon from '../components/Icon';

function NewTask() {
    const [value, setValue] = useState('');
    const selectedColor = useColor().getColorCode();

    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
        clearValue();
    };

    const addTask = useTodos().addTodos;
    const clearValue = () => setValue('');
    const handleSubmit = () => {
        if (!value) {
            Alert.alert('할 일을 입력해주세요!');
            return;
        }

        addTask(value);
        Alert.alert('할 일이 추가되었습니다!');
        clearValue();
        goBack();
    };

    function BackButton() {
        return (
            <Icon width="24" height="24" type="arrowBack" fill={selectedColor} onPress={goBack} />
        );
    }

    function SubmitButton() {
        return (
            <Text onPress={handleSubmit} style={{ ...style.button, color: selectedColor }}>완료</Text>
        );
    }

    return (
        <View>
            <PageTitle title="할 일을 추가해주세요!"
                leftButton={<BackButton />}
                rightButton={<SubmitButton />}
            />
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
        fontSize: 16,
        fontWeight: '500',
    },
    textInput: {
        borderRadius: 20,
        backgroundColor: theme.color.White,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
});

export default NewTask;
