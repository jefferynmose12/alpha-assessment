import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./screen/HomePage";
import Layout from "./layout/index";
import { sideBarMenu } from "./layout/data";
import { ThemeProvider } from "./context/ThemeProvider";
import "react-responsive-modal/styles.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          {sideBarMenu.map((rout) => (
            <Route key={rout.route} element={<Layout />}>
              <Route element={<HomePage />} path={rout.route} />
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
