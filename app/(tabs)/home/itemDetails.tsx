import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { default as PagerView } from 'react-native-pager-view';
import Carousel from '@/components/Carousel';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import IconButton from '@/components/ButtonIcon';
import Button from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused, useRoute } from '@react-navigation/native';
import { useControlBottomTabs } from '@/hooks/useControlBottomTabs';
const ItemDetails = () => {
  const { setShowTabs } = useControlBottomTabs();
  const isFocused = useIsFocused();

  useEffect(() => {
    setShowTabs(!isFocused);

    return () => {
      setShowTabs(true);
    };
  }, [isFocused]);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ width: '100%', height: 280 }}>
        <Carousel />
      </View>
      <View style={styles.modal}>
        <ThemedText type='title'>Boston Lettuce</ThemedText>
        <View style={[styles.text, styles.textContainer]}>
          <ThemedText type='subtitleBold'>1.10</ThemedText>
          <ThemedText type='subtitle' lightColor={Colors.light.textSecondary}>
            € / piece
          </ThemedText>
        </View>
        <ThemedText
          type='default'
          lightColor={Colors.light.primaryButton}
          style={styles.textGreen}
        >
          ~ 150 gr / piece
        </ThemedText>
        <ThemedText type='subtitleBold' style={styles.description}>
          Spain
        </ThemedText>
        <ThemedText
          type='default'
          lightColor={Colors.light.textSecondary}
          style={styles.text}
        >
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </ThemedText>
        <View style={styles.buttonContainer}>
          <IconButton
            icon='heart'
            style={styles.likeButton}
            color={Colors.light.textSecondary}
          />
          <Button
            style={styles.addToCartButton}
            icon={<Ionicons name='cart' size={24} color={Colors.light.white} />}
          >
            Add to cart
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  pagerView: {
    width: '100%',
    height: 240,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  modal: {
    width: '100%',
    height: '82%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    bottom: -100,
    paddingTop: 37,
    paddingBottom: 78,
    paddingHorizontal: 20,
  },
  text: {
    marginTop: 16,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  textGreen: {
    marginTop: 8,
  },
  description: {
    marginTop: 32,
  },
  likeButton: {
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: '#D9D0E3',
    width: 78,
    height: 56,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addToCartButton: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    gap: 28,
  },
});
