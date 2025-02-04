const packages = {
    Basic: {
        price: "6,999 Taka Taka",
        delivery: "9-day delivery",
        revisions: "Unlimited Revisions",
        features: [
            "Functional website",
            "15 pages",
            "Responsive design",
            "Content upload",
            "3 plugins/extensions",
            "E-commerce functionality",
            "1,115 products",
            "Payment processing",
            "Opt-in form",
            "Autoresponder integration",
            "Speed optimization",
            "Hosting setup",
            "Social media icons",
        ],
    },
    Standard: {
        price: "14,999 Taka",
        delivery: "15-day delivery",
        revisions: "Unlimited Revisions",
        features: [
            "Functional website",
            "20 pages",
            "Responsive design",
            "Content upload",
            "5 plugins/extensions",
            "E-commerce functionality",
            "30 products",
            "Payment processing",
            "Opt-in form",
            "Autoresponder integration",
            "Speed optimization",
            "Hosting setup",
            "Social media icons",
            "SEO Optimization",
        ],
    },
    Premium: {
        price: "24,999 Taka",
        delivery: "17-day delivery",
        revisions: "Unlimited Revisions",
        features: [
            "Functional website",
            "Unlimited pages",
            "Responsive design",
            "Content upload",
            "10 plugins/extensions",
            "E-commerce functionality",
            "50 products",
            "Payment processing",
            "Opt-in form",
            "Autoresponder integration",
            "Speed optimization",
            "Hosting setup",
            "Social media icons",
            "SEO Optimization",
            "Custom Branding",
        ],
    },
};

// প্যাকেজ পরিবর্তন করার ফাংশন
function selectPackage(packageType) {
    document.getElementById("packageTitle").innerText = packageType + " SHOPIFY STORE";
    document.getElementById("packagePrice").innerText = packages[packageType].price;
    document.getElementById("packageDelivery").innerText = packages[packageType].delivery;
    document.getElementById("packageRevisions").innerText = packages[packageType].revisions;

    // ফিচার লিস্ট আপডেট করা
    const featureList = document.getElementById("featureList");
    featureList.innerHTML = "";
    packages[packageType].features.forEach((feature) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>✔</span> ${feature}`;
        featureList.appendChild(li);
    });

    // সব বাটনের স্টাইল আপডেট করা
    document.querySelectorAll(".btn").forEach((btn) => {
        btn.classList.remove("btn-active");
        btn.classList.add("btn-outline-primary");
    });

    // সিলেক্ট করা বাটনের স্টাইল আপডেট করা
    document.getElementById(packageType.toLowerCase() + "Btn").classList.remove("btn-outline-primary");
    document.getElementById(packageType.toLowerCase() + "Btn").classList.add("btn-active");
}

// Continue বাটনের ক্লিক ইভেন্ট
function continuePackage() {
    const selectedPackage = document.getElementById("packageTitle").innerText.split(" ")[0];
    alert(`${selectedPackage} package selected!`);
}

// প্রথমবার লোড হওয়ার সময় Basic প্যাকেজ দেখানো
document.addEventListener("DOMContentLoaded", () => {
    selectPackage("Basic");
});

