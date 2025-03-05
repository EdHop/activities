document.addEventListener("DOMContentLoaded", async () => {
    // Get current session/user info
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        // If no user is logged in, redirect to login page
        window.location.href = "/public/login.html";
        return;
    }

    // Fetch user details from 'user_details' table
    const { data: userDetails, error: detailsError } = await supabase
        .from("user_details")
        .select("username")
        .eq("user_id", user.id)
        .single();

    if (detailsError || !userDetails) {
        console.error("Error fetching user details:", detailsError);
        alert("Error loading profile.");
        return;
    }

    // Display user details
    let profileUsername = document.getElementById("profile-info-username");
    profileUsername.innerHTML = `Hi ${userDetails.username}!`

    let profileEmail = document.getElementById("profile-info-email");
    profileEmail.innerHTML = `Email: ${user.email}`

    let profileID = document.getElementById("profile-info-id");
    profileID.innerHTML = `ID: ${user.id}`


    // Logout functionality
    document.getElementById("logout-button").addEventListener("click", async () => {
        await supabase.auth.signOut();
        window.location.href = "/index.html"; // Redirect after logout
    });
});

