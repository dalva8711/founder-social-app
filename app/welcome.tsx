import Button from '@/components/Button'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
    const router = useRouter();
  
    return (
    // TODO: Edit the background color
    <ScreenWrapper bg='white'> 
        <StatusBar style='dark' />
        <View style={styles.container}>
            {/* image */}
            <Image style={styles.welcomeImage} source={require('@/assets/images/gator-welcome.png')}/>

            {/* title */}
            <View style={{gap: 10}}>
                <Text style={styles.title}>Gator Founders</Text>
                <Text style={styles.subtitle}>
                    Best way to connect with other founders who are Gators!
                </Text>
            </View>

            {/* footer */}
            <View style={styles.footer}>
                <Button 
                    title='Get Started'
                    buttonStyle={{marginHorizontal: wp(3)}}
                    onPress={()=>{router.push('/signUp')}}
                />
                {/* TODO: Add the login button for already have an account */}
                <View style={styles.footerContainer}>
                    <Text style={styles.footerText}>Already have an account?</Text>
                    <Pressable onPress={()=>{router.push('/login')}}>
                        <Text style={styles.footerLogIn}>Login</Text>
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
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: wp(4),
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        width: wp(100),
        height: hp(30),
        resizeMode: 'contain',
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
    footerLogIn: {
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