import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero/hero";
import Testimonials from "@/components/testimonial/testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
