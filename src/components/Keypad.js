// Code Keypad Component Here

function handleChangeEvent() {
    console.log("Entering password...")
}

function Keypad (){

    return (
        <div>
            <input onChange={handleChangeEvent} type="password" />
        </div>
    )
}

export default Keypad;