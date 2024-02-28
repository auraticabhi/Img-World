import React, { useEffect, useState } from 'react'
import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { initializeFirebaseAuth } from '../App';
import { useParams } from 'react-router-dom';

function ImageView() {

    const { imageId } = useParams();
    const [img, setImg] = useState('')

    useEffect(() => {
        const fetchImage = async() => {
            const imageRef = doc(initializeFirebaseAuth.db, "images", imageId);
            const docSnap = await getDoc(imageRef);
            if (docSnap.exists()) {
                const imageData = docSnap.data();
                setImg(imageData.imageUrl);
                // Increment timesViewed by 1
                await updateDoc(imageRef, {
                    timesViewed: increment(1)
                });
            } else {
                console.log("No such document!");
            }
        };
        fetchImage();
    }, [imageId]);

    return ( <
        div className = 'flex items-center justify-center flex-col' >
        <
        h2 className = 'mt-5 mb-5 font-bold' > Here is the image - < /h2> <
        div className = 'mb-5' > { img && < img className = 'rounded-md'
            src = { img }
            height = { 500 }
            width = { 500 }
            alt = "Uploaded" / > } <
        /div> <
        /div>
    )
}

export default ImageView