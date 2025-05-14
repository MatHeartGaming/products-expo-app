import { ThemedText } from '@/presentation/theme/components/ThemedText';
import { useThemeColor } from '@/presentation/theme/hooks/useThemeColor';
import React from 'react';
import { View } from 'react-native';

const primary = useThemeColor({}, 'primary')

const HomeScreen = () => {
  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{fontFamily: 'KanitBold', color: primary}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily: 'KanitRegular'}}>HomeScreen</ThemedText>
      <ThemedText style={{fontFamily: 'KanitThin'}}>HomeScreen</ThemedText>
    </View>
  )
}

export default HomeScreen