import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import IconButton from './ButtonIcon';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import Button from './Button';

interface Props {
  label: string;
  price: string;
  image: string;
  onIncreaseQty: () => void;
  onDelete: () => void;
  onPress: () => void;
}

const CartItem: React.FC<Props> = ({
  image,
  label,
  onDelete,
  onIncreaseQty,
  price,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Pressable
          style={({ pressed }) => pressed && styles.pressed}
          onPress={onPress}
        >
          <Image
            source={{ uri: 'https://picsum.photos/1440/2842?random' }}
            style={styles.image}
          />
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <ThemedText type='subtitle'>{label}</ThemedText>
        <ThemedText>
          {price}{' '}
          <ThemedText lightColor={Colors.light.textSecondary}>
            € / piece
          </ThemedText>
        </ThemedText>
        <View style={styles.buttonContainer}>
          <Button style={styles.increaseButton} onPress={onIncreaseQty}>
            + qty
          </Button>
          <IconButton
            icon='trash'
            onPress={onDelete}
            style={styles.deleteButton}
          />
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 128,
    borderRadius: 8,
    flex: 1,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    overflow: 'hidden',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 8,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  increaseButton: { flex: 1, paddingVertical: 12, paddingHorizontal: 12 },
  deleteButton: { backgroundColor: '#bd1919', height: '100%' },
  pressed: {
    opacity: 0.8,
  },
});
