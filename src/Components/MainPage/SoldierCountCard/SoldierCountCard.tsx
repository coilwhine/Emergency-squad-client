import "./SoldierCountCard.scss";
import { MdLocalHospital, MdFreeBreakfast } from "react-icons/md";


function SoldierCountCard(): JSX.Element {
    return (
        <div className="SoldierCountCard data-card">
            <h2 className="heading">סד״כ</h2>
            <div className="data-div">
                <div className="bar">
                    <span>14 / 21</span>
                </div>
            </div>
            <div className="data-wraper">
                <div className="data-div">
                    <MdFreeBreakfast />
                    <span>3</span>
                </div>
                <div className="data-div">
                    <i><MdLocalHospital /></i>
                    <span>4</span>
                </div>
            </div>
        </div>
    );
}

export default SoldierCountCard;
