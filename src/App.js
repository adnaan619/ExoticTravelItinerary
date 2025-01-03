import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { TripPlanner } from './components/trip/TripPlanner/index';
import { Reviews } from './components/home/Reviews';
import { Features } from './components/home/Features';
import { Press } from './components/home/Press/index';
import { ProFeatures } from './components/home/ProFeatures';
import { BudgetSection } from './components/home/BudgetSection';
import { AttractionsSection } from './components/home/AttractionsSection';
import { RoadTripSection } from './components/home/RoadTripSection';
import { NewTrip } from './pages/NewTrip';
import { TripDashboard } from './pages/TripDashboard';
import { FeatureSlider } from './components/home/FeatureSlider/index';
import { AdventureSection } from './components/home/AdventureSection';
import { ExplorePlaces } from './components/home/ExplorePlaces';
import { GuideDetail } from './components/guides/GuideDetail';
import { ParisGuideDetail } from './components/guides/paris/ParisGuideDetail';

// Create a Home component to contain all your existing sections
const Home = () => {
  return (
    <>
      <Hero />
      <TripPlanner />
      <Reviews />
      <Features />
      <Press />
      <ProFeatures/>
      <ExplorePlaces/>
      <BudgetSection/>
      <AttractionsSection/>
      <RoadTripSection/>
      <FeatureSlider/>
      <AdventureSection/>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
            </Layout>
          } 
        />
        <Route path="/new-trip" element={<NewTrip />} />
        <Route path="/trip/dash" element={<TripDashboard/>} />
        <Route path="/guides/japan-video-game" element={<GuideDetail />} />
        <Route path="/guides/paris-5-day" element={<ParisGuideDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
