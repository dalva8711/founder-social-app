import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { wp } from '@/helpers/common'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function SignUp() {
    return (
        <ScreenWrapper bg='white'>
            <StatusBar style='dark' />

            {/* Back Button */}
            <View style={styles.container}>
                <BackButton onPress={()=>{router.back()}} />
            </View>
            
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
})