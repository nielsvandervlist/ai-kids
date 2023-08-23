import React, {useState, useRef, useEffect} from 'react'

function AutoResizableTextarea({text, setText}) {
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        setText(event.target.value);
        adjustTextareaHeight();
    };

    useEffect(() => {
        adjustTextareaHeight()
    }, [])

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // Reset the height to auto
        textarea.style.height = `${textarea.scrollHeight}px`; // Set the height based on the content
    };

    return (
        <textarea
            ref={textareaRef}
            value={text}
            className={'coding'}
            onChange={handleChange}
            placeholder="Enter text here"
            rows={1} // Set an initial number of rows
        />
    );
}

export default AutoResizableTextarea;
