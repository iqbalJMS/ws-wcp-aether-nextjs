"use server";

import React from "react";


import ScrollToTop from "@/lib/element/global/scroll.top";
import { T_CarouselMainProps } from "@/app/$action/constants";
import { CE_BannerMain } from "@/app/$element/client.banner.main";
import { SE_IconMain } from "@/app/$element/server.icon.main";
import { CE_CarouselMain } from "@/app/$element/client.carousel.main";
// import { CE_ContentMain } from "@/app/$element/client.content.main";
// import { CE_KursMain } from "@/app/$element/client.kurs.main";

export default async function PageTester() {
  const dataDummy: T_CarouselMainProps['data'] = [
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
      button: {
        name: 'asd',
        link: 'https://bri.co.id'
      }
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
    {
      image: "/sites/default/files/images/1073-860x640.jpg",
      title: "Banner slider 1",
      desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
      subDesc: '20 Jan 2024',
    },
  ]
  

  return (
    <React.Fragment>
      
      
      <CE_BannerMain variant="04" 
        data={[
            {
              image: "/sites/default/files/images/1073-860x640.jpg",
              title: "Banner slider 1",
              desc: "<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>",
              button: ""
            }
          ]} />
      <SE_IconMain cookiesName="__personlized-menu"  />
      <CE_CarouselMain 
        variant="01" 
        data={dataDummy} 
        title="Keuntungan"
      />
      {/* <CE_KursMain /> */}
      {/* <SE_IconMain cookiesName="asd" />
      
      
      <CE_CarouselMain 
        variant="02" 
        data={dataDummy} 
        title="Promosi Baru KPR BRI"
        button={{
          link: 'https://bri.co.id',
          name: 'Temukan Promosi Lainnya'
        }}
      />
      <CE_CarouselMain 
        variant="03" 
        data={dataDummy} 
        title="Keuntungan"
      />
      <CE_CarouselMain 
        variant="04" 
        data={dataDummy} 
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya'
        }}
      />
      <CE_CarouselMain 
        variant="05" 
        data={dataDummy} 
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya'
        }}
      />
      <CE_ContentMain variant="01" data={dataDummy} title="Title"/>
      <CE_ContentMain variant="02" data={dataDummy}/>
      <CE_ContentMain variant="03" data={dataDummy}/> */}
      <ScrollToTop />
    </React.Fragment>
  );
}
