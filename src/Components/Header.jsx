import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToken } from '../Redux/auth';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = useSelector((state) => state.userData.userName);

    const handleSignOut = () => {
        dispatch(removeToken());
        navigate('/');
    };

    const handleUsernameClick = () => {
        navigate('/user');
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={require('../Assets/argentBankLogo.png')}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {token ? (
                    <div>
                        <Link className='main-nav-item' to="/user" onClick={handleUsernameClick}>
                        <i className="fa fa-user-circle"></i> {username}
                        </Link>{' '}
                        <Link className="main-nav-item" onClick={handleSignOut}>
                            <i className="fa fa-sign-out"></i> Sign Out
                        </Link>
                    </div>
                ) : (
                    <Link className="main-nav-item" to="/signin">
                        <i className="fa fa-user-circle"></i> Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
