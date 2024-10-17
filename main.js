document.addEventListener("DOMContentLoaded", ()=>{
    const name = document.getElementById("name");
    const phoneNumber = document.getElementById("phoneNumber");
    const content = document.getElementById("content");
    const submit = document.getElementById("submit");

    submit.addEventListener("click", (e)=>{
        e.preventDefault();
        const data = {
            name: name.value,
            phoneNumber: phoneNumber.value,
            content: content.value,
        }
        name.value = "";
        phoneNumber.value = "";
        content.value = "";
        postGoogle(data);
        async function postGoogle(data){
            const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScUwekQlFRd-PE4wk4HZVwyZ-JZwmn9t3AhfA2LrjW8pGJhgA/formResponse";
            const formData = new FormData();
            formData.append("entry.526013344", data.name);
            formData.append("entry.160941988", data.phoneNumber);
            formData.append("entry.1340053132", data.content);

            await fetch(formURL, {
                method: "POST",
                body: formData,
            })
        }
    })
})





