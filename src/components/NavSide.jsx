import React from "react";
import { useState } from "react";
import {
  logo,
  clientAudiophile,
  clientDataBiz,
  clientMaker,
  clientMeet,
  iconArrowDown,
  iconArrowUp,
  iconCalendar,
  iconClose,
  iconMenu,
  iconPlanning,
  iconReminders,
  iconTodo,
  heroDesktop,
  heroMobile,
} from "../holdImages";
const NavSide = () => {
  return (
    <>
      <nav className="navbar  fixed-top px-3">
        <div className="container-fluid">
          <a className="navbar-brand n1" href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="topUl">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="" />
            </a>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ marginRight: "5px" }}>Features</span>

                <img src={iconArrowDown} alt="" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end lx">
                <li>
                  <img src={iconTodo} alt="" />
                  <a className="dropdown-item" href="#">
                    Todo List
                  </a>
                </li>
                <li>
                  <img src={iconCalendar} alt="" />
                  <a className="dropdown-item" href="#">
                    Calendar
                  </a>
                </li>
                <li>
                  <img src={iconReminders} alt="" />
                  <a className="dropdown-item" href="#">
                    Reminders
                  </a>
                </li>
                <li>
                  <img src={iconPlanning} alt="" />
                  <a className="dropdown-item" href="#">
                    Planning
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span style={{ marginRight: "5px" }}>Company</span>

                <img src={iconArrowDown} alt="" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    History
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
          <div className="right-side">
            <ul className="rightUl">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link register" href="#">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ position: "absolute", right: "2rem", top: "2rem" }}
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 my-3">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ marginRight: "5px" }}>Features</span>

                    <img src={iconArrowDown} alt="" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end lx">
                    <li>
                      <img src={iconTodo} alt="" />
                      <a className="dropdown-item" href="#">
                        Todo List
                      </a>
                    </li>
                    <li>
                      <img src={iconCalendar} alt="" />
                      <a className="dropdown-item" href="#">
                        Calendar
                      </a>
                    </li>
                    <li>
                      <img src={iconReminders} alt="" />
                      <a className="dropdown-item" href="#">
                        Reminders
                      </a>
                    </li>
                    <li>
                      <img src={iconPlanning} alt="" />
                      <a className="dropdown-item" href="#">
                        Planning
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span style={{ marginRight: "5px" }}>Company</span>

                    <img src={iconArrowDown} alt="" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        History
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Blog
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Careers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <ul className="rightUl xx">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link register" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavSide;
