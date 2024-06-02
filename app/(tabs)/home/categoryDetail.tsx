import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import SearchInput from '@/components/SearchInput';
import Tag from '@/components/Tag';
import CategoryItemCard from '@/components/CategoryItemCard';
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

const CategoryDetail = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<StackParamsList, 'categoryDetail'>
    >();
  const [pressed, setPressed] = useState(data);
  const [searchValue, setSearchValue] = useState<string>('');

  const renderItem = ({ item }: { item: (typeof data)[0] }) => {
    return (
      <Tag
        isChecked={item.checked}
        label={item.name}
        onChange={() =>
          setPressed(
            pressed.map((tag) =>
              tag.id === item.id ? { ...tag, checked: !tag.checked } : tag
            )
          )
        }
      />
    );
  };

  const renderCategoryItem = ({ item }: { item: (typeof data)[0] }) => {
    return (
      <CategoryItemCard
        image='f'
        label={item.name}
        onBuy={() => {}}
        onLike={() => {}}
        onPress={() => {
          navigation.navigate('itemDetails');
        }}
        price='1.10'
      />
    );
  };
  return (
    <>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('../../../assets/images/vegetables.png')}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.outerContainer}>
          <ThemedText type='title' lightColor='black'>
            Vegetables
          </ThemedText>
          <SearchInput
            style={styles.input}
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
          />
          <View style={styles.listContainer}>
            <FlatList
              horizontal
              style={styles.list}
              contentContainerStyle={styles.contentList}
              data={pressed}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.itemsList}>
            <FlatList
              style={styles.itemCategoryList}
              contentContainerStyle={styles.itemCategoryContentList}
              data={pressed}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'flex-end',
    zIndex: 0,
    position: 'absolute',
  },
  image: {
    width: 234,
    height: 234,
  },
  container: {
    flex: 1,
  },
  safeAreaContainer: {
    flex: 1,
    paddingBottom: 100,
  },
  outerContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop: 16,
  },
  listContainer: {
    marginTop: 40,
  },
  list: {
    width: '100%',
    flexGrow: 0,
    gap: 8,
  },
  contentList: {
    gap: 8,
  },
  itemsList: {
    marginTop: 32,
  },
  itemCategoryContentList: {
    gap: 16,
  },
  itemCategoryList: {
    marginBottom: 165,
  },
});
