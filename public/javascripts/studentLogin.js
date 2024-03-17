document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Fetch values from input fields
  var studentName = document.getElementById("studentName").value;
  var studentId = document.getElementById("studentId").value;
  var password = document.getElementById("password").value;
  
  // Validate login credentials (You would need to implement server-side validation)
  // For demonstration purpose, let's just log the values
  console.log("Student Name:", studentName);
  console.log("Student ID:", studentId);
  console.log("Password:", password);
});
