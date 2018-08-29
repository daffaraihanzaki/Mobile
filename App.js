import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>   Nama   :Daffa Raihan Z</Text>
        <Text style={styles.title}>Kelas  :XI RPL 4</Text>
        <Text style={styles.title}>No     :8</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "100",
    fontSize: 50,
  },
});
