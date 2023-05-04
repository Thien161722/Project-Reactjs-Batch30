import React from "react";
import SlideSwiper from "../Component/SlideSwiper";
import ResponsiveProfessional from "../Component/ResponsiveProfessional";
import ResponsiveProfessionalSectionImage from "../Component/ResponsiveProfessionalSectionImage";
import ResponsiveProfessionalSectionDetail from "../Component/ResponsiveProfessionalSectionDetail";
import { resImage } from "../data/ResponsiveProfessional_Image";
import WhatWeOffer from "../Component/WhatWeOffer";
import WhatWeOfferItem from "../Component/WhatWeOfferItem";
import { wwoItem } from "../data/WhatWeOfferItem";
import ProductList from "../Component/ProductList";
import SubscribeToOurNewsletter from "../Component/SubscribeToOurNewsletter";

const HomePage = () => {
  return (
    <main>
      {/* slideSwiper */}
      <SlideSwiper />
      <ResponsiveProfessional>
        <ResponsiveProfessionalSectionImage
          urlImage={resImage[0].url}
          name={resImage[0].name}
        />
        <ResponsiveProfessionalSectionDetail
          subTitle="Our Services"
          title="Responsive & Professional"
          desc="We go the extra mile on every project. The value we provide clients
        comes from our level of skill and performance, as well as our knowledge
        and professionalism. Rest assured, we put the same level of energy into
        every project we take on."
          hotlineTitle="Call us today"
          hotlineNumber={"1900 - 111000"}
          descHotline="We're available 24/7, 365 days a year."
        />
      </ResponsiveProfessional>
      <WhatWeOffer title="What We Offer">
        {wwoItem.map((item) => {
          return (
            <WhatWeOfferItem
              key={`WhatWeOffer${item.id}`}
              urlImage={item.urlImage}
              link={item.link}
              title={item.title}
              desc={item.desc}
              titleBtn={item.titleBtn}
            />
          );
        })}
      </WhatWeOffer>
      <ProductList titleContainer="Danh sách sản phẩm"/>
      <SubscribeToOurNewsletter />
    </main>
  );
};

export default HomePage;
