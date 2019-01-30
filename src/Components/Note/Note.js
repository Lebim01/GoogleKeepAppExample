import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import NotesStores from 'src/stores/NotesStore'

const TRASH_ICON = 'data:image/png;base64,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'

const styles = StyleSheet.create({
    container : {
        padding : 5,
        borderStyle : 'solid',
        borderColor : 'gray',
        borderRadius : 5,
        borderWidth : 0.3
    },
    title : {
        fontWeight : 'bold'
    }
})

class Note extends React.Component {

    delete(){
        NotesStores.dispatch({
            type : 'DELETE_NOTE',
            id : this.props.id
        })
    }

    render(){
        const { title, note } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    { title }
                </Text>
                <Text>
                    { note }
                </Text>
                <View style={{flex : 1, flexDirection : 'row'}}>
                    <View style={{flex : 4}}></View>
                    <View style={{flex : 1}}>
                        <TouchableOpacity onPress={this.delete.bind(this)}>
                            <Image
                                style={{ width : 20, height : 20 }}
                                source={{ uri : TRASH_ICON }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Note