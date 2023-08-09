import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <Text>First Input</Text>
        <TextInput style={{ borderColor: 'black', borderWidth: 1 }} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
