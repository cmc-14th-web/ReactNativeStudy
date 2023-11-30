import { StyleSheet, View } from 'react-native';
import TodoList from '../components/TodoList';
import React from 'react';
import PageTitle from '../components/PageTitle';

function Home() {
    return (
        <View style={style.container}>
            <PageTitle title="Today" />
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
