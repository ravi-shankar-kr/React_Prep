function Hello() {

    let myName = "Ravi";

    let fullName =  () => {
        return 'Ravi Kashyap';
    }
    return <h3>
        Hello, This is the future. I am your master {myName} {fullName()}
    </h3>
}

export default Hello;