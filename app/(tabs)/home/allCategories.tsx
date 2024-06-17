import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useNavigation } from 'expo-router';
import { StackParamsList } from './_layout';
import { ThemedText } from '@/components/ThemedText';
import SearchInput from '@/components/SearchInput';
import CategoryCard from '@/components/CategoryCard';
import { Tables } from '@/types/supabase';
import { useProductsStore } from '@/store/productsStore';

const AllCategories = () => {
  const { categories, fetchCategories } = useProductsStore((state) => state);
  const navigation =
    useNavigation<
      NativeStackNavigationProp<StackParamsList, 'allCategories'>
    >();
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredData, setFilteredData] = useState<
    Tables<'categories'>[] | null | undefined
  >(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (searchValue === '') setFilteredData(categories);

    const filteredData = categories?.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });

    setFilteredData(filteredData);
  }, [searchValue]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.outerContainer}>
          <ThemedText type='title' lightColor='black'>
            Categories
          </ThemedText>
          <SearchInput
            style={styles.input}
            value={searchValue}
            onChangeText={(e) => setSearchValue(e)}
          />
          <View style={styles.categoryContainer}>
            {categories && (
              <FlatList
                numColumns={2}
                style={styles.itemsList}
                contentContainerStyle={styles.itemsContentList}
                data={filteredData ?? categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <CategoryCard
                    {...item}
                    onPress={() =>
                      navigation.navigate('categoryDetail', {
                        id: item.id,
                        name: item.name,
                      })
                    }
                  />
                )}
              />
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginTop: 16,
  },
  categoryContainer: {
    marginTop: 32,
    flex: 1,
  },
  itemsList: {
    flex: 1,
  },
  itemsContentList: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
    columnGap: 16,
  },
});
