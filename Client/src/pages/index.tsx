import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import SignIn from "@/pages/Signin";
import Signup from "@/pages/Signup";
import Dashboard from "../../allPages/Dashboard";
import MainFilter from "../../allPages/mainfilter";
import MainSinglePro from "allPages/MainSinglePro";
import AddtoCard from "allPages/AddtoCard";
import Deliverypage from "../../allPages/deliverypage";
import PayPage from "allPages/PayPage";
import ThnaksPage from "allPages/ThnaksPage";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../state/store";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [showAnotherComponent, setShowAnotherComponent] = useState(false);

  return (
    <>
      <SignIn />
      {/* <Signup/> */}
      {/* <Dashboard /> */}
      {/* <MainFilter /> */}
      {/*  <MainSinglePro /> */}
      {/* <AddtoCard /> */}
      {/* <PayPage/> */}
      {/* <Deliverypage /> */}
      {/* <ThnaksPage/> */}

      {/* <CardDetail/> */}
    </>
  );
}
