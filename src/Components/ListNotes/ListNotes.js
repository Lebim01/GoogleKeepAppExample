import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import { Note } from 'src/Components'
import NotesStore from 'src/stores/NotesStore'

const styles = StyleSheet.create({
    container : {
        padding : 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item : {
        width : '50%',
        padding : 5
    }
})

class ListNotes extends React.Component {

    state = { notes : [] }

    constructor(props){
        super(props)
        this.loadNotes = this.loadNotes.bind(this)
    }

    loadNotes(){
        const state = NotesStore.getState()
        this.setState({
            notes : state.filteredNotes
        })
    }

    componentDidMount(){
        this.loadNotes()
        NotesStore.subscribe(this.loadNotes)
    }

    render(){
        const { notes } = this.state
        return (
            <View style={styles.container}>
                { notes.map((note) => 
                    <View style={styles.item} key={note.id}>
                        <Note {...note} />
                    </View>
                )}
            </View>
        )
    }
}

export default ListNotes