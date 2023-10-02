import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data from MetaWeather API
  const fetchWeatherData = async (city) => {
    try {
      const apiKey = "d3a99caf79ca4f8ca5695438e081b7ab";
      const response = await axios.get(
        `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely&city=${city}`
      );

      if (response.status === 200) {
        const weatherData = response.data;
        setWeatherData(weatherData);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Weather APP:</Text>
      <Image
        source={require("./assets/weather.png")}
        style={{ width: 370, height: 100 }}
      />
      <UserInput onSearch={fetchWeatherData} />
      <Results weatherData={weatherData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5db5f0",
  },
  Text: {
    fontSize: 33,
    color: "white",
    marginBottom: 20,
    fontWeight: 'bold'
  },
});
