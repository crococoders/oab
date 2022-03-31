import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 100px 0 100px;
    
    position: sticky;
    top: 0;
    left: 0;
    z-index: 200;
    
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    height: 80px;
    min-height: 50px;
    
    background: white;
    box-shadow: 0 2px 2px -2px rgba(0,0,0,.2);
    @media only screen and (max-width: 600px) {
        padding: 0 20px 0 20px !important;
    }
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: ${ (props : {isMobile: Boolean}) => props.isMobile ? 'column' : 'row'};
`;

export const StyledLink = styled.a`
    padding: 10px 0 10px 0;
    margin: 0 30px 0 30px;
    font-weight: 500;
    padding-bottom: 10px;
    
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1em;
      
    &::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
    
    &:hover {
        &::before {
            transform: scaleX(1);
        }
    }
`;

export const LogoComponent = styled.div`
    cursor: pointer;
    padding: 10px 30px 10px 30px;
`;