// react
import React from 'react'

// redux: state and actions related stuff
import { connect } from 'react-redux'
import { toggleDrawer } from '../actions/actionCreators'
import PropTypes from 'prop-types'

// material ui
import {
  Toolbar,
  ToolbarGroup,
  ToolbarTitle
} from 'material-ui/Toolbar'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'

class ToolBar extends React.Component {
  render () {
    return (
      <Toolbar>
        <ToolbarGroup firstChild>
          <IconMenu
            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}
            onClick={this.props.toggleDrawer}
            open={false}
            iconButtonElement={
              <IconButton>
                <NavigationMenu />
              </IconButton>
            }
          />
          <ToolbarTitle text='StaCI' />
        </ToolbarGroup>
        <ToolbarGroup lastChild>
          Test!
        </ToolbarGroup>
      </Toolbar>
    )
  }
}

export default connect(
  undefined,
  { toggleDrawer }
)(ToolBar)

ToolBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
}
