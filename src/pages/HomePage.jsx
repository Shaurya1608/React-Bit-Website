import NeonNavbar from "../components/Navigation/NeonNavbar";
import FinalParticles from "../components/FinalAnimation/FinalParticles";
import DomeGallery from "../components/animations/DomeGallery";
import FlyingPosters from "../components/animations/FlyingPosters";
import Footer from "../components/home/Footer";
import LandingPage from "../components/home/LandingPage";
import Page2 from "../components/home/Page2";
import ProductsGrid from "../components/Products/ProductsGrid";


const HomePage = () => {
  const items = [
  'https://picsum.photos/500/500', 
  'https://picsum.photos/600/600', 
  'https://picsum.photos/400/400'
];
  return (
   
    
    <div className="flex min-h-screen flex-col bg-black">
      {/* Navbar at top */}
      <NeonNavbar />

      {/* Hero with particles fills remaining height */}
      <main className="relative flex-1">
     
        <FinalParticles />
        <LandingPage />
        
        
        <Page2 />

         <div className="h-screen w-90vw">
          <DomeGallery grayscale={false} />
         </div>



          <div className="">
            <ProductsGrid />
          </div>



          <div className="h-screen bg-black relative z-100 flex">
            <div className="h-full w-150  ">
             <FlyingPosters items={items}/>
           </div>
           <p className="variable-proximity-demo text-white absolute w-1/2 flex right-0 mr-10  text-5xl mt-50 font-bold">
              Create sleek, scalable e-commerce interfaces designed for speed, clarity, and conversions. From product discovery to checkout, every interaction is optimized to deliver a smooth, premium shopping experience that customers trust.
           </p>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
      </main>
    </div>
  );
};

export default HomePage;
