import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Indicador from './Indicador'
import { Pregunta } from '@/interfaces/interfaces'

type Props={
    respuestas: Pregunta[]|undefined
}

const RadioButton=({ respuestas }: Props) => {

    const [radio, setRadio]=useState(0)
    const [form, setForm]=useState({})

    const handleChange=(e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    if (!respuestas) {
        return <Indicador />
    }
    return (
        <>
            <StatusBar />
            {!respuestas? (<Indicador />):
                (<View style={styles.main}>
                    {
                        respuestas.map((item, index) =>
                            <TouchableOpacity key={index} onPress={() => setRadio(item.id)} style={{ backgroundColor: 'red', zIndex: 99 }}>
                                <View style={styles.radioWraper}>
                                    <View style={styles.radio}>
                                        {radio==item.id? <View style={styles.radiobg}>xr</View>:null}
                                    </View>
                                    <Text style={styles.radioText}>{item.answer}</Text>
                                    {radio}
                                </View>

                            </TouchableOpacity>)
                    }


                </View>)
            }        </>
    )

}

export default RadioButton



const styles=StyleSheet.create({
    main: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    radioText: {
        fontSize: 20,
    },
    radio: {
        width: 30,
        height: 30,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        margin: 10,
    },
    radioWraper: {
        flexDirection: "row",
        alignItems: "center",
    },
    radiobg: {
        backgroundColor: "blue",
        height: 20,
        width: 20,
        borderRadius: 10,
        margin: 4.3,
    },
})