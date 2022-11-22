import transaction from "../../img/svg-1.svg";
import world from "../../img/svg-2.svg";
import easy from "../../img/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDec: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  descrition:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: transaction,
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDec: false,
  topLine: "Unlimited Accsess",
  headLine: "Login to your account at any time",
  descrition:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: world,
  alt: "worldGirl",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDec: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  descrition:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: "Start Now",
  imgStart: true,
  img: easy,
  alt: "easy",
  dark: false,
  primary: false,
  darkText: true,
};
