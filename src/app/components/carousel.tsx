import Link from "next/link";
import TestimonialCard from "./testimonal_cards";

const testimonials = [
  {
    name: "Sarah Anderson",
    event: "Wedding Reception",
    comment:
      "Our wedding cake from The oven stove was an absolute showstopper! It not only looked breathtakingly beautiful but tasted heavenly too. The attention to detail and the delicate flavors exceeded our expectations. Our guests couldn&apos;t stop raving about it. Thank you for making our special day even more memorable with your exceptional creation",
    picture:
      "https://images.unsplash.com/photo-1592598015799-35c84b09394c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjB3aWZlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    event: "Graduation Party",
    comment:
      "We ordered a variety of cupcakes from [Bakery Name] for my daughter&apos;s graduation party, and they were a hit with everyone! The flavors were incredible, and the cupcakes were beautifully decorated with graduation-themed designs. The attention to detail was impressive. Not only did they look fantastic, but they tasted absolutely delicious. Thank you, [Bakery Name], for making our celebration memorable and sweet",
    picture:
      "https://images.unsplash.com/photo-1621398944643-f994c56c8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 3,
  },
  {
    name: "David Smith",
    event: "Anniversary Dinner",
    comment:
      "For our anniversary, I surprised my wife with a romantic dinner at home, complete with a decadent dessert from [Bakery Name]. The chocolate mousse cake was an absolute masterpiece. It was rich, velvety, and utterly indulgent. It created the perfect sweet ending to our evening. We were so impressed by the quality and flavor. [Bakery Name] truly knows how to make celebrations extra special",
    picture:
      "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    name: "John Davis",
    event: "Birthday Celebration",
    comment:
      "I ordered a custom cake from [Bakery Name] for my wife&apos;s birthday, and it was a true work of art! The intricate design perfectly captured her personality, and the flavors were absolutely divine. Not only did it impress visually, but every bite was pure bliss. The team at [Bakery Name] went above and beyond to make it a standout centerpiece for the celebration. Highly recommended",
    picture:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    name: "Robert Thompson",
    event: "Holiday Gathering",
    comment:
      "The holiday season wouldn&apos;t be complete without treats from [Bakery Name]. The selection of cookies, pastries, and cakes they offer is exceptional. The quality and taste of their baked goods are consistently outstanding. Our family and friends look forward to indulging in their creations every year. [Bakery Name] has become a cherished part of our holiday tradition, and we couldn&apos;t imagine celebrating without them",
    picture:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3,
  },
  {
    name: "Jessica Martinez",
    event: "Corporate Event",
    comment:
      "We recently had the pleasure of working with [Bakery Name] for our company&apos;s corporate event. The assortment of pastries they provided was a true delight for our attendees. The flavors were exquisite, and the presentation was elegant. The team at [Bakery Name] demonstrated professionalism and attention to detail throughout the process, making them an absolute pleasure to work with. Our guests were thoroughly impressed",
    picture:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmVtYWxlJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
];

export function Carousel() {

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...testimonials];

  return (
    <div className=" w-full overflow-x-hidden pb-6 pt-1">
      <ul className="flex animate-carousel hover:animate-none gap-4">
        {carouselProducts.map((product, i) => (
          <li
            className="h-[100vh] xl:max-h-[400px] lg:max-h-[450px] md:max-h-[450px] max-h-[550px] w-screen max-w-[475px] flex-none md:w-2/3"
            key={product.name}
          >
            <TestimonialCard
              name={product.name}
              picture={product.picture}
              event={product.event}
              comment={product.comment}
              rating={product.rating}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
