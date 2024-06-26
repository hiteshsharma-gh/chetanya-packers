import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Section3() {
  return (
    <section>
      <h2 className="text-4xl font-semibold text-center text-[#ED3237] mt-24">Why Chetanya International Packers and Movers ?</h2>
      <div className="h-[35rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

const testimonials = [
  {
    title: "Service Locations",
    quote:
      "We deliver PAN India and international covering a vast area so that you don't have worry while moving.",
  },
  {
    title:
      "Tracking",
    quote: "We provide online tracking of consignment so that you have an ease of mind.",
  },
  {
    title: "Security",
    quote: "We insure that your stuff gets deliverd as it is with our industry standard processes",
  },
  {
    title:
      "Affordability",
    quote: "We understand shifting is a big decision so we provide an affordable price",
  },
  {
    title: "Experience",
    quote:
      "We have extensive experience and trust in this industry",
  },
];
