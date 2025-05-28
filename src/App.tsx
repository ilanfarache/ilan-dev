import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import EducationPage from './pages/education/EducationPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/education" element={<EducationPage />} />

    </Routes>

  )
}

export default App
