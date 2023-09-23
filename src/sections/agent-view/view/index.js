import { useContext } from "react";
import AgentViewAccording from "../DaysAccording/According";
import AgentHeader from "../Header";
import AgentInfo from "../Info";
import Hero from "../hero";
import { CheckoutContext } from "src/sections/checkout/context/checkout-context";

const AgentViewPage = () => {
  const { itinerary } = useContext(CheckoutContext);

  console.log(itinerary.itinerary, "city");
  const options = [
    {
      name: "Day 1. Barcelona",
      title: "Arrive",
    },
    {
      name: "Day 2. Barcelona.",
      title: "Gaudi and cheff’s showcooking",
    },
    {
      name: "Day 3. Barcelona",
      title: "Gothic quarter",
    },
    {
      name: "Day 4. Madrid",
      title: "Arrive",
    },
    {
      name: "Day 5. Toledo",
      title: "The city of the 3 cultures",
    },
    {
      name: "Day 6. Seville",
      title: "Cathedral and Barrio",
    },
    {
      name: "Day 7. Seville",
      title: "Depart",
    },
  ];
  return (
    <main className=" pb-7">
      <AgentHeader />
      <Hero />
      <AgentInfo />
      <div className=" space-y-7">
        {itinerary &&
          itinerary?.itinerary?.itinerary?.map((op, index) => (
            <AgentViewAccording
              key={index}
              dayName={op?.city}
              SubTitle={op.title}
            />
          ))}
      </div>
    </main>
  );
};

export default AgentViewPage;
