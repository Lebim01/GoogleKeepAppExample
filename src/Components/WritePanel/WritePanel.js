import React from 'react'
import {
    TextInput,
    View,
    StyleSheet
} from 'react-native'
import Button from 'src/Components/ControlPanel/Button'
import NotesStore from 'src/stores/NotesStore'

const styles = StyleSheet.create({
    container : {
        margin : 10,
        padding : 10,
        flex : 1,
        flexDirection: 'column',
        borderStyle : 'solid',
        borderColor : 'gray',
        borderRadius : 5,
        borderWidth : 0.3,
    },
    input : {
        width : '100%'
    },
    button : {
        flex : 1,
        padding : 5,
        borderStyle : 'solid',
        borderColor : 'gray',
        borderRadius : 5,
        borderWidth : 0.3
    },
    textButton : {
        textAlign : 'center'
    }
})

class Divider extends React.Component {
    render(){
        return (
            <View style={{ height : 1, backgroundColor: '#ddd' }}></View>
        )
    }
}

class WritePanel extends React.Component {

    state = {
        editing : false
    }

    onChangeInput = (variable, value) => {
        this.props.onChange(variable, value)
    }

    componentWillReceiveProps(props){
        let { title, note } = props.newNote
        let editing = title !== '' && note !== ''
        this.setState({
            editing
        })
    }

    save(){
        this.setState({
            editing : false
        }, () => this.props.save())
    }

    render(){
        const { editing } = this.state
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Title"
                    editable={true}
                    style={{ ...styles.input, height : 40 }}
                    onChangeText={(text) => this.onChangeInput('title', text)}
                    value={this.props.newNote.title}
                    multiline={false}
                />
                <Divider />
                <TextInput
                    placeholder="Note"
                    editable={true}
                    style={{ ...styles.input }}
                    onChangeText={(text) => this.onChangeInput('note', text)}
                    value={this.props.newNote.note}
                    numberOfLines={2}
                    multiline={true}
                />
                { editing &&
                    <View style={{ flexDirection : 'row' }}>
                        <View style={{flex:4}}></View>
                        <Button 
                            style={styles.button} 
                            textStyle={styles.textButton} 
                            text="Save"
                            onPress={this.save.bind(this)}
                        />
                    </View>
                }
            </View>
        )
    }
}

export default WritePanel