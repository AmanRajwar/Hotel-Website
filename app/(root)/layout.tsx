import ViewSection from "@/components/ViewSection"
import { ReactNode } from "react"
import ReviewSection from "@/components/ReviewSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import NavSection from "@/components/NavSection"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative  min-h-screen size-full  ">
            {children}  
            <NavSection/> 
            <ViewSection/>    
            <ReviewSection/>
            <AboutSection/>  
            <ContactSection/>
            {/* <ViewSection/> */}
        </main>
    )
}

export default RootLayout