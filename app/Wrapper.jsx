import Header from "@/components/header/Header";
import MobileMenu from "@/components/header/MobileMenu";
import Footer from "@/layout/Footer";
export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <MobileMenu />
            {children}
            <Footer />
        </>
    );
}