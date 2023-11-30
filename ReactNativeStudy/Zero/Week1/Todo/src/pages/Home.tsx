import { Text, View } from 'react-native'
import { HomeIcon } from '../components/Icon'

function Home() {
    return (
        <View>
            <Text>Home</Text>
            <HomeIcon fill='red' style={{
                width: '14px',
                height: '16px',
            }} />
        </View>
    )
}

export default Home
