import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Results({ weatherData }) {

    // console.log(weatherData.data[0]);

    return (
        <View style={styles.container}>
          <Text style={styles.wr}>Weather Result:</Text>
          {weatherData ? (
            <View>
              <Text style={styles.Text1}>City:  <Text style={styles.Text2}>{weatherData.data[0].city_name}</Text></Text>
              <Text style={styles.Text1}>Weather: <Text style={styles.Text2}>{weatherData.data[0].weather.description}</Text></Text>
              <Text style={styles.Text1}>Temperature: <Text style={styles.Text2}>{weatherData.data[0].app_temp}°C</Text></Text>
            </View>
          ) : (
            <Text style={styles.Text2}>No weather data available</Text>
          )}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        container: {
          margin: 20,
        },
        wr: {
          fontSize: 18,
          color:"white",
          fontWeight: 'bold',
          marginBottom: 10,
          textAlign: "center"
        },
        Text1: {
          fontSize: 15,
          color:"white",
          fontWeight: 'bold',
          textAlign: "center"
        },
        Text2: {
          fontSize: 15,
          color:"white",
          fontWeight: 'normal',
          textAlign: "center"
        }
      });