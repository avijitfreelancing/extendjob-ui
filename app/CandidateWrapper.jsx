import CandidatesHeader from "@/components/header/CandidatesHeader";
import CandidateMobileMenu from "@/components/header/CandidateMobileMenu";
import CandidatesSidebar from "@/components/header/CandidatesSidebar";
import CopyrightFooter from "@/layout/CopyrightFooter";
export default function RootLayout({ children }) {
    return (
        <div className="page-wrapper dashboard">
            <span className="header-span"></span>
            <CandidatesHeader />
            <CandidateMobileMenu />
            <CandidatesSidebar/>
            {children}
            <CopyrightFooter />
        </div>
    );
}