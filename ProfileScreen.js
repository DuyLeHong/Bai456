import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { withNavigation } from 'react-navigation';
import View2 from './View2';
import View1 from './View1';


export class ProfileScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const { route } = this.props;

        console.log(route)

        return (
            <View>
                <Text style={{ fontSize: 50 }} >ProfileScreen</Text>

                <Text style={{ fontSize: 50 }}>Thông tin SV:
                    {route.params.name} - {route.params.tuoi} - {route.params.mssv}</Text>

                <Button title="Back" onPress={() => {

                    let sv = {
                        ten: 'Nguyen Minh Anh',
                        tuoi: 20,
                        diemTB: 9.5
                    }
                    route.params.onGoBack(sv);

                    this.props.navigation.goBack()
                }
                } />

                <Button title="Go to Screen 3" onPress={() => {
                    
                    this.props.navigation.navigate('PhotoScreen')
                }
                } />

                <View1 data='Text 1'/>

                <View2 data='Text 2'/>
            </View>
        )
    }
}

export default withNavigation(ProfileScreen);
