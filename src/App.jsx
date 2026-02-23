import { pagesConfig } from "./pages.config";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import Product from "./pages/Product.jsx";

const { Pages, Layout, mainPage } = pagesConfig;
const mainPageKey = mainPage ?? Object.keys(Pages)[0];
const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

const LayoutWrapper = ({ children, currentPageName }) =>
  Layout ? (
    <Layout currentPageName={currentPageName}>{children}</Layout>
  ) : (
    <>{children}</>
  );

function App() {
  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route
          path="/"
          element={
            <LayoutWrapper currentPageName={mainPageKey}>
              <MainPage />
            </LayoutWrapper>
          }
        />

        {/* Products list */}
        <Route
          path="/products"
          element={
            <LayoutWrapper currentPageName="Products">
              <Pages.Products />
            </LayoutWrapper>
          }
        />

        <Route
          path="/dashboard"
          element={
            <LayoutWrapper currentPageName="Dashboard">
              <Pages.Dashboard />
            </LayoutWrapper>
          }
        />

        {/* ✅ Product detail by slug */}
        <Route
          path="/product/:slug"
          element={
            <LayoutWrapper currentPageName="Product">
              <Product />
            </LayoutWrapper>
          }
        />

        {/* Auto-registered static pages */}
        {/* {Object.entries(Pages).map(([path, Page]) => {
          if (path === "Products" || path === "Product") return null;

          return (
            <Route
              key={path}
              path={`/${path}`}
              element={
                <LayoutWrapper currentPageName={path}>
                  <Page />
                </LayoutWrapper>
              }
            />
          );
        })} */}

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


// import { pagesConfig } from "./pages.config";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import PageNotFound from "./lib/PageNotFound";

// const { Pages, Layout, mainPage } = pagesConfig;
// const mainPageKey = mainPage ?? Object.keys(Pages)[0];
// const MainPage = mainPageKey ? Pages[mainPageKey] : <></>;

// const LayoutWrapper = ({ children, currentPageName }) =>
//   Layout ? (
//     <Layout currentPageName={currentPageName}>{children}</Layout>
//   ) : (
//     <>{children}</>
//   );


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <LayoutWrapper currentPageName={mainPageKey}>
//               <MainPage />
//             </LayoutWrapper>
//           }
//         />
//         {Object.entries(Pages).map(([path, Page]) => (
//           <Route
//             key={path}
//             path={`/${path}`}
//             element={
//               <LayoutWrapper currentPageName={path}>
//                 <Page />
//               </LayoutWrapper>
//             }
//           />
//         ))}
//         <Route path="*" element={<PageNotFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
