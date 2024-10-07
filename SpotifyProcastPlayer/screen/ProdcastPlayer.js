import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Prodcast from "../models/Prodcast"; 

const ProdcastPlayer = () => {
  const [prodcastList, setProdcastList] = useState([]);

  useEffect(() => {
    console.log(`ProdcastPlayer component created`);


    const initializeProdcasts = [
      new Prodcast(101, "Top Tier By Bakya - Playing on Spotify",  "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Spotify-1024.png"),
    ];
    setProdcastList(initializeProdcasts);
  }, []); 

  return (
    <View style={styles.container}>
      {prodcastList.map((prodcast) => (
        <View key={prodcast.prodcastId} style={styles.prodcast}>
          <Image source={{ uri: prodcast.imageLink }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.timeLeft}>0:00</Text>
            <Text style={styles.timeRight}>15:46</Text>
          </View>
          <Text style={styles.title}>{prodcast.title}</Text>
          <Text style={styles.description}>{prodcast.description}</Text>
          <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/green-business/520/backward-1024.png' }} style={styles.iconbackward}/>
          <Image source={{ uri: 'https://cdn2.iconfinder.com/data/icons/green-business/520/forward-1024.png'}} style={styles.iconforward}/>
          <Image source={{ uri : 'https://cdn2.iconfinder.com/data/icons/green-business/520/play-1024.png'}} style={styles.iconplay}/>
          <Image source={{ uri : 'https://cdn4.iconfinder.com/data/icons/education-ui-1/100/actions_-_like-1024.png'}} style={styles.iconlike}/>
        </View>
      ))}
    </View>
  );
};1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  prodcast: {
    width: '200%',
    height: '200%',
    backgroundColor: 'black',
    marginBottom: -750,
    borderWidth: 100,
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',  
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
    paddingHorizontal: 10,
  },
  timeLeft: {
    fontSize: 11,
    color: 'white',
    marginLeft: 50,
  },
  timeRight: {
    fontSize: 11,
    color: 'white',
    marginRight: 50,
  },
  title: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
  description: {
    fontSize: 15,
    fontWeight: 'semi-bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center',
  },
  iconbackward: {
    width: 40,
    height: 50,
    marginTop: 45,
    marginLeft: 60,
    padding: 40,
    alignSelf: 'flex-start',  
  },
  iconforward: {
    width: 40,
    height: 50,
    marginTop: -79,
    marginRight: 60,
    padding: 40,
    alignSelf: 'flex-end',
  },
  iconplay: {
    width: 40,
    height: 50,
    marginTop: -87,
    marginLeft: 10,
    padding: 50,
  },
  iconlike: {
    width: 40,
    height: 50,
    marginLeft: 16
  }
});

export default ProdcastPlayer;