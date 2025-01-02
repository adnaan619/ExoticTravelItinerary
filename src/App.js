import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/home/Hero';
import { TripPlanner } from './components/home/TripPlanner';
import { Reviews } from './components/home/Reviews';
import { Features } from './components/home/Features';
import { Press } from './components/home/Press';
import { ProFeatures } from './components/home/ProFeatures';
import { BudgetSection } from './components/home/BudgetSection';
import { AttractionsSection } from './components/home/AttractionsSection';
import { RoadTripSection } from './components/home/RoadTripSection';
import { NewTrip } from './pages/NewTrip';
import { TripDashboard } from './pages/TripDashboard';

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
      <BudgetSection/>
      <AttractionsSection/>
      <RoadTripSection/>
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
      </Routes>
    </Router>
  );
}

export default App;
