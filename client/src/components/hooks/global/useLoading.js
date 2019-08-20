import React from 'react';
import loading from '../../../images/loading.gif';


const useLoading = () => {
    const loading = () => {
        return <> <img src={loading} alt="img"></img> </>
    }
    return {
        loading
    }
};


export default useLoading