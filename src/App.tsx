import { HashRouter, Routes, Route } from "react-router-dom";
import VoiceActorsPage from "./VoiceActorsPage";
import AdminPanel from "./AdminPanel";
import AuthPage from "./AuthPage";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<VoiceActorsPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
