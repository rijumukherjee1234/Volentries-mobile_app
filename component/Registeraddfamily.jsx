import { View, Text,Image,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native';
import Event from '../Src/Event';
// import Header from '../Src/Header';

const Registeraddfamily = () => {
    const navigation = useNavigation();
    const handleAddFamilyMember = () => {
      navigation.navigate('AddFamilymember');
    };
  
    const handleRegister = () => {
      navigation.navigate('Signup');
    };
  
  return (
    <View style={{marginTop:responsiveHeight(2)}}> 
       {/* <Header/> */}
    <View style={styles.mainContainer}>
     
     <Event/>
     <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddFamilyMember}>
          <Text style={styles.addButtonText}>Add Family Member</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default Registeraddfamily;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8F9FA',
    padding: responsiveWidth(5),
    marginTop:responsiveHeight(1)
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: responsiveHeight(1),
  },
  addButton: {
    flex: 1,
    marginRight: responsiveWidth(2),
    borderWidth: 1,
    borderColor: '#0066cc',
    backgroundColor: '#fff',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // For subtle shadow
  },
  addButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#0066cc',
  },
  registerButton: {
    flex: 1,
    marginLeft: responsiveWidth(2),
    backgroundColor: '#467ABC',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2, // For subtle shadow
  },
  registerButtonText: {
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
    color: '#fff',
  },

  })