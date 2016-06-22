'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    PropTypes,
} from 'react-native';

export default class MenuButton extends Component {

    static propTypes = {
        renderIcon: React.PropTypes.number.isRequired,  // 图片,加入.isRequired即为比填项
        showText: React.PropTypes.string,  // 显示标题\文字
        tag: React.PropTypes.string,  // Tag
        onClick: React.PropTypes.func  // 回调函数
    };

    _onClick() {
        if (this.props.onClick) {   // 在设置了回调函数的情况下
            this.props.onClick(this.props.showText, this.props.tag);  // 回调Title和Tag
        }
    }

    constructor(props) {
        super(props);
        this._onClick = this._onClick.bind(this);  // 需要在回调函数中使用this,必须使用bind(this)来绑定
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick}>
                <View style={{alignItems:'center',flex:1}}>
                    <Image style={styles.iconImg} source={this.props.renderIcon}/>
                    <Text>{this.props.showText}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    iconImg: {
        width: 38,
        height: 38,
        marginBottom: 2
    },
    showText: {
        fontSize: 12
    }
});