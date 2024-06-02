import {
  BackHandler,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Button, { Type } from '@/components/Button';
import Animated from 'react-native-reanimated';
import { ScreenProps } from 'expo-router/build/useScreens';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useRoute } from '@react-navigation/native';
const StartingScreen: React.FC<ScreenProps> = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<
        { index: undefined; '(tabs)': undefined },
        'index'
      >
    >();

  const handleClickButton = () => {
    navigation.navigate('(tabs)');
  };

  const handleClickDismiss = () => {
    BackHandler.exitApp();
  };
  return (
    <ImageBackground
      source={require('../assets/images/BG.png')}
      style={styles.imageBackground}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/icon.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.modal}>
        <View style={styles.icon}>
          <FontAwesome5 name='box' size={40} color={Colors.light.text} />
        </View>
        <Text style={styles.header}>Non-Contact Deliveries</Text>
        <Text style={styles.text}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <Button type={Type.Primary} onPress={handleClickButton}>
          Order now
        </Button>
        <Button type={Type.Ghost} onPress={handleClickDismiss}>
          Dismiss
        </Button>
      </View>
    </ImageBackground>
  );
};

export default StartingScreen;

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: Colors.light.selectedViolet,
  },
  imageContainer: {
    paddingVertical: 60,
  },
  container: {
    flex: 1,
    paddingVertical: 60,
    justifyContent: 'space-between',
  },

  image: {
    marginLeft: 20,
    width: 63,
    height: 63,
  },
  modal: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 40,
    paddingVertical: 60,
    paddingTop: 60,
    marginTop: 100,
    backgroundColor: Colors.light.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
  icon: {
    width: 104,
    height: 104,
    backgroundColor: 'white',
    borderRadius: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: Colors.light.text,
    fontSize: 34,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Roboto_700Bold',
  },
  text: {
    color: Colors.light.textSecondary,
    fontSize: 17,
    textAlign: 'center',
    fontFamily: 'Roboto_400Regular',
  },
});
