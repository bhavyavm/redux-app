//higer order component

import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is: {props.info}</p>
    </div>
);
const InfoUser = (props) => (
    <div>
        <h1>Info</h1>
        <p>the user Info is: {props.info}</p>
    </div>
);
const withAdminWarning = (WrappedComponents) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>private Info!!!</p>}
            <WrappedComponents  {...props} />
        </div>
    );
}
const requireAuthentication = (WrappedComponents) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? (
                <WrappedComponents {...props} />
            ) : (
                    <p>you dont have access to view the details</p>
                )}
            {props.isAdmin && <p>private Info!!!</p>}
        </div>
    )
}


const AdminInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAuthenticated={true} isAdmin={false} info="These are the details" />, document.getElementById('app')) 