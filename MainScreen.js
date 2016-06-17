'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Header from './Header';

export default class MainScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header />
                <TabNavigator>

                </TabNavigator>
            </View>
        );
    }
}