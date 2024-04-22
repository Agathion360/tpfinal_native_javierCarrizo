import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from 'react';



import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['Entradas', 'Sopas', 'Principal', 'Acompañamiento', 'Postres', 'Bebidas', 'Cocteles'];


  return (
    <View style={styles.container}>
      <View style={styles.seccionprincipal}>
        <View style={styles.categorias}>
        <ScrollView horizontal contentContainerStyle={styles.catbutons}>
            {options.map((option, index) => (
              <Pressable
                key={index}
                style={styles.button}
                onPress={() => setSelectedOption(option)}
              >
                <Text style={[styles.txtbtn, selectedOption === option && styles.selected]}>
                  {option}
                </Text>
                {selectedOption === option && <View style={styles.underline} />}
              </Pressable>
            ))}
          </ScrollView>

        </View>

          <View style={styles.imgPlatillo}>
          <Image source={require('./assets/productos/platillo1.png')} />

          </View>
      </View>

      <View style={styles.footer}>
        <FontAwesome name="home" size={30} color="white" marginTop={35} />
        <Entypo name="shop" size={30} color="white" marginTop={35} />
        <AntDesign name="appstore-o" size={30} color="white" marginTop={35} />
        <Fontisto name="shopping-sale" size={30} color="white" marginTop={35} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  seccionprincipal: {
    flex: 1,
    backgroundColor: "#2A2D34", // blanco con 50% de transparencia
    height: "90%",
    width: "100%",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  footer: {
    backgroundColor: "white",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  categorias: {
    height: "5%",
    width: "100%",  
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    marginLeft: 20,
  },
  catbutons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    marginHorizontal: 10,
  },
  txtbtn: {
    color: "white",
    fontSize: 15,
  },
  selected: {
    color: "#DD5C01",
    fontWeight: 'bold',
  },
  underline: {
    borderBottomColor: '#DD5C01',
    borderBottomWidth: 1,
    marginTop: 5, // Ajusta este valor según tus necesidades
  },
  imgPlatillo: {
    marginTop: 50,
    alignItems: "center",
  },
});