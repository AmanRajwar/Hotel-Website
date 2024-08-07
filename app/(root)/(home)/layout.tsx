import { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <section className="  min-h-screen size-full  ">
           <div className="w-full h-full flex justify-center">
            {children}
           </div>
        
        </section>
    )
}

export default RootLayout