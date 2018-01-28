import React, {Component} from 'react'
import {Menu, Segment, Icon, Button} from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (<div className="nav-root">
      <Segment inverted="true">
        <Menu inverted="inverted" pointing="pointing" secondary="secondary">
          <Menu.Item>
            <Icon name='mixcloud' size='big'/>
          </Menu.Item>

          <Menu.Menu position='right'>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}/>
              <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
              <Menu.Item name='signIn' active={activeItem === 'signIn'} onClick={this.handleItemClick}/>
          </Menu.Menu>

        </Menu>
      </Segment>
    </div>)
  }
}
