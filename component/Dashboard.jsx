import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import Header2 from '../Src/Header2';

// Import responsive dimensions
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

// Import images statically
import Group1 from '../assets/Group 1.png';
import Group2 from '../assets/Group 2.png'

import Group3 from '../assets/Group 3.png';
import Group4 from '../assets/Group 4.png';
 import Group5 from '../assets/Group 5.png';

const Dashboard = () => {
  const navigation = useNavigation();
  const handleScanQRCode = () => {
    navigation.navigate('Qrcodescanner');
  };
   const Handleaviableevent = () => {
    navigation.navigate('AvailableEvents');
   // router.navigate("/NewDash");
 };
 const handleeventdetails = () => {
  navigation.navigate('EventsDetails');
 // router.navigate("/NewDash");
};


  return (
    <View style={{marginTop:responsiveHeight(1.5)}}>
        {/* <Header2 /> */}
    <View style={styles.MainContainer}>
    
<View style={{flexDirection:'row',gap:20,marginLeft:responsiveWidth(3)}}>
       <View>
        <TouchableOpacity style={styles.button} onPress={handleScanQRCode}>
        <MaterialIcons name="qr-code-scanner" size={20} color="#fff" style={styles.scanIcon} />
          <Text style={styles.buttonText}>SCAN QR CODE</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonasset} onPress={Handleaviableevent}>
          <Text style={styles.buttonassettxt}>AVAILABLE EVENTS</Text>
        </TouchableOpacity>
      </View>
      </View>
      {/* Total Hours Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>TOTAL HOURS</Text>
        <TouchableOpacity style={styles.buttonLocation} onPress={handleeventdetails}>
                                      <Text style={styles.buttonLocationtxt}>Dummy Details</Text>
                                    </TouchableOpacity>

      </View>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.statsItem}>
          <Image source={Group1} style={styles.statsImage} />
          <Text style={styles.statsText}>TODAY</Text>
        </View>
        <View style={styles.statsItem}>
          <Image source={Group2} style={styles.statsImage} />
          <Text style={styles.statsText}>THIS WEEK</Text>
        </View>
        <View style={styles.statsItem}>
          <Image source={Group3} style={styles.statsImage} />
          <Text style={styles.statsText}>THIS MONTH</Text>
        </View>
      </View>

      {/* My Events Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>MY EVENTS</Text>
      </View>

      {/* Event Cards */}
      <View style={styles.eventCard}>
        <View>
          <Text style={styles.eventTitle}>Children Sports Day</Text>
          <Text style={styles.eventLocation}>14-10-2024, Mumbai</Text>
        </View>
        <Image source={Group4} style={styles.eventImage} />
      </View>

      <View style={styles.eventCard}>
        <View>
          <Text style={styles.eventTitle}>Prize Distribution Event</Text>
          <Text style={styles.eventLocation}>20-10-2024, Nasik</Text>
        </View>
        <Image source={Group5} style={styles.eventImage} />
      </View>
    </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  MainContainer: {
    padding: responsiveWidth(5),
  },
  sectionHeader: {
    marginTop: responsiveHeight(2),
    marginLeft:responsiveWidth(3),
    flexDirection:'row',
    gap:30
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
  },
  statsItem: {
    alignItems: 'center',
  },
  statsImage: {
    width: responsiveWidth(15.5),
    height: responsiveHeight(7.5),
  },
  statsText: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
    marginTop: responsiveHeight(1),
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    borderRadius: responsiveWidth(3),
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  eventLocation: {
    color: '#878686',
    fontSize: responsiveFontSize(1.8),
    marginTop: responsiveHeight(0.5),
  },
  eventImage: {
    width: responsiveWidth(12.5),
    height: responsiveHeight(6),
    marginLeft: 'auto',
  },
  buttonLocation: {
    borderWidth: responsiveWidth(0.3),
    borderColor: '#fff',
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(0.8),
    width: responsiveWidth(35),
    borderRadius: responsiveWidth(1.5),
    alignSelf: 'center',
    backgroundColor: '#0066cc',
    marginLeft:responsiveWidth(8)
  },
  buttonLocationtxt: {
    fontSize: responsiveFontSize(1.6),
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  button: {
    borderWidth: responsiveWidth(0.3),
    borderColor: '#fff',
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    width: responsiveWidth(40),
    height: 'auto',
    borderRadius: responsiveWidth(1),
    backgroundColor: '#467ABC',
    marginTop: responsiveHeight(1.5),
    flexDirection:'row',
    gap:5
      },
      buttonText: {
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',
        color: '#fff',
        marginTop:responsiveHeight(0.5)
      },
      buttonasset:{
        borderWidth: responsiveWidth(0.3),
        borderColor: '#0066cc',
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(1.7),
        width: responsiveWidth(40),
        height: 'auto',
        borderRadius: responsiveWidth(1),
        marginTop: responsiveHeight(1.5),
      },
      buttonassettxt:{
        fontSize: responsiveFontSize(1.6),
        fontWeight: '600',
        color: '#000',
        textAlign: 'center',
      },

});
