import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Menu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation</Text>
      <TouchableOpacity
        onPress={() => {
          //go to Explore
          navigation.navigate('Explore');
        }}>
        <Text style={styles.link}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //go to Restaurants
          navigation.navigate('Restaurants');
        }}>
        <Text style={styles.link}>Restaurants</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          //go to Profile
          navigation.navigate('Profile');
        }}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    padding: 12,
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    marginTop: 4,
    color: '#097ade',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
