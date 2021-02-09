import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Appbar, TouchableRipple } from 'react-native-paper';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons';

export default function HeadBar() {
  return (
    <Appbar.Header style={{ backgroundColor: "#fff" }}>
      <View style={styles.content}>
        <View style={styles.left}>
          <Text style={{ color: "black", fontSize: 20 }}>Youtube</Text>
        </View>
        <View style={styles.right}>
          <MaterialIcons style={styles.rightIcon} name="notifications" size={24} color="black" />
          <MaterialIcons style={styles.rightIcon} name="search" size={24} color="black" />
          <TouchableRipple style={{ ...styles.rightIcon, ...styles.iconRipple }} centered={true} borderless={true} onPress={() => false} rippleColor="rgba(0, 0, 0, .2)">
            <MaterialIcons name="account-circle" size={24} color="black" />
          </TouchableRipple>
        </View>
      </View>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10
  },
  right: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  left: {
    justifyContent: "flex-start"
  },
  rightIcon: {
    marginLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconRipple: {
    marginLeft:10,
    borderRadius: 500,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  }
})
