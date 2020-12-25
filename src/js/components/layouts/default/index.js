import React from "react";

import { Navbar, Footer } from "../../organisms";

const DefaultLayout = ({ children, navigation }) => {
  return (
    <div className="layout">
      <header>
        <Navbar navigation={navigation} />
      </header>
      <main>
        <section className="main__wrapper">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
