import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView.tsx";
import PublishView from "./views/PublishView.tsx";
import ProfileView from "./views/ProfileView.tsx";
import i18next from "i18next";
import globalPt from "./assets/translations/pt/global.json"
import {I18nextProvider} from "react-i18next";
import NavBar from "./components/NavBar.tsx";

i18next.init({
    interpolation: {escapeValue:false},
    lng: "pt",
    resources:{
        pt : {
            global: globalPt
        }
    }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <I18nextProvider i18n={i18next}>
          <NavBar/>
      </I18nextProvider>

      <I18nextProvider i18n={i18next}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomeView/>}/>
                  <Route path="/publish" element={<PublishView/>} />
                  <Route path="/profile" element={<ProfileView/>}/>
              </Routes>
          </BrowserRouter>
      </I18nextProvider>
  </StrictMode>,
)
