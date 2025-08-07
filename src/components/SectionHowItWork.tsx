import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    youtubeUrl: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    title: "Understand how booking works in detail with practical examples",
    desc:
      "Booking a trip is easier than ever. First, choose your destination and dates. Then, explore various accommodation options available. Compare prices, read reviews, and select the one that suits you best. Make sure to check the cancellation policy and additional amenities. Once selected, proceed with payment. After confirmation, you will receive a booking code and instructions via email. Always keep your booking info accessible. This system allows you to modify or cancel your trip easily, ensuring flexibility and convenience throughout your travel experience.",
    youtubeUrl: "https://www.youtube.com/embed/W4YfDg-dKzk",
  },
  {
    id: 2,
    title: "Manage your travel with a smart checklist of essential things",
    desc:
      "A smart checklist can transform your travel experience. Begin by listing your travel documents, including passport, visa, and tickets. Next, include essentials like clothes suitable for the weather, personal care items, medications, and electronic devices. Don’t forget chargers, adapters, and your travel itinerary. Add reminders for hotel check-in times, local emergency numbers, and cultural customs. Keep a copy of your checklist digitally so you can easily access it. This helps you stay organized and avoid last-minute stress during your journey.",
    youtubeUrl: "https://www.youtube.com/embed/ahy5o5nT4oI",
  },
  {
    id: 3,
    title: "Save more by using exclusive travel discounts and deals",
    desc:
      "Traveling doesn’t have to be expensive. You can save significantly by using exclusive deals and discounts. Start by subscribing to newsletters of travel agencies and websites. Look out for early-bird or last-minute deals. Use loyalty programs and cashback offers. Travel off-season to enjoy lower prices and less crowded destinations. Consider alternative accommodations like hostels or vacation rentals. Compare different transport options — buses, trains, or budget airlines. Being flexible with your travel plans can also help you save more. Always plan ahead and book through trusted platforms.",
    youtubeUrl: "https://www.youtube.com/embed/QoaDkejcHSc",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div className={`nc-SectionHowItWork ${className}`} data-nc-id="SectionHowItWork">
      <Heading isCenter desc="Keep calm & travel on">How it works</Heading>
      <div className="mt-20 grid md:grid-cols-3 gap-14">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-lg mx-auto text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
            <div className="aspect-w-16 aspect-h-9 w-full mb-6">
              <iframe
                className="w-full h-full rounded-lg"
                src={item.youtubeUrl}
                title={`How it works video ${item.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
