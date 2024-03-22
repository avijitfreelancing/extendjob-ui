export const UserLists = [
  {
    id: 1,
    name: "Dashboard",
    icon: "la-home",
    routePath: "/dashboard",
    active: "active",
  },
  {
    id: 2,
    name: "Users",
    icon: "la la-users",
    active: "",
    items: [
      {
        id: 21,
        name: "User List",
        icon: "la-users",
        routePath: "/candidate",
        active: "",
      },
      {
        id: 22,
        name: "User List",
        icon: "la-users",
        routePath: "/candidate",
        active: "",
      },
    ],
  },
  {
    id: 3,
    name: "Job Category",
    icon: "la-paper-plane",
    routePath: "/job/job-category",
    active: "",
  },
  {
    id: 4,
    name: "Manage Jobs",
    icon: "la-briefcase",
    routePath: "/job/manage",
    active: "",
  },
  {
    id: 5,
    name: "All Transaction",
    icon: "la-money",
    routePath: "/transaction",
    active: "",
  },
  {
    id: 6,
    name: "Wallet",
    icon: "la-wallet",
    routePath: "/wallet",
    active: "",
  },
  {
    id: 10,
    name: "Change Password",
    icon: "la-lock",
    routePath: "/change-password",
    active: "",
  },
].map(route => ({
  ...route,
  routePath: `/admin${route.routePath}`,
  items: route.items ? route.items.map(item => ({
    ...item,
    routePath: `/admin${item.routePath}`
  })) : undefined
}));