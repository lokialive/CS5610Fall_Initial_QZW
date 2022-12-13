import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {matchCompaniesThunk} from "./search-thunks.js";
import CompanyList from "./companyList.js";
import "./index.css";

const SearchComponent = () => {
    let [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    useEffect(()=> {
            dispatch(matchCompaniesThunk(searchTerm));
        }, [])
    return (
        <div>
        <h3>Search</h3>
        <div className="row m-2">
            <div className="col-11 position-relative">
                <input value={searchTerm}
                       className="form-control rounded-pill ps-5"
                       onChange={(event) => setSearchTerm(event.target.value)}/>
                <i className="bi bi-search position-absolute
                           wd-magnifier-nudge-up"></i>
            </div>
            <div className="col-1">
                <button className="btn btn-primary rounded-pill"
                onClick={()=>{
                    dispatch(matchCompaniesThunk(searchTerm))
                }}>Search</button>
            </div>
        </div>
            <CompanyList/>
        </div>
    )
}

export default SearchComponent;