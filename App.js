/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

export default class App extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  handleAirhorn = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  onButtonUp = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 50,
      useNativeDriver: false,
    }).start();
  };

  render() {
    const innerStyle = {
      borderRadius: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [12, 16],
      }),
    };
    const heightStyle = {
      marginTop: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-15, 0],
      }),
      paddingBottom: this.state.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 0],
      }),
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handleAirhorn}
          onPressOut={this.onButtonUp}>
          <View style={styles.button}>
            <View style={styles.outer}>
              <Animated.View style={[styles.height, heightStyle]}>
                <Animated.View style={[styles.inner, innerStyle]}>
                  <Text style={styles.white}>Airhorn</Text>
                </Animated.View>
              </Animated.View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 80,
    width: 180,
  },
  outer: {
    flex: 1,
    padding: 10,
    borderRadius: 14,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  height: {
    borderRadius: 16,
    backgroundColor: 'rgba(255,0,0,.5)',
  },
  inner: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  white: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
