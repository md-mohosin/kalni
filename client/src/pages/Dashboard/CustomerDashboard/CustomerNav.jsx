import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { CiShoppingCart } from "react-icons/ci";

const CustomerNav = () => {
    return (
        <div>
            <div className='w-[360px] border h-full rounded-2xl p-4 space-y-9'>
                <NavLink to='/dashboard/home'
                    className="text-black flex justify-between items-center">
                    <div className="flex gap-2 items-center text-2xl">
                        <RxDashboard size={19} color="blue" />
                        <h1>Dashboard</h1>
                    </div>
                    <IoIosArrowForward></IoIosArrowForward>
                </NavLink>
                <NavLink to='/dashboard/customerOrder'
                    className="text-black flex justify-between items-center">
                    <div className="flex gap-2 items-center text-2xl">
                        <CiShoppingCart size={19} color="blue" />
                        <h1>Order</h1>
                    </div>
                    <IoIosArrowForward></IoIosArrowForward>
                </NavLink>
            </div>
        </div>
    );
};

export default CustomerNav;