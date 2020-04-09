import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    
    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        href='/'
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='/folio'
                        name='portfolio'
                        active={activeItem === 'portfolio'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='/contact'
                        name='contact'
                        active={activeItem === 'contact'}
                        onClick={this.handleItemClick}
                    />
                </Menu>

            </div>
        )
    }
}
