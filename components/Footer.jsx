import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Fade from 'react-reveal/Fade';

function Footer() {
    //  Here i have used hook for manage state of input field
    const [email, setemail] = useState();

    return (
        <>
            <Box component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F', mt: -1 }} >
            <Fade bottom>
                <Container maxWidth="lg" sx={{
                    py: 8,
                    display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }} >
                    <Box component='div' sx={{
                        width: '100%', display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: {
                            md: 'end',
                            xs: 'center'
                        }, flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }}>
                        <Box component={'div'} sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, display: 'flex', justifyContent: 'center', alignItems: {
                                md: 'start',
                                xs: 'center'
                            }, flexDirection: 'column'
                        }} >
                            <Typography variant="h2" sx={{
                                color: '#2196F5', fontWeight: 700, lineHeight: "67.77px", fontStyle: 'normal', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }
                            }} gutterBottom component="div">
                                NFT.
                            </Typography>
                            <Typography variant="subtitle" sx={{
                                fontSize: '18px', color: '#FFFFFF', fontWeight: '500', lineHeight: "28px", fontStyle: 'normal',
                            }} component="div">
                                GET ON THE LIST
                            </Typography>
                            <Box component={'form'} sx={{
                                mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px', width: {
                                    md: '80%',
                                    xs: '100%'
                                }
                            }} >
                                <input required autoComplete="off" value={email} onChange={(e) => setemail(e.target.value)} style={{ height: '100%', width: '100%', background: 'transparent', outline: 'none', color: 'white', border: '1px solid #2196F5', fontSize: '20px', padding: '10px', width: '70%' }} placeholder='Add Email' type="text" />
                                <Button sx={{ height: '100%', ml: 1, borderRadius: '0px', px: 4 }} variant="contained">Submit</Button>
                            </Box>
                        </Box>
                        <Box component={'div'} sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            }, height: '100%', display: 'flex', justifyContent: {
                                md: 'end',
                                xs: 'center'
                            }, alignItems: 'center', mt: {
                                md: 'unset',
                                xs: 4
                            }
                        }} >
                            <Link sx={{ color: 'white', fontSize: '18px', mr: 8 }} href="">Link</Link>
                            <Link sx={{ color: 'white', fontSize: '18px', mr: 8 }} href="">Link</Link>
                            <Link sx={{ color: 'white', fontSize: '18px' }} href="">Link</Link>
                        </Box>
                    </Box>
                    <Box component={'div'} sx={{
                        width: '100%', my: {
                            md: 8,
                            xs: 2
                        }
                    }} >
                        <Image
                            src="/assests/divider-down.png"
                            alt="Logo"
                            width={1200}
                            height={20}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex', justifyContent: {
                            md: 'space-between',
                            xs: 'center'
                        }, alignItems: 'center', width: '100%', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                            <Link href="">
                                <Image
                                    src="/assests/icons/youtube.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <Link sx={{ ml: 2 }} href="">
                                <Image
                                    src="/assests/icons/youtube.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <Link sx={{ ml: 2 }} href="">
                                <Image
                                    src="/assests/icons/youtube.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                            <Link sx={{ ml: 2 }} href="">
                                <Image
                                    src="/assests/icons/youtube.png"
                                    alt="Logo"
                                    width={50}
                                    height={50}
                                />
                            </Link>
                        </Box>
                        <Typography variant="subtitle" sx={{
                            fontSize: '18px', color: '#FFFFFF', fontWeight: '400', lineHeight: "28px", fontStyle: 'normal', ml: 2, mt: {
                                md: 0,
                                xs: 4
                            }
                        }} component="div">
                            © 2022 All right Reserved by <Box component={'span'} sx={{ color: '#2196F5' }} >NFT.</Box>
                        </Typography>
                    </Box>
                </Container>
                </Fade>
            </Box>
        </>
    )
}

export default Footer;