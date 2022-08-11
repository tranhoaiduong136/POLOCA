import React, { useContext } from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import ThemeMenu from "../thememenu/ThemeMenu";

import notifications from "../../assets/JsonData/notification.json";

import user_image from "../../assets/images/duong.png";

import user_menu from "../../assets/JsonData/user_menus.json";

import { LogInContext } from "../../../src/home";

const curr_user = {
  display_name: "Duong Tran",
  image: user_image,
};

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

// const renderUserMenu =(item, index) => (
//     <div>
//       {(index === 1)
//         ?
//         <a href="/">
//             <div className="notification-item">
//                 <i className={item.icon}></i>
//                 <span>{item.content}</span>
//             </div>
//         </a>
//         :
//         <Link to='/settings'>
//           <div className="notification-item">
//               <i className={item.icon}></i>
//               <span>{item.content}</span>
//           </div>
//         </Link>
//       }
//     </div>
// )

const Topnav = () => {
  const contextValue = useContext(LogInContext);
  const loginState = contextValue.isFirstLogIn;
  const setLogin = () => {contextValue.toggleIsFirstLogIn(loginState)};
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => (
              <div>
                {index === 1 ? (
                  <button className="btn"onClick={()=>{console.log('clicked');setLogin()}}>
                    <div className="notification-item">
                      <i className={item.icon}></i>
                      <span>{item.content}</span>
                    </div>
                  </button>
                ) : (
                  <Link to="/settings">
                    <div className="notification-item">
                      <i className={item.icon}></i>
                      <span>{item.content}</span>
                    </div>
                  </Link>
                )}
              </div>
            )}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge={notifications.length}
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
