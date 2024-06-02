import IconButton from '@/components/ButtonIcon';
import { ControlBottomTabsProvider } from '@/context/ControlBottomTabsContext';
import { useControlBottomTabs } from '@/hooks/useControlBottomTabs';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { Tabs } from 'expo-router';

export type RootParamsList = {
  home: {
    categories: undefined;
    categoryDetail: undefined;
  };
  cart: undefined;
  profile: undefined;
};

export default function TabLayout() {
  const { showTabs } = useControlBottomTabs();
  const activeTabColor = useThemeColor({}, 'tabIconSelected');
  const inactiveTabColor = useThemeColor({}, 'tabIconDefault');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeTabColor,
        tabBarInactiveTintColor: inactiveTabColor,
        tabBarShowLabel: false,
        headerTitleAlign: 'left',
        headerTransparent: true,
        tabBarStyle: {
          display: showTabs ? 'flex' : 'none',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name='grid' color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => (
            <AntDesign name='shoppingcart' size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name='user' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
