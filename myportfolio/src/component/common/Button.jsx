import styled from "styled-components"
const ButtonImageText = styled.button`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background:#141414;
    color: #fff;
    transition: background 0.3s ease;
    font-family: "Iceland", sans-serif;
    font-weight: 400;
    font-style: normal;
    &:hover{
        background: #202020;
        
    }

     @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 20px;
        gap: 10px;
        width: 100%;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 20px;
        gap: 10px;
        width: 100%;
    }
`
const AnchorText = styled.a`
    text-decoration: none;
`
export const ButtonText =({svg, title, link})=>{
    return(
        <AnchorText target="_blank" href={link} download={title === "Resume" ? true : undefined}>
            <ButtonImageText>{svg}{title}</ButtonImageText>
        </AnchorText>
    )
}