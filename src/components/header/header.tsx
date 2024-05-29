import React from "react";
import { NavLink } from 'react-router-dom';


import classes from "./header.module.scss";
import { ReactComponent as HomeIcon } from "../../assets/icons/home_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as PatientsIcon } from "../../assets/icons/group_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/icons/calendar_today_FILL0_wght300_GRAD0_opsz24 (1).svg";
import { ReactComponent as TransactionsIcon } from "../../assets/icons/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as GearIcon } from "../../assets/icons/settings_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as MoreActionsIcon } from "../../assets/icons/more_vert_FILL0_wght300_GRAD0_opsz24.svg";



const Header: React.FC<any> = () => {

    return (
        <React.Fragment>
            <header className={classes.app_header}>
                <div>
                    <img src="/images/TestLogo.png" alt="tech core logo" />
                </div>
                <nav className={classes.app_nav}>
                    <NavLink
                        className={({ isActive }) => isActive ? classes.active : ''}
                        to="/overview"

                    >
                        <div className={classes.nav_select}>
                            <HomeIcon className={classes.nav_icon} />
                            <p className={classes.nav_text}>Overview</p>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/patients"
                        className={({ isActive }) => isActive ? classes.active : ''}
                    >
                        <div className={classes.nav_select}>
                            <PatientsIcon className={classes.nav_icon} />
                            <p className={classes.nav_text}>  Patients</p>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/schedule"
                        className={({ isActive }) => isActive ? classes.active : ''}
                    >
                        <div className={classes.nav_select}>
                            <ScheduleIcon className={classes.nav_icon} />
                            <p className={classes.nav_text}>  Schedule</p>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/message"
                        className={({ isActive }) => isActive ? classes.active : ''}
                    >
                        <div className={classes.nav_select}>
                            <MessageIcon className={classes.nav_icon} />
                            <p className={classes.nav_text}>  Message</p>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/transactions"
                        className={({ isActive }) => isActive ? classes.active : ''}
                    >
                        <div className={classes.nav_select}>
                            <TransactionsIcon className={classes.nav_icon} />
                            <p className={classes.nav_text}>  Transactions</p>
                        </div>

                    </NavLink>
                </nav>
                <div className={classes.user_info}>
                    <img className={classes.img_user} src="/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png" alt="logged in user" />


                    <p className={`${classes.user_name} ${classes.nav_text}`}>Dr. Jose Simmons</p >
                    <p className={`${classes.user_title}`}>General Practitioner</p>
                    <div className={`${classes.divider}`}></div>
                    <GearIcon className={classes.settings_icn} />
                    <MoreActionsIcon className={classes.more_options_icn} />

                </div>
            </header>
        </React.Fragment>
    );
};

export default Header;