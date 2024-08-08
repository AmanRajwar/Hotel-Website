import ViewSection from "@/components/ViewSection"
import { ReactNode } from "react"
import ReviewSection from "@/components/ReviewSection"
import AboutSection from "@/components/AboutSection"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative  min-h-screen size-full  ">
            {children}   
            <ViewSection/>    
            <ReviewSection/>
            <AboutSection/>  
            {/* <ViewSection/> */}
        </main>
    )
}

export default RootLayout