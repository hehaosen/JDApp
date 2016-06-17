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