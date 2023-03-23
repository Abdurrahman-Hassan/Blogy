import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyContextProvider } from "./components/MyContext";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import Loading from "./pages/Loading";

const Homepage = lazy(() => import("./pages/Homepage"));
const BlogsDetails = lazy(() => import("./pages/BlogsDetails"));
const NewBlog = lazy(() => import("./pages/NewBlog"));
const EditBlog = lazy(() => import("./components/EditBlog"));
const About = lazy(() => import("./pages/About"));
const Alert = lazy(() => import("./components/Alert"));

function App() {
  return (
    <Router>
      <div className="App">
        <MyContextProvider>
          <Layout>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/details/:id" element={<BlogsDetails />} />
                <Route exact path="/NewBlog" element={<NewBlog />} />
                <Route exact path="/EditBlog" element={<EditBlog />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Alert" element={<Alert />} />
                <Route exact path="/Loading" element={<Loading />} />
                <Route path="*" element={<Error />}></Route>
              </Routes>
            </Suspense>
          </Layout>
        </MyContextProvider>
      </div>
    </Router>
  );
}

export default App;
