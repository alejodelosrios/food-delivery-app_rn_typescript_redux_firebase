import React from "react"
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {AuthStackParams} from "../../App";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";

export const SignupScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up screen</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Login")}>
        <Text>Login</Text>
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
