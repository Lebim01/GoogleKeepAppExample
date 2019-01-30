/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, ToastAndroid } from 'react-native';
import Drawer from 'react-native-drawer'
import { ControlPanel, ActionBar, WritePanel, ListNotes, MainView } from './Components'
import DrawerStore from 'src/stores/DrawerStore'
import NotesStore from 'src/stores/NotesStore'

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}

export default class App extends Component {

    state = {
        drawerOpen : false,
        newNote : { title : '', note : '' }
    }

    constructor(props){
        super(props)
        this.setOpenDrawer = this.setOpenDrawer.bind(this)
        this.onChangeNewNote = this.onChangeNewNote.bind(this)
        this.saveNote = this.saveNote.bind(this)
    }

    setOpenDrawer(val){
        this.setState({
            drawerOpen : val
        })
    }

    componentDidMount(){
        DrawerStore.subscribe(this.drawerSubscribe.bind(this))
    }

    drawerSubscribe(){
        const state = DrawerStore.getState()
        switch(state.lastAction){
            case 'OPEN_DRAWER': 
                if(!this.state.drawerOpen)
                    this.drawer.open()
                else
                    this.drawer.close()
                break
            case 'CLOSE_DRAWER':
                this.drawer.close()
                break
        }
    }

    onChangeNewNote(variable, value){
        this.setState({
            newNote : {
                ...this.state.newNote,
                [variable] : value
            }
        })
    }

    saveNote(){
        let newNote = this.state.newNote
        NotesStore.dispatch({
            type : 'ADD_NOTE',
            note : newNote
        })

        this.setState({
            newNote : { title : '', note : '' }
        })
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <ActionBar></ActionBar>
                <Drawer
                    ref={c => this.drawer = c}
                    type="overlay"
                    content={<ControlPanel />}
                    tapToClose={true}
                    openDrawerOffset={0.2} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(2-ratio)/2 }
                    })}
                    onOpen={() => this.setOpenDrawer(true)}
                    onClose={() => this.setOpenDrawer(false)}
                >
                    <MainView>
                        <WritePanel save={this.saveNote} newNote={this.state.newNote} onChange={this.onChangeNewNote} />
                        <ListNotes />
                    </MainView>
                </Drawer>
            </View>
        );
    }
}
