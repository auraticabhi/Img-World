import React, { useEffect } from 'react'
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { useState } from 'react';
import { initializeFirebaseAuth } from '../App';
import { AuthContext } from '../context/auth';
import { useContext } from 'react';


function useFireStore(collectionName) {

    const { user } = useContext(AuthContext)
        //console.log(user.email);
    const [docs, setDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let unsubscribe = async() => { return null }


        const getData = async() => {
            try {
                const q = query(collection(initializeFirebaseAuth.db, collectionName), where("userEmail", "==", user.email), orderBy("createdAt", "desc"));
                unsubscribe = onSnapshot(q, (querySnapshot) => {
                    const images = [];
                    querySnapshot.forEach((doc) => {
                        images.push({ id: doc.id, ...doc.data() });
                    });
                    setDocs(images)
                    setIsLoading(false);
                });
            } catch (e) {
                console.log(e);
                setIsLoading(false)
            }
        }
        getData();
        return () => unsubscribe && unsubscribe();
    }, [collectionName]);
    return {
        docs,
        isLoading
    };
}

export default useFireStore