import { NavLink, Outlet } from "react-router-dom";
import NewsletterSubscribe from "../pages/Home/NewsletterSubscribe";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";
import { RxDashboard } from "react-icons/rx";
import CustomerNav from "../pages/Dashboard/CustomerDashboard/CustomerNav";
import { IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import UseAuth from "../hooks/UseAuth";
import UseRole from "../hooks/UseRole";

const DashboardLayout = () => {
    const { logout } = UseAuth()
    const [role] = UseRole()

    const handlelogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Logout",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                logout()
                Swal.fire({
                    title: "Logout!",
                    text: "You succeessfully logout.",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="bg-[#F1F5F6]">
            <Navbar></Navbar>
            <div className='w-[1320px] mx-auto h-[861px] mt-8 mb-24 bg-white flex gap-8 p-10'>
                {/* sidebar */}
                <div className="w-[360px] h-full border rounded-2xl p-4 flex flex-col justify-between">
                    <div className="space-y-9">
                        <NavLink to='/dashboard/home'
                            className="text-black flex justify-between items-center">
                            <div className="flex gap-2 items-center text-2xl">
                                <RxDashboard size={19} color="blue" />
                                <h1>Dashboard</h1>
                            </div>
                            <IoIosArrowForward></IoIosArrowForward>
                        </NavLink>
                        {
                            role === 'customer' && <CustomerNav></CustomerNav>
                        }
                        {
                            role === 'admin' && <h1 className="text-4xl text-black">Admin Nav</h1>
                        }
                    </div>
                    <button onClick={handlelogout}
                        className="btn bg-[#3B4DF0] border-none text-lg">Log out</button>
                </div>

                {/* content */}
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <NewsletterSubscribe></NewsletterSubscribe>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;