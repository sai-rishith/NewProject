import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const data = [
  {   
    id:1,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    aadharNumber: '1234567890123',
    showMore: false,
  },
  {   
    id:2,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    aadharNumber: '1234567890123',
    showMore: false,
  },
  {   
    id:3,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    aadharNumber: '1234567890123',
    showMore: false,
  },
  {   
    id:4,
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    phoneNumber: '1234567890',
    aadharNumber: '1234567890123',
    showMore: false,
  },
  
];

const RenderCard = React.memo(({ item, index, toggleShowMore }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.infoLabel}>Name:</Text>
            <Text style={styles.infoValue}>{item.name}</Text>
          </View>
          <View style={styles.ageContainer}>
            <Text style={styles.infoLabel}>Age:</Text>
            <Text style={styles.infoValue}>{item.age}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleShowMore(index)} style={styles.iconButton}>
            <Icon name={item.showMore ? 'chevron-up' : 'chevron-down'} size={18} color="#000" />
          </TouchableOpacity>
        </View>
        {item.showMore && (
          <View style={styles.detailsContainer}>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Email:</Text>
              <Text style={styles.infoValue}>{item.email}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Phone Number:</Text>
              <Text style={styles.infoValue}>{item.phoneNumber}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoLabel}>Aadhar Number:</Text>
              <Text style={styles.infoValue}>{item.aadharNumber}</Text>
            </View>
          </View>
        )}
      </Card.Content>
    </Card>
  );
});

const SubmittedData = () => {
  const [submittedData, setSubmittedData] = useState(data);

  const toggleShowMore = (index) => {
    setSubmittedData(prevData => {
      const newData = [...prevData];
      newData[index].showMore = !newData[index].showMore;
      return newData;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submitted Data</Text>
      <FlatList
        data={submittedData}
        renderItem={({ item, index }) => (
          <RenderCard item={item} index={index} toggleShowMore={toggleShowMore} />
        )}
        keyExtractor={(item) => item.id.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 50,
    backgroundColor: '#f5f5f5',
  },
  iconButton: {
    padding: 8,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    width: width - 32,
    alignSelf: 'center',
    borderRadius: 8,
    padding: 'auto',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  ageContainer: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    marginTop: 0,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  infoValue: {
    marginLeft: 8,
    fontSize: 18,
    color: '#000',
  },
});

export default SubmittedData;
