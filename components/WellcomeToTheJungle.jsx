import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
    backgroundColor: 'transparent'
}));

function WellcomeToTheJungle() {
    return (
        <>
            <Box id={'WELLCOMETOTHEJUNGLE'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F',mt:-1 }} >
            <Fade bottom>
                <Container maxWidth="lg" sx={{
                    py: 8,
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'
                }} >
                    <Typography variant="h2" sx={{
                        color: '#2196F5', fontSize: '36px', fontWeight: 500, lineHeight: "67.77px", fontStyle: 'normal',textAlign:'center'
                    }} gutterBottom component="div">
                        WELCOME TO THE JUNGLE
                    </Typography>
                    <Typography variant="subtitle" sx={{
                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "32.05px", fontStyle: 'normal', textAlign: {
                            md: 'start',
                            xs: 'center'
                        }, textAlign: 'center'
                    }} component="div">
                        When you buy a Jungle Ox (Bos sauveli), you are buying a part of Khmer history and a rare piece of art. Jungle Ox | Kouprey is the national animal of Cambodia and a historic national heritage. Once you own a an Ox you are becoming part of a social club which will offer many benefits over time activated by our timeline. Our Jungle Ox NFT collection is the first ever NFT collection done in Cambodia and will make history, and owning a NFT in our collection will be a great future investment as well. Additionally, your Ox can serve as your digital identity, and open digital doors for you.
                    </Typography>
                    <Box sx={{ flexGrow: 1, width: '100%', mt: 8 }}>
                        <Grid container columns={{ md: 5, sm: 2, xs: 1 }} spacing={3}>
                            <Grid item xs={1}>
                                <Item>
                                    <Box sx={{ width: '100%',height:'270px' }} >
                                        <img style={{ width: '100%',height:'100%',objectFit:'contain' }} src="/assests/wellcome1.png" alt="" />
                                    </Box >
                                    <Box component={'div'} sx={{ position: 'relative', width: '100%' }} >
                                        <Box sx={{}}>
                                            <Image
                                                src="/assests/wellcome-detail-sec-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={250}
                                            />
                                        </Box>
                                        <Typography className='centered' variant="subtitle" sx={{
                                            fontSize: '12px', color: '#FFFFFF', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center'
                                        }} component="div">
                                            10,000 Provably-rare
                                            Jungle Ox tokens
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Box sx={{ width: '100%',height:'270px' }} >
                                        <img style={{ width: '100%',height:'100%',objectFit:'contain' }} src="/assests/wellcome2.png" alt="" />
                                    </Box >
                                    <Box component={'div'} sx={{ position: 'relative', width: '100%' }} >
                                        <Box sx={{}}>
                                            <Image
                                                src="/assests/wellcome-detail-sec-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={250}
                                            />
                                        </Box>
                                        <Typography className='centered' variant="subtitle" sx={{
                                            fontSize: '12px', color: '#FFFFFF', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center'
                                        }} component="div">
                                            Fair Launch,
                                            fair distribution:
                                            All Ox cost 59 MATIC
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Box sx={{ width: '100%',height:'270px' }} >
                                        <img style={{ width: '100%',height:'100%',objectFit:'contain' }} src="/assests/wellcome2.png" alt="" />
                                    </Box >
                                    <Box component={'div'} sx={{ position: 'relative', width: '100%' }} >
                                        <Box sx={{}}>
                                            <Image
                                                src="/assests/wellcome-detail-sec-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={250}
                                            />
                                        </Box>
                                        <Typography className='centered' variant="subtitle" sx={{
                                            fontSize: '12px', color: '#FFFFFF', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center'
                                        }} component="div">
                                            Ownership and commercial usage rights given to the
                                            consumer over their NFT
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Box sx={{ width: '100%',height:'270px' }} >
                                        <img style={{ width: '100%',height:'100%',objectFit:'contain' }} src="/assests/wellcome1.png" alt="" />
                                    </Box >
                                    <Box component={'div'} sx={{ position: 'relative', width: '100%' }} >
                                        <Box sx={{}}>
                                            <Image
                                                src="/assests/wellcome-detail-sec-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={250}
                                            />
                                        </Box>
                                        <Typography className='centered' variant="subtitle" sx={{
                                            fontSize: '12px', color: '#FFFFFF', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center'
                                        }} component="div">
                                            Use as verified HelloTalk
                                            social profile photo
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                            <Grid item xs={1}>
                                <Item>
                                    <Box sx={{ width: '100%',height:'270px' }} >
                                        <img style={{ width: '100%',height:'100%',objectFit:'contain' }} src="/assests/wellcome1.png" alt="" />
                                    </Box >
                                    <Box component={'div'} sx={{ position: 'relative', width: '100%' }} >
                                        <Box sx={{}}>
                                            <Image
                                                src="/assests/wellcome-detail-sec-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={250}
                                            />
                                        </Box>
                                        <Typography className='centered' variant="subtitle" sx={{
                                            fontSize: '12px', color: '#FFFFFF', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center'
                                        }} component="div">
                                            Gain additional
                                            benefits through roadmap activations
                                        </Typography>
                                    </Box>
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                </Fade>
            </Box>
        </>
    )
}

export default WellcomeToTheJungle

