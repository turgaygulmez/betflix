import React from "react";

import { Navbar, Footer } from "../../organisms";

const DefaultLayout = ({ children, navigation }) => {
  return (
    <div className="layout">
      <header>
        <Navbar navigation={navigation} />
      </header>
      <main
        style={{
          backgroundImage: `url(images/background.jpg)`
        }}
      >
        <section className="main__wrapper">{children}</section>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
