import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import { pageTransition } from './utils/motion';

const Home = lazy(() => import('./pages/Home'));
const ProgramDetail = lazy(() => import('./pages/ProgramDetail'));
const Performances = lazy(() => import('./pages/Performances'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...pageTransition}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/programs/:id" element={<ProgramDetail />} />
          <Route path="/performances" element={<Performances />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="page-loader" aria-busy="true" />}>
        <AnimatedRoutes />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
