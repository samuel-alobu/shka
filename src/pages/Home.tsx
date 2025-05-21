import { Header, Hero } from "../components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { data, listItems } from "../data/data";
import About from "../components/About";

const Home = () => {
  return (
    <Swiper
      spaceBetween={30}
      speed={3000}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ backgroundColor: `${item.colorLite}` }}
          className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-4 md:pt-8"
        >
          <Header colorDeep={item.colorDeep} />
          <Hero
            colorDeep={item.colorDeep}
            mainText={item.mainText}
            subText={item.subText}
            shadow={item.shadow}
            mobileShadow={item.mobileShadow}
            img={item.img}
          />
        </SwiperSlide>
      ))}
      {listItems.map((item, index) => (
        <About
          key={item.id}
          checkColor={item.checkColor}
          linkColor={item.linkColor}
          icon={item.icon}
          iconLink={item.iconLink}
          linkText={item.linkText}
          mainText={item.mainText}
          subText={item.subText}
          img={item.img}
          listItem={listItems[index]}
          imageOrder={index % 2 == 0 ? "order-first" : "order-last"}
          title="Top-quality digital courses designed to equip learners with practical, in-demand skills through engaging and flexible online learning."
        />
      ))}
    </Swiper>
  );
};

export default Home;
