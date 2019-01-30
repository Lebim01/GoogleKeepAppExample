import React from 'react'
import Drawer from 'react-native-drawer'

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
}

class SideMenu extends React.Component {
    render(){
        return (
            <Drawer
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
            >
                    { this.props.children }
            </Drawer>
        )
    }
}

export default SideMenu