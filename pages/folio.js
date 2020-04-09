import { Container } from 'semantic-ui-react'
import Nav from '../components/Nav'
import Portfolio from '../components/portfolio'

export default ({ children }) => (
    <Container style={{ margin: 20 }}>
        <Nav />
        <Portfolio />
        {children}
    </Container>
)
