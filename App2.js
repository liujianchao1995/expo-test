import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import logo from "./assets/logo.png";
import * as ImgPicker from "expo-image-picker";

import * as Sharing from "expo-sharing";

export default function App() {
  const [sltImgUri, setSltImgUri] = React.useState(null);
  let openImgAsync = async () => {
    let permissionResult = await ImgPicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      alert("此功能需要相机权限");
      return;
    }

    let pickerResult = await ImgPicker.launchImageLibraryAsync();
    if (!pickerResult.cancelled) setSltImgUri(pickerResult.uri);
  };

  let openSharingDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert("抱歉，您的设备无法使用分享。");
    } else {
      await Sharing.shareAsync(sltImgUri);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{
          uri: sltImgUri,
        }}
        style={{ width: 305, height: 305 }}
      ></Image>
      <Text style={{ color: "blue", fontSize: 22 }}>哈哈阿萨达哈</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue", padding: 20, borderRadius: 10 }}
        onPress={openImgAsync}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>选择图片</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 10,
        }}
        onPress={openSharingDialog}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>分享</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
