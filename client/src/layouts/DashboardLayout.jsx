import { Outlet } from "react-router-dom";
import NewsletterSubscribe from "../pages/Home/NewsletterSubscribe";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import CustomerNav from "../pages/Dashboard/CustomerDashboard/CustomerNav";

const DashboardLayout = () => {
    return (
        <div className="bg-[#F1F5F6]">
            <Navbar></Navbar>
            <div className='w-[1320px] mx-auto h-[861px] mt-8 mb-24 bg-white flex gap-4 p-10'>
                {/* sidebar */}
                <CustomerNav></CustomerNav>

                {/* content */}
                <div className="p-4">
                    <Outlet></Outlet>
                </div>
            </div>
            <NewsletterSubscribe></NewsletterSubscribe>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;