import React, {useEffect} from "react";
import PositionList from "../Position/PositionList";
import "./company.css"
import background from "../../img/linkedin.png"
import {useSelector, useDispatch} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import {fetchCompanyThunk} from "../search/search-thunks.js";

const CompanyComponent = () => {
    const {company, loading} = useSelector(
        state => state.company)
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCompanyThunk(paths[2]))
    }, [])

    return(

        <div className="ps-5 pe-5">
            {
                loading &&
                <li className="list-group-item">
                    loading...
                </li>
            }
            <li className="list-group-item">
                <div >
                    <img width={'100%'} className="position-relative pe-0 pt-2 pb-2 " alt={"post-img"} src={background} />
                    <img style={{width:80,height:80}} className="position-absolute  wd-nudge-up  rounded-2" alt={"user"} src={company.favicon} />
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
                    {company.description}
                </div>


                <div >
                    <label className="pe-5 pt-3 text-secondary" >Industry: {company.industry}</label>
                    <label className="pe-5 pt-3 text-secondary" >Employees: {company.employees_range}</label>

                </div>

                <div>
                    {/*<label className="pe-5 pt-3 text-secondary" >Location: {company.address.city}</label>*/}
                    <label className=" ps-1 pe-5 pt-3 text-secondary">Founded: {company.year_founded}</label>
                </div>

                <div>
                    Website: <a href={`${company.website}`} className="pe-5 pt-3 text-secondary" >{company.website}</a>
                </div>

                <div >
                    <label className=" ps-1 pe-5 pt-3 text-secondary" >Following  0</label>

                    <label className=" ps-1 pe-5 pt-3 text-secondary">Followers  0</label>
                </div>

                <div className="fw-bolder pt-3 pe-5">Opening Job Position</div>


            </li>

            <PositionList/>
       </div>

    );
};
export default CompanyComponent;