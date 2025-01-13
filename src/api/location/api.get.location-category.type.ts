export type T_LocationCategory = {
  data: {
    id: string;
    name: string;
    type: {
      id: string;
      name: string;
    };
  }[];
};

export type T_LocationCategoryRequest = {
  tipe_id: string;
};
