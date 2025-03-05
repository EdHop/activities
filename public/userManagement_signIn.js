  // Login functionality

  document.getElementById("login-form").addEventListener("submit", async (e) => {
    console.log("Submit event triggered!");
    e.preventDefault();
    console.log("Form submitted");
    
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    console.log("Email:", email, "Password:", password);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    console.log("Supabase response:", data, "Error:", error);

    if (error) {
      alert(error.message);
    } else {
      console.log("User:", data.user);
      window.location.href = "/activities/public/profile.html";
    }
  });