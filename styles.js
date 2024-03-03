import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: ' rgba(254, 110, 110, 1)',
    padding: 20,
    height: 200,
    marginTop: 30,
    justifyContent: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,

  },
  iconContainer: {
    marginRight: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },

  titleContainer: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginBottom: 20,
 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    marginLeft: 5
  },
  qrCodeContainer: {
    marginLeft: 10,
  },
  qrCodeIcon: {
    width: 30,
    height: 30,
  },

/* headers designs css */



  dashboardBody: {
     display: 'flex',
      height: '70%',
      backgroundColor: 'white',
      justifyContent: 'flex-start',
      alignItems: 'center',

  },

  body:{
    margin: 10,
    display: 'flex',
    backgroundColor:  "rgba(140, 185, 189, 1)",

    height: 50,
    width: 350,
    borderRadius: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative'
  },

  bodyText : {
    marginLeft: 20,
    color: 'black',
    fontSize: 20,
  },

  nextarrowPng: {
    position: 'absolute',
    height: 30,
    width: 30,
    right: 15,
  }




});
