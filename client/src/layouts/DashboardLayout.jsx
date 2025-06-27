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
import { RiMenuFold2Line } from "react-icons/ri";
import { useState } from "react";

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





    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="bg-[#F1F5F6]">
            <Navbar></Navbar>
            <div className='lg:w-[1340px] mx-auto h-[861px] mt-8 mb-24 bg-white flex gap-8 p-10'>
                <div onClick={() => setIsOpen(!isOpen)}
                    className="ml-0 top-0 lg:hidden flex">
                    <RiMenuFold2Line size={40} color="black" />
                </div>
                {/* sidebar */}
                <div className={`left-0 h-full w-64 border rounded-2xl text-white p-4 transition-transform duration-300 z-10 ${isOpen ? "absolute z-10 block" : "hidden lg:flex"}`}>


                    <div className="flex h-full text-white rounded-2xl p-4 flex-col justify-between">
                        <div className="space-y-9">
                            <NavLink onClick={handleClick}
                            to='/dashboard/home'
                                className="text-black flex justify-between items-center">
                                <div className="flex gap-2 items-center text-2xl">
                                    <RxDashboard size={19} color="blue" />
                                    <h1>Dashboard</h1>
                                </div>
                                <IoIosArrowForward></IoIosArrowForward>
                            </NavLink>
                            {
                                role === 'customer' && <CustomerNav handleClick={handleClick}></CustomerNav>
                            }
                            {
                                role === 'admin' && <h1 className="text-4xl text-black">Admin Nav</h1>
                            }
                        </div>
                        <button onClick={handlelogout}
                            className="btn bg-[#3B4DF0] border-none text-lg">Log out</button>
                    </div>





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