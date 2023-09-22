import card1 from "src/assets/client-view/cards/1.jpg";
import card2 from "src/assets/client-view/cards/2.jpg";
import card3 from "src/assets/client-view/cards/3.jpg";
import card4 from "src/assets/client-view/cards/4.jpg";
import card5 from "src/assets/client-view/cards/5.jpg";
import card6 from "src/assets/client-view/cards/6.jpg";
import day1night from "src/assets/client-view/days/1/night.jpg";
import day1dinner from "src/assets/client-view/days/1/dinner.jpg";
import day2morning1 from "src/assets/client-view/days/2/morning1.jpg";
import day2morning2 from "src/assets/client-view/days/2/morning2.jpg";
import day2lunch1 from "src/assets/client-view/days/2/lunch1.jpg";
import day2lunch2 from "src/assets/client-view/days/2/lunch2.jpg";
import day2dinner from "src/assets/client-view/days/2/dinner.jpg";
import day2night from "src/assets/client-view/days/2/night.jpg";
export const DaysModul = [
  {
    id: "1",
    image: card1,
    place: "Barcelona",
    title: "Arrive at hotel",
    day: "Day 1",
    description: (
      <>
        Arrive in Barcelona, where you are met by your Private Local Expert,
        transferred to your hotel and assisted with check-in. Enjoy the
        remainder of your day at leisure
      </>
    ),
    weather: {
      value: "23",
      secRank: "7,5",
    },
    timeLine: [
      {
        id: "1",
        time: "night",
        components: [
          {
            type: "hotel",
            isPaid: true,
            rating: "4.7",
            title: "Palace Barcelona Hotel. Junior Suite.",
            image: day1night,
            location: "A 1,6km del centro",
            roomBed: "2 Camas individuales",
            roomBath: "Baño privado",
            feedback: [
              { name: "I don’t like the hotel" },
              {
                name: "About the room",
                options: ["Good service", "Bad food", "Excellent bed"],
              },
              {
                name: "Extras",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        time: "dinner",
        components: [
          {
            type: "food",
            title: "Clarita Bar",
            image: day1dinner,
            description:
              "This is just a recommendation, not included in the package.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    image: card2,
    place: "Barcelona",
    title: "Gaudi & chef’s showcooking",
    day: "Day 2",
    description: (
      <>
        Accompanied by your private guide, discover the masterpieces of
        Catalonia's famed architect, Antoni Gaudí, starting with the Casa Mila,
        also known as La Pedrera.
        <br />
        <br />
        Next, visit the visually arresting Sagrada Familia Basilica. Started in
        1882 and still not complete, it combines Gothic influences with Art
        Nouveau.
        <br />
        <br />
        Finally, stop at Parc Guell, a beautiful municipal garden with a
        gatehouse where Gaudí lived during his later years, to view furnishings
        he designed as well as personal memorabilia. This evening, enjoy a local
        Chef’s Showcooking and savour the authentic flavors of Spain.
      </>
    ),
    feedback: [
      {
        name: "I want more free time",
      },
    ],
    timeLine: [
      {
        id: "1",
        time: "breakfast",
        included: true,
      },
      {
        id: "2",
        time: "morning",
        components: [
          {
            type: "event",
            title: "Visit Sagrada Familia",
            image: day2morning1,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            note: "Must see",
            time: "9.30 - 10.30",
            isPaid: true,
            rating: "4.7",
            feedback: [
              { name: "I don’t have interest in this" },
              {
                name: "Too early",
              },
            ],
          },
          {
            type: "event",
            title: "City sightseeing bus tour",
            image: day2morning2,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            note: "Nice to have",
            time: "11.00 - 12.00",
            isPaid: true,
            rating: "4.7",
            feedback: [
              { name: "I don’t have interest in this" },
              {
                name: "Too early",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        time: "lunch",
        components: [
          {
            type: "food",
            title: "Criolla Restaurant",
            image: day2lunch1,
            description:
              "This is just a recommendation, not included in the package.",
          },
          {
            type: "food",
            title: "Paella at Casa Luis",
            image: day2lunch2,
            description:
              "This is just a recommendation, not included in the package.",
          },
        ],
      },
      {
        id: "4",
        time: "evening",
        freeTime: true,
      },
      {
        id: "5",
        time: "dinner",
        components: [
          {
            type: "food",
            title: "Mesón Henri",
            image: day2dinner,
            description:
              "This is just a recommendation, not included in the package.",
          },
        ],
      },
      {
        id: "6",
        time: "night",
        components: [
          {
            type: "event",
            title: "F.C. Barcelona - Atlético de Madrid",
            image: day2night,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            note: "nice to have",
            time: "9:00 - 17:00",
            isPaid: false,
            rating: "4.7",
            feedback: [
              { name: "Don’tlike" },
              {
                name: "Too late",
              },
              {
                name: "Something cheaper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3",
    image: card3,
    place: "Madrid",
    title: "Gothic quarter",
    day: "Day 3",
  },
  {
    id: "4",
    image: card4,
    place: "Barcelona",
    title: "City tour, Prado Museum",
    day: "Day 4",
  },
  {
    id: "5",
    image: card5,
    place: "Toledo",
    title: "The city of the 3 cultures",
    day: "Day 5",
  },
  {
    id: "6",
    image: card6,
    place: "Sevilla",
    title: "Cathedral & barrio",
    day: "Day 6",
  },
  {
    id: "7",
    image: card5,
    place: "Toledo",
    title: "The city of the 3 cultures",
    day: "Day 5",
  },
  {
    id: "8",
    image: card6,
    place: "Sevilla",
    title: "Cathedral & barrio",
    day: "Day 6",
  },
];
