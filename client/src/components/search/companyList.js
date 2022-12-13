import React from "react";
import {useSelector} from "react-redux";
import CompanyItem from "./companyItem.js";

const CompanyList = () => {
    const {companies, loading} = useSelector(
        state => state.companies)
    return (
        <ul className="list-group m-2">
            {
                loading &&
                <li className="list-group-item">
                loading...
                </li>
            }
            {
                companies.map(company => <CompanyItem key={company.orb_num} company={company}/>)
            }
        </ul>
    );
}
export default CompanyList