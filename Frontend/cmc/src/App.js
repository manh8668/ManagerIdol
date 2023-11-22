import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/';
import { DefaultLayout } from './components/Layout';
import { ManagerLayout } from './components/Layout';
import Admin from './pages/Admin';
import Category from './components/Category/index';
import AddCategory from './components/Category/AddCategory';
import UpdateCategory from './components/Category/UpdateCategory';
import Idol from './components/Idol';
import AddIdol from './components/Idol/AddIdol';
import UpdateIdol from './components/Idol/UpdateIdol';
import { Children } from 'react';
import InfIdol from './pages/InfIdol';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/home" element={<DefaultLayout Children={<Home />} />} />;
                    <Route path="/home/information/:category/:id" element={<DefaultLayout Children={<InfIdol />} />} />
                    <Route path="/admin" element={<ManagerLayout Children={<Admin />} />} />;
                    <Route path="/admin/category" element={<ManagerLayout Children={<Category />} />} />;
                    <Route path="/admin/category/add" element={<ManagerLayout Children={<AddCategory />} />} />;
                    <Route
                        path="/admin/category/update/:id"
                        element={<ManagerLayout Children={<UpdateCategory />} />}
                    />
                    ;
                    <Route path="/admin/idol" element={<ManagerLayout Children={<Idol />} />} />;
                    <Route path="/admin/idol/add" element={<ManagerLayout Children={<AddIdol />} />} />;
                    <Route path="/admin/idol/update/:id" element={<ManagerLayout Children={<UpdateIdol />} />} />;
                </Routes>
            </div>
        </Router>
    );
}
export default App;
