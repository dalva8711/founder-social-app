import React from 'react'
import { View, Text, StyleSheet, ViewStyle, StyleProp, TextStyle, Pressable} from 'react-native'
import { hp } from '@/helpers/common'
import { theme } from '@/constants/theme'
import { ActivityIndicator } from 'react-native'

export default function Button({
    buttonStyle,
    textStyle,
    title='',
    onPress=()=>{},
    loading=false,
    hasShadow=true,

} : {
    buttonStyle: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    title: string,
    onPress: () => void,
    loading?: boolean,
    hasShadow?: boolean,
}) {

    const shadowStyle = {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 4,
    }

    if (loading) {
        return (
            <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]}>
                <ActivityIndicator color='blue' size='small' />
            </View>
        )
    }
    

  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xl,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
})