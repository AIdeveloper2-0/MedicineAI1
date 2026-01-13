import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Yönlendirme kütüphanesi
import "./App.css"; // TASARIMIN KALBİ BURADA, SİLMEDİK

// --- SENİN ORİJİNAL BİLEŞENLERİN ---
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ThemeVariants from "./components/ThemeVariants";
import TechnicalSpecs from "./components/TechnicalSpecs";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

// --- YENİ DEMO SAYFASI ---
import DemoPage from './pages/DemoPage'; 

// Ana Sayfanın İçeriği (Senin eski App fonksiyonun aynısı)
function LandingPage() {
  return (
    <div className="App"> {/* Bu ClassName tasarımın bozulmamasını sağlıyor */}
      <Header />
      <main>
        <Hero />
        <Features />
        <ThemeVariants />
        <TechnicalSpecs />
        <UseCases />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Toaster />
      {/* ChatWidget'ı kaldırdık çünkü artık tam ekran Demo sayfasına gideceğiz */}
    </div>
  );
}

// Yönlendirme Sistemi
function App() {
  return (
    <Router>
      <Routes>
        {/* Ana Sayfa */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Demo Sayfası */}
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Router>
  );
}

export default App;