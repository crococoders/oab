import React, { useState } from 'react';
import { HeaderContainer, LinksContainer, StyledLink, LogoComponent } from './atoms';
import Link from 'next/link';
import Image from 'next/image';
import Logo from 'assets/icons/logo.svg';
import { HamburgerIcon } from '@chakra-ui/icons';
import useIsMobile from '../../utils/hooks/useIsMobile';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
} from '@chakra-ui/react'
import { useRouter } from "next/router";

const Header = ({}) => {
    const isMobile = useIsMobile();
    const { isOpen, onOpen, onClose } = useDisclosure()//onOpen
    const [isModalOpen, setModalOpen] = useState(false)
    const router = useRouter();
    
    const openDrawer = () => {
        setModalOpen(true)
        onOpen();
    }

    const redirect = (e, path) => {
        e.preventDefault();
        setModalOpen(false);
        router.push(path);
    }

    const Menu = () => (
        <LinksContainer isMobile={isMobile}>
            <Link passHref href={"/juniors"}>
                <StyledLink onClick={(e) => redirect(e, '/juniors')}>Juniors</StyledLink>
            </Link>
            <Link passHref href={"/students"}>
                <StyledLink onClick={(e) => redirect(e, '/students')}>Students</StyledLink>
            </Link>
            <Link passHref href={"/graduates"}>
                <StyledLink onClick={(e) => redirect(e, '/graduates')}>Graduates</StyledLink>
            </Link>
            <Link passHref href={"/companies"}>
                <StyledLink onClick={(e) => redirect(e, '/companies')}>Companies</StyledLink>
            </Link>
            <Link passHref href={"/specialists"}>
                <StyledLink onClick={(e) => redirect(e, '/specialists')}>Specialists</StyledLink>
            </Link>
        </LinksContainer>
    );

    const OurLogo = () => (
        <Link href={"/"} passHref>
            <LogoComponent>
                <Image src={Logo} width={"60%"} height={"60%"} alt={"Logo"}/>
            </LogoComponent>
        </Link>
    )

    return (
        <HeaderContainer>
            <OurLogo />
            {
                !isMobile ?
                <Menu />
                : <HamburgerIcon w={7} h={7} onClick={openDrawer}/>
            }

            {isModalOpen && <Drawer onClose={onClose} isOpen={isOpen} size={"full"}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader style={{display: 'flex', alignItems: 'center'}}>
                        {`[Here goes the name of the project]`}
                        <OurLogo />
                        <DrawerCloseButton />
                    </DrawerHeader>
                    <DrawerBody>
                        <Menu/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            }
        </HeaderContainer>
    );
}

export default Header;