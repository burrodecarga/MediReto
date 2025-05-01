import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const RadioButton=({ value, label, onPress, selected }) => (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={onPress}>
        <View
            style={{
                height: 24,
                width: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selected? 'blue':'gray',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {selected&&<View style={{ height: 12, width: 12, borderRadius: 6, backgroundColor: 'blue' }} />}
        </View>
        <Text style={{ marginLeft: 8 }}>{label}</Text>
    </TouchableOpacity>
)

const MyForm=() => {
    const { control, handleSubmit, watch, formState: { errors } }=useForm({
        defaultValues: {
            gender: '',
        },
    })

    const onSubmit=data => console.log(data)

    const selectedGender=watch('gender')

    return (
        <View>
            <Controller
                control={control}
                name="gender"
                rules={{ required: 'Please select a gender' }}
                render={({ field: { onChange, value } }) => (
                    <View>
                        <RadioButton
                            label="Male"
                            value="male"
                            onPress={() => onChange('male')}
                            selected={value==='male'}
                        />
                        <RadioButton
                            label="Female"
                            value="female"
                            onPress={() => onChange('female')}
                            selected={value==='female'}
                        />
                        {errors.gender&&<Text style={{ color: 'red' }}>{errors.gender.message}</Text>}
                    </View>
                )}
            />
            <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{ marginTop: 20, backgroundColor: 'lightblue', padding: 10 }}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyForm