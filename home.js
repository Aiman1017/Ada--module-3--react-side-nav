import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, SafeAreaView, ListView, TouchableHighlight } from 'react-native';

export default function Home({navigation}) {
  // const [name, setName] = useState('')
  const [reviews, setReview] = useState([
    {'name': 'John', 'rating': 4, 'review': "It is a good corese", 'id':1},
    {'name': 'Abraham', 'rating': 3, 'review': "i need more houres", 'id':2},
    {'name': 'Desmond', 'rating': 5, 'review': "Love it!", 'id':3},
    {'name': 'James', 'rating': 1, 'review': "Amazing!!!", 'id':4},
    {'name': 'Kelly', 'rating': 1, 'review': "Worst!", 'id':3}
  ])
  return (
    // <View style={styles.container}>
    //   <Text>This is my home!</Text>
    //   <TextInput
    //   placeholder = "What is your name?"
    //   onChangeText = {(text) => {setName(text)}}
    //   value = {name}
    //   ></TextInput>
    //   <Button 
    //   onPress = {() => {navigation.push('ReviewDetail', {'name':name})}}
    //   title = "Open Review Page"
    //   />
    // </View>

    <SafeAreaView>
        <FlatList
        data = {reviews}
        renderItem = {({item}) =>
        <TouchableHighlight onPress = {() => {navigation.push('ReviewDetail', {'item':item})}}>
        <View style = {styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.rating}</Text>
        </View>
        </TouchableHighlight>
        }

        keyExtractor = {item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
      bakcground: '#f9c2ff',
      padding: 20,
      marginVertical: 0,
      textAlign: 'center'
  }
});