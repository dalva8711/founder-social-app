import BackButton from '@/components/BackButton'
import Button from '@/components/Button'
import Input from '@/components/Input'
import ScreenWrapper from '@/components/ScreenWrapper'
import { hp, wp } from '@/helpers/common'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'


export default function SignUp() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const onSubmit = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert('Sign Up', 'Please fill in all fields!');
            return;
        }
        else if (password !== confirmPassword) {
            Alert.alert('Sign Up', 'Passwords do not match!');
            return;
        }
        // TODO: Implement sign up API logic

    }
    
    return (
        <ScreenWrapper bg='white'>
            <StatusBar style='dark' />
                <View style={styles.container}>
                    {/* Back Button */}
                        <BackButton onPress={()=>{router.back()}} />

                        {/* Welcome Text */}
                        <View style={{gap: 10}}>
                            <Text style={styles.welcomeText}>Welcome, Let's Get Started!!!</Text>
                        </View>

                        {/* Form */}
                        <View style={styles.form}>
                            <Input
                                label='Name'
                                value={name}
                                onChangeText={setName}
                                placeholder="Enter your name"
                                isPassword={false}
                                autoCapitalize='none'
                            />
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
                            <Input
                                label='Confirm Password'
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                placeholder="Confirm your password"
                                isPassword={true}
                                autoCapitalize='none'
                            />
                        </View>

                        {/* Sign Up Button */}
                        <Button title="Sign Up" onPress={onSubmit} buttonStyle={{backgroundColor: 'blue'}} />

                        {/* Footer Sign Up */}
                        <View style={styles.footer}>
                            <View style={styles.footerContainer}>
                                <Text style={styles.footerText}>Already have an account?</Text>
                                <Pressable onPress={()=>{router.push('/login')}}>
                                    <Text style={styles.footerSignUp}>Login</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
    },
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
        gap: 0,
    },
})    