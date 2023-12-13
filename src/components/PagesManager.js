import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Sidebar from './Sidebar';
import ProjectInfo from './pages/ProjectInfo';
import Documents from './pages/Documents';
function PagesManager(props) {
    return (
        <div className='flex  h-screen '>
        <Sidebar/>
        <div className='w-full'>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/projects/id" element={<ProjectInfo />} />
                <Route path="/documents" element={<Documents />} />

                {/* <Route path="/contactus" element={<ContactUsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} /> */}
            </Routes>
        </div>
            
        </div>
    );
}

export default PagesManager;
