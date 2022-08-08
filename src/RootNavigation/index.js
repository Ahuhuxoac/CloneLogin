import LoginScreen from "../screen/LoginScreen";
import HomeScreen from "../screen/HomeScreen";
import SignupScreen from "../screen/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Reminder from "../screen/Reminder";
import Invite from "../screen/Invite";
import Send from "../screen/Sendmail";
import Welcomevideo from "../screen/Welcomevideo";
import Rewards from "../screen/Rewards";
import Help from "../screen/Help";
import Disclaimer from "../screen/Disclaimer";
import Settings from "../screen/Settings";
import { SlicerBar } from "../components/SliceBar";
import { StatusBar } from 'react-native'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const LoginMatch = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};

const HomeMatch = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen" drawerContent={(props) => <SlicerBar {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} 
      options={{
        drawerIcon: ({})
      }} />
      <Drawer.Screen name="Reminder" component={Reminder} />
      <Drawer.Screen name="Invite your friends" component={Invite} />
      <Drawer.Screen name="Send a testimonial" component={Send} />
      <Drawer.Screen name="Welcome video" component={Welcomevideo} />
      <Drawer.Screen name="Rewards" component={Rewards} />
      <Drawer.Screen name="Help&Support" component={Help} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Disclaimer" component={Disclaimer} />
    </Drawer.Navigator>
  );
};

const RootNavigator = () => {
  const checker = useSelector((state) => {
    return state.Login.auth;
  });
  return (
    <NavigationContainer>
      {checker === false ? <LoginMatch /> : <HomeMatch />}
    </NavigationContainer>
  );
};

export default RootNavigator;
