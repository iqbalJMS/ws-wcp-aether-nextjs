export type T_Location = {
  data: {
    id: string;
    name: string;
    address: string;
    phone: string;
    category: string;
    categoryName: string;
    tipe: string;
    lat: number;
    long: number;
    urlMaps: string;
    province: string;
    city: string;
    kodeAgen?: string;
    typeName: string;
  }[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    isPrev: boolean;
    isNext: boolean;
  };
};

export type T_LocationRequest = {
  skip: string;
  limit: string;
  province: string;
  tipe: string;
  category: string;
};
