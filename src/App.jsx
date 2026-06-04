import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Legacy from './pages/Legacy';
import Ecology from './pages/Ecology';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Charity from './pages/Charity';
import Visit from './pages/Visit';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Volunteer from './pages/Volunteer';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="legacy" element={<Legacy />} />
          <Route path="ecology" element={<Ecology />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="charity" element={<Charity />} />
          <Route path="visit" element={<Visit />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donation />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
