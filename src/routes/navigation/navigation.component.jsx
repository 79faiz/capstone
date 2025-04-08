import { Fragment } from "react";  // fragment is useful for grouping multiple elements without adding extra node.
import { Outlet, Link } from "react-router-dom"; // render a different component without refreshing the entire page.
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = ()=>{
    return(
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        Shop
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;