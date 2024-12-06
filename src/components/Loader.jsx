import React from 'react';
import loaderIcon from '../../public/image-seven.png'
const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">

            <div className="w-36 h-36 animate-spin " style={{"animation-duration":"4s"}}>
                <img src={loaderIcon} alt="" />
            </div>
        </div>
    );
};

export default Loader;