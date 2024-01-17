"use client";
import { useRouter } from "next/navigation";

const RootLayout = ({ children }) => {
  const route = useRouter();
  function handleClick(url) {
    route.push(url);
  }
  return (
    <html lang="en">
      <body style={{ margin: "0", padding: "0" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            height: "60px",
            fontFamily: "monospace",
            background: "linear-gradient(59deg, #8499a9, #606bda)",
          }}
        >
          <h1>{"this is header".toUpperCase()}</h1>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          >
            <button
              style={{
                backgroundColor: "#8499a9",
                border: "none",
                borderRadius: "14px",
                padding: "5px 7px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onClick={() => handleClick("/")}
            >
              {"Home page".toUpperCase()}
            </button>
            <button
              style={{
                backgroundColor: "#8499a9",
                border: "none",
                borderRadius: "14px",
                padding: "5px 7px",
                fontSize: "16px",
                fontWeight: "600",
              }}
              onClick={() => handleClick("/profile")}
            >
              {"profile".toUpperCase()}
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
