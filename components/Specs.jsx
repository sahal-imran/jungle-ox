import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';

function specs() {
    return (
        <>
            <Box id={'SPECS'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F',mt:-1 }} >
            <Fade bottom>
                <Container maxWidth="lg" sx={{
                    py: 8,
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }} >
                    <Box component={'div'} sx={{
                        display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        },
                    }} >
                        <Box component={'div'} sx={{
                            width: {
                                md: '50%',
                                xs: '90%'
                            }, display: 'flex', justifyContent: 'center', alignItems: {
                                md: 'start',
                                xs: 'center'
                            }, flexDirection: 'column',
                        }} >
                            <Typography variant="h2" sx={{
                                color: '#2196F5', fontSize: '36px', fontWeight: 500, lineHeight: "67.77px", fontStyle: 'normal', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }
                            }} gutterBottom component="div">
                                THE SPECS
                            </Typography>
                            <Typography variant="subtitle" sx={{
                                fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "32.05px", fontStyle: 'normal', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }
                            }} component="div">
                                Each Jungle OX|KOUPREY NFT is unique and programmatically generated from over 120 possible traits, including horns, expressions, headwear, clothing, and more. All OX's are awesome, but some are rarer than others.<br /><br />
                                The OX's are stored as ERC-721 tokens on the Polygon blockchain and hosted on IPFS. Purchasing an OX costs 59 MATIC.<br /><br />
                                Once you mint an Ox, you can connect your HelloTalk social app to update your profile with verified proof of ownership
                            </Typography>
                        </Box>
                        <Box component={'div'} sx={{
                            width: {
                                md: '40%',
                                xs: '100%'
                            },
                            pt: 8,
                            ml: {
                                md: 4
                            },
                            position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                        }} >
                            <Box>
                                <Image
                                    src="/assests/specs.png"
                                    alt="Logo"
                                    width={500}
                                    height={500}
                                />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{mt:8}}>
                        <Image
                            src="/assests/divider-up.png"
                            alt="Logo"
                            width={1000}
                            height={40}
                        />
                    </Box>
                </Container>
                </Fade>
            </Box>
        </>
    )
}

export default specs