// High Order Component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};


const requireAuthenticatiion = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
      <WrappedComponent {...props} />
      ) : (
         <p>Please log in to view the info</p>
      )}
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthenticatiion(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info="thre are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="thre are the details" />, document.getElementById('app'));