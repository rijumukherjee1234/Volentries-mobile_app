import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
// import Header from '../Src/Header';

const EventBox = ({ title, details, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.box}>
      <View>
        <Text style={styles.boxTitle}>{title}</Text>
        <Text style={styles.boxDetails}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AvailableEvents = () => {
  const navigation = useNavigation();

  const handleEvent1 = () => {
    navigation.navigate('AddFamilymember');
  };

  const handleEvent2 = () => {
    navigation.navigate('AddFamilymember');
  };

  return (
    <View style={styles.mainContainer}>
      {/* <Header /> */}
      <View style={styles.eventView}>
        <Text style={styles.eventTitle}>AVAILABLE EVENTS</Text>
      </View>
      <EventBox
        title="Children Sports Day"
        details="14-10-2024 Mumbai"
        onPress={handleEvent1}
      />
      <EventBox
        title="Prize Distribution Event"
        details="20-10-2024 Nasik"
        onPress={handleEvent2}
      />
    </View>
  );
};

export default AvailableEvents;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingVertical: responsiveHeight(1.5),
    paddingTop: responsiveHeight(2),
  },
  eventView: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(6),
  },
  eventTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: '600',
    color: '#333',
  },
  box: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: '#FFF',
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(2),
    flexDirection: 'row',
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    paddingVertical: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(4),
  },
  boxTitle: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '500',
    color: '#333',
  },
  boxDetails: {
    color: '#878686',
    fontSize: responsiveFontSize(1.8),
    fontWeight: '400',
    marginTop: responsiveHeight(0.5),
  },
});
