import AboutUs from "@/src/components/AboutUs";
import Contact from "@/src/components/Contact";
import HomeBanner from "@/src/components/HomeBanner";
import Services from "@/src/components/Services";
import Header from "@/src/components/ui/Header";
import Nav from "@/src/components/ui/Nav";
import { Fragment, useContext, useEffect } from "react";

import ImageView from "@/src/components/popup/ImageView";
import VideoPopup from "@/src/components/popup/VideoPopup";
import dynamic from "next/dynamic";
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});
import { UIContext } from "@/src/contexts/UI";

const Index = () => {
  useEffect(() => {
    document.querySelector("html").classList.add("js");
    document.querySelector("body").classList.add("dark-body");
  }, []);

  const { toggle } = useContext(UIContext);

  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <Nav />
      <div className={`pages-stack ${toggle ? "pages-stack--open" : ""}`}>
        <HomeBanner />
        <AboutUs />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Header />
    </Fragment>
  );
};
export default Index;
