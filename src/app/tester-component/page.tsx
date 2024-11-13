'use server';

import React from 'react';

import SE_FormMain from '@/app/(views)/$element/form/server.form.main';
import SE_PortletMain from '@/app/(views)/$element/portlet/server.portlet.main';
import SE_WysiwygMain from '@/app/(views)/$element/wysiwyg/server.wysiwyg.main';
import ScrollToTop from '@/lib/element/global/scroll.top';
import CE_BannerMain from '@/app/(views)/$element/banner/client.banner.main';
import SE_IconMain from '@/app/(views)/$element/icon-menu/server.icon.main';
import CE_CarouselMain from '@/app/(views)/$element/carousel/client.carousel.main';
import { CE_ContentMain } from '@/app/(views)/$element/content/client.content.main';
import CE_KursMain from '@/app/(views)/$element/kurs/client.kurs.main';
import Image from '@/lib/element/global/image';
import { CE_CardVariant01 } from '@/app/(views)/$element/card/client.card.variant01';
import CE_CardVariant02 from '@/app/(views)/$element/card/client.card.variant02';
import { CE_CardVariant03 } from '@/app/(views)/$element/card/client.card.variant03';
import { CE_CardVariant04 } from '@/app/(views)/$element/card/client.card.variant04';
import { CE_CardVariant05 } from '@/app/(views)/$element/card/client.card.variant05';
import { CE_CardVariant06 } from '@/app/(views)/$element/card/client.card.variant06';
import { CE_CardVariant07 } from '@/app/(views)/$element/card/client.card.variant07';
import CE_CardVariant08 from '@/app/(views)/$element/card/client.card.variant08';
import { CE_CardVariant10 } from '@/app/(views)/$element/card/client.card.variant10';
import CE_CardVariant11 from '@/app/(views)/$element/card/client.card.variant11';
import { CE_CardVariant12 } from '@/app/(views)/$element/card/client.card.variant12';
import { CE_CardVariant13 } from '@/app/(views)/$element/card/client.card.variant13';
import { CE_CardVariant14 } from '@/app/(views)/$element/card/client.card.variant14';
import { CE_CardVariant15 } from '@/app/(views)/$element/card/client.card.variant15';
import { T_CarouselMainProps } from '@/app/(views)/$constant/types';
import CE_CardVariant16 from '@/app/(views)/$element/card/client.card.variant16';
import Accordion from '@/lib/element/global/accordion';
import ImageViewer from '@/lib/element/global/image.viewer';
import CE_CardVariant09 from '@/app/(views)/$element/card/client.card.variant09';
import CE_SimulationMain from '@/app/(views)/$element/simulation/client.simulation.main';
import { CE_CarouselVariant06 } from '@/app/(views)/$element/carousel/client.carousel.variant06';
import SE_PortletVariant06 from '@/app/(views)/$element/portlet/server.portlet.variant06';

export default async function PageTester() {
  const dataDummy: T_CarouselMainProps['data'] = [
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
      button: {
        name: 'asd',
        link: 'https://bri.co.id',
      },
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
    {
      image: '/sites/default/files/images/1073-860x640.jpg',
      title: 'Banner slider 1',
      desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
      subDesc: '20 Jan 2024',
    },
  ];

  const simulations = [
    {
      title: 'Cicilan KPR',
      image: '/sites/default/files/images/1073-860x640.jpg',
      tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
      variant: 'kpr',
    },
    {
      title: 'Cicilan Kendaraan',
      image: '/sites/default/files/images/1073-860x640.jpg',
      tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
      variant: 'car',
    },
    {
      title: 'Cicilan Briguna',
      image: '/sites/default/files/images/1073-860x640.jpg',
      tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
      variant: 'briguna',
    },
  ];

  return (
    <React.Fragment>
      CE_BannerMain 01
      <CE_BannerMain
        variant="01"
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
        ]}
      />
      CE_BannerMain 02
      <CE_BannerMain
        variant="02"
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
        ]}
      />
      CE_BannerMain 03
      <CE_BannerMain
        variant="03"
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
        ]}
      />
      CE_BannerMain 04
      <CE_BannerMain
        variant="04"
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Banner slider 1',
            desc: '<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>',
            button: '',
          },
        ]}
      />
      SE_FormMain
      <SE_FormMain
        placeholder="Search..."
        title="Saya ingin"
        // imageTitle="/images/icon-menu/config.png"
        listItems={[
          { title: 'Open Deposit', value: '#' },
          { title: 'Open Deposit', value: '#' },
        ]}
        // dropdownType="input-text"
        variant="01"
      />
      SE_IconMain
      <SE_IconMain cookiesName="__personlized-menu" />
      SE_WysiwygMain
      <SE_WysiwygMain
        variant="01"
        title="Laris Manis, Ini 9 Tips Mudah Jualan Online Buat Pemula"
        createdAt="Rabu, 11 September 2024 | 14:43"
        // buttonText="Bagikan"
        imageContent="/sites/default/files/images/1073-860x640.jpg"
        content="<p>Transformasi Berkelanjutan untuk Tumbuh Semakin Kuat Dan Hebat</p>"
      />
      CE_KursMain
      <CE_KursMain availableCurrency={[]} listCurrency={[]} listTable={[]} />
      CE_CarouselMain
      <CE_CarouselMain variant="01" data={dataDummy} title="Keuntungan" />
      CE_CarouselMain
      <CE_CarouselMain
        variant="02"
        data={dataDummy}
        title="Promosi Baru KPR BRI"
        button={{
          link: 'https://bri.co.id',
          name: 'Temukan Promosi Lainnya',
        }}
      />
      CE_CarouselMain 03
      <CE_CarouselMain variant="03" data={dataDummy} title="Keuntungan" />
      CE_CarouselMain 04
      <CE_CarouselMain
        variant="04"
        data={dataDummy}
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya',
        }}
      />
      CE_CarouselMain 05
      <CE_CarouselMain
        variant="05"
        data={dataDummy}
        title="Keuntungan"
        description="Keuntungan Description"
        button={{
          link: 'https://bri.co.id',
          name: 'Lainnya',
        }}
      />
      CE_ContentMain 01
      <CE_ContentMain variant="01" data={dataDummy} title="Title" />
      CE_ContentMain 02
      <CE_ContentMain variant="02" data={dataDummy} />
      CE_ContentMain 03
      <CE_ContentMain variant="03" data={dataDummy} />
      CE_CardVariant01
      <CE_CardVariant01
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            buttons: [
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
            ],
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            buttons: [
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
            ],
          },
        ]}
      />
      CE_CardVariant02
      <CE_CardVariant02
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant03
      <CE_CardVariant03
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            buttons: [
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
            ],
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            buttons: [
              {
                link: 'https://bri.co.id',
                title: 'Selengkapnya',
                extern: true,
              },
            ],
          },
        ]}
      />
      CE_CardVariant04
      <CE_CardVariant04
        data={[
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subDescription:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              link: 'https://bri.co.id',
              image: '/sites/default/files/images/1073-860x640.jpg',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subDescription:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              link: 'https://bri.co.id',
              image: '/sites/default/files/images/1073-860x640.jpg',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subDescription:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              link: 'https://bri.co.id',
              image: '/sites/default/files/images/1073-860x640.jpg',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            subDescription:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              link: 'https://bri.co.id',
              image: '/sites/default/files/images/1073-860x640.jpg',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant05
      <CE_CardVariant05
        data={[
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
        ]}
      />
      CE_CardVariant06
      <CE_CardVariant06
        title="Lorem Ipsum"
        data={[
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
          {
            title: 'Lorem Ipsum',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          },
        ]}
      />
      CE_CardVariant07
      <CE_CardVariant07
        data={[
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant08
      <CE_CardVariant08
        title="Lorem Ipsum "
        data={[
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant16
      <CE_CardVariant16
        title="Card Variant 16"
        data={[
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum asdasdasd',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      <h1>CE_CardVariant09</h1>
      <CE_CardVariant09
        data={[
          {
            title: 'Lorem Ipsum',

            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              image: '/sites/default/files/images/1073-860x640.jpg',
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',

            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              image: '/sites/default/files/images/1073-860x640.jpg',
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',

            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            button: {
              image: '/sites/default/files/images/1073-860x640.jpg',
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      <h1>CE_CardVariant10</h1>
      <CE_CardVariant10
        title="Lorem Ipsum"
        description="Lorem Ipsum is simply dummy text of the printing"
      />
      <h1>CE_CardVariant11</h1>
      <CE_CardVariant11
        title="Lorem Ipsum"
        data={[
          {
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing',
          },
          {
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing',
          },
          {
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing',
          },
        ]}
      />
      <h1>CE_CardVariant12</h1>
      <CE_CardVariant12
        data={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            title: 'Lorem Ipsum',
            description: 'Lorem Ipsum the contera ascentdant kornoy',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant13
      <CE_CardVariant13
        title="Lorem Ipsum"
        data={[
          {
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing',
            address: '',
            contactInformation: {
              fax: '123',
              telephone: '123',
              website: 'https://bri.co.id',
            },
            subTitle: 'BRI SE',
          },
          {
            title: 'Lorem Ipsum',
            image: '/sites/default/files/images/1073-860x640.jpg',
            description: 'Lorem Ipsum is simply dummy text of the printing',
            address: '',
            contactInformation: {
              fax: '123',
              telephone: '123',
              website: 'https://bri.co.id',
            },
            subTitle: 'BRI SE',
          },
        ]}
      />
      CE_CardVariant14
      <CE_CardVariant14
        data={[
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
          {
            title: 'Lorem Ipsum',
            subTitle: 'Lorem Ipsum is simply dummy',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
            image: '/sites/default/files/images/1073-860x640.jpg',
            button: {
              link: 'https://bri.co.id',
              title: 'Selengkapnya',
              extern: true,
            },
          },
        ]}
      />
      CE_CardVariant15
      <CE_CardVariant15
        title={'Lorem Ipsum'}
        button={{
          link: 'https://bri.co.id',
          title: 'Selengkapnya',
          extern: true,
        }}
        data={[
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
          { image: '/sites/default/files/images/1073-860x640.jpg' },
        ]}
      />
      {/* Portlet Variant 01 */}
      SE_PortletMain
      <SE_PortletMain
        variant="01"
        title="Mengapa Memilih BRI"
        subtitle="Melayani lebih dari 128 tahun, Bank BRI senantiasa memberikan kemudahan dan kecepatan dalam merespon berbagai kebutuhan nasabah dengan didukung oleh layanan perbankan yang prima."
        listItems={[
          {
            image: '/web/guest/images/why-us/kredit.png',
            text: '<h3><strong>Produk Lengkap</strong></h3><p>Produk dan Layanan Bank BRI lengkap dan beragam untuk semua segmen sesuai kebutuhan nasabah</p>',
          },
          {
            image: '/web/guest/images/why-us/kredit.png',
            text: '<h3><strong>Produk Lengkap</strong></h3><p>Produk dan Layanan Bank BRI lengkap dan beragam untuk semua segmen sesuai kebutuhan nasabah</p>',
          },
          {
            image: '/web/guest/images/why-us/kredit.png',
            text: '<h3><strong>Produk Lengkap</strong></h3><p>Produk dan Layanan Bank BRI lengkap dan beragam untuk semua segmen sesuai kebutuhan nasabah</p>',
          },
        ]}
        textLink="Lihat selengkapnya"
        bgImage="/sites/default/files/images/whybanking.jpg"
        navigationLink="https://bri.co.id"
      />
      {/* Portlet Variant 02 */}
      SE_PortletMain
      <SE_PortletMain
        variant="02"
        title="Mengapa BRI?"
        subtitle="Karena BRI itu merupakan Bank di Indonesia yang paling terbaik"
        bgImage="/sites/default/files/images/whybanking.jpg"
        buttonItems={[
          {
            buttonLink: 'https://bri.co.id',
            buttonText: 'Unduh',
          },
        ]}
        variantLayout="rounded_corneer"
      />
      <h3>SE_PortletMain</h3>
      <SE_PortletMain
        variant="02"
        title="Mengapa BRI?"
        subtitle="Karena BRI itu merupakan Bank di Indonesia yang paling terbaik"
        bgImage="/sites/default/files/images/whybanking.jpg"
        buttonItems={[
          {
            buttonLink: 'https://bri.co.id',
            buttonText: 'Unduh',
          },
        ]}
        variantLayout="large"
      />
      {/* Portlet Variant 03 */}
      <h3>SE_PortletMain</h3>
      <SE_PortletMain
        variant="03"
        headerAlignment="left"
        imageContentAlignment="right"
        title="Mengapa BRI?"
        subtitle="Karena BRI itu merupakan Bank di Indonesia yang paling terbaik"
        listItems={[
          {
            text: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, omnis illo consectetur expedita similique voluptates adipisci iste modi corporis quod vitae ut ex non eum minus eos nemo repellat dolorem magni error repudiandae. Maxime animi accusantium voluptates sit ad voluptatibus, ex aliquid molestias aspernatur consequatur consectetur accusamus temporibus culpa adipisci.</p>',
          },
        ]}
        bgImage="/sites/default/files/images/whybanking.jpg"
        buttonItems={[
          {
            buttonLink: 'https://bri.co.id',
            buttonText: 'Unduh',
          },
        ]}
      />
      {/* Accordion Base */}
      <h3>Accordion - slider</h3>
      <div className="py-4 container">
        <h6>accordion - 1</h6>
        <Accordion
          renderTitle={
            <p className="text-l-bold text-left font-medium leading-8">
              Laporan
            </p>
          }
          isOpen
          renderContent={
            <CE_CardVariant11
              title="Lorem Ipsum"
              data={[
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
              ]}
            />
          }
        />
      </div>
      {/* Accordion Full Border */}
      <div className="py-4">
        <h6>accordion - 2</h6>
        <Accordion
          variant="full-border"
          renderTitle={
            <p className="text-l-bold text-left font-medium leading-8">
              Laporan
            </p>
          }
          isOpen
          renderContent={
            <CE_CardVariant11
              title="Lorem Ipsum"
              data={[
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
              ]}
            />
          }
        />
      </div>
      {/* Accordion Rounded */}
      <div className="py-4 container">
        <h6>accordion - 3</h6>
        <Accordion
          variant="rounded"
          renderTitle={
            <>
              <div className="flex items-center gap-2">
                <Image
                  src="/sites/default/files/images/1073-860x640.jpg"
                  width={40}
                  height={40}
                  alt="image"
                  extern={false}
                  className="rounded-md"
                />
                <p className="text-xl-semibold text-left leading-8">Laporan</p>
              </div>
            </>
          }
          isOpen
          renderContent={
            <CE_CarouselVariant06
              data={[
                {
                  image: '/web/guest/images/bri-mobile-image.png',
                  description:
                    '1. Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  image: '/web/guest/images/bri-mobile-image.png',
                  description:
                    '1. Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  image: '/web/guest/images/bri-mobile-image.png',
                  description:
                    '1. Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  image: '/web/guest/images/bri-mobile-image.png',
                  description:
                    '1. Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  image: '/web/guest/images/bri-mobile-image.png',
                  description:
                    '1. Lorem Ipsum is simply dummy text of the printing',
                },
              ]}
            />
          }
        />
      </div>
      {/* Accordion Full */}
      <div className="py-4 container">
        <Accordion
          variant="full"
          renderTitle={
            <p className="text-xl-semibold text-left leading-8">Laporan</p>
          }
          isOpen
          renderContent={
            <CE_CardVariant11
              title="Lorem Ipsum"
              data={[
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
                {
                  title: 'Lorem Ipsum',
                  image: '/sites/default/files/images/1073-860x640.jpg',
                  description:
                    'Lorem Ipsum is simply dummy text of the printing',
                },
              ]}
            />
          }
        />
      </div>
      CE_SimulationMain
      <CE_SimulationMain
        type="tab"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'kpr'}
        tabs={simulations}
      />
      CE_SimulationMain
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'kprs'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'KPRS',
            variant: 'kprs',
          },
        ]}
      />
      CE_SimulationMain
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'britama-rencana'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Britama Rencana',
            variant: 'britama-rencana',
          },
        ]}
      />
      CE_SimulationMain
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'briguna-karya'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'BRIGuna Karya',
            variant: 'briguna-karya',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'briguna-purna'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'BRIGuna Purna',
            variant: 'briguna-purna',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'deposito'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Deposito',
            variant: 'deposito',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'deposito-business'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Deposito Business',
            variant: 'deposito-business',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'deposito-valas'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Deposito Valas',
            variant: 'deposito-valas',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'investment'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Investment',
            variant: 'investment',
          },
        ]}
      />
      <CE_SimulationMain
        type="page"
        action={{
          button: {
            extern: true,
            link: 'https://bri.co.id',
            title: 'Temukan Cabang',
          },
          description: `Tertarik mengajukan Kredit? Kunjungi cabang terdekat kami.`,
        }}
        button={{
          extern: true,
          link: 'https://bri.co.id',
          title: 'Lihat Selengkapnya',
        }}
        variant={'initial-investment'}
        tabs={[
          {
            image: '/sites/default/files/images/1073-860x640.jpg',
            tnc: '<div>Syarat & Ketentuan</div><ul><li>Lorem Ipsum</li></ul>',
            title: 'Initial Investment',
            variant: 'initial-investment',
          },
        ]}
      />
      <div className="aspect-video overflow-hidden border border-gray-500">
        <ImageViewer />
      </div>
      <SE_PortletVariant06
        title="Informasi Kontak"
        listContent={[
          {
            textContent: 'Hubungi kami untuk bantuan lebih lanjut',
            cardContent: [
              {
                title: 'BRI Remittance Co.Ltd.',
                item: [
                  {
                    title: 'Kantor Pusat',
                    textValue: [
                      {
                        value:
                          'Bay View Mansion Shopping Arcade, 33 Moreton terrace, Causeway Bay, Hongkong',
                      },
                    ],
                  },
                  {
                    title: 'Telepon',
                    textValue: [
                      {
                        value: '(852) 2890 2709',
                      },
                      {
                        value: '(852) 5165 6683',
                      },
                    ],
                  },
                  {
                    title: 'Website',
                    textValue: [
                      {
                        value: 'http://www.brchk.com/',
                      },
                    ],
                  },
                ],
              },
              {
                title: 'HUBUNGI KAMI',
                item: [
                  {
                    title: 'E-mail',
                    textValue: [
                      {
                        value: 'https://bri.co.id/info@brchk.com',
                      },
                      {
                        value: 'https://bri.co.id/brc.support@brchk.com',
                      },
                    ],
                  },
                  {
                    title: 'Media Sosial',
                    imageValue: [
                      {
                        image: '/web/guest/icons/zoom-in.svg',
                      },
                      {
                        image: '/web/guest/icons/zoom-in.svg',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
      <ScrollToTop />
    </React.Fragment>
  );
}
