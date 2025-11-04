import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';

export const resturant = [
  {
    name: "Al Khaja",
    images: [
      {
        url: image1,
        hotspots: [
          {
            x: 32, y: 40, // % position on image
            ingredient: {
              name: "Tomato",
              img: image1,
              calories: "18 kcal",
              macros: "Carbs 3.9g | Protein 0.9g | Fat 0.2g",
              allergen: "None",
              priceExtra: "+₹15"
            }
          },
          {
            x: 70, y: 58,
            ingredient: {
              name: "Olives",
              img: "/ingredients/olives.png",
              calories: "115 kcal",
              macros: "Fat 10.7g | Protein 0.8g",
              allergen: "None",
              priceExtra: "+₹20"
            }
          }
        ]
      },
      { url: image2, hotspots: [
          {
            x: 32, y: 40, // % position on image
            ingredient: {
              name: "Tomato",
              img: image1,
              calories: "18 kcal",
              macros: "Carbs 3.9g | Protein 0.9g | Fat 0.2g",
              allergen: "None",
              priceExtra: "+₹15"
            }
          },
          {
            x: 70, y: 58,
            ingredient: {
              name: "Olives",
              img: "/ingredients/olives.png",
              calories: "115 kcal",
              macros: "Fat 10.7g | Protein 0.8g",
              allergen: "None",
              priceExtra: "+₹20"
            }
          }
        ]},
      { url: image3,  hotspots: [
          {
            x: 32, y: 40, // % position on image
            ingredient: {
              name: "Tomato",
              img: image1,
              calories: "18 kcal",
              macros: "Carbs 3.9g | Protein 0.9g | Fat 0.2g",
              allergen: "None",
              priceExtra: "+₹15"
            }
          },
          {
            x: 70, y: 58,
            ingredient: {
              name: "Olives",
              img: "/ingredients/olives.png",
              calories: "115 kcal",
              macros: "Fat 10.7g | Protein 0.8g",
              allergen: "None",
              priceExtra: "+₹20"
            }
          }
        ] }
    ]
  },
  {
    name: "Paradise",
    images: [
      {
        url: image4,
        hotspots: [
          {
            x: 42, y: 55,
            ingredient: {
              name: "Chicken",
              img: "/ingredients/chicken.png",
              calories: "239 kcal",
              macros: "Protein 27g | Fat 14g",
              allergen: "None",
              priceExtra: "+₹40"
            }
          },
          {
            x: 60, y: 30,
            ingredient: {
              name: "Basmat Rice",
              img: "/ingredients/rice.png",
              calories: "120 kcal",
              macros: "Carbs 26g | Protein 2.7g | Fat 0.3g",
              allergen: "None",
              priceExtra: "+₹25"
            }
          }
        ]
      },
      { url: image5,  hotspots: [
          {
            x: 32, y: 40, // % position on image
            ingredient: {
              name: "Tomato",
              img: image1,
              calories: "18 kcal",
              macros: "Carbs 3.9g | Protein 0.9g | Fat 0.2g",
              allergen: "None",
              priceExtra: "+₹15"
            }
          },
          {
            x: 70, y: 58,
            ingredient: {
              name: "Olives",
              img: "/ingredients/olives.png",
              calories: "115 kcal",
              macros: "Fat 10.7g | Protein 0.8g",
              allergen: "None",
              priceExtra: "+₹20"
            }
          }
        ] },
      { url: image6,  hotspots: [
          {
            x: 32, y: 40, // % position on image
            ingredient: {
              name: "Tomato",
              img: image1,
              calories: "18 kcal",
              macros: "Carbs 3.9g | Protein 0.9g | Fat 0.2g",
              allergen: "None",
              priceExtra: "+₹15"
            }
          },
          {
            x: 70, y: 58,
            ingredient: {
              name: "Olives",
              img: "/ingredients/olives.png",
              calories: "115 kcal",
              macros: "Fat 10.7g | Protein 0.8g",
              allergen: "None",
              priceExtra: "+₹20"
            }
          }
        ] }
    ]
  }
];
