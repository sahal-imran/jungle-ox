import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';

function Roadmap() {
    return (
        <>
            <Box id={'ROADMAP'} component={'div'} sx={{ width: '100%', backgroundColor: '#070C0F', mt: -1 }} >
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
                                md: '50%',
                                xs: '100%'
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
                                ROADMAP ACTIVATIONS
                            </Typography>
                            <Typography variant="subtitle" sx={{
                                fontSize: '16px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "26px", fontStyle: 'normal', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }
                            }} component="div">
                                We’ve set up some milestones for this project. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal
                            </Typography>
                            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 8 }} >
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            10%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        We release the Caged Ox. 5 Caged Ox (tokens held back from the sale) are airdropped to random Ox NFT holders.
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            20%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        We release HelloTalk app update with feature to add Ox as verified profile photo direct from wallet
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            30%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        Official Jungle Ox Club launch, together with HelloTalk public launch event
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            40%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        Jungle Ox Apple and Android watch face app launch with free download for current Ox holders
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            50%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        Launching of Jungle Ox loyalty program combination with HelloTalk social application
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            60%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        We release the Caged Ox. 5 Caged Ox (tokens held back from the sale) are airdropped to random Ox NFT holders.
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            70%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        Launching of Jungle Ox loyalty program combination with HelloTalk social application
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            80%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        Ox Liquidity pool launched
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            90%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        The mutant Ox NFT breeding started and explore new ways to provide new features to Ox club
                                    </Typography>
                                </Box>
                                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }} >
                                    <Box component={'div'} sx={{ position: 'relative' }} >
                                        <Box sx={{ width: '80px' }} >
                                            <Image
                                                src="/assests/question.png"
                                                alt="Logo"
                                                width={80}
                                                height={50}
                                            />
                                        </Box>
                                        <Typography className='centered' sx={{
                                            fontSize: '18px', color: 'white', fontWeight: 'bold', ml: "4px"
                                        }} variant="h5" component="div">
                                            100%
                                        </Typography>
                                    </Box>
                                    <Typography variant="subtitle" sx={{
                                        fontSize: '18px', color: '#FFFFFF', fontWeight: 'light', lineHeight: "28px", fontStyle: 'normal', ml: 2, mb: 1
                                    }} component="div">
                                        We release the Caged Ox. 5 Caged Ox (tokens held back from the sale) are airdropped to random Ox NFT holders.
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>
                        <Box component={'div'} sx={{
                            width: {
                                md: '50%',
                                xs: '100%'
                            },
                            mt: {
                                md: 0,
                                xs: 8
                            },
                            ml: {
                                md: 8
                            },
                            display: 'flex', justifyContent: {
                                md: 'end',
                                xs: 'center'
                            }, alignItems: 'center', height: '100%'
                        }} >
                            <Image
                                src="/assests/roadmap.png"
                                alt="Logo"
                                width={500}
                                height={800}
                            />
                        </Box>
                    </Container>
                </Fade>
            </Box>
        </>
    )
}

export default Roadmap