import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CartItem from '@/components/CartItem';
import Button from '@/components/Button';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackParamsList } from './_layout';
import { useCartStore } from '@/store/cartStore';
import { type CartItem as ItemCart } from '@/types/main';

const Main = () => {
  const { cart } = useCartStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList, 'main'>>();
  const renderCategoryItem = ({ item }: { item: ItemCart }) => {
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
        data={cart}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
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
