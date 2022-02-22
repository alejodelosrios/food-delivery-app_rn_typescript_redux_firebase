import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RootStackParams} from '../../App';
import {RestaurantCard} from '../components/RestaurantCard';
import {TopBackNavigation} from '../components/TopBackNavigation';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

export const RestaurantScreen = ({route, navigation}: Props) => {
  return (
    <View style={styles.container}>
      <TopBackNavigation />
      <Text style={styles.screenTitle}>{route.params.name}</Text>
      <Text style={styles.screenTitle}>Related Restaurants</Text>
      <RestaurantCard
        name="Sushi 1"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 1'});
        }}
      />
      <RestaurantCard
        name="Sushi 2"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 2'});
        }}
      />
      <RestaurantCard
        name="Sushi 3"
        onPress={() => {
          navigation.push('Restaurant', {name: 'Sushi 3'});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
