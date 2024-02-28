import React, { useState } from 'react'
import useStorage from '../hooks/useStorage';

function UploadForm() {

    const [selectedFile, setSelectedFile] = useState(null);
    const { progress, startUpload } = useStorage();
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            startUpload(selectedFile)
        }
        setSelectedFile(null);
    }

    return ( <
        div className = 'text-center mt-10' >
        <
        form className = 'flex items-center flex-col gap-8'
        onSubmit = { handleSubmit } >
        <
        input type = "file"
        onChange = { handleFileChange }
        className = "file-input file-input-bordered w-full max-w-xs" / >
        <
        button type = 'submit'
        className = { `btn gap-3 ${Boolean(progress) && 'loading'}` } > Upload { " " }🚀 < /button> <
        /form> <
        /div>
    )
}

export default UploadForm