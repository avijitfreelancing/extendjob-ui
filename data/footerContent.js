module.exports = [
  {
    id: 1,
    title: "For Candidates",
    menuList: [
      { name: "Browse Jobs", route: "/jobs" },
      { name: "Browse Categories", route: "/job-categories" },
      { name: "Candidate Dashboard", route: "/candidates-dashboard/dashboard" },
      { name: "Job Alerts", route: "/candidates-dashboard/job-alerts" }
    ]
  },
  {
    id: 2,
    title: "For Employers",
    menuList: [
      {
        name: "Browse Candidates",
        route: "/candidates-list-v1"
      },
      { name: "Employer Dashboard", route: "/employers-dashboard/dashboard" },
      { name: "Add Job", route: "/employers-dashboard/post-jobs" },
      { name: "Job Packages", route: "/employers-dashboard/packages" }
    ]
  },
  {
    id: 3,
    title: "About Us",
    menuList: [
      { name: "About Us", route: "/about" },
      { name: "Terms Page", route: "/terms" },
      { name: "Contact", route: "/contact" }
    ]
  },
  {
    id: 4,
    title: "Privacy & Policy",
    menuList: [
      { name: "Privacy Policy", route: "/payment-policy" },
      { name: "Refund Policy", route: "/refund-policy" },
      { name: "Working Policy", route: "/working-policy" },
      { name: "Terms of Service", route: "/terms-service" }
    ]
  }
];
