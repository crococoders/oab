import React from 'react';
import { HeaderContainer, LinksContainer, StyledLink, LogoComponent } from './atoms';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';

const Header = ({}) => {
    return (
        <HeaderContainer>
            <Link href={"./"} passHref>
                <LogoComponent>
                    <Image src={Logo} width={"60%"} height={"60%"} alt={"Logo"}/>
                </LogoComponent>
            </Link>
            <LinksContainer>
                <Link passHref href={"/juniors"}>
                    <StyledLink>Juniors</StyledLink>
                </Link>
                <Link passHref href={"/students"}>
                    <StyledLink >Students</StyledLink>
                </Link>
                <Link passHref href={"/graduates"}>
                    <StyledLink>Graduates</StyledLink>
                </Link>
                <Link passHref href={"/companies"}>
                    <StyledLink>Companies</StyledLink>
                </Link>
                <Link passHref href={"/specialists"}>
                    <StyledLink>Specialists</StyledLink>
                </Link>
            </LinksContainer>
        </HeaderContainer>
    );
}

export default Header;