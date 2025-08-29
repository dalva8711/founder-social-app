import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ScreenWrapper({ children, bg }: { children: React.ReactNode, bg: string }) {
    const {top} = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25}
        >
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, paddingTop, backgroundColor: bg}}>
                    {children}
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}