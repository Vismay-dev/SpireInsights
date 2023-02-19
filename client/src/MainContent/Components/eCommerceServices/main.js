import { useEffect, useState } from "react";
import Header from "./header";
import Services from "./services";
import ServiceDetails from "./serviceDetails";
import { useNavigate, Route, Navigate, Routes } from "react-router";
import { useLocation } from "react-router-dom";

const MainComponent = () => {
  const [showServiceDetails, setShowServiceDetails] = useState(false);
  const history = useNavigate();
  const location = useLocation();
  const [service, setService] = useState();
  useEffect(() => {
    if (location.pathname === "/ecommerceservices") {
      setService();
    }
  });
  const switchToServiceDetails = (service) => {
    setService(service);
    history("/ecommerceservices/servicedetails");
  };
  return (
    <>
      <Header subheader={service ? service.name : null} />

      <Routes>
        <Route
          path="/servicedetails"
          element={
            sessionStorage.getItem("token") !== null ? (
              <ServiceDetails
                switchBack={() => {
                  setService();
                  history("/ecommerceservices");
                }}
                service={service}
              />
            ) : (
              <Navigate to="/home" />
            )
          }
        ></Route>
        <Route
          path="/"
          element={
            sessionStorage.getItem("token") !== null ? (
              <Services showServiceDetails={switchToServiceDetails} />
            ) : (
              <Navigate to="/home" />
            )
          }
        ></Route>
      </Routes>
    </>
  );
};

export default MainComponent;
