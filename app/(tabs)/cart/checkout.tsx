import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Button, { Type } from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import TextOption from '@/components/TextOption';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackParamsList } from './_layout';
import { useCartStore } from '@/store/cartStore';

const Checkout = () => {
  const { cart } = useCartStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList, 'checkout'>>();
  const creaditCardFull = '1234 1234 1234 1234';
  const creditCardText = `**** **** **** ${creaditCardFull.slice(-4)}`;
  const [checked, setChecked] = useState<boolean>(false);
  console.log(cart);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.block}>
            <ThemedText type='subtitleBold'>Payment method</ThemedText>
            <Button
              type={Type.Ghost}
              style={styles.buttonChange}
              textStyle={styles.textButtonChange}
              onPress={() => navigation.navigate('creditCard')}
            >
              Change
            </Button>
          </View>
          <View style={styles.innerBlock}>
            <Ionicons name='card-outline' size={24} />
            <ThemedText lightColor={Colors.light.textSecondary}>
              {creditCardText}
            </ThemedText>
          </View>
        </View>
        <View>
          <View style={styles.block}>
            <ThemedText type='subtitleBold'>Delivery address</ThemedText>
            <Button
              type={Type.Ghost}
              style={styles.buttonChange}
              textStyle={styles.textButtonChange}
            >
              Change
            </Button>
          </View>
          <View style={styles.innerBlockDelivery}>
            <Ionicons name='home-outline' size={24} />
            <View style={styles.textBlock}>
              <ThemedText lightColor={Colors.light.textSecondary}>
                Alexandra Smith
              </ThemedText>
              <ThemedText lightColor={Colors.light.textSecondary}>
                Cesu 31 k-2 5.st, SIA Chili
              </ThemedText>
              <ThemedText lightColor={Colors.light.textSecondary}>
                Riga
              </ThemedText>
              <ThemedText lightColor={Colors.light.textSecondary}>
                LV-1012
              </ThemedText>
              <ThemedText lightColor={Colors.light.textSecondary}>
                Latvia
              </ThemedText>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.block}>
            <ThemedText type='subtitleBold'>Delivery options</ThemedText>
            <Button
              type={Type.Ghost}
              style={styles.buttonChange}
              textStyle={styles.textButtonChange}
            >
              Change
            </Button>
          </View>
          <View style={styles.blockOptionsDelivery}>
            <TextOption
              onPress={() => {}}
              icon='business'
              text='I’ll pick it up myself'
            />
            <TextOption
              onPress={() => {}}
              icon='bicycle'
              selected
              text='By courier'
            />
            <TextOption
              icon='airplane-sharp'
              selected={checked}
              onPress={() => setChecked(!checked)}
              text='By Drone'
            />
          </View>
        </View>
        <View>
          <View style={styles.block}>
            <ThemedText type='subtitleBold'>Non-contact-delivery</ThemedText>
            <Button
              type={Type.Ghost}
              style={styles.buttonChange}
              textStyle={styles.textButtonChange}
            >
              Change
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    gap: 32,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonChange: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    width: 80,
  },
  textButtonChange: {
    color: Colors.light.purple,
  },
  innerBlock: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  innerBlockDelivery: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'flex-start',
  },
  textBlock: {
    gap: 16,
  },
  blockOptionsDelivery: {
    gap: 16,
  },
});
