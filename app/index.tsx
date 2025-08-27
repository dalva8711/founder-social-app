import { Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import ScreenWrapper from '@/components/ScreenWrapper'

export default function App() {
  
  const router = useRouter();
  return (
    <ScreenWrapper bg='#fff'>
      <Text>Index</Text>
      <Button title='Welcome' onPress={()=> router.push('/welcome')}/>
    </ScreenWrapper>
  )
}