import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Pressable, Alert, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState('dev');

  const fetchJobsFromApi = async () => {
    setIsLoading(true); // Show ActivityIndicator

    const url = `https://jobicy.com/api/v2/remote-jobs?count=20&industry=${selectedIndustry}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Unsuccessful response
        throw new Error(`Response Status: ${response.status}. Response not received successfully from API.`);
      }

      // Successful response
      // Attempt to access JSON data from response
      const jsonData = await response.json();

      setData(jsonData.jobs);

      console.log(`Response received from web service: ${JSON.stringify(jsonData.jobs)}`);

      return jsonData.jobs;
    } catch (err) {
      console.log(`Error while fetching the data from API: ${err}`);
    } finally {
      setIsLoading(false); // To stop ActivityIndicator
    }
  };

  // Every time component is created, fetch the jobs data from API
  useEffect(() => {
    fetchJobsFromApi();
  }, [selectedIndustry]);

  const onListItemPressed = (item) => {
    // Perform necessary operation on selected item
    Alert.alert(`User select:\nTitle: ${item.jobTitle}\nCompany: ${item.companyName}\nJob Industry: ${item.jobIndustry}\nJob Type: ${item.jobType}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Text style={styles.label}>Select Industry:</Text>
            <Picker
              selectedValue={selectedIndustry}
              onValueChange={(itemValue) => setSelectedIndustry(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="HR" value="hr" />
              <Picker.Item label="Business" value="business" />
              <Picker.Item label="Development" value="dev" />
            </Picker>
          </View>

          <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data} // Associate state variable to data property
                keyExtractor={({ id }) => id.toString()} // Identify each FlatList item with unique id
                renderItem={({ item }) => (
                  <View style={styles.itemContainer}>
                    <Image source={{ uri: item.companyLogo }} style={styles.companyLogo} />
                    <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                    <Text style={styles.jobType}>{item.jobType}</Text>
                    <Text style={styles.jobIndustry}>{item.jobIndustry}</Text>
                    <Text style={styles.jobExcerpt}>{item.jobExcerpt}</Text>
                  </View>
                )} 
                ItemSeparatorComponent={() => {
                  return <View style={styles.separator} />;
                }}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10, 
  },
  itemText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
  },
  picker: {
    flex: 1,
    height: 200, // Adjust width as needed
  },
  pickerItem: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  companyLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});