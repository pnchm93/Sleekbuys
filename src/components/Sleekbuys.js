import { Fragment } from "react";
import { NavLink } from "react-router-dom";
function Sleekbuys(){
    return (
        <Fragment>
        <h1>Sleekbuys...!</h1>
            <h2 className="sleek-content">Thanks for visiting the Sleekbuys.</h2>
            <NavLink to='/' className='sleek-link'>Go back to Home Page</NavLink>
        </Fragment>
    )
}
export default Sleekbuys;