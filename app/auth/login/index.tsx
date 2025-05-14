import { ThemedText } from '@/presentation/theme/components/ThemedText';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import React from 'react';
import { KeyboardAvoidingView, ScrollView, useWindowDimensions, View } from 'react-native';

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <KeyboardAvoidingView behavior='padding' 
    style={{ flex: 1 }}>
      <ScrollView 
      style={{
        paddingHorizontal: 40
      }}>
        <View style={{
          padding: height * 0.35,
        }}>
          <ThemedText type='title'>Ingresar</ThemedText>
          <ThemedText
            style={{
              color: 'grey',
            }}>
            Por Favor Ingrese para continuar</ThemedText>
        </View>

        <View style={{ marginTop: 20 }}>

          <ThemedTextInput 
            placeholder='Correo electronico'
            keyboardType='email-address'
            autoCapitalize='none'
            value=''
            icon='mail-outline'
          />

          <ThemedTextInput 
            placeholder='Password'
            secureTextEntry
            autoCapitalize='none'
            value=''
            icon='lock-closed-outline'
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen