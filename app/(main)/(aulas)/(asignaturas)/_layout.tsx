import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import axios from 'axios'
import { Aula } from '@/interfaces/interfaces'
import { getAsignaturasDeEstudiantePorAulas } from '@/actions/aula-actions'
import { useAuthStore } from '@/store/useAuthStore'

const AsignaturaAppLayout=() => {


    return (
        <Slot />
    )
}

export default AsignaturaAppLayout

const styles=StyleSheet.create({})