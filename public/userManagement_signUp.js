// Signup form functionality

document.getElementById("signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();   // Stops the page refreshing
    
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password === confirmPassword) {

    const { data: signupData, error: signupError } = await supabase.auth.signUp({ email: email, password: password, options: { emailRedirectTo: "http://127.0.0.1:3000/public/authenticated.html"} }); // Calls supabase to add a row in the auth table with the given email and password
    if (signupError) {
      alert(signupError.message);
    } else {
      const userID = signupData.user?.id // Retrieves the new user ID
      if (!userID) { 
        alert("Signup failed - no user ID received"); // checking we can retrieve the newly created user ID
        return; // Stops the function if there is no userID
      } else {
        alert("Signup successful! Please check your email for confirmation");
      }}
      
    } else {
    alert("Password do not match!")
  }});
