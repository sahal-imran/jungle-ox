import React from 'react';
import Navbar from '../components/Navbar';
import Wellcome from '../components/Wellcome';
import Distribution from '../components/Distribution';
import Specs from '../components/Specs';
import WellcomeToTheJungle from '../components/WellcomeToTheJungle';
import Roadmap from '../components/Roadmap';
import CommunityTools from '../components/CommunityTools';
import Team from '../components/Team';
import Footer from '../components/Footer';

function index() {
  return (
    <>
    <Navbar />
    <Wellcome />
    <Distribution />
    <Specs />
    <WellcomeToTheJungle />
    <Roadmap />
    <CommunityTools />
    <Team />
    <Footer />
    </>
  )
}

export default index