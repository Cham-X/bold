import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import OurBlog from "@/sections/OurBlog";
import OurService from "@/sections/OurService";

export default function Home() {
  return (
    <div className="bg-blue-700 flex flex-col">
      <Hero />
      <OurService />
      <OurBlog />
      <Footer/>
    </div>
  );
}
