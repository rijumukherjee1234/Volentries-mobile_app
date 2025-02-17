import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../component/Login';
import Signup from '../component/Signup';
import OtpVerification from '../component/Otpvarification';
import Dashboard from '../component/Dashboard';
import EventsDetails from '../component/EventsDetails';
import AvailableEvents from '../component/AvailableEvents';
import Registeraddfamily from '../component/Registeraddfamily';
import AddFamilymember from '../component/AddFamilymember';

const Stack = createStackNavigator();

const NavigationPage = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name='Home' component={Login}/>
    <Stack.Screen name='Signup' component={Signup}/>
    <Stack.Screen name='OtpVerification' component={OtpVerification}/>
    <Stack.Screen name='Dashboard' component={Dashboard}/>
    <Stack.Screen name='AvailableEvents' component={AvailableEvents}/>
<Stack.Screen name='EventsDetails' component={EventsDetails}/>
<Stack.Screen name='Registeraddfamily' component={Registeraddfamily}/>
<Stack.Screen name='AddFamilymember' component={AddFamilymember}/>
{/* <Stack.Screen name='Qrcodescanner'/> */}
{/* <Stack.Screen name='Addeventdetails'/> */}
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default NavigationPage