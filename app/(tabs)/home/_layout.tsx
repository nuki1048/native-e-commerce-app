import IconButton from '@/components/ButtonIcon';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export type StackParamsList = {
  categories: undefined;
  categoryDetail: undefined;
  itemDetails: undefined;
};
export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitle: '',
        headerLeft: () => (
          <IconButton
            color='black'
            style={{
              backgroundColor: 'transparent',
            }}
            icon='chevron-back'
            onPress={() => navigation.goBack()}
          />
        ),
      })}
    >
      <Stack.Screen name='categories' />
      <Stack.Screen name='categoryDetail' />
      <Stack.Screen name='itemDetails' />
    </Stack>
  );
}
