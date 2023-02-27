// Easter Egg nr 2

const myKey = "jon";

export const SecretComponent = () => {

    let keyInput = ""

    document.addEventListener("keydown", (key) => {
        keyInput += key.key
        if (myKey === keyInput) {
            console.log('Success');
            return true;
        }
        else {
            setTimeout(() => {
                keyInput = ""
            }, 3000)
        }
    })
}