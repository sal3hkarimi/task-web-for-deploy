import {FC} from 'react';
import { PropsTypes } from '../types/interfaces';
import Navbar from './Navbar';

const Layout:FC<PropsTypes> = ({children}) => {
  return (
    <>
      <Navbar />
      <main className='container'>
          {children}
      </main>
    </>
  )
}

export default Layout