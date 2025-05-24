import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

const CustomerNav = ({ handleClick }) => {


    return (
        <div>
            <div>
                <NavLink onClick={handleClick}
                    to='/dashboard/customerOrder'
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