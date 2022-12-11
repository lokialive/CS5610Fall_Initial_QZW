import React from "react";
import position from "../../img/position.png"
const PositionItem = (
    {
        post = {

            "title": "Energy",
            "description": "Tesla",
            "time": "4d"
        }
    }
) => {

    return(
        <li className="list-group-item pt-2">
            <div className="row border">
                <div className="col-1  ">
                    <img width={65} className="float pt-2 rounded-pill " alt={"position"} src={position}/>

                </div>

                <div className="col-8 pt-1 pb-1 pe-0">

                    <div className="ps-3 fw-bolder">
                        Software Development Engineer
                    </div>
                    <div className="ps-3 fw-bolder">
                        Boston,MA
                    </div>

                    <div className="text-secondary  ps-3 pe-1  wd-text-post-small">
                        Description:
                    </div>


                </div>

                <div className="col-3">
                    <br/>
                    <button className="btn btn-primary rounded-pill float-end ">Save</button>

                </div>

            </div>
        </li>
    );
};

export default PositionItem;