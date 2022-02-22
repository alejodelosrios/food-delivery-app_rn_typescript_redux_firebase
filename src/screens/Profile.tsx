import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>Profile Screen</Text>

      <Text>Name: John Doe</Text>
      <TouchableOpacity>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
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
