import React from 'react'
import { Header, Image, Segment } from 'semantic-ui-react'
import '../Home.css'

const Home = () => (
    <div>
        <Header as='h2' attached='top'>
            React Library
        </Header>
        <Segment attached>
            Welcome to the React Library page. The Navbar at the top of the screen will take you anywhere you want to go. 
        </Segment>
        <Image
            fluid
            className='background'
            src='https://wallpapercave.com/wp/4vX97Bu.jpg'
        />
    </div>
)

export default Home