import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const phoneAnimated = useRef(new Animated.Value(0)).current;
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleFocus = (animatedValue) => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleBlur = (animatedValue) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const translateY = (animatedValue) => {
    return animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [12, -17],
    });
  };

  const handleLoginPress = () => {
    navigation.navigate('OtpVerification');
  };

  const handlePressSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Volunteering Mobile App</Text>

      {/* TCL Logo */}
      <Image
        source={require('../assets/TCL.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Rallis Logo */}
      <Image
        source={require('../assets/rallis.jpg')}
        style={styles.logoSmall}
        resizeMode="contain"
      />

      <Text style={styles.subHeading}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
          keyboardType="phone-pad"
          maxLength={10}
         placeholder="Enter Phone Number"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>REQUEST OTP</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handlePressSignup}>
          <Text style={styles.signUp}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(5),
    backgroundColor: '#f8f9fa',
    marginTop:responsiveHeight(5)
  },
  mainHeading: {
    fontSize: responsiveFontSize(3.2),
    fontWeight: '700',
    textAlign: 'center',
    color: '#34495e',
    marginBottom: responsiveHeight(3),
  },
  logo: {
    width: responsiveWidth(70),
    height: responsiveHeight(15),
    alignSelf: 'center',
    marginBottom: responsiveHeight(2),
  },
  logoSmall: {
    width: responsiveWidth(40),
    height: responsiveHeight(10),
    alignSelf: 'center',
    marginBottom: responsiveHeight(3),
  },
  subHeading: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    color: '#34495e',
    textAlign: 'center',
    marginBottom: responsiveHeight(2),
  },
  inputContainer: {
    marginBottom: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(2),
  },
  inputLabel: {
    position: 'absolute',
    left: responsiveWidth(3),
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: '#7f8c8d',
    paddingLeft: responsiveWidth(1.5),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced6e0',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    fontSize: responsiveFontSize(2),
    color: '#34495e',
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  button: {
    backgroundColor: '#2980b9',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    width: responsiveWidth(80),
    alignSelf: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  footerText: {
    fontSize: responsiveFontSize(1.8),
    color: '#7f8c8d',
    fontWeight: '500',
  },
  signUp: {
    fontSize: responsiveFontSize(1.8),
    color: '#2980b9',
    fontWeight: '600',
    marginLeft: responsiveWidth(1),
  },
});
