import {
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
 import Event from "../Src/Event";
// import Header from "../Src/Header";

const AddFamilyMember = () => {
  const navigation = useNavigation();

  const relationAnimated = useRef(new Animated.Value(0)).current;
  const nameAnimated = useRef(new Animated.Value(0)).current;
  const phoneAnimated = useRef(new Animated.Value(0)).current;

  const [relation, setRelation] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
   <ScrollView style={{marginTop:responsiveHeight(2)}}>
        {/* <Header /> */}
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Event />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Add Family Member</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Animated.Text
            style={[styles.label, { transform: [{ translateY: translateY(relationAnimated) }] }]}
          >
            Relation
          </Animated.Text>
          <TextInput
            style={styles.input}
            value={relation}
            onChangeText={(text) => setRelation(text)}
            placeholder="Enter Relation"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Animated.Text
            style={[styles.label, { transform: [{ translateY: translateY(nameAnimated) }] }]}
          >
            Name
          </Animated.Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter Name"
            placeholderTextColor="#aaa"
          />
        </View>

        <View style={styles.inputWrapper}>
          <Animated.Text
            style={[styles.label, { transform: [{ translateY: translateY(phoneAnimated) }] }]}
          >
            Phone
          </Animated.Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ""))}
            keyboardType="phone-pad"
            maxLength={10}
            placeholder="Enter Phone Number"
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
     </ScrollView>
  );
};

const translateY = (animation) => {
  return animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });
};

export default AddFamilyMember;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    marginTop: responsiveHeight(1),
  },
  headerContainer: {
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(1.5),
    alignItems: "center",
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    fontWeight: "700",
    color: "#1F2937",
  },
  inputContainer: {
    paddingHorizontal: responsiveWidth(5),
  },
  inputWrapper: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    position: "absolute",
    left: responsiveWidth(2),
    fontSize: responsiveFontSize(1.8),
    color: "#6B7280",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: responsiveWidth(2),
    padding: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    color: "#374151",
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(5),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(4),
  },
  addButton: {
    flex: 1,
    marginRight: responsiveWidth(2),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#2563EB",
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.5),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  addButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    color: "#2563EB",
  },
  registerButton: {
    flex: 1,
    marginLeft: responsiveWidth(2),
    backgroundColor: "#2563EB",
    borderRadius: responsiveWidth(2),
    paddingVertical: responsiveHeight(1.5),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  registerButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
