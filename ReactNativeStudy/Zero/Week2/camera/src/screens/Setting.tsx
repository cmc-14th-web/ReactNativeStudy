import { StyleSheet, Text } from 'react-native';
import BackgroundContainer from '../component/atom/BackgroundContainer';
import { COLOR } from '../constants/color';
import Header from '../component/molcule/Header';

function Setting() {
    return (
        <BackgroundContainer style={styles.container}>
            <Header title="설정" />
            <Text style={styles.title}>아직 준비되지 않은 페이지입니다!</Text>
        </BackgroundContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: COLOR.Gray400,
    }
});

export default Setting;
