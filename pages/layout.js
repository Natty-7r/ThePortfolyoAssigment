// layouts/MainLayout.js
import React, { Fragment, useContext, useEffect, useState } from "react";
import { AlexioContext } from "@/src/Context";
import Preloader from "@/src/Preloader";
const API_URL =
  "https://dashboard-backend.cyclic.app/api/v1/get/user/65b3a22c01d900e96c4219ae";

const MainLayout = ({ children }) => {
  const [isLoading, setLoadingState] = useState(true);
  const { setUserData } = useContext(AlexioContext);

  const fetchUserData = async () => {
    try {
      const respose = await fetch(API_URL);
      const { success, user } = await respose.json();
      if (success) {
        setUserData(user);
        setLoadingState(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <Fragment>
      {isLoading && <Preloader />}
      {!isLoading && children}
    </Fragment>
  );
};

export default MainLayout;
