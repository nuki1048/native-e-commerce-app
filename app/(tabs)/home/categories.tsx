import {
  FlatList,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Button from '@/components/Button';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from 'react-native-screens/lib/typescript/native-stack/types';
import { RootParamsList } from '../_layout';
import { useNavigation } from 'expo-router';
import { StackParamsList } from './_layout';
import { ThemedText } from '@/components/ThemedText';
import SearchInput from '@/components/SearchInput';
import { Ionicons } from '@expo/vector-icons';
import CategoryCard from '@/components/CategoryCard';
import Tag from '@/components/Tag';

const Categories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList, 'categories'>>();
  const [searchValue, setSearchValue] = useState<string>('');
  const [pressed, setPressed] = useState<boolean>(false);

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
            <FlatList
              numColumns={2}
              style={styles.itemsList}
              contentContainerStyle={styles.itemsContentList}
              data={[1, 2, 3, 4, 5]}
              keyExtractor={(item) => item.toString()}
              renderItem={() => (
                <CategoryCard
                  onPress={() => navigation.navigate('categoryDetail')}
                />
              )}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Categories;

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
