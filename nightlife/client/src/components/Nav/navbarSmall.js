import React, {Component} from 'react'
import { Sidebar,Segment,Button,Menu,Image,Icon,Header,Container } from 'semantic-ui-react'
import './navbarSmall.css';

class SidebarLeftPush extends Component {
  state = {
    visible: false
  }

  toggleVisibility = () => this.setState({
    visible: !this.state.visible
  })

  render() {
    const {visible} = this.state
    return (
    <div class="nav-small-root">
      <Container className="nav-small-header">
        <Icon circular name='content' onClick={this.toggleSidebar} />
      </Container>
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled'
           vertical="vertical" inverted="inverted">
          <Menu.Item name='home'>
            <Icon name='home'/>
            Home
          </Menu.Item>
          <Menu.Item name='gamepad'>
            <Icon name='gamepad'/>
            Games
          </Menu.Item>
          <Menu.Item name='camera'>
            <Icon name='camera'/>
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic="basic">
            <Header as='h3'>Application Content</Header>
            <Image src='/assets/images/wireframe/paragraph.png'/>
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
  }
}

export default SidebarLeftPush
