import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { TripPlanner } from './components/home/TripPlanner';
import { Reviews } from './components/home/Reviews';
import { Features } from './components/home/Features/index';
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
import { KandyGuide } from './components/guides/KandyGuide';
import { EllaGuide } from './components/guides/EllaGuide';
import { TopDestinations } from './components/home/TopDestinations';
import { ColomboGuide } from './components/guides/cities/ColomboGuide';
import { GalleGuide } from './components/guides/cities/GalleGuide';
import { PriceRangeSection } from './components/home/PriceRangeSection';
import { VehicleFleet } from './components/home/VehicleFleet';

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
      <VehicleFleet/>
      <RoadTripSection/>
      <FeatureSlider/>
      <TopDestinations/>
      <AdventureSection/>
      <PriceRangeSection/>
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
        <Route path="/guides/kandy-cultural-guide" element={<KandyGuide />} />
        <Route path="/guides/ella-mountain-guide" element={<EllaGuide/>} />
        <Route path="/guides/colombo" element={<ColomboGuide />} />
        <Route path="/guides/galle" element={<GalleGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
