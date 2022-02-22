import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import BackIcon from '../assets/icons/BackIcon';

export const TopBackNavigation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor= "#25C7BC"
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backButton: {
    borderRadius: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
