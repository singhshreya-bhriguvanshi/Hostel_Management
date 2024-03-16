function selectRole(role) {
  // alert('You selected: ' + role);
  if(role==="student")
  window.location.href="/student";
else if(role==='parent')
window.location.href="/parent";
else if(role==='warden')
window.location.href="/warden";
  // You can perform additional actions based on the selected role
}
