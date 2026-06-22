import { Route, BrowserRouter, Routes } from "react-router-dom"
import HomePage from "../pages/home"
import NotFound from "../pages/notfound"
import JogosPage from "../pages/jogos"
import TabelaPage from "../pages/tabela"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jogos" element={<JogosPage />} />
                <Route path="/tabela" element={<TabelaPage />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}