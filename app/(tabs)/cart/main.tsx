import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackParamsList } from './_layout';

const data = [
  { id: '1', name: 'Cabbage and lettuce(14)', checked: false },
  { id: '3', name: 'Carrot(12)', checked: false },
  { id: '5', name: 'Cucumber(10)', checked: false },
  { id: '6', name: 'Onion(8)', checked: false },
  { id: '7', name: 'Pepper(6)', checked: false },
  { id: '8', name: 'Tomato(4)', checked: false },
  { id: '9', name: 'Potato(2)', checked: false },
  { id: '10', name: 'Mushroom(1)', checked: false },
];
const Main = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList, 'main'>>();
  const renderCategoryItem = ({ item }: { item: (typeof data)[0] }) => {
    return (
      <CartItem
        image='f'
        label={item.name}
        onDelete={() => {}}
        onIncreaseQty={() => {}}
        onPress={() => {}}
        price='1.10'
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.itemCategoryContentList}
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        style={styles.checkoutButton}
        onPress={() => navigation.navigate('checkout')}
      >
        Go to checkout
      </Button>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  itemCategoryContentList: {
    gap: 16,
  },
  checkoutButton: {
    marginTop: 16,
    width: '100%',
  },
});
