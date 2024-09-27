export type T_PersonalizeMenu = {
  key: string
  title: string
  uri: string
  alias?: string
  relative: string
  weight: string
  expanded: boolean
  enabled: boolean
  uuid?: string
  options: {      
    external: boolean
  } | any[]
};
