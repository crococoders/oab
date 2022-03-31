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
    margin-bottom: 50px;
`;

export const LinksContainer = styled.div`
`;

export const StyledLink = styled.a`
    padding: 10px 0 10px 0;
    margin: 0 30px 0 30px;
    font-weight: 500;
`;

export const LogoComponent = styled.div`
    cursor: pointer;
    padding: 10px 30px 10px 30px;
`;