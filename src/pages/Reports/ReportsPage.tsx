import { Outlet } from 'react-router-dom'
import TabNav from '../../components/ReportTabs/TabNav'

function TabsPage() {
  return (
    <div>
        <h3>Your transactions</h3>
        <TabNav />
        <Outlet />
    </div>
  )
}

export default TabsPage