import Image from "next/image";
import Navbar from "./Component/Navbar";
import { Hero } from "./Component/Hero";
import Category from './Category/page';
import Collection from './Collection/page';
import Spoted from './Spoted/page';
import Footer from "./Component/Footer";


export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Category />
    <Collection />
    <Spoted />
    <Footer />
    </div>
  );
}
