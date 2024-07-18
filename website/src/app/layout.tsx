
import "../styles/index.css";
import React from "react";
import type { Metadata } from "next";  
import StoreProvider from 'src/app/reduxProvider'
import { ToastContainer } from "react-toastify";
export const metadata: Metadata = {
  title: "ApartmentsGoat",
  description: "Makes apartments renting easy",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body> 
        <StoreProvider>
        <ToastContainer
            position="top-right"
            autoClose={2300}
            hideProgressBar={false}
            closeOnClick={true} 
          />
        <div id="root">{children}</div> 
        </StoreProvider>
      </body>
    </html>
  );
}
