import React from 'react'
import {
    TouchableOpacity,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    controlText: {
        color: 'white',
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
})

class ControlPanel extends React.Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.controlText}>Menu</Text>
            </ScrollView>
        )
    }
}

export default ControlPanel