// src/layouts/MainLayout.js
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import Nav from "@/components/nav";

interface MainLayoutProps {
    children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div>
            {/* <Sidebar /> */}
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;