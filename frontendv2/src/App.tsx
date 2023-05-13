import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { authSelector } from "@store/user/user.selectors"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import { useRecoilValue } from "recoil"
import { isShowLoginModalAtom, isShowRegisterModalAtom } from "@store/app.atoms"
import { LoginModal } from "@comp/LoginModal"
import { RegisterModal } from "@comp/RegisterModal"
import HomePage from "./pages/HomePage"
import AccountPage from "./pages/AccountPage"
import PersonalInfoPage from "./pages/PersonalInfoPage"
import HomestayDetailPage from "./pages/HomestayDetailPage"

export const App = () => {
  const auth = useRecoilValue(authSelector);
  const isShowLoginModal = useRecoilValue(isShowLoginModalAtom);
  const isShowRegisterModal = useRecoilValue(isShowRegisterModalAtom);

  return (
    <React.Fragment>
      { isShowLoginModal && <LoginModal/> }
      { isShowRegisterModal && <RegisterModal/> }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route element={<ProtectedRoute isAuth={auth.isAuth}/>}>
            <Route path="/account" element={<AccountPage/>}/>
            <Route path="/account/personal-info" element={<PersonalInfoPage/>}/>
            <Route path="/homestay/:id" element={<HomestayDetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}