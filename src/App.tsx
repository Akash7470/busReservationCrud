import { useState } from 'react';
import './App.css'
import Dashboard from './components/Dashboard'
import Reservation from './components/Reservation'
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  Link,
} from 'react-router-dom'
import clsx from 'clsx';

function App() {
  const [activeLink, setActiveLink] = useState<string>('');

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
  };
  return (
    <div className='container  mx-auto mt-[3rem]'>
      <div className='flex justify-center font-sans gap-5 text-2xl font-bold my-4'>
        <Link to={'/dashboard'} onClick={() => handleLinkClick('dashboard')} className={clsx('link', { 'text-red-500': activeLink === 'dashboard' })}>Dashboard</Link>
        <Link to={'/reservation'} onClick={() => handleLinkClick('reservation')} className={clsx('link', { 'text-red-500': activeLink === 'reservation' })}
      >Reservation</Link>
      </div>
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/reservation',
        element: <Reservation />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
])

function AppWithRouter() {
  return <RouterProvider router={appRouter} />
}

export default AppWithRouter
