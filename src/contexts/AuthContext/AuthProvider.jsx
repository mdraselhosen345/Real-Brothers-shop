import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {
    const [card, setCard] = useState([]);

    const AddToCard = (product) => {
        setCard([...card, product]);
    }
     

    const cardInfo = {
        card, 
        AddToCard
    }

    return (
             <AuthContext value={authInfo}>
                  {children}
             </AuthContext>
    );
};

export default AuthProvider;