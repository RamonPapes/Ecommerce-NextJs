// src/layouts/MainLayout.js
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import '../app/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
    title: "Clothes Clove",
}

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <html lang="pt-br">
            <body className={`${montserrat.className}`}>
                <Navbar />
                {children}
                <Footer />
            </body>

        </html>
    );
}

export default MainLayout;