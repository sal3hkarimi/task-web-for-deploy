import {FC} from 'react'
import { Navigate} from 'react-router-dom';
import {Leader} from '../../pages/leader/home';
import {Admin} from '../../pages/admin/home';
import Layout from '../../layouts';

type PropTypes = {
    role:number;
}

const ProtectedRoutes:FC<PropTypes> = ({role}) => {
const isLoggedIn = true;


    if(role == 1 && isLoggedIn){
        return <Layout><Admin /></Layout>
    }else if(role == 0 && isLoggedIn){
        return <Layout><Leader /></Layout>
    }

    return <Navigate to={'/auth/login'} />
}

export default ProtectedRoutes