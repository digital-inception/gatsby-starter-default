import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    // 12 column grid (set up as 14 colums to create the outer gutters).
    // Change the number of columns if required.
    grid-template-columns: 0 repeat(12, minmax(auto, 10rem)) 0;
    grid-template-rows: 90px calc(100vh - 90px) auto; 
    gap: 0 2rem;

        // 0px - 575px
        @media ${props => props.theme.breakpoints.xs} {
            grid-template-columns: 0 repeat(6, 1fr) 0;
            grid-gap: 0 1rem;
        }

        // 576px - 767px
        @media ${props => props.theme.breakpoints.sm} {
            grid-template-columns: 0 repeat(6, 1fr) 0;
            grid-gap: 0 1rem;
        }

        // 768px - 1023px
        @media ${props => props.theme.breakpoints.md} {
            grid-template-columns: 0 repeat(8, 1fr) 0;
            grid-gap: 0 1rem;
        }

        // 1024px - 1279px
        @media ${props => props.theme.breakpoints.lg} {
            grid-template-columns: 0 repeat(8, 1fr) 0;
            grid-gap: 0 1rem;
        }

        // 1280px- 1599px
        @media ${props => props.theme.breakpoints.xl} {
            grid-template-columns: 0 repeat(12, minmax(auto, 8rem)) 0;
            grid-gap: 0 2rem;
        }

        // 1600px - 1920px
        @media ${props => props.theme.breakpoints.xxl} {
            grid-template-columns: 0 repeat(12, minmax(auto, 10rem)) 0;
            grid-gap: 0 2rem;
        }
`