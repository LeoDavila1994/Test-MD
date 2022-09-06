import React from 'react';
import ViewBtn from '../components/ViewBtn';
import ResourcesBtn from './ResourcesBtn';


const Separator = ({ title, bgLogo, icon }) => {
    return (
        <div className='section--header'>
            <div className='section--logo'>
                <div className='logo--container'>
                    {icon ? (
                        <i className="fa-solid fa-link rotate" style={{ backgroundColor: `${bgLogo}` }}></i>
                    ) : (
                        <i className="fa-solid fa-house" style={{ backgroundColor: `${bgLogo}` }}></i>
                    )}
                </div>
                <div className='text--logo'>
                    <p>Training powered by</p>
                    <h1>{title}</h1>
                </div>
            </div>
            <div className='btn--separators--container'>
                {icon? null :
                <ResourcesBtn />
                }
                <ViewBtn />
            </div>
        </div>
    );
};

export default Separator;
