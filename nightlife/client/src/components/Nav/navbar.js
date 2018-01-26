import React, {Component} from 'react'
import {Button, Dropdown, Menu, Grid, Icon} from 'semantic-ui-react'
import './navbar.css'
export default class MenuExampleSizeSmall extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (<Menu size='small'>
      <Menu.Item>
        <Icon name='asterisk' size='big'/>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item name='home' active={activeItem === ''} onClick={this.handleItemClick}/>
        <Menu.Item name='about' active={activeItem === ''} onClick={this.handleItemClick}/>
        <Menu.Item>
          <Button >Sign Up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button >Logout</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>)
  }
}
