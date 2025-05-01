import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Slot, Stack } from 'expo-router'
import axios from 'axios'
import { Aula } from '@/interfaces/interfaces'
import { getAsignaturasDeEstudiantePorAulas } from '@/actions/aula-actions'
import { useAuthStore } from '@/store/useAuthStore'
import LogoutIconButton from '@/components/LogoutIconButton'

const AulaAppLayout=() => {


    return (
        <Slot />
    )
}

export default AulaAppLayout

const styles=StyleSheet.create({})