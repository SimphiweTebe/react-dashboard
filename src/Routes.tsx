import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Home/Dashboard'
import Settings from './pages/Settings/Settings';
import TabsPage from './pages/Reports/ReportsPage';
import Alerts from './pages/Alerts/Alerts';

import Tab1 from './components/ReportTabs/Tab1';
import Tab2 from './components/ReportTabs/Tab2';
import Tab3 from './components/ReportTabs/Tab3';

const MainRoutes = ()=> (
  
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="settings" element={<Settings />} />
        <Route path="reports" element={<TabsPage />}>
          <Route path="/reports" element={<Navigate replace to="report1" />}/>
          <Route path="report1" element={<Tab1 />}/>
          <Route path="report2" element={<Tab2 />}/>
          <Route path="report3" element={<Tab3 />}/>
        </Route>
    </Routes>

)

export default MainRoutes