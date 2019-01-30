import React from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';
import styles from 'src/styles';

class Button extends React.Component {
    render() {
        return(
            <TouchableHighlight
                style={this.props.style || styles.button}
                underlayColor="#B5B5B5"
                onPress={() => {
                    this.props.onPress();
                }}
            >
                <Text style={this.props.textStyle || styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )    
    }
}

export default Button