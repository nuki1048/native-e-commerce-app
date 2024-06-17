import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import Input from '@/components/Input';
import Button from '@/components/Button';

const CreditCard = () => {
  const [creditCard, setCreditCard] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [exp, setExp] = useState<string>('');
  const [cvc, setCvc] = useState<string>('');
  return (
    <View style={styles.container}>
      <ThemedText type='title'>Credit / Debit card</ThemedText>
      <LinearGradient
        colors={['#B993D6', '#8CA6DB']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.creditCard}
      >
        <Image source={require('../../../assets/images/mc_symbol.png')} />
        <ThemedText
          type='subtitle'
          lightColor={Colors.light.white}
          style={styles.text}
        >
          {creditCard.replace(/(\d{4})/g, '$1 ').trim() ||
            '**** **** **** ****'}
        </ThemedText>
        <View style={styles.info}>
          <ThemedText
            type='subtitle'
            lightColor={Colors.light.white}
            style={styles.name}
          >
            {name}
          </ThemedText>
          <ThemedText type='subtitle' lightColor={Colors.light.white}>
            {exp}
          </ThemedText>
        </View>
      </LinearGradient>
      <View style={styles.inputContainer}>
        <Input
          label='Name on card'
          value={name}
          onChangeText={(str) => setName(str)}
        />
        <Input
          label='Card number'
          value={creditCard}
          maxLength={16}
          onChangeText={(str) => setCreditCard(str)}
        />
        <View style={styles.numberContainer}>
          <Input
            label='Expiry date'
            style={{ width: '49%' }}
            value={exp}
            onChangeText={(str) => setExp(str)}
            keyboardType='numeric'
          />
          <Input
            label='CVC'
            style={{ width: '49%' }}
            value={cvc}
            onChangeText={(str) => setCvc(str)}
            keyboardType='numeric'
            secureTextEntry={true}
          />
        </View>
        <Button style={styles.button}>USE THIS CARD</Button>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  creditCard: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    padding: 24,

    alignItems: 'flex-end',
  },
  text: {
    marginTop: 25,
    letterSpacing: 5,
    fontSize: 24,
  },
  info: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    textTransform: 'uppercase',
  },
  inputContainer: {
    flex: 1,
    marginTop: 24,
    gap: 16,
  },
  numberContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 'auto',
    width: '100%',
  },
});
