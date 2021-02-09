import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import HeadBar from '../components/HeadBar'

export default function Mine() {
  return (
    <View>
      <HeadBar></HeadBar>
      <View style={{ flex:1 }}>
        <ScrollView style={styles.scrollView}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
        </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
