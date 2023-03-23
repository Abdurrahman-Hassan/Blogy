import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const Layout = ({ children }) => {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
};

export default Layout;
