import React from 'react'
import { Segment, Grid, Divider, Image } from 'semantic-ui-react'
import '../Home.css'

const About = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src={require('../Images/Me.JPG')} />
        </p>
      </Grid.Column>
      <Grid.Column>
        <h1>Niko Dyer</h1>
        <span>Web Developer and Software Engineer</span>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget est dapibus ex sagittis cursus a sed velit. Proin id quam dignissim, efficitur ante consectetur, maximus sem. Donec turpis nulla, sollicitudin scelerisque orci sed, bibendum aliquet nisi. Nam ullamcorper nisl odio, eu ultrices sapien gravida sed. Ut consectetur tincidunt augue, sed sodales ipsum lobortis sed. Maecenas eros mi, aliquam id tincidunt nec, dapibus nec leo. Nunc viverra, risus in scelerisque fringilla, nisi elit consectetur risus, feugiat maximus magna orci pharetra velit. Integer at sapien nec dolor convallis consequat. Etiam lacus augue, lacinia eu accumsan a, tincidunt id erat. Nam a semper lorem. Suspendisse placerat justo a lacinia pretium. Nullam et risus tristique, ultricies augue sed, maximus tellus. Maecenas finibus purus diam, ut auctor tortor consectetur vitae. Donec nunc tortor, venenatis sed condimentum non, dapibus nec nulla. Cras vitae purus eget ligula sagittis placerat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;

Nam fermentum quis augue sed tincidunt. Curabitur dolor magna, rhoncus sit amet tellus sed, sollicitudin lacinia nulla. Cras consectetur odio sit amet massa consequat blandit. Pellentesque id mauris nulla. Maecenas sit amet eleifend est. Duis porta hendrerit placerat. Phasellus quis augue ut turpis interdum ultricies non vitae ex. Etiam eleifend iaculis faucibus. Cras pharetra scelerisque diam, eget elementum ipsum. Vivamus iaculis vel leo vel mattis. Quisque tellus nulla, hendrerit ac vestibulum vel, convallis et turpis. Nullam eros nulla, tristique sit amet dolor sit amet, condimentum porta magna. Proin nibh libero, molestie sed sagittis vel, consequat nec magna.

Aliquam lacinia mauris ut mauris congue, non aliquet libero euismod. Quisque pellentesque consectetur turpis vitae blandit. Nam semper maximus hendrerit. Donec in augue lacus. Donec egestas facilisis magna, nec tincidunt augue viverra ut. Ut metus ipsum, convallis id tincidunt et, iaculis quis dui. Vivamus facilisis sapien quis sapien iaculis, eu condimentum libero lacinia.

Etiam in eros urna. Nunc nec nisl in tellus scelerisque rhoncus et a lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ornare libero ut tincidunt fringilla. Morbi euismod lorem a ex dapibus, eu volutpat sem pellentesque. Nulla facilisi. Pellentesque vehicula elit quis mauris viverra, nec rutrum nibh porttitor. Donec tellus urna, pretium ac dui eu, molestie sollicitudin arcu. Praesent a aliquet eros. Ut efficitur lacus ac lacus vestibulum, id luctus est tempor. Nulla facilisi. Donec malesuada in diam sed pulvinar. Pellentesque cursus placerat urna, non fermentum metus lobortis vel. Mauris quis odio vitae felis bibendum facilisis.</p>
      </Grid.Column>
    </Grid>

    <Divider vertical>▷▷▷</Divider>
  </Segment>
)

export default About