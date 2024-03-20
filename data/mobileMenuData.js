module.exports = [
  {
    id: 1,
    label: "Home",
    routePath: "/",
  },
  {
    id: 2,
    label: "jobs",
    routePath: "/jobs",
  },
  {
    id: 3,
    label: "contact",
    routePath: "/contact",
  },
  {
    id: 4,
    label: "FAQ's",
    routePath: "/faq",
  },
  {
    id: 5,
    label: "Pages",
    items: [
      {
        name: "About",
        routePath: "/about",
      },
      {
        name: "FAQ's",
        routePath: "/faq",
      },
      {
        name: "Terms",
        routePath: "/terms",
      },
      {
        name: "Contact",
        routePath: "/contact",
      },
    ],
  },
];
