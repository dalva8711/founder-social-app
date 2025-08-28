import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

type BackButtonProps = {
    onPress: () => void;
}

export default function BackButton({onPress}: BackButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name='arrow-back' size={24} color='black' />
        </Pressable>
    )
}