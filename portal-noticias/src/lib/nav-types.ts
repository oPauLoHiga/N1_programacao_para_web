export type NavItem = {
  label: string;
  to: string;
  end?: boolean;
  current?: boolean;
};

export type StatsItem = {
  label: string;
  value: number | string;
};
