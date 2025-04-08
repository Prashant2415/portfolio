import styled from "styled-components"

const BannerDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

const BannerHeading = styled.h2`
    font-size: 32px;
    font-weight: 600;
    margin: 0;
`
export const BannerText = ({svg,text})=>{
    return(
        <BannerDiv className="banner-text">
            {svg}
            <BannerHeading>{text}</BannerHeading>
        </BannerDiv>
    )
}