export type T_PersonalizeMenu = {
  key: string;
  title: string;
  icon: string;
  uri: string;
  alias?: string;
  relative: string;
  weight: string;
  expanded: boolean;
  enabled: boolean;
  uuid?: string;
  field_is_fixed: Array<{ value: string }> | null;
  options:
    | {
        external: boolean;
      }
    | any[];
};
