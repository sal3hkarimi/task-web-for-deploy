import { FC, Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Admin } from '../pages/admin/home';
import { Leader } from '../pages/leader/home';
import Overlay from '../components/Overlay';
import Profile from '../pages/profile';
import AdminRequests from '../pages/admin/requests/AdminRequests';
import ModalSelectRahbar from '../pages/admin/Components/ModalSelectRahbar';
import ModalEdit from '../pages/admin/Components/ModalEdit';
import BgModals from '../pages/admin/Components/BgModal';

const ProtectedRoutes = lazy(() => import('./protectedRoutes'));
const Chat = lazy(() => import('../pages/chat'));
const Authenticate = lazy(() => import('../pages/authenticate'));
const Authorize = lazy(() => import('../pages/authorize'));

const IndexRoute: FC = () => {

    return (
        <Routes>
            <Route element={
                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                    <Link style={{ textDecoration: 'underline', display: 'block' }} to={'/admin'}>Admin</Link>
                    <Link style={{ textDecoration: 'underline', display: 'block' }} to={'/admin/request'}>Admin Request</Link>
                    <Link style={{ textDecoration: 'underline', display: 'block' }} to={'/modal-edit'}>modal edit</Link>
                    <Link style={{ textDecoration: 'underline', display: 'block' }} to={'/modal-select-rahbar'}>modal select rahbar</Link>
                </div>
            } path={'/'} />

            {/* Users Pages */}
            <Route element={<Admin />} path={'/admin'} />
            <Route element={<AdminRequests />} path={'admin/request'} />
            <Route element={<ModalEdit />} path={'/modal-edit'} />
            <Route element={<ModalSelectRahbar />} path={'/modal-select-rahbar'} />

            <Route path='/test' element={
                <ModalSelectRahbar />
            } />
        </Routes>
    )
}


export default IndexRoute;