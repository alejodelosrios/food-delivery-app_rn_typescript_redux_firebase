import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RestaurantCard} from '../components/RestaurantCard';
import {Menu} from '../components/Menu';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../App';

type Props = NativeStackScreenProps<RootStackParams, 'ExploreStack'>;

export const ExploreScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Restaurants</Text>

      <Text style={styles.sectionTitle}>Restaurants near New York</Text>
      <RestaurantCard
        name="Sushi Restarurant"
        onPress={() => {
          //navigation.navigate('Restaurant', {name: 'Sushi Restarurant'});

          // Go to the  Restaurant component in RestaurantsStack
          navigation.navigate('RestaurantsStack', {
            screen: 'Restaurant',
            params: {name: 'Hello from Explore'},
          });
        }}
      />
      <RestaurantCard
        name="Burger Restarurant"
        onPress={() => {
          navigation.navigate('Restaurant', {name: 'Burger Restarurant'});
        }}
      />
      <RestaurantCard
        name="Pizza Restarurant"
        onPress={() => {
          navigation.navigate('Restaurant', {name: 'Pizza Restarurant'});
        }}
      />
      <Text style={styles.sectionTitle}>Most Popular Restaurants</Text>
      <RestaurantCard
        name="Sushi Restarurant"
        onPress={() => {
          navigation.navigate('Restaurant', {name: 'Sushi Restarurant'});
        }}
      />
      <RestaurantCard
        name="Burger Restarurant"
        onPress={() => {
          navigation.navigate('Restaurant', {name: 'Burger Restarurant'});
        }}
      />
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
});
