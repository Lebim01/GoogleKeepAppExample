import React from 'react'
import {
    ScrollView
} from 'react-native'

class MainView extends React.Component {

    render(){
        return ( 
            <ScrollView style={{ flex : 1, flexDirection : 'column' }}>
                { this.props.children }
            </ScrollView>
        )
    }
}

export default MainView