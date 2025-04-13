# Landing Page

Setting up your landing page is super quick — **just plug in the code and you're done in under 5 minutes**. All components and styling are already implemented for you.

---

## Steps

1. Update the `app/page.tsx` .
2. Paste the following code into the file:

```tsx
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import OurProducts from "@/components/OurProducts";
import HoursSaved from "@/components/HoursSaved";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <Navbar />
      <>
        <Hero />
        <Features />
        <HoursSaved />
        <Testimonials />
        <Pricing />
        <OurProducts />
        <FAQ />
        <CTA />
        <Footer />
      </>
    </div>
  );
}
```

---

### That’s it!
Your entire landing page is now ready — all components are pre-styled and responsive. No need to build anything from scratch.
