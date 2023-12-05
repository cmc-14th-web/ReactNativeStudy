import { Text } from 'react-native';
import BackgroundContainer from '../component/atom/BackgroundContainer';
import Header from '../component/molcule/Header';

function Home() {
    return (
        <BackgroundContainer>
            <Header title="Home" />
            <Text>Home</Text>
        </BackgroundContainer>
    );
}

export default Home;
