import React from 'react'
import { Toolbar } from 'react-native-material-ui';
import DrawerStore from 'src/stores/DrawerStore'
import NotesStore from 'src/stores/NotesStore'

class ActionBarCustom extends React.Component {

    openDrawer(){
        DrawerStore.dispatch({
            type : 'OPEN_DRAWER'
        })
    }

    search(text){
        NotesStore.dispatch({
            type : 'SEARCH_CHANGE',
            search : text
        })
    }

    cleanSearch(){
        NotesStore.dispatch({
            type : 'SEARCH_CHANGE',
            search : ''
        })
    }

    render(){
        return (
            <Toolbar
                leftElement="menu"
                centerElement="Notes"
                searchable={{
                    autoFocus: true,
                    placeholder: 'Search',
                    onChangeText : this.search,
                    onSearchClosed : this.cleanSearch
                }}
                style={{
                    container: { backgroundColor: '#f3b60c' },
                }}
                onLeftElementPress={this.openDrawer}
            />
        )
    }
}

export default ActionBarCustom