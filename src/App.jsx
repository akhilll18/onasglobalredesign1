import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/index.jsx';
import NotFound from './pages/NotFound';
import './App.css';
import './pages/solutions/solutions-modern.css';

// ERP
import SAP from './pages/howWeHelp/erp/SAP.jsx';
// import Oracle from './pages/howWeHelp/erp/Oracle.jsx';
import Salesforce from './pages/howWeHelp/erp/Salesforce.jsx';
import Netsuite from './pages/howWeHelp/erp/Netsuite.jsx';
import ServiceNow from './pages/howWeHelp/erp/ServiceNow.jsx';
import Workday from './pages/howWeHelp/erp/Workday.jsx';
import MicrosoftDynamics365 from './pages/howWeHelp/erp/MicrosoftDynamics365.jsx';
import IFSCloud from './pages/howWeHelp/erp/IFS.jsx';

// Digital Transformation
import AIML from './pages/howWeHelp/digitaltransformation/AIML.jsx';
import CloudMigrationIntegration from './pages/howWeHelp/digitaltransformation/CloudMigrationIntegration.jsx';
import DataEngineeringAnalytics from './pages/howWeHelp/digitaltransformation/DataEngineeringAnalytics.jsx';
import IoTServices from './pages/howWeHelp/digitaltransformation/IOTServices.jsx';
import ProductEngineering from './pages/howWeHelp/digitaltransformation/ProductEngineering.jsx';
import TestingAutomation from './pages/howWeHelp/digitaltransformation/TestingAutomation.jsx';
import GRC from './pages/howWeHelp/digitaltransformation/GRC.jsx';
import ITAssetManagement from './pages/howWeHelp/digitaltransformation/ITAssetManagement.jsx';
import GenAI from './pages/howWeHelp/digitaltransformation/GenerativeAI.jsx';
import DevopsFeatures from './pages/howWeHelp/digitaltransformation/DevOpsFeatures.jsx';

// MIT Operations
import ApplicationMaintenanceServices from './pages/howWeHelp/mitoperations/AppMaintenance.jsx';
import CloudSupport from './pages/howWeHelp/mitoperations/CloudSupport.jsx';
import Cybersecurity from './pages/howWeHelp/mitoperations/Cybersecurity.jsx';
import ITInfrastructureServices from './pages/howWeHelp/mitoperations/ITInfra.jsx';
import NetworkSupport from './pages/howWeHelp/mitoperations/NetworkSupport.jsx';
import Helpdesk from './pages/howWeHelp/mitoperations/HelpDesk.jsx';

// Industries
import Industries from './pages/whoWeHelp/Industries.jsx';

// Other Services
import WebDevelopment from './pages/howWeHelp/otherservices/WebDevelopment.jsx';
import SEO from './pages/howWeHelp/otherservices/SEOSection.jsx';
import SocialMediaMarketing from './pages/howWeHelp/otherservices/SocialMediaMarketing.jsx';
import ContentMarketing from './pages/howWeHelp/otherservices/ContentMarketing.jsx';
import EmailMarketing from './pages/howWeHelp/otherservices/EmailMarketing.jsx';
import PPCAdvertising from './pages/howWeHelp/otherservices/PPCAdvertising.jsx';
import MobileApp from "./pages/howWeHelp/otherservices/MobileApp.jsx";
import UIUXSection from './pages/howWeHelp/otherservices/UIUXSection.jsx';

// Why ONAS
import AboutUs from './pages/whyOnas/AboutUs.jsx';
import Company from './pages/whyOnas/Company.jsx';
import MissionPrinciples from './pages/whyOnas/MissionPrinciples.jsx';
import Leadership from './pages/whyOnas/Leadership.jsx';
import CultureBenefits from './pages/whyOnas/CultureBenefits.jsx';
import Employees from './pages/whyOnas/Employees.jsx';
import Investors from './pages/whyOnas/Investors.jsx';
import LifeAtOnas from './pages/whyOnas/LifeAtOnas.jsx';

// Resources
import Media from './pages/Resources/Media.jsx';
import Ideas from './pages/Resources/Ideas.jsx';
import Awards from './pages/Resources/Awards.jsx';
import Blogs from './pages/Resources/Blogs.jsx';
import ContactUs from './pages/Resources/ContactUs.jsx';
import Careers from './pages/Resources/Careers.jsx';
import CaseStudies from './pages/Resources/CaseStudies.jsx';
import NewsRoom from './pages/Resources/NewsRoom.jsx';

// Staffing
import ITConsulting from './pages/Staffing/ITConsulting.jsx';
import ProfessionalServices from './pages/Staffing/ProfessionalServices.jsx';
import RequestCallback from './pages/Staffing/submitVacancy/RequestCallback.jsx';

// EDTech Services
import LMSImplementation from "./pages/education/LMSImplementation.jsx";
import ELearningPlatform from "./pages/education/ELearningPlatform.jsx";
import EducationalAnalytics from "./pages/education/EducationalAnalytics.jsx";
import VirtualClassroom from "./pages/education/VirtualClassroom.jsx";

// Security
import SecurityRisk from './pages/security/SecurityRisk.jsx';
import NetworkSecurity from'./pages/security/NetworkSecurity.jsx';
import Dataprotection from './pages/security/DataProtection.jsx';
import ComplianceManagement from  './pages/security/ComplianceManagement.jsx';

// ========== SOLUTIONS PAGES ==========
// DRR Pages
import Drrindex from './pages/solutions/DRR/Drrindex.jsx';
import EInvoicing from './pages/solutions/DRR/e-invoicing.jsx';
import InvoiceReporting from './pages/solutions/DRR/invoice-reporting.jsx';
import VIDA from './pages/solutions/DRR/vida.jsx';
import EWaybill from './pages/solutions/DRR/e-waybill.jsx';

import SAFT from './pages/solutions/reporting/saf-t.jsx';
import VATReturn from './pages/solutions/reporting/vat-return.jsx';
import CBCR from './pages/solutions/reporting/cbcr.jsx';
import Intrastat from './pages/solutions/reporting/intrastat.jsx';
// import PlasticTax from './pages/solutions/reporting/plastic-tax.jsx';


import APAutomation from './pages/solutions/automation/ap-automation.jsx';

import SEOWrapper from './components/SEOWrapper';

// Scroll to hash hook
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <SEOWrapper />
      <Layout>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ERP */}
          <Route path="/how-we-help/erp/sap" element={<SAP />} />
          {/* <Route path="/how-we-help/erp/oracle" element={<Oracle />} /> */}
          <Route path="/how-we-help/erp/salesforce" element={<Salesforce />} />
          <Route path="/how-we-help/erp/netsuite" element={<Netsuite />} />
          <Route path="/how-we-help/erp/servicenow" element={<ServiceNow />} />
          <Route path="/how-we-help/erp/workday" element={<Workday />} />
          <Route path="/how-we-help/erp/microsoft-dynamics-365" element={<MicrosoftDynamics365 />} />
          <Route path="/how-we-help/erp/ifs" element={<IFSCloud />} />

          {/* Digital Transformation */}
          <Route path="/how-we-help/digital-transformation/ai-ml" element={<AIML />} />
          <Route path="/how-we-help/digital-transformation/cloud-integ" element={<CloudMigrationIntegration />} />
          <Route path="/how-we-help/digital-transformation/data-eng-ana" element={<DataEngineeringAnalytics />} />
          <Route path="/how-we-help/digital-transformation/iot-services" element={<IoTServices />} />
          <Route path="/how-we-help/digital-transformation/product-eng" element={<ProductEngineering />} />
          <Route path="/how-we-help/digital-transformation/test-automation" element={<TestingAutomation />} />
          <Route path="/how-we-help/digital-transformation/grc" element={<GRC />} />
          <Route path="/how-we-help/digital-transformation/it-asset-management" element={<ITAssetManagement />} />
          <Route path="/how-we-help/digital-transformation/genai" element={<GenAI />} />
          <Route path="/how-we-help/digital-transformation/devops" element={<DevopsFeatures />} />

          {/* Managed IT Operations */}
          <Route path="/how-we-help/managed-it-operations/app-maintenance" element={<ApplicationMaintenanceServices />} />
          <Route path="/how-we-help/managed-it-operations/cloud-support" element={<CloudSupport />} />
          <Route path="/how-we-help/managed-it-operations/cybersecurity" element={<Cybersecurity />} />
          <Route path="/how-we-help/managed-it-operations/it-infra" element={<ITInfrastructureServices />} />
          <Route path="/how-we-help/managed-it-operations/network-support" element={<NetworkSupport />} />
          <Route path="/how-we-help/managed-it-operations/helpdesk" element={<Helpdesk />} />

          {/* Other Services */}
          <Route path="/how-we-help/other-services/web-dev" element={<WebDevelopment />} />
          <Route path="/how-we-help/other-services/seo" element={<SEO />} />
          <Route path="/how-we-help/other-services/social-media" element={<SocialMediaMarketing />} />
          <Route path="/how-we-help/other-services/content-marketing" element={<ContentMarketing />} />
          <Route path="/how-we-help/other-services/email-marketing" element={<EmailMarketing />} />
          <Route path="/how-we-help/other-services/ppc" element={<PPCAdvertising />} />
          <Route path='/how-we-help/other-services/mobileapp' element={<MobileApp/>}/>
          <Route path='/how-we-help/other-services/uiuxsection' element={<UIUXSection/>}/>

          {/* Who we help */}
          <Route path="/who-we-help/industries" element={<Industries />} />

          {/* Why ONAS */}
          <Route path="/why-onas/about-us" element={<AboutUs />} />
          <Route path="/why-onas/company" element={<Company />} />
          <Route path="/why-onas/mission-principles" element={<MissionPrinciples />} />
          <Route path="/why-onas/leadership" element={<Leadership />} />
          <Route path="/why-onas/culture-benefits" element={<CultureBenefits />} />
          <Route path="/why-onas/employees" element={<Employees />} />
          <Route path="/why-onas/investors" element={<Investors />} />
          <Route path="/why-onas/life" element={<LifeAtOnas />} />

          {/* Resources */}
          <Route path="/resources/media" element={<Media />} />
          <Route path="/resources/ideas" element={<Ideas />} />
          <Route path="/resources/awards" element={<Awards />} />
          <Route path="/resources/blogs" element={<Blogs />} />
          <Route path="/resources/contact-us" element={<ContactUs />} />
          <Route path="/resources/careers" element={<Careers />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/newsroom" element={<NewsRoom />} />

          {/* Staffing */}
          <Route path="/staffing/submit-a-vacancy/request-a-call-back" element={<RequestCallback />} />
          <Route path="/staffing/it-consulting" element={<ITConsulting />} />
          <Route path="/staffing/professional-services" element={<ProfessionalServices />} />

          {/* EDTech Services */}
          <Route path="/education/lms-implementation" element={<LMSImplementation />} />
          <Route path="/education/e-learning" element={<ELearningPlatform />} />
          <Route path="/education/analytics" element={<EducationalAnalytics />} />
          <Route path="/education/virtual-classroom" element={<VirtualClassroom />} />

          {/* Security */}
          <Route path='/security/securityrisk' element={<SecurityRisk/>}/>
          <Route path="/security/dataprotection" element={<Dataprotection />} />
          <Route path="/security/networksecurity" element={<NetworkSecurity />} />
          <Route path="/security/compliancemanagement" element={<ComplianceManagement />} />

          {/* ========== SOLUTIONS ROUTES ========== */}
          {/* DRR Routes */}
          <Route path="/solutions/drr/drr" element={<Drrindex />} />
          <Route path="/solutions/drr/e-invoicing" element={<EInvoicing />} />
          <Route path="/solutions/drr/invoice-reporting" element={<InvoiceReporting />} />
          <Route path="/solutions/drr/vida" element={<VIDA />} />
          <Route path="/solutions/drr/e-waybill" element={<EWaybill />} />

          {/* Reporting Routes (REMOVED: /solutions/reporting) */}
          <Route path="/solutions/reporting/saf-t" element={<SAFT />} />
          <Route path="/solutions/reporting/vat-return" element={<VATReturn />} />
          <Route path="/solutions/reporting/cbcr" element={<CBCR />} />
          <Route path="/solutions/reporting/intrastat" element={<Intrastat />} />
          {/* <Route path="/solutions/reporting/plastic-tax" element={<PlasticTax />} /> */}
          

          {/* Automation Routes (REMOVED: /solutions/automation, /solutions/automation/e-banking, /solutions/automation/reconciliation) */}
          <Route path="/solutions/automation/ap-automation" element={<APAutomation />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
}