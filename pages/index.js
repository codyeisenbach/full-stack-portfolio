import { Container } from 'semantic-ui-react'
import Nav from '../components/Nav'

export default ({children}) => (
  <Container style={{ margin: 20 }}>
    <Nav/>
    {children}
  </Container>
)
