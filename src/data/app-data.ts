export const appName = "Simple Reddit";

export const appNavLinks: AppNavLinks = {
  home: {
    href: "/",
  },
  query: {
    href: "/q",
  },
  history: {
    href: "/history",
  },
};

export interface NavLink {
  href: string;
}

interface AppNavLinks {
  home: NavLink;
  query: NavLink;
  history: NavLink;
}
