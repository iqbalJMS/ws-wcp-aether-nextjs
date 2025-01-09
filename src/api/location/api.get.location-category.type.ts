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
  type_id: string;
};
