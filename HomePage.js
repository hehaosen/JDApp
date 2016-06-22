'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    RefreshControl
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import MenuButton from './MenuButton';

const BANNER_IMGS = [
    require('./images/banner/1.jpg'),
    require('./images/banner/2.jpg'),
    require('./images/banner/3.jpg'),
    require('./images/banner/4.jpg')
];

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (

            <View>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('./images/home_icons/wdgz.png')}
                                showText={'我的关注'} tag={'wdgz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/wlcx.png')}
                                showText={'物流查询'} tag={'wlcx'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/cz.png')}
                                showText={'充值'} tag={'cz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./images/home_icons/dyp.png')}
                                showText={'电影票'} tag={'dyp'}
                                onClick={this._onMenuClick}/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});