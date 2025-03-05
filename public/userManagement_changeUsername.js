// Username selection

document.getElementById("username-form").addEventListener("submit", async (e) => {
    console.log("Submit event triggered!");
    e.preventDefault();
    
    const username = document.getElementById("change-username").value;
    
    const { data: userData, error: userError } = await supabase.auth.getUser();

    if (userError) {
        console.error("Error fetching user:", userError.message);
        return;
    }

    let { data: inputData, error: inputError } = await supabase
    .from('user_details')
    .insert([{ user_id: userData.user.id, username: username, email: userData.user.email }])

    if (inputError) {
        console.error("Error inserting data:", inputError.message);
        alert("Error:", inputError.message);
    } else {
        console.log("Username added successfully:", inputData);
        alert("Success!");
    }
})