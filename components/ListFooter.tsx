import React from 'react'
import { StyleSheet, View } from 'react-native'
import ThemeButton from './ThemeButton'

type Props={
    confirm: () => void
}
const ListFooter=({ confirm }: Props) => {
    return (
        <View style={styles.container}>
            <ThemeButton icon='send' onPress={() => confirm()} style={styles.boton}>Enviar Examen</ThemeButton>
        </View>
    )
}

export default ListFooter

const styles=StyleSheet.create({
    container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 0,
        height: 300,
        alignContent: 'center'
    },
    boton: {
        flexDirection: 'row',
        margin: 'auto',
        backgroundColor: 'green',
        padding: 20,
        marginTop: 40,
        textAlign: 'center',

    }
})