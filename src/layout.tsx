import * as React from "react";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps,
} from "piral";
import { Link } from "react-router-dom";
import { TailwindStyledDiv } from "./TailwindStyledDiv";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <li className='nav-item'>{children}</li>
);

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => (
    <div className='bg-orange-500'>
      <h1>Hello, world!</h1>
      <TailwindStyledDiv />
      <p>Welcome to your new microfrontend app shell, built with:</p>
      <div className=''>{children}</div>
    </div>
  ),
  DashboardTile: ({ columns, rows, children }) => (
    <div className=''>{children}</div>
  ),
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type='general' />
      <div className='container'>{children}</div>
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className='navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'>
          <div className='container'>
            <Link className='navbar-brand' to='/'>
              Piral
            </Link>
            <button
              aria-label='Toggle navigation'
              type='button'
              onClick={() => setCollapsed(!collapsed)}
              className='navbar-toggler mr-2'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div
              className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
                collapsed ? "" : "show"
              }`}
              aria-expanded={!collapsed}
            >
              <ul className='navbar-nav flex-grow'>{children}</ul>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
};
