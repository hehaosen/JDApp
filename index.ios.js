/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import MainScreen from './MainScreen';

class JdApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MainScreen >

                </MainScreen>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('JdApp', () => JdApp);
