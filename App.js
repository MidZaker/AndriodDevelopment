import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { View, Text, TextInput, TouchableOpacity,  Image,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { styles } from './styles'; // Importing styles from styles.js
import DocumentsScreen from './Document';
import GoodsScreen from './Goods';
import ReportsScreen from './Reports';



// Create a stack navigator
const Stack = createStackNavigator();

// Main App component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Documents"
          component={DocumentsScreen}
          options={{ title: 'Documents' }}
        />
        <Stack.Screen
        name='Goods'
        component={GoodsScreen}
        options={{title: 'Goods' }}

        />
        <Stack.Screen
        name="Reports"
        component={ReportsScreen}
        opitons={{ title: 'Reports'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const HomeScreen = ({navigation}) => {

  return (
      <View> 
    <View style={styles.container}>
    {/*Sa Title ni or Headers */}

      <View style={styles.header}>
        {/* Hamburger Icon */}
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require('./menu.png')} 
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Aventurado Store</Text>
        </View>
      </View>

      {/* Search Bar with QR Code */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Image
              source={require('./search.png')} 
              style={styles.qrCodeIcon}
            />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Menu..."
            placeholderTextColor="#888"
          />
          {/* QR Code Icon */}
          <TouchableOpacity style={styles.qrCodeContainer}>
            <Image
              source={require('./qr-code.png')} 
              style={styles.qrCodeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>

    {/*Dashboard nani sya */}
       <View style ={styles.dashboardBody}> 
       <TouchableOpacity onPress={() => navigation.navigate("Goods")}>
                <View style = {styles.body}>
                  <Text style = {styles.bodyText}> Goods</Text>
                    <Image
              source={require('./next.png')} 
              style={styles.nextarrowPng}
            />
               </View>
               </TouchableOpacity>


                <TouchableOpacity  onPress={() => navigation.navigate('Documents')}>
                  <View style = {styles.body}>
                  <Text style = {styles.bodyText}> Documents</Text>
                    <Image
              source={require('./next.png')} 
              style={styles.nextarrowPng}
            />
               </View>
               </TouchableOpacity>


               <TouchableOpacity onPress={() => navigation.navigate('Reports')}>
                  <View style = {styles.body}>
                  <Text style = {styles.bodyText}> Reports</Text>
                    <Image
              source={require('./next.png')} 
              style={styles.nextarrowPng}
            />
               </View>
               </TouchableOpacity>
               
             
      
      </View>

      </View>
 

  
  );
}

