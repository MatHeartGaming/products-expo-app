import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps {
    children?: string;
    icon: keyof typeof Ionicons.glyphMap;
}

const ThemedButton = ({children, icon, ...rest}: Props) => {
  return (
    <Pressable
        {...rest}
    >
      <Text>{children}</Text>
      {
        icon && (
            <Ionicons 
                name={icon}
                size={24}
                color={'white'}
                style={{
                    marginHorizontal: 5,
                }}
            />
        )
      }
    </Pressable>
  )
}

export default ThemedButton

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 5
    }
})