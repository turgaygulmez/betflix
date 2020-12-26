import React from "react";

import { Navbar, Footer } from "../../organisms";

const DefaultLayout = ({ children, navigation, onSetFilters }) => {
  return (
    <div className="layout">
      <header>
        <Navbar navigation={navigation} onSetFilters={onSetFilters} />
      </header>
      <main
        style={{
          backgroundImage: `url(/images/background.jpg)`
        }}
      >
        <section className="main__wrapper">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
