import Nav from "@components/Nav";
import "@styles/global.css";

export const metadata = {
  title: " Hydra Prompt",
  description: "A platform for promotional products, where you can find the best deals and offers on a wide range of items.",
  icons:{
    icon:'/favicon.ico'
  }
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
          <main className="app">
            <Nav />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
