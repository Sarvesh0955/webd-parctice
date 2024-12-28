function formSubmit(event){
    event.preventDefault();
    console.log("Form submitted");
}

function Form(){
    return (
        <form onClick={formSubmit}>
            <label>First Name:</label>
            <input type="text" />
            <label>Last Name:</label>
            <input type="text" />
            <label>Email:</label>
            <input type="email" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;