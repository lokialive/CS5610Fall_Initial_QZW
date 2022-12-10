import React from "react";
import {Link} from "react-router-dom";
import PositionItem from "../Position/PositionItem";
import "./company.css"
import background from "../../img/linkedin.png"
import user from "../../img/user.jpeg"

const CompanyComponent = (
    {
        company = {
            "name":"Northeastern University",
            "city":"Boston",
            "State":"MA",
            "Website" : "www.northeastern.edu",
            "Description":"An university like no other",
            "industry":"Higher Education",
            "employees_range":10000,
            "icon":"image",
            "year_founed":1898,
            "phone":"8572044479"

        }
    }
) => {
    return(
        <div className="ps-5 pe-5">
            <div className="row">
                <div className="col-12 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up">

                    </i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi-gear-fill fs-2 position-relative">

                    </i>
                </div>
            </div>


            <li className="list-group-item">
                <div >
                    <img width={'100%'} className="position-relative pe-0 pt-2 pb-2 " alt={"post-img"} src={background} />
                    <img width={140} className="position-absolute  wd-nudge-up  rounded-2" alt={"user"} src={"user.jpeg"} />
                </div>



                <div className="fw-bolder fs-4  pb-2">
                    {company.name}
                    <div >
                        <Link to="/moreDetail/edit-profile">
                            <button
                                className="btn btn-primary rounded-pill float-end pt-2">Save</button>
                        </Link>

                    </div>
                </div>


                <div className="text-secondary  pe-1 pt-2 pb-2  wd-text-post-small">
                    {company.Description}
                </div>


                <div >
                    <label className="pe-5 pt-3 text-secondary" >{company.industry}</label>
                    <label className="pe-5 pt-3 text-secondary" >{company.employees_range}</label>

                </div>

                <div>

                    <label className="pe-5 pt-3 text-secondary" >Location: {company.city}, {company.State}</label>
                    <label className=" ps-1 pe-5 pt-3 text-secondary">Founded: {company.year_founed}</label>
                </div>

                <div>
                    <label className="pe-5 pt-3 text-secondary" >Website:{company.Website}</label>
                </div>

                <div >
                    <label className=" ps-1 pe-5 pt-3 text-secondary" >Following  2345</label>

                    <label className=" ps-1 pe-5 pt-3 text-secondary">Followers  34156</label>
                </div>

                <div className="fw-bolder pt-3 pe-5">Opening Job Position</div>


            </li>

            <PositionItem/>
       </div>

    );
};
export default CompanyComponent;