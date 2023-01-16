/* eslint-disable */
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Button } from "@components/Button";
// import { useAppDispatch, useAppSelector } from "hooks";
// import { logoutThunk } from "store/thunks/logout.thunk";

import { getActiveNavLinkStyle } from "@utils/nav-link";

import classes from "./Header.module.css";

export const Header = () => {
  // const dispatch = useAppDispatch();
  // const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // dispatch(logoutThunk())
    //   .then(() => navigate("/login"))
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.navList}>
          <NavLink
            className={classes.navItem}
            style={getActiveNavLinkStyle}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={classes.navItem}
            style={getActiveNavLinkStyle}
            to="/users"
          >
            Users
          </NavLink>
        </ul>
      </nav>

      <div className={classes.header__row}>
        <div className={classes.profile}>
          {/* <p>{user.name ? user.name : "Unknown user -_-"}</p>
          {!user.isActivated ? (
            <span className={classes.profile__subtitle}>
              User is not activated
            </span>
          ) : null} */}
        </div>

        <Button onClick={handleLogout} className={classes.header__button}>
          Logout
        </Button>
      </div>
    </header>
  );
};
