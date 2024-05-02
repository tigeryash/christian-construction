import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Gallery from "@/components/gallery/gallery";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonial/testimonials";

export default function Home() {
  return (
    <main className="flex h-[220vh] flex-col items-center justify-between px-6 md:px-16 lg:px-32">
      <Hero />
      <About />
      <Testimonials />
      <Gallery />
      <Contact />
    </main>
  );
}
