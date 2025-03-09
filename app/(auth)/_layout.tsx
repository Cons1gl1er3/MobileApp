import "../../global.css"
import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import GlobalProvider from '../../context/GlobalProvider'

const AuthLayout = () => {
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        /> 
      </Stack>

      <StatusBar backgroundColor="#161662"
      style='light' />
    </GlobalProvider>
  )
}

export default AuthLayout