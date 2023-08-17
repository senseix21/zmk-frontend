import React, { ReactNode } from 'react';
import Navbar from '@/components/ui/Navbar';
import { JsxElement } from 'typescript';
import Footer from '@/components/ui/Footer';

interface RootLayoutProps {
    children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div data-theme={'corporate'}>{children}</div>
            <Footer />


        </div>
    );
};

export default RootLayout;