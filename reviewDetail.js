import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';

export default function ReviewDetail({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Name: {navigation.getParam('item').name}</Text>
      <Text>Rating: {navigation.getParam('item').rating}</Text>
      <Text>Review: {navigation.getParam('item').review}</Text>
      <Button 
      title = "Go Back"
      onPress = {() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});