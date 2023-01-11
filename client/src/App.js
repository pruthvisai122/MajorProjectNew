import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import CanteenList from './components/CanteenList';
import Menu from './components/Menu';
import OrdersUser from './components/OrdersUser';
import LoginCanteen from './components/LoginCanteen';
import CanteenReg from './components/RegisterCanteen';
import CanteenDash from './components/CanDashBoard';
import CanMenu from './components/CanMenu';

import AdminForm from './components/AdminForm';
import AdminDash from './components/AdminDash';
import PageNotFound from './components/PageNotFound';

import AccessDenied from './components/AccessDenied';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import AssignPermission from './components/AssignPermission';
// import {isauth} from 'auth';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Navigate to="/user" replace={true} />} />
          
          {/* <Route
            path="/canteenlist"
           
            render={() => (
              <PrivateRoute element={<CanteenList/>} action="user_canteenlist" />
            )}
          /> */}
          <Route path="/user" element={<Login/>} />
          <Route
              path="/canteenlist"
              element={<PrivateRoute component={CanteenList} action="user_canteenlist" />}
          />

          {/* // <Route element={<PrivateRoute action="user_canteenlist"/>}exact>
          //   <Route path="/canteenlist" element={<CanteenList/>}/>
          // </Route> */}


          <Route path="/menu/:id" element={<Menu/>} />
          <Route
              path="/user/orders"
              element={<PrivateRoute component={OrdersUser} action="user_user_orders" />}
          />
          
          {/* <Route
            path="/user/orders"
           
            render={() => (
              <PrivateRoute element={<OrdersUser/>} action="user_user_orders" />
            )}
          /> */}
          <Route path="/register/user" element={<RegisterUser/>} />
          <Route path="/canteen" element={<LoginCanteen/>} />
          <Route path="/register/canteen" element={<CanteenReg/>} />
          
          <Route
              path="/canteen/orders"
              element={<PrivateRoute component={CanteenDash} action="canteen_canteen_dash" />}
          />
          {/* <Route element={<PrivateRoute action="canteen_canteen_dash"/>}exact>
            <Route path="/canteen/orders" element={<CanteenDash/>}/>
          </Route> */}
          
          <Route
              path="/canteen/menu"
              element={<PrivateRoute component={CanMenu} action="canteen_canteen_menu" />}
          />

          {/* <Route element={<PrivateRoute action="canteen_canteen_menu"/>}exact>
            <Route path="/canteen/menu" element={<CanMenu/>}/>
          </Route> */}
          {/* <Route
            path="/canteen/orders"
           
            render={() => (
              <PrivateRoute
                element={<CanteenDash/>}
                action="canteen_canteen_dash"
              />
            )}
          /> */}
          {/* <Route
            path="/canteen/menu"
           
            render={() => (
              <PrivateRoute element={<CanMenu/>} action="canteen_canteen_menu" />
            )}
          /> */}
          <Route path="/user/admin" element={<AdminForm/>} />
          {/* <Route element={<PrivateRoute action="admin_admindash"/>}exact>
            <Route path="/admindash" element={<AdminDash/>}/>
          </Route> */}
          
          <Route
              path="/admindash"
              element={<PrivateRoute component={AdminDash} action="admin_admindash" />}
          />

          <Route
              path="/assign_perms"
              element={<PrivateRoute component={AssignPermission} action="assign_perm" />}
          />

          {/* <Route path="/user/admin" element={<AdminForm/>} />
          <Route
            path="/admindash"
           

            render={() => (
              <PrivateRoute element={<AdminDash/>} action="admin_admindash" />
            )}
          /> */}
          {/* <Route element={<PrivateRoute action="assign_perm"/>}exact>
            <Route path="/assign_perms" element={<AssignPermission/>}/>
          </Route> */}
          {/* <Route
            path="/assign_perms"
           
            render={() => (
              <PrivateRoute element={<AssignPermission/>} action="assign_perm" />
            )}
          /> */}
          <Route path="/access_denied" element={<AccessDenied/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
