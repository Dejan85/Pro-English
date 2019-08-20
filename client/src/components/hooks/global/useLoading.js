import React from 'react';
import logo from '../../../images/loading.gif';


const useLoading = () => {
    const loading = () => {
        return <img className="loading" src={logo} alt="xad" />
    }
    return {
        loading
    }
};


export default useLoading