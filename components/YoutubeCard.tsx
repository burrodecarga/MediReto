import React from 'react'
import { StyleSheet } from 'react-native'
import WebView from 'react-native-webview'

export default function YoutubeCard() {
    return (

        <WebView
            style={styles.container}
            source={{ uri: 'https://www.youtube.com/watch?v=tceU4GAAPAw&t=1s' }}
        />


    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '100%',
        height: 450

    }
})