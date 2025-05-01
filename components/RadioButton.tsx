import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, ViewProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pregunta, Prototipo } from '@/interfaces/interfaces'
import { ThemedView } from './ThemedView'

type Props={
    pregunta: Prototipo
    index: number
    style: ViewProps
}
const RadioButton=({ pregunta, index, style }: Props) => {
    const [opciones, setOpciones]=useState<string[]>()
    const [opcion, setOpcion]=useState<string>('')
    const [result, setResult]=useState('')
    const height=Dimensions.get('window').height

    const changeHandle=(key: number) => {


    }

    return (
        <ThemedView style={{ marginHorizontal: 10, padding: 10, flex: 1, backgroundColor: 'white', marginVertical: 0 }}>
            <View style={{ backgroundColor: 'white', height: height, borderWidth: 1 }}>
                <View style={styles.radio}>
                    <View style={{}}></View>
                    <Text style={{ marginTop: 20 }}>{(index+1)}.- {pregunta.question}</Text>
                </View>
                <View style={{ marginHorizontal: 15, paddingHorizontal: 0, paddingVertical: 5 }}>
                    <View style={{}}>
                        <View style={{ gap: 40 }}>

                            <TouchableOpacity key={pregunta.id+'0'} onPress={(er) => changeHandle(0)} style={{ backgroundColor: 'beige', paddingHorizontal: 6, paddingVertical: 15, zIndex: 99 }}>
                                <Text style={{}}>{pregunta.option_0}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity key={pregunta.id+'1'} onPress={(er) => changeHandle(1)} style={{ backgroundColor: 'beige', paddingHorizontal: 6, paddingVertical: 15, zIndex: 99 }}>
                                <Text style={{}}>{pregunta.option_1}</Text>
                            </TouchableOpacity>
                            {pregunta.option_2? <TouchableOpacity key={pregunta.id+'2'} onPress={(er) => changeHandle(2)} style={{ backgroundColor: 'beige', paddingHorizontal: 6, paddingVertical: 15, zIndex: 99 }}>
                                <Text style={{}}>{pregunta.option_2}</Text>
                            </TouchableOpacity>:null}

                            {pregunta.option_3? <TouchableOpacity key={pregunta.id+'3'} onPress={(er) => changeHandle(3)} style={{ backgroundColor: 'beige', paddingHorizontal: 6, paddingVertical: 15, zIndex: 99 }}>
                                <Text style={{}}>{pregunta.option_3}</Text>
                            </TouchableOpacity>:null}

                            {pregunta.option_4? <TouchableOpacity key={pregunta.id+'4'} onPress={(er) => changeHandle(4)} style={{ backgroundColor: 'beige', paddingHorizontal: 6, paddingVertical: 15, zIndex: 99 }}>
                                <Text style={{}}>{pregunta.option_4}</Text>
                            </TouchableOpacity>:null}

                            <TextInput
                                editable={false}
                                multiline
                                numberOfLines={4}
                                maxLength={40}
                                onChangeText={text => { }}
                                value={opcion}

                            />
                            <Text>{result}</Text>
                        </View>
                    </View>

                </View>
            </View>
        </ThemedView>

    )
}

export default RadioButton

const styles=StyleSheet.create({
    container: {
        width: '100%'
    },
    radio: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 15,
        borderRadius: 5
    },
    activeRadio: {

    },

    mainHeader: {
        marginBottom: 15,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#06b6d4'+'ee',
        textTransform: 'uppercase'

    },
    header: {
        marginBottom: 15,
        fontSize: 16,
        color: '#374151'
    }
})