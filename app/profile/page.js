import React from "react";
import { Suspense } from "react";
import Card from "../../components/card";
import Details from "../../components/details";

const page = () => {
  return (
    <div
      style={{
        width: "100%",
        height: `calc(100vh - 60px)`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "700",
        fontSize: "20px",
        fontFamily: "monospace",
        flexDirection: "column",
      }}
    >
      {"this profile page".toUpperCase()}
      <Suspense
        fallback={
          <h1 style={{ color: "red", zIndex: "1000" }}>Card is loading...</h1>
        }
      >
        <Card />
      </Suspense>
      <Suspense
        fallback={
          <h1 style={{ color: "green", zIndex: "1000" }}>
            Details is loading...
          </h1>
        }
      >
        <Details />
      </Suspense>
    </div>
  );
};

export default page;
