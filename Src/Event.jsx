import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Event = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('../assets/party.png')} style={styles.eventImage} />
      
      <View style={styles.eventHeaderView}>
        <Text style={styles.eventHeaderText}>🎉 EVENT DETAILS</Text>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detailRow}>
          <FontAwesome5 name="calendar-alt" size={20} color="#467ABC" />
          <View style={styles.textContainer}>
            <Text style={styles.labelText}>Event Name</Text>
            <Text style={styles.valueText}>Shiksha Child Care</Text>
          </View>
        </View>

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
          <MaterialIcons name="map" size={24} color="#fff" />
          <Text style={styles.locationButtonText}>Get Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Event;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F9F9F9',
    padding: responsiveWidth(4),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(2),
  },
  headerText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
    color: '#467ABC',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D47AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: '#FFF',
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  },
  eventImage: {
    width: responsiveWidth(85),
    height: responsiveHeight(25),
    alignSelf: 'center',
    borderRadius: responsiveWidth(4),
  },
  eventHeaderView: {
    alignItems: 'center',
    marginVertical: responsiveHeight(2),
  },
  eventHeaderText: {
    fontSize: responsiveFontSize(3),
    fontWeight: '700',
    color: '#333',
  },
  detailContainer: {
    backgroundColor: '#FFF',
    padding: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
  },
  textContainer: {
    marginLeft: responsiveWidth(3),
  },
  labelText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#555',
  },
  valueText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '400',
    color: '#777',
  },
  locationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#467ABC',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(3),
  },
  locationButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#FFF',
    marginLeft: responsiveWidth(2),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#467ABC',
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(3),
  },
  registerButton: {
    backgroundColor: '#467ABC',
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(6),
    borderRadius: responsiveWidth(3),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#FFF',
  },
});
