import React from 'react';
import {StyleSheet} from 'react-native';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ExploreScreen} from './src/screens/Explore';
import {ProfileScreen} from './src/screens/Profile';
import {RestaurantsScreen} from './src/screens/Restaurants';
import {RestaurantScreen} from './src/screens/Restaurant';
import ExploreIcon from './src/assets/icons/ExploreIcon';
import RestaurantIcon from './src/assets/icons/RestaurantIcon';
import ProfileIcon from './src/assets/icons/ProfileIcon';
import {LoginScreen} from './src/screens/Login';
import {SignupScreen} from './src/screens/Signup';

export type RootStackParams = {
  AuthStack: AuthStackParams;
  ExploreStack: ExploreStackParams;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
  Profile: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};
const RestaurantsStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantsScreenStack = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{
        headerShown: false,
      }}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantsStack.Screen name="Restaurant" component={RestaurantScreen} />
    </RestaurantsStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};
const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
      }}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Restaurant" component={RestaurantScreen} />
    </ExploreStack.Navigator>
  );
};
export type AuthStackParams = {
  Login: undefined;
  Signup: undefined;
};
const AuthStack = createNativeStackNavigator<AuthStackParams>();

const AuthScreenStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

const App = () => {
  const renderContent = () => {
    const isLoggedIn = false;
    if (isLoggedIn) {
      return (
        <RootStack.Navigator
          initialRouteName="ExploreStack"
          screenOptions={{
            // Hide labels
            tabBarShowLabel: false,
            // Hide header
            headerShown: false,
            // Icons colors
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#25C7BC',
            // TabBar styles
            tabBarStyle: {
              height: 60,
              position: "absolute",
              bottom: 40,
              marginHorizontal: 20,
              borderRadius: 10,
              shadowOffset: {
                width: 10,
                height: 10
              },
              shadowColor: "#000",
              shadowOpacity: 0.06

            }
          }}>
          <RootStack.Screen
            name="ExploreStack"
            component={ExploreScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <ExploreIcon color={color} size={size} />
              ),
              tabBarLabel: 'Explore',
            }}
          />
          <RootStack.Screen
            name="RestaurantsStack"
            component={RestaurantsScreenStack}
            options={{
              tabBarIcon: ({color, size}) => (
                <RestaurantIcon color={color} size={size} />
              ),
              tabBarLabel: 'Restaurants',
            }}
          />
          <RootStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <ProfileIcon color={color} size={size} />
              ),
              tabBarLabel: 'Profile',
            }}
          />
        </RootStack.Navigator>

      )
    }
    return <AuthScreenStack />;
  }

  return (
    <NavigationContainer>
      {renderContent()}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
