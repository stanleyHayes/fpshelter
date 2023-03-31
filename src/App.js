import './App.css';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {AnimatePresence} from "framer-motion";
import {THEMES} from "./utils/themes";
import {Route, Routes} from "react-router";
import {Suspense, lazy} from "react";
import Splash from "./components/shared/splash";
import {selectUI} from "./redux/features/ui/ui-slice";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
const HomePage = lazy(() => import("./pages/home/home-page"));
const AdoptionsPage = lazy(() => import("./pages/adoption/adoptions-page"));
const AdoptionDetailPage = lazy(() => import("./pages/adoption/adoption-detail-page"));
const NotFoundPage = lazy(() => import("./pages/404/not-found-page"));

function App() {

  const {theme} = useSelector(selectUI);
  const location = useLocation();

  return (
      <ThemeProvider theme={theme === "light" ? THEMES.lightTheme : THEMES.darkTheme}>
        <CssBaseline enableColorScheme={true}>
          <AnimatePresence presenceAffectsLayout={true} mode="wait" initial={true}>
            <Routes location={location}>
              <Route path="/" element={<Suspense fallback={<Splash/>}><HomePage/></Suspense>}/>
              <Route path="/adoptions/:c" element={<Suspense fallback={<Splash/>}><AdoptionsPage/></Suspense>}/>
              <Route path="/adoptions/:petID/adopt" element={<Suspense fallback={<Splash/>}><AdoptionDetailPage/></Suspense>}/>
              <Route path="*" element={<Suspense fallback={<Splash/>}><NotFoundPage/></Suspense>}/>
            </Routes>
          </AnimatePresence>
        </CssBaseline>
      </ThemeProvider>
  );
}

export default App;
