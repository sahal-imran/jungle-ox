import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Fade from 'react-reveal/Fade';

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
    backgroundColor: 'transparent',
    border:'unset',
    boxShadow:'unset'
}));

function Team() {
    return (
        <>
            <Box id={'TEAM'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F',mt:-1 }} >
            <Fade bottom>
                <Container maxWidth="lg" sx={{
                    py: 4,
                    display: 'flex', justifyContent: 'center', alignItems: 'center',minHeight:'100vh'
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
                            sm: '1000px',
                            xs:'1500px'
                        }
                    }} >
                        <Box sx={{
                            visibility: {
                                md: 'unset',
                                xs: 'hidden'
                            }
                        }} >
                            <Image
                                src="/assests/team-bg.png"
                                alt="Logo"
                                width={1200}
                                height={900}
                            />
                        </Box>
                        <Box className='centered' component={'div'} sx={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', flexDirection: 'column',
                        }} >
                            <Box component={'div'} sx={{
                                display: 'flex', justifyContent: 'center', alignItems: {
                                    md: 'start',
                                    xs: 'center'
                                }, flexDirection: 'column'
                            }} >
                                <Typography variant="h4" sx={{
                                    color: '#FFFFFF', fontSize: '36px', fontWeight: 400, color: '#2196F5', lineHeight: "30px", fontStyle: 'normal', mb: 2, textAlign: 'center'
                                }} gutterBottom component="div">
                                    THE TEAM
                                </Typography>
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }
                                }} component="div">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1, width: '100%', mt: 8 }}>
                                <Grid container columns={{ md: 3, sm: 2, xs: 1 }} spacing={3}>
                                    <Grid item xs={1}>
                                        <Item>
                                            <Box component={'div'} sx={{ width: '100%' }} >
                                                <Image
                                                    src="/assests/team1.png"
                                                    alt="Logo"
                                                    width={250}
                                                    height={250}
                                                />
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Item>
                                            <Box component={'div'} sx={{ width: '100%' }} >
                                                <Image
                                                    src="/assests/team1.png"
                                                    alt="Logo"
                                                    width={250}
                                                    height={250}
                                                />
                                            </Box>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <Item>
                                            <Box component={'div'} sx={{ width: '100%' }} >
                                                <Image
                                                    src="/assests/team1.png"
                                                    alt="Logo"
                                                    width={250}
                                                    height={250}
                                                />
                                            </Box>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography variant="subtitle" sx={{
                                fontSize: '18px', color: 'white', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: 'center',mt:8,display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:{
                                    sm:'row',
                                    xs:'column'
                                }
                            }} component="div">
                                VERIFIED SMART CONTRACT ADDRESS:
                                <Typography variant="subtitle" sx={{
                                    fontSize: '18px', color: '#2196F5', fontWeight: 'light', lineHeight: "29.05px", fontStyle: 'normal', textAlign: 'center',ml:1
                                }} component="span">
                                    0xBC4CA0EdA7647A8aB7C2061
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
                </Fade>
            </Box>
        </>
    )
}

export default Team