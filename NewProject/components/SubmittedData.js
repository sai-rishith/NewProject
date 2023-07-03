import React from 'react';
import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';

const { width } = Dimensions.get('window');

const data = [
  { username: 'John Doe', email: 'johndoe@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Jane Smith', email: 'janesmith@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Alex Johnson', email: 'alexjohnson@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Sarah Davis', email: 'sarahdavis@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'John Doe', email: 'johndoe@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Jane Smith', email: 'janesmith@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Alex Johnson', email: 'alexjohnson@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Sarah Davis', email: 'sarahdavis@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'John Doe', email: 'johndoe@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Jane Smith', email: 'janesmith@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Alex Johnson', email: 'alexjohnson@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Sarah Davis', email: 'sarahdavis@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'John Doe', email: 'johndoe@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Jane Smith', email: 'janesmith@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Alex Johnson', email: 'alexjohnson@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
  { username: 'Sarah Davis', email: 'sarahdavis@example.com', phonenumber: 1234567890, city: 'Hyderabad' },
];

const SubmittedData = () => {
    const renderCard = ({ item }) => (
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Username:</Text>
            <Text style={styles.infoValue}>{item.username}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{item.email}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>Phone Number:</Text>
            <Text style={styles.infoValue}>{item.phonenumber}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoLabel}>City:</Text>
            <Text style={styles.infoValue}>{item.city}</Text>
          </View>
        </Card.Content>
      </Card>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Submitted Data</Text>
        <FlatList
          data={data}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop:50,
      backgroundColor: '#f5f5f5',
    },
    card: {
      marginBottom: 16,
      elevation: 4,
      width: width - 32,
      alignSelf: 'center',
      borderRadius: 8,
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    flatListContainer: {
      flexGrow: 1,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    infoLabel: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    infoValue: {
      flex: 2,
      fontSize: 16,
      color: '#666',
    },
  });
  
  export default SubmittedData;