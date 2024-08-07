import ViewSection from "@/components/ViewSection"
import { ReactNode } from "react"
import ReviewSection from "@/components/ReviewSection"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative  min-h-screen size-full  ">
            {children}   
            <ViewSection/>    
            <ReviewSection/>  
            {/* <ViewSection/> */}
        </main>
    )
}

export default RootLayout