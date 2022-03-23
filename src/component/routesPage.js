import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Event, ContactUs, About, NotFound, Service, Location, History } from './pages'
import { NavigationLinks } from './links';
import AppointmentList from '../appointment/appointment-list';
import GitHub from './GitHub';

function RoutePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="location" element={<Location />} />
          <Route path="history" element={<History />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="/event" element={<Event />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointment" element={<AppointmentList />} />
        <Route path='/gitprofile' element={<GitHub />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

  );
}

function RouteHome() {
  return (<>
    <Router>
      <NavigationLinks />
      <RoutePage />
    </Router>
  </>);
}


export default RouteHome;
