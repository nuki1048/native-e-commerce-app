import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { capitalize } from 'lodash';
interface Props {
  onChange: () => void;
  isChecked: boolean;
  label: string;
}

const Tag: React.FC<Props> = ({ isChecked, label, onChange }) => {
  return (
    <Pressable
      onPress={onChange}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.container, isChecked && styles.checkedContainer]}>
        {isChecked && (
          <Ionicons name='checkmark' size={24} color={Colors.light.purple} />
        )}
        <Text style={[styles.text, isChecked && styles.textPressed]}>
          {capitalize(label)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: Colors.light.white,
    borderRadius: 16,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    color: Colors.light.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
  textPressed: {
    color: Colors.light.purple,
  },
  pressed: {
    opacity: 0.5,
  },
  checkedContainer: {
    backgroundColor: Colors.light.lightPurple,
  },
});
