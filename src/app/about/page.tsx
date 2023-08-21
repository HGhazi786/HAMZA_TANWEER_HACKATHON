import BackgroundSlider from '../components/slider';
import ProfileCard from "../components/profile_card";
import Image from "next/image";

export default function About() {
  return (
    <div className="bg-orange-100 font-serif">
      <div
        style={{ position: "relative", width: "100%", height: "450px" }}
        className="bg-brown"
      >
        <BackgroundSlider
          bg1="/hero.jpg"
          bg2="/hero1.jpg"
          bg3="/hero2.jpg"
          bg4="/hero.jpg"
        />
        <div
          style={{ position: "relative", zIndex: 1 }}
          className="lg:py-20 xl:py-32 md:py-16 px-4 flex flex-col space-y-2 lg:space-y-3 text-orange-100 xl:space-y-3 md:space-y-3 items-center justify-center"
        >
          <h1 className="font-extrabold lg:text-7xl xl:text-7xl md:text-7xl text-4xl text-center text-white">
            Taste of Pure Joy
          </h1>
          <p className="md:mx-44 lg:mx-72 font-roboto xl:mx-96 mx-4 text-center text-lg text-orange-50">
            At our bakery, our mission is to create moments of pure joy and
            delight through exceptional baked goods. We strive to exceed
            expectations by delivering unique flavors and exquisite
            craftsmanship in every bite. With passion and creativity, we aim to
            brighten people&apos;s lives and be a beloved destination synonymous
            with indulgence and happiness. By fostering connections and
            spreading warmth, we envision becoming a cherished part of our
            customers&apos; special moments and everyday lives, one delicious
            treat at a time.
          </p>
        </div>
      </div>
      <div className="mrgn text-lg font-roboto">
        <div className="text-brown grid py-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-5">
          <div>
            <h1 className="font-festive font-semibold tracking-normal text-6xl mb-5">
              Legacy <span className='text-orange-900'>Baked with Love</span>
            </h1>
            <p>
              Our bakery has a rich history steeped in a passion for baking that
              spans generations. It all began with our founder, who discovered
              their love for the art of baking at an early age. Armed with
              cherished family recipes and a burning desire to share their
              creations with the world, they embarked on a journey to establish
              our beloved bakery. Over the years, we have evolved, refining our
              techniques and expanding our offerings, but our commitment to
              quality and craftsmanship remains unwavering. Today, we proudly
              carry forward the legacy, infusing each baked good with the same
              love and dedication that started it all, creating moments of pure
              delight for our cherished customers.
            </p>
          </div>
          <Image
            src="/lagacy.jpg"
            alt="img"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl shadow-brown"
          />
        </div>
        <div className="text-brown grid py-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-5">
          <Image
            src="/R.jpg"
            alt="img"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl shadow-brown"
          />
          <div>
            <h1 className="font-festive font-semibold tracking-normal text-6xl mb-5">
              Nurturing <span className='text-orange-900'>Communities</span> with Care
            </h1>
            <p className="">
              In our journey as a bakery, we recognize the importance of giving
              back and being an active member of our community. Community
              Involvement holds a special place in our hearts, and we strive to
              make a positive impact through various initiatives. From
              partnering with local charities to organizing fundraisers and
              volunteering our time and resources, we are dedicated to nurturing
              the communities we serve. We believe that through sweet
              connections and meaningful collaborations, we can create a ripple
              effect of kindness, compassion, and support for those in need
            </p>
          </div>
        </div>
        <div className="text-brown py-10 mb-5">
          <h1 className="text-center mb-5 font-festive font-bold tracking-wider text-6xl">
            <span className='text-orange-900'>Awards</span> and Recognitions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5">
            <Image src="/a1.png" alt="img" width={200} height={200} />
            <Image src="/a2.png" alt="img" width={200} height={200} />
            <Image src="/a3.png" alt="img" width={200} height={200} />
            <Image src="/a4.png" alt="img" width={200} height={200} />
            <Image src="/a5.png" alt="img" width={200} height={200} />
          </div>
        </div>
        <div className="text-brown grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-y-5 gap-x-10 py-10">
          <div
            className="relative h-0 overflow-hidden rounded-xl shadow-2xl shadow-brown"
            style={{ paddingBottom: "56.25%" }}
          >
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/add.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>

          <div>
            <h1 className="mb-5 font-festive font-bold tracking-normal text-6xl">
              From Field to <span className='text-orange-900'>Fork</span>
            </h1>
            <p className="font-roboto">
              We are committed to ensuring the highest standards of product
              quality and sourcing at our bakery. We meticulously select the
              finest ingredients, sourcing locally whenever possible to support
              our community and reduce our environmental footprint. From organic
              flours to farm-fresh eggs and handpicked seasonal fruits, we
              believe that using premium ingredients is essential in crafting
              exceptional baked goods. Our dedication to quality extends beyond
              ingredients to our rigorous baking techniques, ensuring that every
              product that leaves our ovens is a true reflection of our
              commitment to excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-brown text-center font-festive font-semibold tracking-normal text-6xl">
          Our Baking <span className='text-orange-900'>Maestros</span>
        </h1>
        <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-4 grid-cols-1 xl:grid-cols-4 mrgn py-5">
          <ProfileCard
            picture="/w1.jpg"
            name="Emily Rodriguez"
            designation="Head Pastry Chef"
            description="With years of experience and a creative flair, Emily is the mastermind behind our bakery's exquisite pastries. Her innovative approach and attention to detail ensure that each creation is a work of art"
          />
          <ProfileCard
            picture="/m1.jpg"
            name=" Thomas Gallagher"
            designation="Artisan Bread Specialist"
            description="Thomass passion lies in the art of bread-making. As our artisan bread specialist, he expertly crafts a wide variety of bread, from crusty sourdough to flavorful whole grain loaves, using traditional techniques and carefully selected ingredients"
          />
          <ProfileCard
            picture="/w2.jpg"
            name="Olivia Martinez"
            designation="Cake Decorating Guru"
            description="Olivia's expertise lies in transforming cakes into edible masterpieces. With her artistic skills and meticulous attention to design, she brings joy and wonder to every celebration with her beautifully decorated cakes"
          />
          <ProfileCard
            picture="/w4.jpg"
            name="Micheal Thomson"
            designation="Executive Chef"
            description="As the executive chef, Michael oversees the entire culinary operation of our bakery. With a wealth of experience and a deep understanding of flavors, he ensures that every product reflects the highest standards of taste, quality, and innovation"
          />
        </div>
      </div>
    </div>
  );
}
