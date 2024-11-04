import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



const Timer = () => {
    const [timer, setTimer] = useState(0);
    const [start, setStart] = useState(false);
    const [pause, setPause] = useState(false);  

    
    useEffect(() => {
        if (start) {
            const interval = setInterval(() => {
                setTimer(timer => timer + 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (pause) {
            const interval = setInterval(() => {
                setTimer(timer <= 0 ? 0 : timer + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [start, pause]);

    const handleStart = () => {
      setTimer(0.00);
      setStart(true);
      setPause(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{timer}</Text>
            <Button 
              title="Start Timer"
              onPress={() => handleStart()}
              color = 'green'
            />
            <Button 
              title="Pause Timer"
              onPress={() => setPause(false)}
              color = 'red'
            />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    },
    timer: {
        fontSize: 100,
        color: 'white',
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 20,
        padding: 10,
    },
    button: {
        fontSize: 100,
        color: 'white',
        borderWidth: 10,
        borderColor: 'white',
        borderRadius: 20,
        padding: 10,
    },

})

export default Timer