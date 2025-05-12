import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from "./components/Body";
import Footer from './components/Footer';
import Error from './components/Error';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router';
import AboutUs from './components/About-us';
import ContactUs from './components/Contact-us';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import Cart from './components/Cart';
import UserContext from './utils/UserContext';
// import Grocery from './components/Grocery';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const Grocery = lazy(() => import("./components/Grocery"))
const Applayout = () => {

  //authentication 
  const [userInfo, setUserInfo] = useState();



  useEffect(() => {
    const data = {
      name: "Riya Chauhan"
    }
    setUserInfo(data.name);
  },[])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userInfo, setUserInfo}}>
        <div>
        {/* <UserContext.Provider value={{loggedInUser: "Prakhar"}}> */}
          <Header/>
        {/* </UserContext.Provider> */}
          <Outlet/>
          <Footer/>
        </div>
      </UserContext.Provider>
    </Provider>)
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout/>,
    children: [
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/about-us',
        element: <AboutUs/>
      },
      {
        path:'/contact-us',
        element: <ContactUs/>
      },
      {
        path: '/Grocery',
        //suspense is for time when react is loading grocery page and for that time 
        // period react is now falling back to the suspense fallback and then it 
        // is loaded then grocery will be printed
        element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([<HeadingComponent/>, <HeadingComponent2/>]);
root.render(<RouterProvider router={AppRouter}/>);