import React from 'react'
import PropTypes from 'prop-types'
import { HeaderContainer, HeaderTitle } from '../styled-components/headerStyles'

const Header = props => {
  return (
    <HeaderContainer>
        <HeaderTitle>
            Battleship
        </HeaderTitle>
    </HeaderContainer>
  )
}

Header.propTypes = {}

export default Header
