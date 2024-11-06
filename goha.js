const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }

 document.getElementById("repairForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ფორმის გაგზავნის თავიდან ასაცილებლად გვერდის გადატვირთვა

    const message = document.getElementById("message").value;

    // AJAX მოთხოვნა სერვერზე
    fetch("submit_message.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        alert("Error sending message.");
        console.error("Error:", error);
    });
});
 
 showMenu('nav-toggle','nav-menu')