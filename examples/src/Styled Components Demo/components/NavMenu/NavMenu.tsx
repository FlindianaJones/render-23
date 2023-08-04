import React, { PropsWithChildren, ReactNode } from 'react'
import { Container } from './styles'

interface NavMenuProps {
  direction?: string
  children?: ReactNode
}

const NavMenu = ({children, direction}: NavMenuProps) => {
  return (
    <>
      <Container direction={direction}>
        {children}
      </Container>
    </>
  )
}

export default NavMenu