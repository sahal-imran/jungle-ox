import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Fade from 'react-reveal/Fade';

function CommunityTools() {
    return (
        <>
            <Box id={'COMMUNITY'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F' }} >
                <Fade bottom>
                    <Container maxWidth="lg" sx={{
                        py: 4,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }} >
                        <Box component={'div'} sx={{
                            position: 'relative', mt: 8, backgroundColor: {
                                md: 'unset',
                                xs: 'rgb(19,65,102,0.7)'
                            }, py: {
                                md: 0,
                                xs: 4
                            },
                            borderRadius: {
                                md: 'unset',
                                xs: '15px'
                            },
                            height: {
                                md: 'unset',
                                sm: '500px',
                                xs: '600px'
                            }
                        }} >
                            <Box sx={{
                                visibility: {
                                    md: 'unset',
                                    xs: 'hidden'
                                }
                            }} >
                                <Image
                                    src="/assests/community-bg.png"
                                    alt="Logo"
                                    width={1200}
                                    height={420}
                                />
                            </Box>
                            <Box className='centered' component={'div'} sx={{
                                display: 'flex', justifyContent: {
                                    md: 'space-between',
                                    xs: 'center'
                                }, alignItems: 'center', width: '90%', flexDirection: {
                                    md: 'row',
                                    xs: 'column'
                                },
                                mt: {
                                    md: 0,
                                    xs: 2
                                },
                            }} >
                                <Box component={'div'} sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', width: {
                                        md: '60%',
                                        xs: '100%'
                                    }
                                }} >
                                    <Typography variant="h4" sx={{
                                        color: '#FFFFFF', fontSize: '36px', fontWeight: 400, color: '#2196F5', lineHeight: "30px", fontStyle: 'normal', mb: 2, textAlign: 'center'
                                    }} gutterBottom component="div">
                                        COMMUNITY TOOLS
                                    </Typography>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} component="div">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'end',
                                        xs: 'center'
                                    }, flexDirection: 'column', width: {
                                        md: '40%',
                                        xs: '90%'
                                    }, mt: {
                                        md: 0,
                                        xs: 4
                                    }
                                }} >
                                    <Button sx={{ p: 0, mb: 1 }} variant="text">
                                        <Box component={'div'} sx={{ position: 'relative' }} >
                                            <Image
                                                src="/assests/blue-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={70}
                                                objectFit="contain"
                                            />
                                            <Typography className='centered' sx={{
                                                fontSize: '18px', color: 'white', fontWeight: '400', paddingBottom: '10px'
                                            }} variant="h5" component="div">
                                                NETEXP.IO
                                            </Typography>
                                        </Box>
                                    </Button>
                                    <Button sx={{ p: 0, m: 0 }} variant="text">
                                        <Box component={'div'} sx={{ position: 'relative' }} >
                                            <Image
                                                src="/assests/black2-bg.png"
                                                alt="Logo"
                                                width={300}
                                                height={70}
                                                objectFit="contain"
                                            />
                                            <Typography className='centered' sx={{
                                                width: '100%', fontSize: '18px', color: 'white', fontWeight: '400', paddingBottom: '10px'
                                            }} variant="h5" component="div">
                                                RARITY TOOLS
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </Box>
        </>
    )
}

export default CommunityTools