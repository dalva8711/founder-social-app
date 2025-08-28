import { hp, wp } from '@/helpers/common';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: any;
    isPassword?: boolean;
}

export default function Input({ 
    label, 
    error, 
    containerStyle,
    isPassword,
    secureTextEntry,
    ...props 
}: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        error && styles.inputError
                    ]}
                    placeholderTextColor="#666"
                    secureTextEntry={isPassword && !showPassword}
                    {...props}
                />
                {isPassword && (
                    <Pressable 
                        style={styles.eyeIcon}
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Ionicons 
                            name={showPassword ? "eye-off-outline" : "eye-outline"} 
                            size={24} 
                            color="#666"
                        />
                    </Pressable>
                )}
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: hp(2),
    },
    label: {
        fontSize: 16,
        color: '#000',
        marginBottom: 8,
        fontWeight: '500',
    },
    inputContainer: {
        position: 'relative',
        width: '100%',
    },
    input: {
        width: '100%',
        height: hp(6),
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        paddingHorizontal: wp(4),
        fontSize: 16,
        color: '#000',
    },
    inputError: {
        borderWidth: 1,
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
    },
    eyeIcon: {
        position: 'absolute',
        right: wp(4),
        height: '100%',
        justifyContent: 'center',
    },
});
