// const navItems = ["Home", "About", "Contact"];

export const navItems = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Product",
    link: "/product",
    both: true,
  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Cart",
    link: "/cart",
    auth_required: true,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    auth_required: true,
  },
  // {
  //   label: "Signout",
  //   link: "/signout",
  //   auth_required: true,
  // },
];
