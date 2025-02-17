import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
// import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Header from '../Src/Header';

const EventsDetails = () => {
  const navigation = useNavigation();
  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleClockInOut = () => {
    setIsClockedIn(!isClockedIn);
  };

  const handleRegisterFamily = () => {
    navigation.navigate('Registeraddfamily');
  };
  const handleaddevent = async () => {
    navigation.navigate('Addeventdetails');
  };
  

  return (
    <View style={styles.MainContainer}>
      {/* <Header /> */}
      <Image source={require('../assets/party.png')} style={styles.eventImage} />
      
      <View style={styles.card}>
        <Text style={styles.eventTitle}>🎉 EVENT DETAILS</Text>

        <View style={styles.detailRow}>
        <FontAwesome5 name="calendar-alt" size={responsiveFontSize(2.5)} color="#467ABC" />
        <View style={styles.textContainer}>
          <Text style={styles.labelText}>Event Name</Text>
          <Text style={styles.valueText}>Shiksha Child Care</Text>
        </View>
      </View>

        {/* <View style={styles.infoContainer}>
          <Text style={styles.label}>📅 Date & Time</Text>
          <Text style={styles.value}>Sunday, 20-10-2024</Text>
          <Text style={styles.value}>🕒 10.30 AM</Text>
        </View> */}
         <View style={styles.detailRow}>
          <FontAwesome5 name="clock" size={20} color="#467ABC" />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Event Date & Time</Text>
            <Text style={styles.valueText}>Sunday, 20-10-2024</Text>
            <Text style={styles.valueText}>10:30 AM</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
                 <MaterialIcons name="location-on" size={24} color="#467ABC" />
                 <View style={styles.textContainer}>
                   <Text style={styles.labelText}>Address</Text>
                   <Text style={styles.valueText}>Yuva Sporting Club</Text>
                   <Text style={styles.valueText}>Pune, Maharashtra</Text>
                 </View>
               </View>

        <TouchableOpacity style={styles.locationButton}>
          <MaterialIcons name="location-on" size={20} color="#fff" />
          <Text style={styles.buttonText}>Get Location</Text>
        </TouchableOpacity>

        {isClockedIn && (
          <TouchableOpacity style={styles.viewMoreButton}  onPress={handleaddevent}>
            <Ionicons name="eye-outline" size={20} color="#fff" />
            <Text style={styles.buttonText}>View More</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.clockButton, { backgroundColor: isClockedIn ? '#E53935' : '#43A047' }]}
          onPress={handleClockInOut}
        >
          <Ionicons name={isClockedIn ? 'log-out-outline' : 'log-in-outline'} size={20} color="#fff" />
          <Text style={styles.buttonText}>{isClockedIn ? 'Clock Out' : 'Clock In'}</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
          <Text style={styles.notRegisteredText}>⚠️ You are not registered for this event</Text>
          <TouchableOpacity onPress={handleRegisterFamily}>
            <Text style={styles.registerText}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EventsDetails;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingVertical: responsiveHeight(2),
  },
  eventImage: {
    width: responsiveWidth(75),
    height: responsiveHeight(24),
    alignSelf: 'center',
    borderRadius: responsiveWidth(4),
    marginBottom: responsiveHeight(2),
    marginTop: responsiveHeight(2),
  },
  card: {
    backgroundColor: '#ffffff',
    padding: responsiveHeight(3),
    borderRadius: responsiveWidth(5),
    marginHorizontal: responsiveWidth(5),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 6,
  },
  eventTitle: {
    fontSize: responsiveFontSize(2.8),
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
    marginBottom: responsiveHeight(2),
  },
  infoContainer: {
    marginBottom: responsiveHeight(2),
  },
  label: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: responsiveFontSize(2.2),
    color: '#444',
    fontWeight: 'bold',
  },
  locationButton: {
    flexDirection: 'row',
    backgroundColor: '#1E88E5',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
  },
  clockButton: {
    flexDirection: 'row',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
  },
  viewMoreButton: {
    flexDirection: 'row',
    backgroundColor: '#1E88E5',
    borderRadius: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
  },
  buttonText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '600',
    color: '#fff',
    marginLeft: 5,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: responsiveHeight(1),
  },
  notRegisteredText: {
    color: '#E53935',
    fontSize: responsiveFontSize(1.7),
  },
  registerText: {
    color: '#1E88E5',
    fontSize: responsiveFontSize(1.7),
    marginLeft: 5,
    fontWeight: 'bold',
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(2),
  },
  textContainer: {
    marginLeft: responsiveWidth(3),
  },
  labelText: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  valueText: {
    fontSize: responsiveFontSize(1.8),
  },
});
