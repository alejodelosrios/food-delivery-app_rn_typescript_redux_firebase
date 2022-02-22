import React from "react"
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AuthStackParams} from "../../App";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";


export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Signup")}>
        <Text>Register</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
  }
});
