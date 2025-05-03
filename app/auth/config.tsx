import HomeIconButton from '@/components/HomeIconButton'
import Ping from '@/components/Ping'
import RedIp from '@/components/RedIp'
import { StyleSheet, View } from 'react-native'

export default function ConfigScreen() {




    return (
        <View style={{ flex: 1, justifyContent: 'space-around', marginHorizontal: 10, marginVertical: 10, padding: 20 }}>
            <HomeIconButton />
            <RedIp />
            <Ping />

        </View>

    )
}

const styles=StyleSheet.create({})