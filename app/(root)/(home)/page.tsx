import { Button } from "@/components/ui/button"
import { BookCheck } from "lucide-react";

// import Layers from "@/public/images/Layers";
const Home = () => {


  return (
    <section className=" relative h-[100vh]  size-full flex-col gap-5 text-black bg-hero  bg-cover bg-center bg-no-repeat">
      <div className="text-slate-100 relative h-[100vh] w-full flex flex-col items-center justify-center ">

        <div className="relative flex flex-col  items-center justify-center  ">

          <h1 className="flex-1 mb-6 text-nowrap font-3 font-bold leading-3 tracking-widest text-2xl  max-sm:text-xl">
            Where the Hills Feel Like Home!
          </h1>
          <h1 className=" font-3  tracking-widest text-lg max-sm:text-base ">
            Discover the great Outdoors
          </h1>

        </div>
        <div className=" z-10 flex flex-col items-center justify-center absolute bottom-0 w-[33%] max-lg:w-[90%] lg:w-[50%] mb-10">
          
          <p className="text-center font-3  tracking-widest font-light mb-10 max-sm:text-sm ">
            Nestled in the heart of the hills, our homestay offers an unparalleled escape into the breathtaking beauty of nature, where lush greenery, towering trees, and starlit skies create a serene and picturesque retreat.
          </p>

          <Button className="rounded-full bg-white text-slate-900 px-6 py-6 mb-5">
            <BookCheck className="h-6 "> </BookCheck>
            <h1 className=" ml-2 text-xl font-bold"> Book now</h1>
          </Button>

          <h1 className=" font-3 font-light   tracking-widest text-lg max-sm:text-base ">Starts at<span className="text-xl max-sm:text-lg font-bold">  $111</span> /night</h1>
        </div>
      </div>
      <div className="h-[20vh] font-3  w-full absolute bottom-0 abc z-1 ">

      </div>

    </section>
  );
};

export default Home;



