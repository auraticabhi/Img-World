import React from 'react'
import Navbar from '../components/Navbar'
import UploadForm from '../components/UploadForm'
import ImageGallery from '../components/ImageGallery'

function Home() {
    return ( <
        div >
        <
        Navbar className = 'max-w-4xl mx-auto' / >
        <
        UploadForm / >
        <
        ImageGallery / >
        <
        /div>
    )
}

export default Home