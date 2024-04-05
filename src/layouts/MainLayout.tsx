// src/layouts/MainLayout.js
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;