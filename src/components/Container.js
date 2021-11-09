import React from 'react'
import { ContainerWrapper } from '../elements/ContainerElements'
import { Header } from "../components"


export const Container = ({ children }) => {
    return <ContainerWrapper>
                <Header>{children}</Header>
                {children}
            </ContainerWrapper>
}