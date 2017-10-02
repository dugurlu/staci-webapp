import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { closeDrawer } from '../actions/actionCreators'

import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import MenuItem from 'material-ui/MenuItem'
import { ListItem } from 'material-ui/List'
import ContentCreate from 'material-ui/svg-icons/content/create'
import FileFileUpload from 'material-ui/svg-icons/file/file-upload'
import ActionHelp from 'material-ui/svg-icons/action/help'
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'

const mapStateToProps = (state) => ({
  drawerOpen: state.uiState.drawerOpen
})

class MyDrawer extends React.Component {
  render () {
    const open = this.props.drawerOpen || false
    return (
      <Drawer
        docked={false}
        open={open}
        onRequestChange={this.props.closeDrawer}
      >
        <Toolbar>
          <ToolbarGroup>
            <ToolbarTitle text='StaCI' />
          </ToolbarGroup>
        </Toolbar>

        <NavLink exact to='/assess' activeClassName='active'>
          <ListItem leftIcon={<ContentCreate />} onClick={this.props.closeDrawer}>
            New assessment
          </ListItem>
        </NavLink>
        <NavLink exact to='/load' activeClassName='active'>
          <MenuItem leftIcon={<FileFileUpload />} onClick={this.props.closeDrawer}>
            Load assessment
          </MenuItem>
        </NavLink>

        {/* TODO: add functionality for these menu item stubs &
            display contex-aware, e.g. the logout only if logged in */}
        <Divider />
        <NavLink exact to='/help' activeClassName='active'>
          <MenuItem leftIcon={<ActionHelp />} onClick={this.props.closeDrawer}>
            Help
          </MenuItem>
        </NavLink>
        <NavLink exact to='/logout' activeClassName='active'>
          <MenuItem leftIcon={<PowerSettingsNew />} onClick={this.props.closeDrawer}>
            Sign out
          </MenuItem>
        </NavLink>
      </Drawer>
    )
  }
}

export default connect(
  mapStateToProps,
  { closeDrawer }
)(MyDrawer)

MyDrawer.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
}
