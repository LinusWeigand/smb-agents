import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SkipLink } from './components/SkipLink';
import { ToastProvider } from './components/ui/toast';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import LetsTalk from './pages/LetsTalk';
import YC from './pages/YC';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import LegalNotice from './pages/legal/LegalNotice';

function Placeholder({ title }: { title: string }) {
  return (
    <div className="max-w-[1190px] mx-auto px-4 sm:px-6 py-24">
      <h1 className="font-display text-4xl text-[#171717]">{title}</h1>
      <p className="mt-4 font-sans text-gray-500">
        Not part of the landing-page rebuild yet.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <div className="min-h-screen bg-transparent w-full max-w-full">
      <SkipLink />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/lets-talk" element={<LetsTalk />} />
        <Route path="/yc" element={<YC />} />
        {/* German law is strict about what these documents are called, so the
            German name is the canonical path and the heading on each page. */}
        <Route path="/impressum" element={<LegalNotice />} />
        <Route path="/datenschutz" element={<PrivacyPolicy />} />
        <Route path="/agb" element={<TermsOfService />} />
        {/* English aliases, kept only so older inbound links do not 404. */}
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<Placeholder title="Page not found" />} />
      </Routes>
        <Footer />
      </div>
    </ToastProvider>
  );
}
