import { StyleSheet, Text, View } from 'react-native';
import TodoList from '../components/TodoList';
import React from 'react';

function Home() {
    return (
        <View style={style.container}>
            <Text>Today</Text>
            <TodoList />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
});

export default Home;
