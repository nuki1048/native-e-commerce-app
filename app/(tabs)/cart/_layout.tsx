import IconButton from '@/components/ButtonIcon';
import { Stack } from 'expo-router';

export type StackParamsList = {
  main: undefined;
  checkout: undefined;
  creditCard: undefined;
};
export default function RootLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitle: 'Cart',
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
      <Stack.Screen name='main' />
      <Stack.Screen name='checkout' />
      <Stack.Screen name='creditCard' />
    </Stack>
  );
}
