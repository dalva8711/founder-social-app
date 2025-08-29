import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const onSubmit = async () => {
        if (!email || !password) {
            Alert.alert('Login', 'Please fill in all fields!');
            return;
        }
        // TODO: Implement login API logic

    }
    
    return (
        <ScreenWrapper bg='white'>
            <StatusBar style='dark' />
            <View style={styles.container}>
                
                {/* Back Button */}
                <BackButton onPress={()=>{router.back()}} />

                {/* Welcome Back Text */}
                <View style={{gap: 10}}>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                {/* Form */}
                <View style={styles.form}>
                    <Input
                        label='Email'
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email"
                        isPassword={false}
                        autoCapitalize='none'
                    />
                    <Input
                        label='Password'
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        isPassword={true}
                        autoCapitalize='none'
                    />
                </View>

                {/* Login Button */}
                <Button title="Login" onPress={onSubmit} buttonStyle={{backgroundColor: 'blue'}} />


                {/* Footer Sign Up */}
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
    testButton: {
        backgroundColor: '#e0e0e0',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    testButtonText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500',
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
    welcomeText: {
        fontSize: hp(4),
        fontWeight: 'bold',
        color: 'black',
    },
    form: {
        gap: 20,
    },
})    