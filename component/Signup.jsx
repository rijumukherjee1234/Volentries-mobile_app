import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [employeeStatus, setEmployeeStatus] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [emailName, setEmailName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
    const navigation = useNavigation();

  const handleRegister = () => {
    if (!employeeName.trim()) {
      Alert.alert("Error", "Employee Name is required!");
      return;
    }
    if (!emailName.trim() || !selectedEmail) {
      Alert.alert("Error", "A valid email is required!");
      return;
    }
    if (!phone || phone.length !== 10) {
      Alert.alert("Error", "A valid 10-digit phone number is required!");
      return;
    }
    if (!employeeCode.trim()) {
      Alert.alert("Error", "Employee Code is required!");
      return;
    }

    const fullEmail = `${emailName}${selectedEmail}`;
    Alert.alert("Success", "Registration Successful!");
    console.log("User Details:", {
      employeeStatus,
      employeeName,
      email: fullEmail,
      phone,
      employeeCode,
    });
  };

  const handlelogin = () =>{
    navigation.navigate('index');
  }
   return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Volunteering Mobile App</Text>
      <Text style={styles.subHeading}>REGISTER</Text>

      <View style={styles.inputGroup}>
        <Picker
          selectedValue={employeeStatus}
          onValueChange={setEmployeeStatus}
          style={styles.picker}
        >
          <Picker.Item label="Select Employee Status" value="" />
          <Picker.Item label="Full-Time" value="full_time" />
          <Picker.Item label="Part-Time" value="part_time" />
          <Picker.Item label="Intern" value="intern" />
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <AntDesign name="mail" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={emailName}
          onChangeText={setEmailName}
        />
        <Picker
          selectedValue={selectedEmail}
          onValueChange={setSelectedEmail}
          style={styles.pickerInline}
        >
          <Picker.Item label="@example.com" value="@example.com" />
          <Picker.Item label="@tatachemicals.com" value="@tatachemicals.com" />
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <AntDesign name="user" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={employeeName}
          onChangeText={setEmployeeName}
        />
      </View>

      <View style={styles.inputGroup}>
        <AntDesign name="mobile1" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mobile"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ""))}
        />
      </View>

      <View style={styles.inputGroup}>
        <AntDesign name="codepen" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Code"
          value={employeeCode}
          onChangeText={setEmployeeCode}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.footerLink} onPress={handlelogin}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: responsiveWidth(5),
    backgroundColor: "#f9f9f9",
    marginTop:responsiveHeight(5)
  },
  mainHeading: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: responsiveHeight(2),
  },
  subHeading: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "600",
    textAlign: "center",
    marginBottom: responsiveHeight(2),
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: responsiveWidth(3),
    marginBottom: responsiveHeight(2),
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: responsiveWidth(2),
    color: "#888",
  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    paddingVertical: responsiveHeight(1),
  },
  picker: {
    flex: 1,
    fontSize: responsiveFontSize(2),
  },
  pickerInline: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    marginLeft: responsiveWidth(1),
  },
  button: {
    backgroundColor: "#467ABC",
    borderRadius: 10,
    paddingVertical: responsiveHeight(1.5),
    alignItems: "center",
    marginVertical: responsiveHeight(2),
  },
  buttonText: {
    color: "#fff",
    fontSize: responsiveFontSize(2.2),
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: responsiveFontSize(1.8),
    color: "#555",
  },
  footerLink: {
    fontSize: responsiveFontSize(1.8),
    color: "#467ABC",
    marginLeft: responsiveWidth(1),
  },
});
