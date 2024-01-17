"use client";
import Image from "next/image";
import Background from "../public/image/image.jpeg";
const card = () => {
  return (
    <>
      <div
        style={{
          width: "400px",
          height: "300px",
          backgroundColor: "rgb(178, 211, 194)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src={Background} alt="background" width={400} height={250} />

        <h3>Artifitial created images</h3>
      </div>
    </>
  );
};

export default card;
