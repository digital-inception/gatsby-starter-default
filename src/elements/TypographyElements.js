import styled from "styled-components";

export const P = styled.p`
    margin: ${props => props.margin ? props : 0};
    font-size: ${props => {
        switch(props.size) {
            case "medium":
                return "18px"
            case "small":
                return "16"
            case "xSmall":
                return "14"
            default:
                return "18px"
        }
    }};
    line-height: ${props => {
        switch(props.size) {
            case "medium":
                return "23px"
            case "small":
                return "22"
            case "xSmall":
                return "18"
            default:
                return "23px"
        }
    }};
    text-decoration: ${props =>
        props.textDecoration ? props.textDecoration : "none"};
    font-weight: ${props => {
        switch(props.weight) {
            case "normal":
                return 400
            case "bold":
                return 700
            default:
                return 400
        }
    }};
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "light3":
                return props.theme.colors.light3
            default:
                return props.theme.colors.dark1
        }
    }};
    text-align: ${props => props.textAlign ? props.textAlign : "left"}
`

export const H1 = styled.h1`
    font-size: 36px;
    line-height: 40px;
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "light3":
                return props.theme.colors.light3
            default:
                return props.theme.colors.dark1
        }
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props : 0};
`

export const H2 = styled.h2`
    font-size: 24px;
    line-height: 30px;
    color: ${props => {
        switch(props.color) {
            case "dark1":
                return props.theme.colors.dark1
            case "dark2":
                return props.theme.colors.dark2
            case "dark3":
                return props.theme.colors.dark3
            case "light1":
                return props.theme.colors.light1
            case "light2":
                return props.theme.colors.light2
            case "light3":
                return props.theme.colors.light3
            default:
                return props.theme.colors.dark1
        }
    }};
    font-weight: 400;
    text-align: ${props => props.textAlign ? props.textAlign : "left"};
    margin: ${props => props.margin ? props : 0};
`