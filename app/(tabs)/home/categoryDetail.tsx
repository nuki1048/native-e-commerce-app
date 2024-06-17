import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import SearchInput from '@/components/SearchInput';
import Tag from '@/components/Tag';
import CategoryItemCard from '@/components/CategoryItemCard';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { StackParamsList } from './_layout';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Tables } from '@/types/supabase';
import { useProductsStore } from '@/store/productsStore';
import { useCartStore } from '@/store/cartStore';

export interface Tag {
  name: string;
  checked: boolean;
  idProduct: number;
}

const CategoryDetail = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<StackParamsList, 'categoryDetail'>
    >();

  const { addToCart } = useCartStore();
  const { products, fetchProductsByCategoryId } = useProductsStore(
    (state) => state
  );
  const [filteredData, setFilteredData] = useState<
    Tables<'products'>[] | null | undefined
  >(null);
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');

  const route = useRoute<RouteProp<StackParamsList, 'categoryDetail'>>();
  const { id, name: categoryName } = route.params;

  useEffect(() => {
    fetchProductsByCategoryId(id);
  }, []);

  useEffect(() => {
    const filteredData = products?.filter((product) => {
      return tags?.some((tag) => {
        return tag.checked && product.tags?.includes(tag.name);
      });
    });

    setFilteredData(filteredData?.length ?? 0 > 0 ? filteredData : products);
  }, [tags]);

  useEffect(() => {
    const filteredData = products?.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filteredData);
  }, [searchValue]);

  const handleCheckFilterTag = (tag: Tag) => {
    setTags(
      tags?.map((t) =>
        t.name === tag.name ? { ...t, checked: !t.checked } : t
      )
    );
  };

  const renderFilterTag = ({ item }: { item: Tag }) => {
    return (
      <Tag
        isChecked={item.checked}
        label={item.name}
        onChange={() => handleCheckFilterTag(item)}
      />
    );
  };

  const renderCategoryItem = ({ item }: { item: Tables<'products'> }) => {
    return (
      <CategoryItemCard
        image='f'
        label={item.name}
        onBuy={() => addToCart({ ...item, quantity: 1 })}
        onLike={() => {}}
        onPress={() => {
          navigation.navigate('itemDetails', { id: item.id });
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
            {categoryName}
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
              data={tags || []}
              renderItem={renderFilterTag}
              keyExtractor={(item) => item.name}
            />
          </View>
          <View style={styles.itemsList}>
            <FlatList
              style={styles.itemCategoryList}
              contentContainerStyle={styles.itemCategoryContentList}
              data={filteredData}
              renderItem={renderCategoryItem}
              keyExtractor={(item) => item.id.toString()}
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
    marginBottom: 150,
  },
});
