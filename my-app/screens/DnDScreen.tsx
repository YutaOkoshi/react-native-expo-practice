import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {Draggable} from "../components/Draggable";

import { DraxProvider, DraxView } from 'react-native-drax';

export default function DnDScreen() {

  return (
        <View style={styles.mainContainer}>
          <View style={styles.dropZone}>
            <Text style={styles.text}>Drop them here!</Text>
          </View>
          <View style={styles.ballContainer} />
          <View style={styles.row}>
            <Draggable />
            <Draggable />
            <Draggable />
            <Draggable />
            <Draggable />
          </View>
        </View>
  );
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  ballContainer: {
    height:200
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 200,
    backgroundColor: "#00334d"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});