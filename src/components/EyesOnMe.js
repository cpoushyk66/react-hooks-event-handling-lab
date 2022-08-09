// Code EyesOnMe Component Here

function handleFocusEvent() {
    console.log("Good!")
}

function handleBlurEvent() {
    console.log("Hey! Eyes on me!")
}

function EyesOnMe() {

    return (
        <button onFocus={handleFocusEvent} onBlur={handleBlurEvent}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe