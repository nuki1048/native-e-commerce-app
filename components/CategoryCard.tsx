import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import { Tables } from '@/types/supabase';
interface Props extends Tables<'categories'> {
  onPress: () => void;
}
const CategoryCard: React.FC<Props> = ({ onPress, name, product_count }) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://picsum.photos/1440/2842?random' }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <ThemedText type='subtitle'>{name}</ThemedText>
          <ThemedText type='default' lightColor={Colors.light.textSecondary}>
            ({product_count})
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    width: 177,
    height: 211,
    backgroundColor: 'white',
    borderRadius: 8,
    borderColor: Colors.light.border,
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  infoContainer: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.9,
  },
});
