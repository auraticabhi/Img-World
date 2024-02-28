import React, { useState } from 'react'
import useFireStore from '../hooks/useFireStore'

function ImageGallery() {

    const { docs: images, isLoading } = useFireStore('images');
    console.log(images);
    const CopyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
        alert("Copied Sucessfully! (Note: Everytime someone opens your image with this link the view count below the image will be incremented by 1).")
    }

    if (isLoading) return <div className = 'text-center mt-10' > < progress className = "progress w-56" > < /progress></div >

        return ( <
            >
            <
            div > {
                images.length == 0 && < p className = 'font-bold text-center mt-20' > No images Found!{ " " }👽 < /p>
            } <
            div className = 'flex justify-center items-center' >
            <
            div className = 'grid md:grid-cols-4 gap-10 mt-10' > {
                images.map((image) => {
                    return <div key = { image.imageUrl } >
                        <
                        div className = "card card-compact w-80 bg-base-100 shadow-xl" >
                        <
                        figure className = 'max-h-[15rem]' > < img src = { image.imageUrl }
                    alt = "img" / > < /figure> <
                        div className = "card-body" >
                        <
                        p > Analytics / Times Viewed: < span className = 'font-bold' > { image.timesViewed } < /span></p >
                        <
                        span > Created On: { image.createdAt } < /span> <
                        div className = "card-actions justify-center mt-1" >
                        <
                        button className = "btn btn-primary"
                    onClick = {
                            () => { CopyToClipboard(`${import.meta.env.VITE_FRONTEND_URL}/image/${image.id}`) } } > Copy Image Link < /button> <
                        /div> <
                        /div> <
                        /div> <
                        /div>
                })
            } <
            /div> <
            /div> <
            /div> <
            />
        )
}

export default ImageGallery