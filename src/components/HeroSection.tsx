import { ContactUsForm } from "./ContactUsForm";

import { TypewriterEffectSmooth } from "@/components/ui/typewritter-effect";

const words = [
  {
    text: "Chetanya",
  },
  {
    text: "International",
  },
  {
    text: "Packers & Movers",
    className: "text-orange-400",
  },
];

export function HeroSection() {
  return (
    <section className="flex lg:justify-between flex-wrap items-center m-0 bg-gradient-to-tl from-cyan-400 to-amber-300">
      <div className="py-10 lg:py-0">
        <div className="flex flex-col items-center justify-center h-auto  ">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="lg:max-w-96 w-full mr-2 bg-cyan-500 rounded-xl p-5 m-3">
        <ContactUsForm />
      </div>
    </section>
  );
}
