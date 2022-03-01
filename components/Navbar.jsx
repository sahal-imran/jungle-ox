import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-scroll";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return <>
    <Box component={'div'} sx={{ zIndex: 9999, width: '100%', backgroundColor: '#070C0F', pt: 2, pb: 1 }} >
      <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }} >
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Image
            src="/assests/logo.png"
            alt="Logo"
            width={150}
            height={120}
          />
        </Box>
        <Box component={'div'} sx={{
          display: {
            md: "flex",
            xs: "none"
          }, justifyContent: 'space-between', alignItems: 'center'
        }} >
          <Link
            duration={500}
            className={"navLink"}
            to={'DISTRIBUTION'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            BUY AN OX
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'ROADMAP'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            ROADMAP
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'TEAM'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            Team
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={'WELLCOMETOTHEJUNGLE'}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            GALLERY
          </Link>
          <Link
            duration={500}
            className={"navLink"}
            to={''}
            spy={true}
            activeClass={"active"}
            smooth={true}
          >
            PEDIGREE
          </Link>
          <Button sx={{ p: 0, m: 0, }} variant="text">
            {/* <Image
              src="/assests/Buttons/wallet.png"
              alt="Logo"
              width={200}
              height={60}
            /> */}
            <Box component={'div'} sx={{ position: 'relative' }} >
              <Image
                src="/assests/BuyOnOx-bg.png"
                alt="Logo"
                width={200}
                height={50}
              />
              <Typography className='centered' sx={{
                "&:hover": {
                  color: '#deecf8'
                }, width: '100%', fontSize: '14px', color: 'white', fontWeight: '600',pb:1
              }} variant="h5" component="div">
                Connect Wallet
              </Typography>
            </Box>
          </Button>
        </Box>
        {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
          color: '#FFFFFF', fontSize: '50px', cursor: 'pointer', display: {
            md: 'none'
          }
        }} /> : < MenuIcon onClick={toggleDrawer} sx={{
          display: {
            md: 'none'
          }, color: '#FFFFFF', fontSize: '50px', cursor: 'pointer'
        }} />}
      </Container>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer'
      >
        <Box component={'div'} sx={{
          width: '100%', height: '100vh',
          display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', backgroundColor: '#0A1227'
        }} >
          <Box component={'div'} sx={{ py: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Image
              src="/assests/logo.png"
              alt="Logo"
              width={150}
              height={120}
            />
          </Box>
          <Box component={'div'} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'DISTRIBUTION'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              BUY AN OX
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'ROADMAP'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              ROADMAP
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'TEAM'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              Team
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={'WELLCOMETOTHEJUNGLE'}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              GALLERY
            </Link>
            <Link
              onClick={toggleDrawer}
              duration={500}
              className={"navLink1"}
              to={''}
              spy={true}
              activeClass={"active"}
              smooth={true}
            >
              PEDIGREE
            </Link>
            <Button sx={{ p: 0, m: 0, }} variant="text">
              <Image
                src="/assests/Buttons/wallet.png"
                alt="Logo"
                width={200}
                height={60}
              />
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  </>
}

export default Navbar;
