// FAQ Toggle Function
document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            document.querySelectorAll(".faq-answer").forEach((ans) => ans.style.display = "none");
            answer.style.display = "block";
        }
    });
});

// Scroll to Contact Section
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-message").innerText = "✅ আপনার মেসেজ সফলভাবে পাঠানো হয়েছে!";
        document.getElementById("form-message").style.color = "green";

        // ফর্ম রিসেট করা
        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("form-message").innerText = "⚠️ অনুগ্রহ করে সব তথ্য পূরণ করুন!";
        document.getElementById("form-message").style.color = "red";
    }
});

function goToService() {
    window.location.href = "Service.html";
}