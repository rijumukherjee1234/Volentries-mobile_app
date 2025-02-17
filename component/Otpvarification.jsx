import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const OtpVerification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleLoginPress = () => {
    const enteredOtp = otp.join('');
    console.log("Entered OTP:", enteredOtp);
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Volunteering Mobile App</Text>
      <Image
        source={require("../assets/TCL.png")}
        style={styles.logo}
      />
      <Image
        source={require("../assets/rallis.jpg")}
        style={styles.subLogo}
      />
      <Text style={styles.otpPrompt}>Enter the 4-digit OTP sent to your mobile number</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleOtpChange(text.replace(/[^0-9]/g, ''), index)}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' ? handleBackspace("", index) : null
            }
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (inputRefs.current[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>VERIFY OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: responsiveHeight(4),
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    marginTop:responsiveHeight(5)
  },
  heading: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: responsiveHeight(2),
  },
  logo: {
    width: responsiveWidth(60),
    height: responsiveHeight(12),
    resizeMode: 'contain',
    marginBottom: responsiveHeight(2),
  },
  subLogo: {
    width: responsiveWidth(40),
    height: responsiveHeight(12),
    resizeMode: 'contain',
    marginBottom: responsiveHeight(3),
  },
  otpPrompt: {
    fontSize: responsiveFontSize(2),
    color: '#000',
    textAlign: 'center',
    marginVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(4),
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: responsiveHeight(3),
  },
  otpInput: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: responsiveWidth(6),
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: responsiveWidth(2),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#467ABC',
    borderRadius: responsiveWidth(8),
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(10),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
