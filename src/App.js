import "./styles.css";

import Header from "./components/Layout/Header";
import { Fragment } from "react";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Cart";

export default function App() {
  return (
    <Fragment>
      <Card />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
