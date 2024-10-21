import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./views/HomeView.tsx";
import PublishView from "./views/PublishView.tsx";
import ProfileView from "./views/ProfileView.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeView/>}/>
              <Route path="/publish" element={<PublishView/>} />
              <Route path="/profile" element={<ProfileView/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
