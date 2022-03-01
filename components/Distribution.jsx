import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';

function Distribution() {
    return (
        <>
            <Box id={'DISTRIBUTION'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F', mt: -1 }} >
                <Fade bottom>
                    <Container maxWidth="lg" sx={{
                        py: 8,
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%'
                    }} >
                        <Box component={'div'} sx={{
                            position: 'relative', backgroundColor: {
                                md: 'unset',
                                xs: 'rgb(19,65,102,0.7)'
                            },
                            py: {
                                md: 0,
                                xs: 8
                            },
                            borderRadius: {
                                md: 'unset',
                                xs: '15px'
                            }, height: {
                                md: 'unset',
                                xs: '400px'
                            }
                        }} >
                            <Box sx={{
                                visibility: {
                                    md: 'unset',
                                    xs: 'hidden'
                                }
                            }} >
                                <Image
                                    src="/assests/Distribution-bg.png"
                                    alt="Logo"
                                    width={1200}
                                    height={350}
                                />
                            </Box>
                            <Box className='centered' component={'div'} sx={{
                                display: 'flex', justifyContent: 'center', alignItems: {
                                    md: 'start',
                                    xs: 'center'
                                }, flexDirection: 'column', width: {
                                    md: '80%',
                                    xs: '90%'
                                }
                            }} >
                                <Typography variant="h4" sx={{
                                    color: '#FFFFFF', fontSize: '36px', fontWeight: 400, color: '#2196F5', lineHeight: "30px", fontStyle: 'normal', mb: 2, textAlign: 'center'
                                }} gutterBottom component="div">
                                    FAIR DISTRIBUTION
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: {
                                        sm: '29.05px',
                                        xs: '25px'
                                    }, fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }
                                }} component="div">
                                    We believe in fair price distribution. Each Jungle Ox costs 59 Polygon MATIC. There are no different price tiers and owning an Jungle Ox NFT will cost every one the same.
                                </Typography>
                            </Box>
                        </Box>
                        <Box component={'div'} sx={{
                            position: 'relative', mt: 8, backgroundColor: {
                                md: 'unset',
                                xs: '#2196f5'
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
                                xs: '400px'
                            }
                        }} >
                            <Box sx={{
                                visibility: {
                                    md: 'unset',
                                    xs: 'hidden'
                                }
                            }} >
                                <Image
                                    src="/assests/BuyOnOx-bg.png"
                                    alt="Logo"
                                    width={1200}
                                    height={350}
                                />
                            </Box>
                            <Box className='centered' component={'div'} sx={{
                                display: 'flex', justifyContent: {
                                    md: 'space-between',
                                    xs: 'center'
                                }, alignItems: 'center', width: '80%', flexDirection: {
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
                                        color: '#FFFFFF', fontSize: '36px', fontWeight: 400, color: '#070C0F', lineHeight: "30px", fontStyle: 'normal', mb: 2
                                    }} gutterBottom component="div">
                                        BUY AN OX
                                    </Typography>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }
                                    }} component="div">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'end',
                                        xs: 'center'
                                    }, width: {
                                        md: '40%',
                                        xs: '90%'
                                    }, mt: {
                                        md: 0,
                                        xs: 2
                                    }
                                }} >
                                    <Button sx={{ p: 0, m: 0 }} variant="text">
                                        <Box component={'div'} sx={{ position: 'relative' }} >
                                            <Image
                                                src="/assests/black-bg.png"
                                                alt="Logo"
                                                width={260}
                                                height={70}
                                                objectFit="contain"
                                            />
                                            <Typography className='centered' sx={{
                                                "&:hover": {
                                                    color: '#deecf8'
                                                }, width: '100%', fontSize: '18px', color: '#2196F5', fontWeight: '400', paddingBottom: '10px'
                                            }} variant="h5" component="div">
                                                BUY ON OPENSEA
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

export default Distribution