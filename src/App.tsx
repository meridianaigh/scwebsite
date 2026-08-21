import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import TradeServicesPage from '@/pages/TradeServicesPage';
import CompliancePage from '@/pages/CompliancePage';
import AboutPage from '@/pages/AboutPage';
import InsightsPage from '@/pages/InsightsPage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/trade-services" element={<TradeServicesPage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
