import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

import Judul from './Components/Judul';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Judul/>
        <Text style={styles.title}>Nama   :Daffa Raihan Zaki Nax RPL</Text>
        <Text style={styles.title}>Kelas  :XI RPL 4</Text>
        <Text style={styles.title}>No     :8</Text>
        <Text style={modif.eaa}>Siswa Pero</Text>
        <Image source={require('./fot.png')}/>
      </View>
    );
  }
}

const modif={
  eaa :{
      color:'white',
      fontSize:20,
      backgroundColor:'blue',
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
    fontSize: 40,
  },
});
