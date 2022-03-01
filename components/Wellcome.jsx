import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Fade from 'react-reveal/Fade';


const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 3000,
  arrows: false
};

function Wellcome() {

  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };

  return <>
    <Box component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F',mt:-1 }} >
    <Fade bottom>
      <Container maxWidth="lg" sx={{
        py: 4,
        display: 'flex', justifyContent: {
          md: 'space-between',
          xs: 'center'
        }, alignItems: 'center', flexDirection: {
          md: 'row',
          xs: 'column'
        }, position: "relative"
      }} >
        <Box component={'div'} sx={{
          width: {
            md: '60%',
            xs: '90%'
          }, display: 'flex', justifyContent: 'center', alignItems: {
            md: 'start',
            xs: 'center'
          }, flexDirection: 'column',
        }} >
          <Typography variant="h2" sx={{
            color: '#FFFFFF', fontWeight: 700, lineHeight: "67.77px", fontStyle: 'italic', textAlign: {
              md: 'start',
              xs: 'center'
            }
          }} gutterBottom component="div">
            WELCOME TO THE
            JUNGLE - OX <Box component={'span'} sx={{ color: '#2196F5' }} >NFT</Box> CLUB
          </Typography>
          <Typography variant="subtitle" sx={{
            fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
              md: 'start',
              xs: 'center'
            }
          }} component="div">
            JUNGLE OX CLUB | KOUPREY is the first ever NFT collection by Kon Khmer. JOC is a collection of 10,000 unique digital NFT collectibles on the Polygon blockchain. Each Jungle Ox works as your membership for Jungle Ox social club and HelloTalk loyalty program and allows authentic wallet connection to your HelloTalk chat application and social timeline to be used as verified profile photo. Mint your KOUPREY today to get more future benefits and perks unlocked by community roadmap activation
          </Typography>
          <Button sx={{ p: 0, mt: 4 }} variant="text">
            {/* <Image
              src="/assests/Buttons/BuyOX.png"
              alt="Logo"
              width={220}
              height={60}
            /> */}
            <Box component={'div'} sx={{ position: 'relative' }} >
              <Image
                src="/assests/light-bg.png"
                alt="Logo"
                width={260}
                height={70}
              />
              <Typography className='centered' sx={{
                "&:hover": {
                  color: '#deecf8'
                }, width: '100%', fontSize: '18px', color: 'white', fontWeight: 'bold', paddingBottom: '12px'
              }} variant="h5" component="div">
                BUY ON OPENSEA
              </Typography>
            </Box>
          </Button>
        </Box>
        <Box component={'div'} sx={{
          width: {
            md: '40%',
            xs: '100%'
          },
          mt: {
            md: 0,
            xs: 8
          },
          ml: {
            md: 4
          },
          position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
        }} >
          <Box onClick={next} sx={{ position: 'absolute', top: 0, right: 0, zIndex: 99999, cursor: 'pointer' }} >
            <Image
              src="/assests/right.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Box>
          <Slider ref={c => (slider.current = c)} style={{ width: '100%' }} {...settings}>
            <Box>
              <img style={{ width: '100%' }} src="/assests/main.png" alt="1" />
            </Box>
            <Box>
              <img style={{ width: '100%' }} src="/assests/main.png" alt="1" />
            </Box>
            <Box>
              <img style={{ width: '100%' }} src="/assests/main.png" alt="1" />
            </Box>
            <Box>
              <img style={{ width: '100%' }} src="/assests/main.png" alt="1" />
            </Box>
            <Box>
              <img style={{ width: '100%' }} src="/assests/main.png" alt="1" />
            </Box>
          </Slider>
          <Box onClick={previous} sx={{ position: 'absolute', bottom: "35px", left: 0, zIndex: 99999, cursor: 'pointer' }} >
            <Image
              src="/assests/left.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Box>
          <Button sx={{ p: 0, mt: -4 }} variant="text">
            <Box component={'div'} sx={{ position: 'relative' }} >
              <Image
                src="/assests/BuyOnOx-bg.png"
                alt="Logo"
                width={300}
                height={60}
              />
              <Typography className='centered' sx={{
                "&:hover": {
                  color: '#deecf8'
                }, width: '100%', fontSize: '18px', color: 'white', fontWeight: 'bold', pb: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize'
              }} variant="h5" component="div">
                Mint Your Ox <ArrowForwardIcon sx={{ ml: 8 }} />
              </Typography>

            </Box>
          </Button>
        </Box>
      </Container>
      </Fade>
    </Box>
  </>
}

export default Wellcome;