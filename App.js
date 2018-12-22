/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native";

import TodoList from './TodoList';

export default class App extends Component<{}> {
  state = {
    newTodo: '',
    todos: [],
  };
  onChangeText(newTodo) {
    this.setState({ newTodo });
  }
  onPressAdd() {
    console.log('Press!');
    const { newTodo } = this.state;
    this.setState({
      newTodo: '',
      todos: [newTodo, ...this.state.todos]
    });
  }
  onPressDelete(index) {
    this.setState({
      todos: this.state.todos.filter((t,i) => i !== index),
    });
  }
  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.newTodo}
          style={styles.form}
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity style={styles.addButton}
        onPress={() => { this.onPressAdd()}}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <TodoList todos={this.state.todos}
        onPressDelete={(index) => this.onPressDelete(index)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50
  },
  form: {
    padding: 30,
    backgroundColor: "#EEE"
  },
  addButton: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: 14,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

});
