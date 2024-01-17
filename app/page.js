export const metadata = {
  title: "Next-From-Scratch",
  description: "To improve SEO",
};
// import { Suspense } from "react";
// import Loading from "./profile/loading";
const Home = () => {
  return (
    <>
      {/* <Suspense fallback={<Loading content={"...home page loading"} />} /> */}

      <h1 style={{ width: "100%", textAlign: "center" }}>THIS IS HOME PAGE</h1>
    </>
  );
};

export default Home;
