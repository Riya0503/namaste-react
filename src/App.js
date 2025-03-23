import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body, {api} from "./components/Body";
import Footer from './components/footer';

const Applayout = () => {
  return <div className="app">
      <Header/>
      <Body/>
      <Footer/>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render([<HeadingComponent/>, <HeadingComponent2/>]);
root.render(<Applayout/>);