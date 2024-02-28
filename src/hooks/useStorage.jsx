import React, { useContext, useState } from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';
import { collection, addDoc } from "firebase/firestore";
import { AuthContext } from '../context/auth';
import { initializeFirebaseAuth } from '../App';

function useStorage() {

    const storage = getStorage();

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext)
        //console.log(user)

    const startUpload = (file) => {
        if (!file) {
            return
        }
        const fileId = v4();
        const format = file.type.split('/')[1];
        const storageRef = ref(storage, `images/${fileId}.${format}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setProgress(progress);
            },
            (error) => {
                setError(error);
            },
            async() => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                //setUrl(downloadURL);
                setProgress(0);
                const imageId = v4();
                const docRef = await addDoc(collection(initializeFirebaseAuth.db, "images"), {
                    imageUrl: downloadURL,
                    createdAt: new Date().toLocaleDateString(),
                    userEmail: user.email,
                    timesViewed: 0,
                    imageId: imageId,
                });
            }
        );
    }
    return { progress, error, startUpload }
}

export default useStorage