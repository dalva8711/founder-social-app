import BackButton from '@/components/BackButton'
import ScreenWrapper from '@/components/ScreenWrapper'
import { wp } from '@/helpers/common'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function SignUp() {
    return (
        <ScreenWrapper bg='white'>
            <StatusBar style='dark' />

            
            <View style={styles.container}>
                <BackButton onPress={()=>{router.back()}} />


                {/* Footer */}
                <View style={styles.footer}>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerText}>Don't have an account?</Text>
                        <Pressable onPress={()=>{router.push('/signUp')}}>
                            <Text style={styles.footerSignUp}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>
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
    footer: {
        width: '100%',
        paddingHorizontal: wp(4),
        gap: 30,
    },
    footerText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    }, 
    footerSignUp: {
        color: 'blue',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
})