export type T_BreadcrumbProps = {
  paths?: { name: string; href: string }[];
  pathsSecondary?: { name: string; href: string }[];
};

export type T_DataBreadCrumb = {
  data: Array<{
    title: string;
    url: string;
  }>;
};
