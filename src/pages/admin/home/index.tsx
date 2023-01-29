import LayoutAdmin from '../layout/LayoutAdmin'
import AdminContainer from './AdminContainer'


function Home() {
  return (
    <LayoutAdmin>
      <AdminContainer />
    </LayoutAdmin>
  )
}

export { Home as Admin }