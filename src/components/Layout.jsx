import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import FloatingSidebar from './FloatingSidebar'; // Import the FloatingSidebar component

export default function Layout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CustomCursor />
      <Footer />
      <FloatingSidebar /> {/* Add the FloatingSidebar component */}
    </>
  );
}