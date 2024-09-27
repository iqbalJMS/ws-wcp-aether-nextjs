"use client";

import Link from "@/lib/element/global/link";
import { useState } from "react";
import { CE_TabMain } from "./client.tab.main";
import Table from "@/lib/element/global/table";
import InputSelect from "@/lib/element/global/input.select";
import InputText from "@/lib/element/global/input.text";
// import InputSlider from "@/lib/element/global/input.slider";

interface DataItem {
    id: string;
    name: string;
    age: number;
    position: string;
}

export function CE_KursValue() {
    const data: DataItem[] = [
        { id: '1', name: 'John Doe', age: 30, position: 'Developer' },
        { id: '2', name: 'Jane Smith', age: 28, position: 'Designer' },
        { id: '3', name: 'Alice Johnson', age: 35, position: 'Manager' },
    ];
    const tabs = [
        {
            title: 'BELI',
            information: 'Kamu akan menjual valas ke BRI',
            slug: 'buy'
        },
        {
            title: 'JUAL',
            information: 'Kamu akan membeli valas dari BRI',
            slug: 'jual'
        },
    ]
    const [tabValue, setTabValue] = useState(tabs.at(0)?.slug || '')
    return (
        <div className="flex mdmax:flex-wrap -mx-10">
            <div className="w-1/2 flex-none mdmax:w-full px-10">
                <Table<DataItem> 
                    headers={[
                        { 
                            title: 'Kurs', 
                            field: 'name', 
                            callback: (item) => {
                                return (<span>{item.name}</span>)
                            } 
                        },
                        { title: 'Beli', field: 'age' },
                        { title: 'Jual', field: 'position' },
                    ]} 
                list={data}  />
            </div>
            <div className="w-1/2 flex-none mdmax:w-full px-10">
                <div>
                    <div className="text-lg uppercase text-blue-01 font-semibold border-b-2 border-blue-01 pb-2">Kalkulator</div>
                    <CE_TabMain 
                        list={tabs} 
                        value={tabValue} 
                        onChange={(value) => setTabValue(value)} 
                        variant="full"
                    />
                    <div className="mt-5">
                        <div className="flex items-center -mx-2 mb-5">
                            <div className="w-[25%] mdmax:w-[50%] flex-none px-2">
                                <InputSelect list={[]} value={''}/>
                            </div>
                            <div className="flex-1 px-2">
                                <InputText value={''} type="number" placeholder="Masukan Nominal"/>
                            </div>
                        </div>
                        <div className="flex items-center -mx-2 mb-5">
                            <div className="w-[25%] mdmax:w-[50%] flex-none px-2">
                                <InputSelect list={[]} value={''}/>
                            </div>
                            <div className="flex-1 px-2">
                                <div className="text-blue-01 px-4">0</div>
                                {/* <InputSlider max={10} min={0}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line no-unused-vars
export function CE_KursMain({available_currency} : {available_currency: string[]}) {
    // console.log(available_currency)
    const tabs = [
        {
            title: 'E-RATE',
            information: 'e-Rate BRI adalah kurs khusus yang dapat dinikmati oleh pengguna e-Banking BRI ketika melakukan transaksi transfer.',
            slug: 'e-rate'
        },
        {
            title: 'KURS TT COUNTER',
            information: 'e-Rate BRI adalah kurs khusus yang dapat dinikmati oleh pengguna e-Banking BRI ketika melakukan transaksi transfer.',
            slug: 'kurs-tt'
        },
    ]
    const [tabValue, setTabValue] = useState(tabs.at(0)?.slug || '')

    return (    
        <div className="container py-10 mdmax:overflow-hidden">
            {/* {JSON.stringify(available_currency)} */}
            <div className="flex mdmax:flex-col mdmax:items-start items-end justify-between border-b-2 border-dashed border-blue-01 border-opacity-20 pb-5 mb-10">
                <div className="mdmax:mb-2">
                    <div className="text-2xl font-semibold mb-2">Kurs BRI</div>
                    <div className=" text-black font-medium mdmax:text-sm text-opacity-30">* Terakhir diperbarui 23 Sep 2024 10:10 Untuk transaksi kurang dari eq. USD 2.500</div>
                </div>
                <div>
                    <Link className="text-blue-01 flex items-center mdmax:text-sm" href={'/'}>LIHAT SELENGKAPNYA <span className="text-xl inline-block ml-2">{'  >'}</span></Link>
                </div>
            </div>
            <div className="mb-10">
                <CE_TabMain 
                    list={tabs} 
                    value={tabValue} 
                    onChange={(value) => setTabValue(value)} 
                />
            </div>
            <div>
                <CE_KursValue />
            </div>
        </div>
    )
}