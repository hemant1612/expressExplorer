import React from 'react'
import {
  Grid,
  Image,
  Header,
  Segment,
  Divider,
  List,
  Icon
} from 'semantic-ui-react'
import './About.css'

const About = () => (<div className="root-div">
  <Grid centered="centered" columns={1}>
    <Grid.Row>
      <Grid.Column className="sixteen wide mobile fourteen wide tablet ten wide computer">
        <Segment>
          <Header as='h3'>This project is my solution to FreeCodeCamp's &nbsp;
            <a href="https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app">
              NightLife Coordination App Challenge</a>.
          </Header>
          <Divider fitted="fitted"/>
          <Header as='h3'>
            This is implemented using MERN stack & is my first project using REDUX.
          </Header>

          <Header as="h4">
            It fulfills the following user stories :
          </Header>
          <List>
            <List.Item>
              <List.Icon name='checkmark box'/>
              <List.Content>
                <List.Header>View all bars</List.Header>
                <List.Description>As an unauthenticated user, I can view all bars in my area.</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='checkmark box'/>
              <List.Content>
                <List.Header >Add a user</List.Header>
                <List.Description>
                  As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='checkmark box'/>
              <List.Content>
                <List.Header >
                  Remove a user</List.Header>
                <List.Description>As an authenticated user, I can remove myself from a bar if I no longer want to go there.</List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='checkmark box'/>
              <List.Content>
                <List.Header >
                  Save preferences</List.Header>
                <List.Description>As an unauthenticated user, when I login I should not have to search again.</List.Description>
              </List.Content>
            </List.Item>
          </List>
          <Divider hidden="hidden"/>

          <Header as='h3'>Tech Used:
          </Header>

          <div>
            <Image.Group size='tiny'>
              <Image src='./images/node-logo.png' circular="circular"/>
              <Image src='./images/react-logo.png' circular="circular"/>
              <Image src='./images/redux-logo.png' circular="circular"/>
              <Image src='./images/mongo-logo.png' circular="circular"/>
              <Image src='./images/yelp-logo.png' circular="circular"/>
              <Image src='./images/semantic-logo.png' circular="circular"/>

            </Image.Group>
          </div>

          <Header>
            Source code:
          </Header>
          <a className="git-link" href="https://github.com/hemant1612">
            <Icon name='github' size='huge'/>
          </a>

        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</div>)

export default About
