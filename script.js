
// =====================================
// VIDYASETU - MAIN JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // CLOSE MENU AFTER CLICKING A LINK

    const navigationItems = navLinks.querySelectorAll("a");

    navigationItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// CURRENT YEAR IN FOOTER

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} VidyaSetu. All Rights Reserved.`;

}


// =====================================
// VIDYASETU - CLASS SELECTION
// =====================================

const classButtons = document.querySelectorAll(".class-button");

classButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedClass = button.dataset.class;

        // Ignore buttons without a class selection
        if (!selectedClass) return;

        // Save the selected class
        sessionStorage.setItem(
            "vidyasetuSelectedClass",
            selectedClass
        );

        // Open the correct subject selection page
        if (selectedClass === "8") {

            window.location.href = "class8-subjects.html";

        } else {

            window.location.href = "subjects.html";

        }

    });

});

// =====================================
// VIDYASETU - SUBJECT SELECTION
// =====================================

// Display the selected class

const selectedClassText = document.getElementById("selectedClassText");

if (selectedClassText) {

    const selectedClass = sessionStorage.getItem("vidyasetuSelectedClass");

    if (selectedClass) {
        selectedClassText.textContent =
            `You selected Class ${selectedClass}. Now choose a subject to continue.`;
    } else {
        selectedClassText.textContent =
            "No class selected. Please choose a class first.";
    }

}


// Handle available subject selection

const subjectButtons = document.querySelectorAll(
    ".subject-button[data-subject]"
);

subjectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedClass = sessionStorage.getItem("vidyasetuSelectedClass");

        if (!selectedClass) {
            alert("Please select a class first.");
            window.location.href = "classes.html";
            return;
        }

        const selectedSubject = button.dataset.subject;

        // Save the selected subject for the next page
        sessionStorage.setItem("vidyasetuSelectedSubject", selectedSubject);

        // Open topic-based learning
        window.location.href = "topics.html";

    });

});

// =====================================
// VIDYASETU - TOPIC SELECTION
// =====================================

const topicPageDescription = document.getElementById("topicPageDescription");
const topicDemoBanner = document.getElementById("topicDemoBanner");
const topicsGrid = document.getElementById("topicsGrid");
const topicsUnavailable = document.getElementById("topicsUnavailable");
const topicCount = document.getElementById("topicCount");

if (topicPageDescription) {

    const selectedClass = sessionStorage.getItem("vidyasetuSelectedClass");
    const selectedSubject = sessionStorage.getItem("vidyasetuSelectedSubject");

    // Check whether the user has selected a class and subject

    if (!selectedClass || !selectedSubject) {

        topicPageDescription.textContent =
            "Please select a class and subject before choosing a topic.";

        topicDemoBanner.hidden = true;
        topicsGrid.hidden = true;
        topicCount.hidden = true;
        topicsUnavailable.hidden = false;

        topicsUnavailable.querySelector("h2").textContent =
            "Please Select a Class and Subject";

        topicsUnavailable.querySelector("p").textContent =
            "Choose a class and subject first to access the available learning topics.";

    }

    // Only Class 3 Mathematics has demo content at this stage

    else if (selectedClass !== "3" || selectedSubject !== "Mathematics") {

        topicPageDescription.textContent =
            `You selected Class ${selectedClass} ${selectedSubject}.`;

        topicDemoBanner.hidden = true;
        topicsGrid.hidden = true;
        topicCount.hidden = true;
        topicsUnavailable.hidden = false;

    }

    else {

        topicPageDescription.textContent =
            "You selected Class 3 Mathematics. Choose a topic to begin learning.";

    }

}


// Handle topic selection

const topicButtons = document.querySelectorAll(".topic-button");

topicButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedTopic = button.dataset.topic;

        // Save the chosen topic for the learning page
        sessionStorage.setItem("vidyasetuSelectedTopic", selectedTopic);

        // Open the learning page
        window.location.href = "lesson.html";

    });

});

// =====================================
// VIDYASETU - INTERACTIVE LESSON CONTENT
// =====================================

const lessonData = {

    "Numbers Around Us": {
        number: "01",
        title: {
            en: "Numbers Around Us",
            kn: "ನಮ್ಮ ಸುತ್ತಲಿನ ಸಂಖ್ಯೆಗಳು"
        },
        introduction: {
            en: "Numbers are everywhere! We use them to count objects, tell time, identify pages and understand quantities.",
            kn: "ಸಂಖ್ಯೆಗಳು ನಮ್ಮ ಸುತ್ತಲೂ ಇವೆ! ವಸ್ತುಗಳನ್ನು ಎಣಿಸಲು, ಸಮಯ ತಿಳಿಯಲು ಮತ್ತು ಪ್ರಮಾಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಾವು ಸಂಖ್ಯೆಗಳನ್ನು ಬಳಸುತ್ತೇವೆ."
        },
        objective: {
            en: "Identify numbers and understand how numbers represent quantities.",
            kn: "ಸಂಖ್ಯೆಗಳನ್ನು ಗುರುತಿಸುವುದು ಮತ್ತು ಅವು ಪ್ರಮಾಣವನ್ನು ಹೇಗೆ ಸೂಚಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ತಿಳಿಯುವುದು."
        },
        concept: {
            en: "A number tells us how many objects there are. For example, if you have 5 pencils, the number 5 tells us the total quantity. Numbers can also be used to compare quantities and arrange objects.",
            kn: "ಒಂದು ಸಂಖ್ಯೆ ಎಷ್ಟು ವಸ್ತುಗಳಿವೆ ಎಂಬುದನ್ನು ತಿಳಿಸುತ್ತದೆ. ಉದಾಹರಣೆಗೆ, ನಿಮ್ಮ ಬಳಿ 5 ಪೆನ್ಸಿಲ್‌ಗಳಿದ್ದರೆ, 5 ಎಂಬ ಸಂಖ್ಯೆ ಅವುಗಳ ಒಟ್ಟು ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸುತ್ತದೆ. ಸಂಖ್ಯೆಗಳನ್ನು ವಸ್ತುಗಳ ಪ್ರಮಾಣವನ್ನು ಹೋಲಿಸಲು ಮತ್ತು ಜೋಡಿಸಲು ಸಹ ಬಳಸಬಹುದು."
        },
        visualHeading: {
            en: "Count the Apples",
            kn: "ಸೇಬುಗಳನ್ನು ಎಣಿಸಿ"
        },
        visual: `
            <div class="visual-object">🍎 🍎 🍎 🍎 🍎</div>
            <div class="visual-caption">5 Apples</div>
        `,
        visualExplanation: {
            en: "Count each apple. There are 5 apples in total.",
            kn: "ಪ್ರತಿಯೊಂದು ಸೇಬನ್ನು ಎಣಿಸಿ. ಒಟ್ಟು 5 ಸೇಬುಗಳಿವೆ."
        },
        question: {
            en: "How many apples are shown above?",
            kn: "ಮೇಲೆ ಎಷ್ಟು ಸೇಬುಗಳನ್ನು ತೋರಿಸಲಾಗಿದೆ?"
        },
        answer: {
            en: "Answer: 5 apples. We counted 1, 2, 3, 4 and 5.",
            kn: "ಉತ್ತರ: 5 ಸೇಬುಗಳು. ನಾವು 1, 2, 3, 4 ಮತ್ತು 5 ಎಂದು ಎಣಿಸಿದ್ದೇವೆ."
        },
        teacherTip: {
            en: "Ask children to count pencils, books or other objects in their classroom. Let them say the number aloud.",
            kn: "ಮಕ್ಕಳಿಗೆ ತರಗತಿಯಲ್ಲಿರುವ ಪೆನ್ಸಿಲ್‌ಗಳು, ಪುಸ್ತಕಗಳು ಅಥವಾ ಇತರ ವಸ್ತುಗಳನ್ನು ಎಣಿಸಲು ಹೇಳಿ. ಸಂಖ್ಯೆಯನ್ನು ಜೋರಾಗಿ ಹೇಳಲು ಪ್ರೋತ್ಸಾಹಿಸಿ."
        }
    },

    "Addition": {
        number: "02",
        title: {
            en: "Addition",
            kn: "ಸಂಕಲನ"
        },
        introduction: {
            en: "Addition means putting two or more groups together to find the total.",
            kn: "ಎರಡು ಅಥವಾ ಹೆಚ್ಚಿನ ಗುಂಪುಗಳನ್ನು ಸೇರಿಸಿ ಒಟ್ಟು ಸಂಖ್ಯೆಯನ್ನು ಕಂಡುಹಿಡಿಯುವುದೇ ಸಂಕಲನ."
        },
        objective: {
            en: "Understand addition and find the total when two quantities are combined.",
            kn: "ಸಂಕಲನವನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಎರಡು ಪ್ರಮಾಣಗಳನ್ನು ಸೇರಿಸಿದಾಗ ಒಟ್ಟು ಸಂಖ್ಯೆಯನ್ನು ಕಂಡುಹಿಡಿಯುವುದು."
        },
        concept: {
            en: "When we add, we combine quantities. The plus (+) sign tells us to add. For example, if you have 3 mangoes and receive 2 more, you have 5 mangoes altogether.",
            kn: "ನಾವು ಸಂಕಲನ ಮಾಡುವಾಗ ಪ್ರಮಾಣಗಳನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತೇವೆ. ಕೂಡಿಸುವ (+) ಚಿಹ್ನೆಯು ಸಂಕಲನವನ್ನು ಸೂಚಿಸುತ್ತದೆ. ಉದಾಹರಣೆಗೆ, ನಿಮ್ಮ ಬಳಿ 3 ಮಾವಿನಹಣ್ಣುಗಳಿದ್ದು ಇನ್ನೂ 2 ಸಿಕ್ಕರೆ, ಒಟ್ಟು 5 ಮಾವಿನಹಣ್ಣುಗಳಾಗುತ್ತವೆ."
        },
        visualHeading: {
            en: "Let's Add Mangoes",
            kn: "ಮಾವಿನಹಣ್ಣುಗಳನ್ನು ಸೇರಿಸೋಣ"
        },
        visual: `
            <div class="visual-group">
                <span class="visual-object">🥭 🥭 🥭</span>
                <span class="visual-symbol">+</span>
                <span class="visual-object">🥭 🥭</span>
                <span class="visual-symbol">=</span>
                <span class="visual-object">🥭 🥭 🥭 🥭 🥭</span>
            </div>
            <div class="visual-caption">3 + 2 = 5</div>
        `,
        visualExplanation: {
            en: "3 mangoes plus 2 mangoes make 5 mangoes.",
            kn: "3 ಮಾವಿನಹಣ್ಣುಗಳು ಮತ್ತು 2 ಮಾವಿನಹಣ್ಣುಗಳನ್ನು ಸೇರಿಸಿದರೆ 5 ಆಗುತ್ತವೆ."
        },
        question: {
            en: "Ravi has 4 pencils. His friend gives him 3 more. How many pencils does Ravi have now?",
            kn: "ರವಿ ಬಳಿ 4 ಪೆನ್ಸಿಲ್‌ಗಳಿವೆ. ಅವನ ಸ್ನೇಹಿತನು ಇನ್ನೂ 3 ಪೆನ್ಸಿಲ್‌ಗಳನ್ನು ಕೊಟ್ಟನು. ಈಗ ರವಿ ಬಳಿ ಒಟ್ಟು ಎಷ್ಟು ಪೆನ್ಸಿಲ್‌ಗಳಿವೆ?"
        },
        answer: {
            en: "Answer: 4 + 3 = 7 pencils.",
            kn: "ಉತ್ತರ: 4 + 3 = 7 ಪೆನ್ಸಿಲ್‌ಗಳು."
        },
        teacherTip: {
            en: "Use actual classroom objects such as pencils or chalk pieces. Combine two groups and ask children to count the total.",
            kn: "ಪೆನ್ಸಿಲ್‌ಗಳು ಅಥವಾ ಸೀಮೆಸುಣ್ಣದ ತುಂಡುಗಳಂತಹ ತರಗತಿಯ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ. ಎರಡು ಗುಂಪುಗಳನ್ನು ಸೇರಿಸಿ ಒಟ್ಟು ಎಷ್ಟು ಎಂದು ಮಕ್ಕಳನ್ನು ಕೇಳಿ."
        }
    },

    "Subtraction": {
        number: "03",
        title: {
            en: "Subtraction",
            kn: "ವ್ಯವಕಲನ"
        },
        introduction: {
            en: "Subtraction means taking away one quantity from another to find what remains.",
            kn: "ಒಂದು ಪ್ರಮಾಣದಿಂದ ಮತ್ತೊಂದು ಪ್ರಮಾಣವನ್ನು ತೆಗೆದಾಗ ಉಳಿಯುವ ಸಂಖ್ಯೆಯನ್ನು ಕಂಡುಹಿಡಿಯುವುದೇ ವ್ಯವಕಲನ."
        },
        objective: {
            en: "Understand taking away and calculate how many objects remain.",
            kn: "ವಸ್ತುಗಳನ್ನು ತೆಗೆದ ನಂತರ ಎಷ್ಟು ಉಳಿಯುತ್ತವೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಲೆಕ್ಕ ಹಾಕುವುದು."
        },
        concept: {
            en: "When we subtract, we take away objects from a group. The minus (−) sign tells us to subtract. If you have 5 balloons and 2 fly away, 3 balloons remain.",
            kn: "ನಾವು ವ್ಯವಕಲನ ಮಾಡುವಾಗ ಒಂದು ಗುಂಪಿನಿಂದ ಕೆಲವು ವಸ್ತುಗಳನ್ನು ತೆಗೆದುಹಾಕುತ್ತೇವೆ. ಕಳೆಯುವ (−) ಚಿಹ್ನೆಯು ವ್ಯವಕಲನವನ್ನು ಸೂಚಿಸುತ್ತದೆ. ನಿಮ್ಮ ಬಳಿ 5 ಬಲೂನುಗಳಿದ್ದು 2 ಹಾರಿಹೋದರೆ, 3 ಬಲೂನುಗಳು ಉಳಿಯುತ್ತವೆ."
        },
        visualHeading: {
            en: "Let's Remove Balloons",
            kn: "ಬಲೂನುಗಳನ್ನು ತೆಗೆದುಹಾಕೋಣ"
        },
        visual: `
            <div class="visual-group">
                <span class="visual-object">🎈 🎈 🎈 🎈 🎈</span>
                <span class="visual-symbol">−</span>
                <span class="visual-object">🎈 🎈</span>
                <span class="visual-symbol">=</span>
                <span class="visual-object">🎈 🎈 🎈</span>
            </div>
            <div class="visual-caption">5 − 2 = 3</div>
        `,
        visualExplanation: {
            en: "We started with 5 balloons and removed 2. So, 3 balloons remain.",
            kn: "ನಮ್ಮ ಬಳಿ 5 ಬಲೂನುಗಳಿದ್ದವು. ಅವುಗಳಲ್ಲಿ 2 ಅನ್ನು ತೆಗೆದಾಗ 3 ಬಲೂನುಗಳು ಉಳಿಯುತ್ತವೆ."
        },
        question: {
            en: "There are 8 birds on a tree. 3 birds fly away. How many birds are left?",
            kn: "ಒಂದು ಮರದ ಮೇಲೆ 8 ಹಕ್ಕಿಗಳಿವೆ. ಅವುಗಳಲ್ಲಿ 3 ಹಾರಿಹೋದವು. ಈಗ ಎಷ್ಟು ಹಕ್ಕಿಗಳು ಉಳಿದಿವೆ?"
        },
        answer: {
            en: "Answer: 8 − 3 = 5 birds.",
            kn: "ಉತ್ತರ: 8 − 3 = 5 ಹಕ್ಕಿಗಳು."
        },
        teacherTip: {
            en: "Place 8 objects in front of the class. Remove 3 objects and ask children how many are left.",
            kn: "ತರಗತಿಯ ಮುಂದೆ 8 ವಸ್ತುಗಳನ್ನು ಇಡಿ. ಅವುಗಳಲ್ಲಿ 3 ವಸ್ತುಗಳನ್ನು ತೆಗೆದು ಎಷ್ಟು ಉಳಿದಿವೆ ಎಂದು ಮಕ್ಕಳನ್ನು ಕೇಳಿ."
        }
    },

    "Multiplication": {
        number: "04",
        title: {
            en: "Multiplication",
            kn: "ಗುಣಾಕಾರ"
        },
        introduction: {
            en: "Multiplication is a quick way of adding equal groups.",
            kn: "ಸಮಾನ ಗುಂಪುಗಳನ್ನು ವೇಗವಾಗಿ ಸೇರಿಸುವ ವಿಧಾನವೇ ಗುಣಾಕಾರ."
        },
        objective: {
            en: "Understand equal groups and connect repeated addition with multiplication.",
            kn: "ಸಮಾನ ಗುಂಪುಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಪುನರಾವರ್ತಿತ ಸಂಕಲನವನ್ನು ಗುಣಾಕಾರದೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುವುದು."
        },
        concept: {
            en: "Suppose there are 3 baskets, and each basket has 2 oranges. Instead of adding 2 + 2 + 2, we can multiply 3 × 2. The answer is 6 oranges.",
            kn: "3 ಬುಟ್ಟಿಗಳಿದ್ದು ಪ್ರತಿ ಬುಟ್ಟಿಯಲ್ಲಿ 2 ಕಿತ್ತಳೆಗಳಿವೆ ಎಂದು ಊಹಿಸಿ. 2 + 2 + 2 ಎಂದು ಸೇರಿಸುವ ಬದಲು 3 × 2 ಎಂದು ಗುಣಿಸಬಹುದು. ಉತ್ತರ 6 ಕಿತ್ತಳೆಗಳು."
        },
        visualHeading: {
            en: "Three Groups of Two",
            kn: "ಎರಡರಂತೆ ಮೂರು ಗುಂಪುಗಳು"
        },
        visual: `
            <div class="visual-group">
                <span class="visual-object">🍊 🍊</span>
                <span class="visual-object">🍊 🍊</span>
                <span class="visual-object">🍊 🍊</span>
            </div>
            <div class="visual-caption">2 + 2 + 2 = 3 × 2 = 6</div>
        `,
        visualExplanation: {
            en: "There are 3 equal groups with 2 oranges in each group. That makes 6 oranges.",
            kn: "ಇಲ್ಲಿ 3 ಸಮಾನ ಗುಂಪುಗಳಿವೆ. ಪ್ರತಿ ಗುಂಪಿನಲ್ಲಿ 2 ಕಿತ್ತಳೆಗಳಿವೆ. ಒಟ್ಟು 6 ಕಿತ್ತಳೆಗಳಾಗುತ್ತವೆ."
        },
        question: {
            en: "There are 4 plates. Each plate has 3 idlis. How many idlis are there altogether?",
            kn: "4 ತಟ್ಟೆಗಳಿವೆ. ಪ್ರತಿ ತಟ್ಟೆಯಲ್ಲಿ 3 ಇಡ್ಲಿಗಳಿವೆ. ಒಟ್ಟು ಎಷ್ಟು ಇಡ್ಲಿಗಳಿವೆ?"
        },
        answer: {
            en: "Answer: 4 × 3 = 12 idlis.",
            kn: "ಉತ್ತರ: 4 × 3 = 12 ಇಡ್ಲಿಗಳು."
        },
        teacherTip: {
            en: "Draw equal groups of circles on the board. Ask children to count each group and then find the total.",
            kn: "ಫಲಕದ ಮೇಲೆ ಸಮಾನ ಸಂಖ್ಯೆಯ ವೃತ್ತಗಳಿರುವ ಗುಂಪುಗಳನ್ನು ಬಿಡಿಸಿ. ಪ್ರತಿ ಗುಂಪನ್ನು ಎಣಿಸಿ ಒಟ್ಟು ಸಂಖ್ಯೆಯನ್ನು ಕಂಡುಹಿಡಿಯಲು ಮಕ್ಕಳನ್ನು ಕೇಳಿ."
        }
    },

    "Division": {
        number: "05",
        title: {
            en: "Division",
            kn: "ಭಾಗಾಕಾರ"
        },
        introduction: {
            en: "Division means sharing a quantity equally among groups or people.",
            kn: "ಒಂದು ಪ್ರಮಾಣವನ್ನು ಗುಂಪುಗಳಿಗೆ ಅಥವಾ ಜನರಿಗೆ ಸಮಾನವಾಗಿ ಹಂಚುವುದೇ ಭಾಗಾಕಾರ."
        },
        objective: {
            en: "Understand equal sharing and find how many objects each group receives.",
            kn: "ಸಮಾನವಾಗಿ ಹಂಚುವುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಪ್ರತಿ ಗುಂಪಿಗೆ ಎಷ್ಟು ವಸ್ತುಗಳು ಸಿಗುತ್ತವೆ ಎಂದು ಕಂಡುಹಿಡಿಯುವುದು."
        },
        concept: {
            en: "Imagine you have 6 chocolates and want to share them equally between 3 children. Each child gets 2 chocolates. This is division.",
            kn: "ನಿಮ್ಮ ಬಳಿ 6 ಚಾಕೊಲೇಟ್‌ಗಳಿದ್ದು ಅವುಗಳನ್ನು 3 ಮಕ್ಕಳಿಗೆ ಸಮಾನವಾಗಿ ಹಂಚಬೇಕು ಎಂದು ಊಹಿಸಿ. ಪ್ರತಿ ಮಗುವಿಗೆ 2 ಚಾಕೊಲೇಟ್‌ಗಳು ಸಿಗುತ್ತವೆ. ಇದುವೇ ಭಾಗಾಕಾರ."
        },
        visualHeading: {
            en: "Share the Chocolates",
            kn: "ಚಾಕೊಲೇಟ್‌ಗಳನ್ನು ಹಂಚೋಣ"
        },
        visual: `
            <div class="visual-group">
                <span class="visual-object">🍫 🍫</span>
                <span class="visual-object">🍫 🍫</span>
                <span class="visual-object">🍫 🍫</span>
            </div>
            <div class="visual-caption">6 ÷ 3 = 2</div>
        `,
        visualExplanation: {
            en: "6 chocolates are shared equally among 3 children. Each child gets 2 chocolates.",
            kn: "6 ಚಾಕೊಲೇಟ್‌ಗಳನ್ನು 3 ಮಕ್ಕಳಿಗೆ ಸಮಾನವಾಗಿ ಹಂಚಿದಾಗ ಪ್ರತಿ ಮಗುವಿಗೆ 2 ಚಾಕೊಲೇಟ್‌ಗಳು ಸಿಗುತ್ತವೆ."
        },
        question: {
            en: "12 bananas are shared equally among 4 children. How many bananas does each child get?",
            kn: "12 ಬಾಳೆಹಣ್ಣುಗಳನ್ನು 4 ಮಕ್ಕಳಿಗೆ ಸಮಾನವಾಗಿ ಹಂಚಲಾಗಿದೆ. ಪ್ರತಿ ಮಗುವಿಗೆ ಎಷ್ಟು ಬಾಳೆಹಣ್ಣುಗಳು ಸಿಗುತ್ತವೆ?"
        },
        answer: {
            en: "Answer: 12 ÷ 4 = 3 bananas for each child.",
            kn: "ಉತ್ತರ: 12 ÷ 4 = 3 ಬಾಳೆಹಣ್ಣುಗಳು ಪ್ರತಿ ಮಗುವಿಗೆ ಸಿಗುತ್ತವೆ."
        },
        teacherTip: {
            en: "Use small objects such as seeds, stones or paper pieces. Ask children to distribute them equally among a few groups.",
            kn: "ಬೀಜಗಳು, ಕಲ್ಲುಗಳು ಅಥವಾ ಕಾಗದದ ತುಂಡುಗಳಂತಹ ಸಣ್ಣ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ. ಅವುಗಳನ್ನು ಕೆಲವು ಗುಂಪುಗಳಿಗೆ ಸಮಾನವಾಗಿ ಹಂಚಲು ಮಕ್ಕಳನ್ನು ಕೇಳಿ."
        }
    }

};


// =====================================
// DISPLAY THE SELECTED LESSON
// =====================================

const lessonTitle = document.getElementById("lessonTitle");

if (lessonTitle) {

    const selectedClass = sessionStorage.getItem("vidyasetuSelectedClass");
    const selectedSubject = sessionStorage.getItem("vidyasetuSelectedSubject");
    let selectedTopic = sessionStorage.getItem("vidyasetuSelectedTopic");

    const topicNames = Object.keys(lessonData);

    // Find the selected topic

    let currentTopicIndex = topicNames.indexOf(selectedTopic);

    if (
        selectedClass !== "3" ||
        selectedSubject !== "Mathematics" ||
        currentTopicIndex === -1
    ) {

        window.location.href = "topics.html";

    } else {

        let currentLanguage = "en";

        // Page elements

        const lessonBreadcrumbTopic = document.getElementById("lessonBreadcrumbTopic");
        const lessonTopicNumber = document.getElementById("lessonTopicNumber");
        const lessonIntroduction = document.getElementById("lessonIntroduction");
        const lessonObjective = document.getElementById("lessonObjective");
        const conceptHeading = document.getElementById("conceptHeading");
        const conceptDescription = document.getElementById("conceptDescription");
        const visualHeading = document.getElementById("visualHeading");
        const visualDisplay = document.getElementById("visualDisplay");
        const visualExplanation = document.getElementById("visualExplanation");
        const exampleHeading = document.getElementById("exampleHeading");
        const exampleQuestion = document.getElementById("exampleQuestion");
        const exampleAnswer = document.getElementById("exampleAnswer");
        const teacherTipText = document.getElementById("teacherTipText");

        const languageButtons = document.querySelectorAll(".language-button");
        const previousTopicButton = document.getElementById("previousTopic");
        const nextTopicButton = document.getElementById("nextTopic");


        // Render lesson content in the selected language

        function displayLesson() {

            const topicName = topicNames[currentTopicIndex];
            const lesson = lessonData[topicName];
            const language = currentLanguage;

            lessonBreadcrumbTopic.textContent = lesson.title[language];

            lessonTopicNumber.textContent =
                `CLASS 3 · MATHEMATICS · TOPIC ${lesson.number}`;

            lessonTitle.textContent = lesson.title[language];
            lessonIntroduction.textContent = lesson.introduction[language];

            document.getElementById("objectiveHeading").textContent =
                language === "en" ? "What will we learn?" : "ನಾವು ಏನು ಕಲಿಯುವೆವು?";

            lessonObjective.textContent = lesson.objective[language];

            document.getElementById("conceptKicker").textContent =
                language === "en" ? "LEARN THE CONCEPT" : "ಪರಿಕಲ್ಪನೆಯನ್ನು ತಿಳಿಯೋಣ";

            conceptHeading.textContent =
                language === "en" ? "Understanding the Concept" : "ಪರಿಕಲ್ಪನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ";

            conceptDescription.textContent = lesson.concept[language];

            visualHeading.textContent = lesson.visualHeading[language];
            visualDisplay.innerHTML = lesson.visual;
            visualExplanation.textContent = lesson.visualExplanation[language];

            exampleHeading.textContent =
                language === "en" ? "Try This Example" : "ಈ ಉದಾಹರಣೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ";

            exampleQuestion.textContent = lesson.question[language];
            exampleAnswer.textContent = lesson.answer[language];

            document.getElementById("teacherTipLabel").textContent =
                language === "en" ? "TEACHER'S TIP" : "ಶಿಕ್ಷಕರಿಗೆ ಸಲಹೆ";

            teacherTipText.textContent = lesson.teacherTip[language];

            previousTopicButton.textContent =
                language === "en" ? "← Previous Topic" : "← ಹಿಂದಿನ ವಿಷಯ";

            nextTopicButton.textContent =
                language === "en" ? "Next Topic →" : "ಮುಂದಿನ ವಿಷಯ →";

            previousTopicButton.disabled = currentTopicIndex === 0;
            nextTopicButton.disabled = currentTopicIndex === topicNames.length - 1;

            languageButtons.forEach(function (button) {
                button.classList.toggle(
                    "active",
                    button.dataset.language === language
                );
            });

        }


        // Language switching

        languageButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                currentLanguage = button.dataset.language;

                displayLesson();

            });

        });


        // Previous topic

        previousTopicButton.addEventListener("click", function () {

            if (currentTopicIndex > 0) {

                currentTopicIndex--;

                sessionStorage.setItem(
                    "vidyasetuSelectedTopic",
                    topicNames[currentTopicIndex]
                );

                displayLesson();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });


        // Next topic

        nextTopicButton.addEventListener("click", function () {

            if (currentTopicIndex < topicNames.length - 1) {

                currentTopicIndex++;

                sessionStorage.setItem(
                    "vidyasetuSelectedTopic",
                    topicNames[currentTopicIndex]
                );

                displayLesson();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }

        });


        // Display the first selected lesson

        displayLesson();

    }

}

// =====================================
// VIDYASETU - INTERACTIVE ACTIVITIES
// =====================================

const activityWorkspace = document.getElementById("activityWorkspace");

if (activityWorkspace) {

    const activityTitle = document.getElementById("activityTitle");
    const activityInstructions = document.getElementById("activityInstructions");
    const activityGameArea = document.getElementById("activityGameArea");
    const activityFeedback = document.getElementById("activityFeedback");
    const activityProgressText = document.getElementById("activityProgressText");
    const activityProgressFill = document.getElementById("activityProgressFill");
    const activityChoices = document.querySelectorAll(".activity-choice");
    const resetActivityButton = document.getElementById("resetActivity");

    const activityContext = document.getElementById("activityContext");

    const savedClass = sessionStorage.getItem("vidyasetuSelectedClass") || "3";
    const savedSubject = sessionStorage.getItem("vidyasetuSelectedSubject") || "Mathematics";
    const savedTopic = sessionStorage.getItem("vidyasetuSelectedTopic") || "Numbers Around Us";

    activityContext.textContent =
        `Class ${savedClass} · ${savedSubject} · ${savedTopic}`;


    let currentActivity = "matching";
    let matchingSelection = null;
    let matchedPairs = 0;
    let pictureQuestionIndex = 0;
    let quizQuestionIndex = 0;
    let sortingCorrect = 0;


    // ---------------------------------
    // ACTIVITY DATA
    // ---------------------------------

    const matchingPairs = [
        { number: "2", quantity: "🍎 🍎" },
        { number: "3", quantity: "⭐ ⭐ ⭐" },
        { number: "4", quantity: "⚽ ⚽ ⚽ ⚽" },
        { number: "5", quantity: "🌸 🌸 🌸 🌸 🌸" }
    ];

    const pictureQuestions = [
        {
            question: "Which picture shows 4 apples?",
            picture: "🍎 🍎 🍎 🍎",
            options: ["3 apples", "4 apples", "5 apples", "6 apples"],
            answer: "4 apples"
        },
        {
            question: "Which picture shows 3 stars?",
            picture: "⭐ ⭐ ⭐",
            options: ["2 stars", "3 stars", "4 stars", "5 stars"],
            answer: "3 stars"
        },
        {
            question: "Which picture shows 5 balls?",
            picture: "⚽ ⚽ ⚽ ⚽ ⚽",
            options: ["3 balls", "4 balls", "5 balls", "6 balls"],
            answer: "5 balls"
        }
    ];

    const quizQuestions = [
        {
            question: "What is 5 + 3?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        {
            question: "What is 9 − 4?",
            options: ["3", "4", "5", "6"],
            answer: "5"
        },
        {
            question: "What is 3 × 2?",
            options: ["5", "6", "7", "8"],
            answer: "6"
        },
        {
            question: "What is 12 ÷ 3?",
            options: ["2", "3", "4", "6"],
            answer: "4"
        }
    ];

    const sortingNumbers = [3, 8, 5, 2, 7, 10, 1, 6, 4, 9];


    // ---------------------------------
    // COMMON FUNCTIONS
    // ---------------------------------

    function updateProgress(completed, total) {

        activityProgressText.textContent =
            `${completed} of ${total} completed`;

        const percentage = total === 0
            ? 0
            : (completed / total) * 100;

        activityProgressFill.style.width = `${percentage}%`;

    }


    function showFeedback(message, type) {

        activityFeedback.textContent = message;

        activityFeedback.className = "activity-feedback";

        if (type) {
            activityFeedback.classList.add(type);
        }

    }


    function showCompletion(message) {

        activityGameArea.innerHTML = `
            <div class="activity-complete">
                <span>🏆</span>
                <h3>Excellent Work!</h3>
                <p>${message}</p>
                <button class="activity-play-again" id="playAgainButton">
                    Play Again ↻
                </button>
            </div>
        `;

        document.getElementById("playAgainButton")
            .addEventListener("click", function () {
                startActivity(currentActivity);
            });

    }


    function shuffleArray(array) {

        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

        }

        return shuffled;

    }


    // ---------------------------------
    // ACTIVITY 1: MATCH THE PAIRS
    // ---------------------------------

    function renderMatchingActivity() {

        matchingSelection = null;
        matchedPairs = 0;

        const shuffledNumbers = shuffleArray(matchingPairs);
        const shuffledQuantities = shuffleArray(matchingPairs);

        activityGameArea.innerHTML = `
            <div class="matching-layout">

                <div class="matching-column">
                    <h3>Numbers</h3>
                    <div class="matching-options" id="numberOptions">
                        ${shuffledNumbers.map(function (pair) {
                            return `
                                <button class="match-option"
                                    data-number="${pair.number}">
                                    ${pair.number}
                                </button>
                            `;
                        }).join("")}
                    </div>
                </div>

                <div class="matching-column">
                    <h3>Match the Quantity</h3>
                    <div class="matching-options" id="quantityOptions">
                        ${shuffledQuantities.map(function (pair) {
                            return `
                                <button class="match-option"
                                    data-quantity="${pair.number}">
                                    ${pair.quantity}
                                </button>
                            `;
                        }).join("")}
                    </div>
                </div>

            </div>
        `;

        updateProgress(0, matchingPairs.length);

        const numberButtons = document.querySelectorAll("[data-number]");
        const quantityButtons = document.querySelectorAll("[data-quantity]");

        numberButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                if (button.disabled) return;

                numberButtons.forEach(function (item) {
                    item.classList.remove("selected");
                });

                button.classList.add("selected");

                matchingSelection = button.dataset.number;

                showFeedback("Now select the matching quantity.", "");

            });

        });


        quantityButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                if (button.disabled) return;

                if (matchingSelection === null) {

                    showFeedback("First select a number.", "incorrect");
                    return;

                }

                if (matchingSelection === button.dataset.quantity) {

                    const selectedNumber = matchingSelection;

                    const matchingNumberButton =
                        document.querySelector(`[data-number="${selectedNumber}"]`);

                    matchingNumberButton.classList.remove("selected");
                    matchingNumberButton.classList.add("matched");
                    matchingNumberButton.disabled = true;

                    button.classList.add("matched");
                    button.disabled = true;

                    matchedPairs++;

                    matchingSelection = null;

                    updateProgress(matchedPairs, matchingPairs.length);

                    showFeedback("Correct match! Well done! 🎉", "correct");

                    if (matchedPairs === matchingPairs.length) {

                        showCompletion("You matched all four number pairs correctly!");

                    }

                } else {

                    showFeedback("Not quite! Try matching the correct number and quantity.", "incorrect");

                    matchingSelection = null;

                    numberButtons.forEach(function (item) {
                        item.classList.remove("selected");
                    });

                }

            });

        });

        showFeedback("Select a number and then select its matching quantity.", "");

    }


    // ---------------------------------
    // ACTIVITY 2: IDENTIFY THE PICTURE
    // ---------------------------------

    function renderPictureActivity() {

        pictureQuestionIndex = 0;

        showPictureQuestion();

    }


    function showPictureQuestion() {

        const question = pictureQuestions[pictureQuestionIndex];

        activityGameArea.innerHTML = `
            <div class="picture-question">

                <div class="quiz-question-number">
                    QUESTION ${pictureQuestionIndex + 1} OF ${pictureQuestions.length}
                </div>

                <h3>${question.question}</h3>

                <div class="picture-question-visual">
                    ${question.picture}
                </div>

                <div class="picture-options">
                    ${question.options.map(function (option) {
                        return `
                            <button class="picture-option"
                                data-picture-answer="${option}">
                                ${option}
                            </button>
                        `;
                    }).join("")}
                </div>

            </div>
        `;

        updateProgress(pictureQuestionIndex, pictureQuestions.length);

        const optionButtons = document.querySelectorAll("[data-picture-answer]");

        optionButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                optionButtons.forEach(function (item) {
                    item.disabled = true;
                });

                if (button.dataset.pictureAnswer === question.answer) {

                    button.classList.add("correct-option");

                    showFeedback("Correct! You identified the picture! 🎉", "correct");

                } else {

                    button.classList.add("wrong-option");

                    const correctButton = document.querySelector(
                        `[data-picture-answer="${question.answer}"]`
                    );

                    correctButton.classList.add("correct-option");

                    showFeedback(`The correct answer is ${question.answer}.`, "incorrect");

                }

                pictureQuestionIndex++;

                updateProgress(pictureQuestionIndex, pictureQuestions.length);

                if (pictureQuestionIndex < pictureQuestions.length) {

                    const nextButton = document.createElement("button");

                    nextButton.className = "activity-play-again";
                    nextButton.style.marginTop = "18px";
                    nextButton.textContent = "Next Question →";

                    activityGameArea.querySelector(".picture-question")
                        .appendChild(nextButton);

                    nextButton.addEventListener("click", showPictureQuestion);

                } else {

                    showCompletion("You completed all the picture identification questions!");

                }

            });

        });

    }


    // ---------------------------------
    // ACTIVITY 3: CHOOSE THE ANSWER
    // ---------------------------------

    function renderQuizActivity() {

        quizQuestionIndex = 0;

        showQuizQuestion();

    }


    function showQuizQuestion() {

        const question = quizQuestions[quizQuestionIndex];

        activityGameArea.innerHTML = `
            <div class="quiz-question">

                <div class="quiz-question-number">
                    QUESTION ${quizQuestionIndex + 1} OF ${quizQuestions.length}
                </div>

                <h3>${question.question}</h3>

                <div class="quiz-options">
                    ${question.options.map(function (option) {
                        return `
                            <button class="quiz-option"
                                data-quiz-answer="${option}">
                                ${option}
                            </button>
                        `;
                    }).join("")}
                </div>

            </div>
        `;

        updateProgress(quizQuestionIndex, quizQuestions.length);

        const optionButtons = document.querySelectorAll("[data-quiz-answer]");

        optionButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                optionButtons.forEach(function (item) {
                    item.disabled = true;
                });

                if (button.dataset.quizAnswer === question.answer) {

                    button.classList.add("correct-option");

                    showFeedback("Correct answer! Excellent work! 🎉", "correct");

                } else {

                    button.classList.add("wrong-option");

                    const correctButton = document.querySelector(
                        `[data-quiz-answer="${question.answer}"]`
                    );

                    correctButton.classList.add("correct-option");

                    showFeedback(`The correct answer is ${question.answer}.`, "incorrect");

                }

                quizQuestionIndex++;

                updateProgress(quizQuestionIndex, quizQuestions.length);

                if (quizQuestionIndex < quizQuestions.length) {

                    const nextButton = document.createElement("button");

                    nextButton.className = "activity-play-again";
                    nextButton.style.marginTop = "18px";
                    nextButton.textContent = "Next Question →";

                    activityGameArea.querySelector(".quiz-question")
                        .appendChild(nextButton);

                    nextButton.addEventListener("click", showQuizQuestion);

                } else {

                    showCompletion("You completed all four Mathematics questions!");

                }

            });

        });

    }


    // ---------------------------------
    // ACTIVITY 4: SORT THE NUMBERS
    // ---------------------------------

    
function renderSortingActivity() {

    sortingCorrect = 0;

    let selectedNumberButton = null;

    const shuffled = shuffleArray(sortingNumbers);

    activityGameArea.innerHTML = `
        <div class="sorting-game">

            <p class="sorting-instructions">
                Drag each number into the correct group.
                You can also tap a number and then tap its box.
            </p>

            <div class="sorting-number-pool" id="sortingNumberPool">

                ${shuffled.map(function (number) {
                    return `
                        <button class="sort-number"
                            type="button"
                            data-sort-number="${number}">
                            ${number}
                        </button>
                    `;
                }).join("")}

            </div>

            <div class="sorting-buckets">

                <div class="sorting-bucket"
                    data-sort-group="odd">

                    <h3>🟢 Odd Numbers</h3>
                    <div class="sorted-numbers" id="oddNumbers"></div>

                </div>

                <div class="sorting-bucket even-bucket"
                    data-sort-group="even">

                    <h3>🔵 Even Numbers</h3>
                    <div class="sorted-numbers" id="evenNumbers"></div>

                </div>

            </div>

        </div>
    `;

    updateProgress(0, sortingNumbers.length);

    const numberButtons = document.querySelectorAll("[data-sort-number]");
    const sortingBuckets = document.querySelectorAll("[data-sort-group]");


    // Check whether the number belongs in the selected group

    function placeNumber(button, group) {

        if (!button || button.disabled) return;

        const number = Number(button.dataset.sortNumber);

        const correctGroup = number % 2 === 0 ? "even" : "odd";

        if (group === correctGroup) {

            const destination = document.getElementById(
                correctGroup === "odd" ? "oddNumbers" : "evenNumbers"
            );

            const numberLabel = document.createElement("span");

            numberLabel.className = "sorted-number";
            numberLabel.textContent = number;

            destination.appendChild(numberLabel);

            button.disabled = true;
            button.classList.remove("number-selected");

            selectedNumberButton = null;

            sortingCorrect++;

            updateProgress(sortingCorrect, sortingNumbers.length);

            showFeedback(
                `Correct! ${number} is an ${correctGroup} number. 🎉`,
                "correct"
            );

            if (sortingCorrect === sortingNumbers.length) {

                showCompletion("You sorted all ten numbers correctly!");

            }

        } else {

            showFeedback(
                `Not quite! ${number} is an ${correctGroup} number. Try again!`,
                "incorrect"
            );

        }

    }


    // Tap a number to select it

    numberButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (button.disabled) return;

            if (selectedNumberButton) {
                selectedNumberButton.classList.remove("number-selected");
            }

            if (selectedNumberButton === button) {

                selectedNumberButton = null;

                showFeedback("Number selection cancelled.", "");

            } else {

                selectedNumberButton = button;

                button.classList.add("number-selected");

                showFeedback(
                    `Number ${button.dataset.sortNumber} selected. Now choose Odd or Even.`,
                    ""
                );

            }

        });


        // Pointer-based dragging for mouse and touchscreen

        button.addEventListener("pointerdown", function (event) {

            if (button.disabled || !event.isPrimary) return;

            event.preventDefault();

            const rect = button.getBoundingClientRect();

            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;

            let moved = false;

            const originalWidth = rect.width;

            button.classList.add("number-dragging");

            button.style.position = "fixed";
            button.style.left = rect.left + "px";
            button.style.top = rect.top + "px";
            button.style.width = originalWidth + "px";
            button.style.zIndex = "1000";
            button.style.pointerEvents = "none";

            function moveNumber(moveEvent) {

                if (
                    Math.abs(moveEvent.clientX - rect.left - offsetX) > 7 ||
                    Math.abs(moveEvent.clientY - rect.top - offsetY) > 7
                ) {
                    moved = true;
                }

                button.style.left =
                    (moveEvent.clientX - offsetX) + "px";

                button.style.top =
                    (moveEvent.clientY - offsetY) + "px";

                const target = document.elementFromPoint(
                    moveEvent.clientX,
                    moveEvent.clientY
                );

                const bucket = target
                    ? target.closest("[data-sort-group]")
                    : null;

                sortingBuckets.forEach(function (item) {
                    item.classList.remove("bucket-highlight");
                });

                if (bucket) {
                    bucket.classList.add("bucket-highlight");
                }

            }


            function finishDrag(endEvent) {

                document.removeEventListener("pointermove", moveNumber);
                document.removeEventListener("pointerup", finishDrag);
                document.removeEventListener("pointercancel", cancelDrag);

                const target = document.elementFromPoint(
                    endEvent.clientX,
                    endEvent.clientY
                );

                const bucket = target
                    ? target.closest("[data-sort-group]")
                    : null;

                sortingBuckets.forEach(function (item) {
                    item.classList.remove("bucket-highlight");
                });

                button.classList.remove("number-dragging");

                button.style.position = "";
                button.style.left = "";
                button.style.top = "";
                button.style.width = "";
                button.style.zIndex = "";
                button.style.pointerEvents = "";

                if (moved) {

                    if (bucket) {
                        placeNumber(button, bucket.dataset.sortGroup);
                    } else {
                        showFeedback("Drop the number inside an Odd or Even box.", "");
                    }

                }

            }


            function cancelDrag() {

                document.removeEventListener("pointermove", moveNumber);
                document.removeEventListener("pointerup", finishDrag);
                document.removeEventListener("pointercancel", cancelDrag);

                sortingBuckets.forEach(function (item) {
                    item.classList.remove("bucket-highlight");
                });

                button.classList.remove("number-dragging");

                button.style.position = "";
                button.style.left = "";
                button.style.top = "";
                button.style.width = "";
                button.style.zIndex = "";
                button.style.pointerEvents = "";

            }


            document.addEventListener("pointermove", moveNumber);
            document.addEventListener("pointerup", finishDrag);
            document.addEventListener("pointercancel", cancelDrag);

        });

    });


    // Tap a box after selecting a number

    sortingBuckets.forEach(function (bucket) {

        bucket.addEventListener("click", function () {

            if (!selectedNumberButton) {

                showFeedback("First select a number to place in this box.", "");

                return;

            }

            placeNumber(selectedNumberButton, bucket.dataset.sortGroup);

        });

    });


    showFeedback("Drag a number into the correct box to get started!", "");

}



    // ---------------------------------
    // START SELECTED ACTIVITY
    // ---------------------------------

    function startActivity(activityName) {

        currentActivity = activityName;

        activityChoices.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.activity === activityName
            );

        });

        if (activityName === "matching") {

            activityTitle.textContent = "Match the Pairs";

            activityInstructions.textContent =
                "Select a number and then select the matching quantity.";

            renderMatchingActivity();

        }

        else if (activityName === "picture") {

            activityTitle.textContent = "Identify the Picture";

            activityInstructions.textContent =
                "Look at the picture and choose the correct answer.";

            renderPictureActivity();

        }

        else if (activityName === "quiz") {

            activityTitle.textContent = "Choose the Answer";

            activityInstructions.textContent =
                "Read each question and select the correct answer.";

            renderQuizActivity();

        }

        else if (activityName === "sorting") {

            activityTitle.textContent = "Sort the Numbers";

            activityInstructions.textContent =
                "Place each number in the correct odd or even group.";

            renderSortingActivity();

        }

    }


    // ---------------------------------
    // ACTIVITY SELECTION
    // ---------------------------------

    activityChoices.forEach(function (button) {

        button.addEventListener("click", function () {

            startActivity(button.dataset.activity);

        });

    });


    // ---------------------------------
    // RESTART CURRENT ACTIVITY
    // ---------------------------------

    resetActivityButton.addEventListener("click", function () {

        startActivity(currentActivity);

    });


    // Load the first activity

    startActivity("matching");

}

// =====================================
// VIDYASETU - CLASSROOM RESOURCES
// =====================================

const printWorksheetButton = document.getElementById("printWorksheet");

if (printWorksheetButton) {

    // Display the selected class and subject

    const resourceContext = document.getElementById("resourceContext");

    const selectedClass = sessionStorage.getItem("vidyasetuSelectedClass") || "3";
    const selectedSubject = sessionStorage.getItem("vidyasetuSelectedSubject") || "Mathematics";

    if (resourceContext) {
        resourceContext.textContent =
            `Class ${selectedClass} • ${selectedSubject}`;
    }


    // Print the worksheet

    printWorksheetButton.addEventListener("click", function () {

        window.print();

    });

}

// =====================================
// VIDYASETU - QUIZ AND ASSESSMENT
// =====================================

const quizCard = document.getElementById("quizCard");

if (quizCard) {

    const quizQuestionBank = [

        {
            topic: "Numbers Around Us",
            topicKn: "ನಮ್ಮ ಸುತ್ತಲಿನ ಸಂಖ್ಯೆಗಳು",
            question: "Which number comes after 49?",
            questionKn: "49 ರ ನಂತರ ಬರುವ ಸಂಖ್ಯೆ ಯಾವುದು?",
            options: ["48", "50", "51", "40"],
            optionsKn: ["48", "50", "51", "40"],
            answer: 1
        },

        {
            topic: "Numbers Around Us",
            topicKn: "ನಮ್ಮ ಸುತ್ತಲಿನ ಸಂಖ್ಯೆಗಳು",
            question: "How many tens are there in 70?",
            questionKn: "70 ರಲ್ಲಿ ಎಷ್ಟು ಹತ್ತುಗಳಿವೆ?",
            options: ["5", "6", "7", "8"],
            optionsKn: ["5", "6", "7", "8"],
            answer: 2
        },

        {
            topic: "Addition",
            topicKn: "ಸಂಕಲನ",
            question: "What is 25 + 14?",
            questionKn: "25 + 14 ಎಷ್ಟು?",
            options: ["39", "38", "40", "41"],
            optionsKn: ["39", "38", "40", "41"],
            answer: 0
        },

        {
            topic: "Addition",
            topicKn: "ಸಂಕಲನ",
            question: "A child has 12 pencils and gets 8 more. How many pencils are there now?",
            questionKn: "ಒಬ್ಬ ಮಗುವಿನ ಬಳಿ 12 ಪೆನ್ಸಿಲ್‌ಗಳಿವೆ. ಇನ್ನೂ 8 ಸಿಕ್ಕರೆ ಒಟ್ಟು ಎಷ್ಟು ಪೆನ್ಸಿಲ್‌ಗಳಾಗುತ್ತವೆ?",
            options: ["18", "19", "20", "21"],
            optionsKn: ["18", "19", "20", "21"],
            answer: 2
        },

        {
            topic: "Subtraction",
            topicKn: "ವ್ಯವಕಲನ",
            question: "What is 45 - 20?",
            questionKn: "45 - 20 ಎಷ್ಟು?",
            options: ["20", "25", "30", "35"],
            optionsKn: ["20", "25", "30", "35"],
            answer: 1
        },

        {
            topic: "Subtraction",
            topicKn: "ವ್ಯವಕಲನ",
            question: "There are 15 balloons. 6 fly away. How many remain?",
            questionKn: "15 ಬಲೂನುಗಳಿವೆ. ಅವುಗಳಲ್ಲಿ 6 ಹಾರಿಹೋದವು. ಎಷ್ಟು ಉಳಿದಿವೆ?",
            options: ["7", "8", "9", "10"],
            optionsKn: ["7", "8", "9", "10"],
            answer: 2
        },

        {
            topic: "Multiplication",
            topicKn: "ಗುಣಾಕಾರ",
            question: "What is 4 × 3?",
            questionKn: "4 × 3 ಎಷ್ಟು?",
            options: ["7", "10", "12", "14"],
            optionsKn: ["7", "10", "12", "14"],
            answer: 2
        },

        {
            topic: "Multiplication",
            topicKn: "ಗುಣಾಕಾರ",
            question: "There are 5 baskets with 2 apples in each. How many apples are there?",
            questionKn: "5 ಬುಟ್ಟಿಗಳಲ್ಲಿ ತಲಾ 2 ಸೇಬುಗಳಿವೆ. ಒಟ್ಟು ಎಷ್ಟು ಸೇಬುಗಳಿವೆ?",
            options: ["7", "10", "12", "15"],
            optionsKn: ["7", "10", "12", "15"],
            answer: 1
        },

        {
            topic: "Division",
            topicKn: "ಭಾಗಾಕಾರ",
            question: "What is 12 ÷ 3?",
            questionKn: "12 ÷ 3 ಎಷ್ಟು?",
            options: ["3", "4", "5", "6"],
            optionsKn: ["3", "4", "5", "6"],
            answer: 1
        },

        {
            topic: "Division",
            topicKn: "ಭಾಗಾಕಾರ",
            question: "Share 10 chocolates equally among 2 children. How many does each child get?",
            questionKn: "10 ಚಾಕೊಲೇಟ್‌ಗಳನ್ನು 2 ಮಕ್ಕಳಿಗೆ ಸಮನಾಗಿ ಹಂಚಿದರೆ, ಪ್ರತಿ ಮಗುವಿಗೆ ಎಷ್ಟು ಸಿಗುತ್ತವೆ?",
            options: ["2", "4", "5", "8"],
            optionsKn: ["2", "4", "5", "8"],
            answer: 2
        }

    ];


    let quizCurrentQuestion = 0;
    let quizScoreValue = 0;
    let quizAnswered = false;
    let quizLanguage = "en";


    const quizQuestionCount = document.getElementById("quizQuestionCount");
    const quizScore = document.getElementById("quizScore");
    const quizProgressBar = document.getElementById("quizProgressBar");
    const quizTopic = document.getElementById("quizTopic");
    const quizQuestion = document.getElementById("quizQuestion");
    const quizOptions = document.getElementById("quizOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const quizNextButton = document.getElementById("quizNextButton");

    const quizResult = document.getElementById("quizResult");
    const quizRestartButton = document.getElementById("quizRestartButton");

    const quizLanguageButtons = document.querySelectorAll(
        ".quiz-language-button"
    );


    // DISPLAY CURRENT QUESTION

    function displayQuizQuestion() {

        const question = quizQuestionBank[quizCurrentQuestion];

        const isKannada = quizLanguage === "kn";

        quizAnswered = false;

        quizQuestionCount.textContent = isKannada
            ? `ಪ್ರಶ್ನೆ ${quizCurrentQuestion + 1} / 10`
            : `Question ${quizCurrentQuestion + 1} of 10`;

        quizScore.textContent = isKannada
            ? `ಅಂಕ: ${quizScoreValue}`
            : `Score: ${quizScoreValue}`;

        quizProgressBar.style.width =
            ((quizCurrentQuestion + 1) / quizQuestionBank.length * 100) + "%";

        quizTopic.textContent = isKannada
            ? question.topicKn
            : question.topic;

        quizQuestion.textContent = isKannada
            ? question.questionKn
            : question.question;

        quizFeedback.textContent = "";
        quizFeedback.className = "quiz-answer-feedback";

        quizNextButton.disabled = true;

        quizNextButton.textContent =
            quizCurrentQuestion === quizQuestionBank.length - 1
                ? (isKannada ? "ಫಲಿತಾಂಶ ನೋಡಿ →" : "View Results →")
                : (isKannada ? "ಮುಂದಿನ ಪ್ರಶ್ನೆ →" : "Next Question →");


        quizOptions.innerHTML = "";

        const options = isKannada
            ? question.optionsKn
            : question.options;

        options.forEach(function (option, index) {

            const button = document.createElement("button");

            button.className = "quiz-option";
            button.type = "button";
            button.textContent = option;

            button.addEventListener("click", function () {

                if (quizAnswered) return;

                quizAnswered = true;

                const correct = index === question.answer;

                if (correct) {

                    quizScoreValue++;

                    quizFeedback.textContent = isKannada
                        ? "ಅದ್ಭುತ! ಸರಿಯಾದ ಉತ್ತರ! 🎉"
                        : "Excellent! That is correct! 🎉";

                    quizFeedback.classList.add("correct-feedback");

                } else {

                    quizFeedback.textContent = isKannada
                        ? `ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ! ಸರಿಯಾದ ಉತ್ತರ: ${options[question.answer]}`
                        : `Good try! The correct answer is: ${options[question.answer]}`;

                    quizFeedback.classList.add("wrong-feedback");

                }

                quizScore.textContent = isKannada
                    ? `ಅಂಕ: ${quizScoreValue}`
                    : `Score: ${quizScoreValue}`;

                // Show which answer was correct

                const allOptions = quizOptions.querySelectorAll("button");

                allOptions.forEach(function (item, itemIndex) {

                    item.disabled = true;

                    if (itemIndex === question.answer) {
                        item.classList.add("correct");
                    }

                    if (itemIndex === index && !correct) {
                        item.classList.add("incorrect");
                    }

                });

                quizNextButton.disabled = false;

            });

            quizOptions.appendChild(button);

        });

    }


    // SHOW FINAL RESULTS

    function showQuizResults() {

        quizCard.hidden = true;
        document.getElementById("quizInstructions").hidden = true;

        quizResult.hidden = false;

        const percentage = quizScoreValue * 10;

        document.getElementById("quizFinalScore").textContent =
            `${quizScoreValue}/10`;

        document.getElementById("quizCorrectCount").textContent =
            quizScoreValue;

        document.getElementById("quizWrongCount").textContent =
            10 - quizScoreValue;

        const resultIcon = document.getElementById("quizResultIcon");
        const resultTitle = document.getElementById("quizResultTitle");
        const resultMessage = document.getElementById("quizResultMessage");

        if (percentage === 100) {

            resultIcon.textContent = "🏆";
            resultTitle.textContent =
                quizLanguage === "kn" ? "ಅತ್ಯುತ್ತಮ!" : "Perfect Score!";

            resultMessage.textContent =
                quizLanguage === "kn"
                    ? "ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳಿಗೆ ಸರಿಯಾಗಿ ಉತ್ತರಿಸಿದ್ದೀರಿ. ಅದ್ಭುತ ಕೆಲಸ!"
                    : "You answered every question correctly. Amazing work!";

        } else if (percentage >= 70) {

            resultIcon.textContent = "🌟";
            resultTitle.textContent =
                quizLanguage === "kn" ? "ಬಹಳ ಚೆನ್ನಾಗಿದೆ!" : "Great Job!";

            resultMessage.textContent =
                quizLanguage === "kn"
                    ? "ನಿಮಗೆ ವಿಷಯ ಚೆನ್ನಾಗಿ ಅರ್ಥವಾಗಿದೆ. ಹೀಗೆ ಮುಂದುವರಿಯಿರಿ!"
                    : "You have understood most of the concepts. Keep it up!";

        } else if (percentage >= 40) {

            resultIcon.textContent = "👏";
            resultTitle.textContent =
                quizLanguage === "kn" ? "ಒಳ್ಳೆಯ ಪ್ರಯತ್ನ!" : "Good Effort!";

            resultMessage.textContent =
                quizLanguage === "kn"
                    ? "ಇನ್ನಷ್ಟು ಅಭ್ಯಾಸ ಮಾಡಿದರೆ ನೀವು ಇನ್ನೂ ಉತ್ತಮವಾಗಿ ಮಾಡಬಹುದು."
                    : "A little more practice will help you improve!";

        } else {

            resultIcon.textContent = "💪";
            resultTitle.textContent =
                quizLanguage === "kn" ? "ಪ್ರಯತ್ನ ಮುಂದುವರಿಸಿ!" : "Keep Practising!";

            resultMessage.textContent =
                quizLanguage === "kn"
                    ? "ಚಿಂತಿಸಬೇಡಿ! ಶಿಕ್ಷಕರೊಂದಿಗೆ ವಿಷಯಗಳನ್ನು ಮತ್ತೊಮ್ಮೆ ಅಭ್ಯಾಸ ಮಾಡಿ."
                    : "Don't worry! Review the topics with your teacher and try again.";

        }

    }


    // NEXT QUESTION

    quizNextButton.addEventListener("click", function () {

        if (!quizAnswered) return;

        quizCurrentQuestion++;

        if (quizCurrentQuestion < quizQuestionBank.length) {

            displayQuizQuestion();

        } else {

            showQuizResults();

        }

    });


    // LANGUAGE SWITCHING

    quizLanguageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            quizLanguage = button.dataset.quizLanguage;

            quizLanguageButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            if (quizResult.hidden) {

                displayQuizQuestion();

            } else {

                showQuizResults();

            }

            const instructionHeading =
                document.querySelector("#quizInstructions h2");

            const instructionText =
                document.querySelector("#quizInstructions p");

            if (instructionHeading && instructionText) {

                instructionHeading.textContent =
                    quizLanguage === "kn" ? "ಆಡುವ ವಿಧಾನ" : "How to Play";

                instructionText.textContent =
                    quizLanguage === "kn"
                        ? "ಪ್ರತಿ ಪ್ರಶ್ನೆಯನ್ನು ಓದಿ, ತರಗತಿಯೊಂದಿಗೆ ಚರ್ಚಿಸಿ, ಸರಿಯಾದ ಉತ್ತರವನ್ನು ಆಯ್ಕೆಮಾಡಿ."
                        : "Read each question aloud, discuss it as a class, and select the correct answer together.";

            }

        });

    });


    // RESTART QUIZ

    quizRestartButton.addEventListener("click", function () {

        quizCurrentQuestion = 0;
        quizScoreValue = 0;
        quizAnswered = false;

        quizResult.hidden = true;
        quizCard.hidden = false;
        document.getElementById("quizInstructions").hidden = false;

        displayQuizQuestion();

    });


    // START QUIZ

    displayQuizQuestion();

}

// =====================================
// VIDYASETU - CLASS 8 SUBJECT SELECTION
// =====================================

const class8MathButton =
    document.getElementById("class8MathButton");

if (class8MathButton) {

    class8MathButton.addEventListener("click", function () {

        sessionStorage.setItem(
            "vidyasetuSelectedClass",
            "8"
        );

        sessionStorage.setItem(
            "vidyasetuSelectedSubject",
            "Mathematics"
        );

        window.location.href = "class8-topics.html";

    });

}

// =====================================
// VIDYASETU - CLASS 8 TOPIC SELECTION
// =====================================

const linearEquationButton =
    document.getElementById("linearEquationButton");

if (linearEquationButton) {

    linearEquationButton.addEventListener("click", function () {

        sessionStorage.setItem(
            "vidyasetuSelectedClass",
            "8"
        );

        sessionStorage.setItem(
            "vidyasetuSelectedSubject",
            "Mathematics"
        );

        sessionStorage.setItem(
            "vidyasetuSelectedTopic",
            "linear-equations"
        );

        window.location.href = "class8-lesson.html";

    });

}

// =====================================
// VIDYASETU - CLASS 8 INTERACTIVE LESSON
// =====================================

(function () {

    const lessonPage =
        document.querySelector(".class8-lesson-page");

    if (!lessonPage) return;


    // LANGUAGE CONTENT

    const lessonLanguages = {

        en: {
            title: "Linear Equations in One Variable",
            subtitle: "Discover unknown values through simple explanations and interactive examples.",

            introHeading: "What is a Linear Equation?",
            introduction: "A linear equation is a mathematical statement that contains an unknown value, usually represented by a letter such as x.",
            definitionTitle: "Example:",
            definitionText: "Here, x is the unknown value. Our goal is to find the value of x that makes the equation true.",

            objectiveHeading: "What Will We Learn?",
            objectives: [
                "Understand variables and unknown values.",
                "Understand the equality sign.",
                "Solve simple linear equations step by step.",
                "Verify the answer by substitution."
            ],

            visualHeading: "An Equation Is Like a Balance",
            visualDescription: "Imagine a weighing balance. Both sides must have equal weight to remain balanced. An equation works in the same way.",
            leftLabel: "LEFT SIDE",
            rightLabel: "RIGHT SIDE",
            balanceNote: "Whatever operation we perform on one side, we must perform on the other side to maintain equality.",

            solutionHeading: "Let's Solve an Equation!",
            solutionDescription: "Find the value of x in the equation below.",

            steps: [
                {
                    title: "Start with the equation",
                    equation: "2x + 3 = 11",
                    explanation: "We need to isolate x by removing the extra number around it."
                },
                {
                    title: "Subtract 3 from both sides",
                    equation: "2x + 3 − 3 = 11 − 3",
                    explanation: "Subtracting 3 from both sides keeps the equation balanced. We get 2x = 8."
                },
                {
                    title: "Divide both sides by 2",
                    equation: "2x ÷ 2 = 8 ÷ 2",
                    explanation: "Divide both sides by 2 to find the value of x. We get x = 4."
                },
                {
                    title: "Verify the answer",
                    equation: "2 × 4 + 3 = 11",
                    explanation: "Substitute x = 4 into the original equation. Since 8 + 3 = 11, our answer is correct!"
                }
            ],

            previous: "← Previous",
            next: "Next Step →",
            step: "STEP",
            answerHeading: "We found the answer!",
            answerExplanation: "The value of x is 4. Let's verify: 2 × 4 + 3 = 11. Therefore, our answer is correct!",

            practiceHeading: "Let's Practise!",
            practiceDescription: "Solve the equation and enter the value of x.",
            answerLabel: "Your answer for x:",
            placeholder: "Enter your answer",
            check: "Check Answer",
            correct: "Excellent! Your answer is correct. 3 × 4 + 2 = 14.",
            incorrect: "Not quite! Try again. First subtract 2 from both sides, then divide by 3.",

            teacherHeading: "Teacher's Classroom Tip",
            teacherTip: "Use a physical balance or draw two equal groups on the board. Ask students what happens when the same quantity is removed from both sides. This helps them understand why equations must remain balanced."
        },


        kn: {
            title: "ಒಂದು ಚರಾಕ್ಷರವುಳ್ಳ ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳು",
            subtitle: "ಸರಳ ವಿವರಣೆಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯೋಣ.",

            introHeading: "ರೇಖಾತ್ಮಕ ಸಮೀಕರಣ ಎಂದರೇನು?",
            introduction: "ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯವನ್ನು x ನಂತಹ ಅಕ್ಷರದಿಂದ ಸೂಚಿಸುವ ಗಣಿತದ ಹೇಳಿಕೆಯನ್ನು ರೇಖಾತ್ಮಕ ಸಮೀಕರಣ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
            definitionTitle: "ಉದಾಹರಣೆ:",
            definitionText: "ಇಲ್ಲಿ x ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯವಾಗಿದೆ. ಸಮೀಕರಣವನ್ನು ಸರಿಯಾಗಿಸುವ x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯುವುದು ನಮ್ಮ ಗುರಿಯಾಗಿದೆ.",

            objectiveHeading: "ನಾವು ಏನು ಕಲಿಯುತ್ತೇವೆ?",
            objectives: [
                "ಚರಾಕ್ಷರಗಳು ಮತ್ತು ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು.",
                "ಸಮ ಚಿಹ್ನೆಯ ಅರ್ಥವನ್ನು ತಿಳಿಯುವುದು.",
                "ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳನ್ನು ಹಂತ ಹಂತವಾಗಿ ಬಿಡಿಸುವುದು.",
                "ಉತ್ತರವನ್ನು ಮೂಲ ಸಮೀಕರಣದಲ್ಲಿ ಹಾಕಿ ಪರಿಶೀಲಿಸುವುದು."
            ],

            visualHeading: "ಸಮೀಕರಣವು ತಕ್ಕಡಿಯಂತೆ",
            visualDescription: "ಒಂದು ತಕ್ಕಡಿಯನ್ನು ಕಲ್ಪಿಸಿಕೊಳ್ಳಿ. ಅದು ಸಮತೋಲನದಲ್ಲಿರಲು ಎರಡೂ ಬದಿಗಳ ತೂಕ ಸಮವಾಗಿರಬೇಕು. ಸಮೀಕರಣವೂ ಇದೇ ತತ್ವದ ಮೇಲೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.",
            leftLabel: "ಎಡಭಾಗ",
            rightLabel: "ಬಲಭಾಗ",
            balanceNote: "ಒಂದು ಬದಿಯಲ್ಲಿ ಮಾಡುವ ಕ್ರಿಯೆಯನ್ನು ಇನ್ನೊಂದು ಬದಿಯಲ್ಲಿಯೂ ಮಾಡಬೇಕು. ಆಗ ಸಮತೋಲನ ಉಳಿಯುತ್ತದೆ.",

            solutionHeading: "ಒಂದು ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸೋಣ!",
            solutionDescription: "ಕೆಳಗಿನ ಸಮೀಕರಣದಲ್ಲಿ x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",

            steps: [
                {
                    title: "ಸಮೀಕರಣದಿಂದ ಪ್ರಾರಂಭಿಸೋಣ",
                    equation: "2x + 3 = 11",
                    explanation: "x ನ ಮೌಲ್ಯವನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಕಂಡುಹಿಡಿಯಲು ಅದರ ಜೊತೆಯಲ್ಲಿರುವ ಹೆಚ್ಚುವರಿ ಸಂಖ್ಯೆಯನ್ನು ತೆಗೆದುಹಾಕಬೇಕು."
                },
                {
                    title: "ಎರಡೂ ಬದಿಗಳಿಂದ 3 ಕಳೆಯಿರಿ",
                    equation: "2x + 3 − 3 = 11 − 3",
                    explanation: "ಎರಡೂ ಬದಿಗಳಿಂದ 3 ಕಳೆದಾಗ ಸಮತೋಲನ ಉಳಿಯುತ್ತದೆ. ನಮಗೆ 2x = 8 ದೊರೆಯುತ್ತದೆ."
                },
                {
                    title: "ಎರಡೂ ಬದಿಗಳನ್ನು 2 ರಿಂದ ಭಾಗಿಸಿ",
                    equation: "2x ÷ 2 = 8 ÷ 2",
                    explanation: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಲು ಎರಡೂ ಬದಿಗಳನ್ನು 2 ರಿಂದ ಭಾಗಿಸಿ. ನಮಗೆ x = 4 ದೊರೆಯುತ್ತದೆ."
                },
                {
                    title: "ಉತ್ತರವನ್ನು ಪರಿಶೀಲಿಸಿ",
                    equation: "2 × 4 + 3 = 11",
                    explanation: "ಮೂಲ ಸಮೀಕರಣದಲ್ಲಿ x = 4 ಹಾಕಿ. 8 + 3 = 11 ಆಗುವುದರಿಂದ ನಮ್ಮ ಉತ್ತರ ಸರಿಯಾಗಿದೆ!"
                }
            ],

            previous: "← ಹಿಂದಿನ ಹಂತ",
            next: "ಮುಂದಿನ ಹಂತ →",
            step: "ಹಂತ",
            answerHeading: "ಉತ್ತರ ಕಂಡುಹಿಡಿದಿದ್ದೇವೆ!",
            answerExplanation: "x ನ ಮೌಲ್ಯ 4. ಪರಿಶೀಲನೆ: 2 × 4 + 3 = 11. ಆದ್ದರಿಂದ ನಮ್ಮ ಉತ್ತರ ಸರಿಯಾಗಿದೆ!",

            practiceHeading: "ಅಭ್ಯಾಸ ಮಾಡೋಣ!",
            practiceDescription: "ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸಿ x ನ ಮೌಲ್ಯವನ್ನು ನಮೂದಿಸಿ.",
            answerLabel: "x ನ ನಿಮ್ಮ ಉತ್ತರ:",
            placeholder: "ಉತ್ತರ ನಮೂದಿಸಿ",
            check: "ಉತ್ತರ ಪರಿಶೀಲಿಸಿ",
            correct: "ಅದ್ಭುತ! ನಿಮ್ಮ ಉತ್ತರ ಸರಿಯಾಗಿದೆ. 3 × 4 + 2 = 14.",
            incorrect: "ಮತ್ತೊಮ್ಮೆ ಪ್ರಯತ್ನಿಸಿ! ಮೊದಲು ಎರಡೂ ಬದಿಗಳಿಂದ 2 ಕಳೆಯಿರಿ. ನಂತರ 3 ರಿಂದ ಭಾಗಿಸಿ.",

            teacherHeading: "ಶಿಕ್ಷಕರಿಗೆ ತರಗತಿ ಸಲಹೆ",
            teacherTip: "ನಿಜವಾದ ತಕ್ಕಡಿಯನ್ನು ಬಳಸಿ ಅಥವಾ ಫಲಕದ ಮೇಲೆ ಎರಡು ಸಮಾನ ಗುಂಪುಗಳನ್ನು ಬಿಡಿಸಿ. ಎರಡೂ ಬದಿಗಳಿಂದ ಒಂದೇ ಪ್ರಮಾಣವನ್ನು ತೆಗೆದಾಗ ಏನಾಗುತ್ತದೆ ಎಂದು ಮಕ್ಕಳನ್ನು ಕೇಳಿ. ಇದರಿಂದ ಸಮೀಕರಣದ ಸಮತೋಲನದ ಕಲ್ಪನೆ ಅರ್ಥವಾಗುತ್ತದೆ."
        }

    };


    // LESSON ELEMENTS

    const languageButtons =
        lessonPage.querySelectorAll(".c8-language-button");

    const previousButton =
        document.getElementById("c8PreviousStep");

    const nextButton =
        document.getElementById("c8NextStep");

    const stepNumber =
        document.getElementById("c8StepNumber");

    const stepTitle =
        document.getElementById("c8StepTitle");

    const stepEquation =
        document.getElementById("c8StepEquation");

    const stepExplanation =
        document.getElementById("c8StepExplanation");

    const stepCounter =
        document.getElementById("c8StepCounter");

    const finalAnswer =
        document.getElementById("c8FinalAnswer");


    let currentLanguage = "en";
    let currentStep = 0;


    // DISPLAY LESSON LANGUAGE

    function displayLanguage() {

        const data = lessonLanguages[currentLanguage];

        document.documentElement.lang =
            currentLanguage === "kn" ? "kn" : "en";

        document.getElementById("c8Title").textContent =
            data.title;

        document.getElementById("c8Subtitle").textContent =
            data.subtitle;

        document.getElementById("c8IntroHeading").textContent =
            data.introHeading;

        document.getElementById("c8Introduction").textContent =
            data.introduction;

        document.getElementById("c8DefinitionTitle").textContent =
            data.definitionTitle;

        document.getElementById("c8DefinitionText").textContent =
            data.definitionText;

        document.getElementById("c8ObjectiveHeading").textContent =
            data.objectiveHeading;

        const objectives =
            document.getElementById("c8Objectives");

        objectives.innerHTML = "";

        data.objectives.forEach(function (objective) {

            const item = document.createElement("li");

            item.textContent = objective;

            objectives.appendChild(item);

        });


        document.getElementById("c8VisualHeading").textContent =
            data.visualHeading;

        document.getElementById("c8VisualDescription").textContent =
            data.visualDescription;

        document.getElementById("c8LeftLabel").textContent =
            data.leftLabel;

        document.getElementById("c8RightLabel").textContent =
            data.rightLabel;

        document.getElementById("c8BalanceNote").textContent =
            data.balanceNote;


        document.getElementById("c8SolutionHeading").textContent =
            data.solutionHeading;

        document.getElementById("c8SolutionDescription").textContent =
            data.solutionDescription;


        document.getElementById("c8PracticeHeading").textContent =
            data.practiceHeading;

        document.getElementById("c8PracticeDescription").textContent =
            data.practiceDescription;

        document.getElementById("c8AnswerLabel").textContent =
            data.answerLabel;

        document.getElementById("c8PracticeAnswer").placeholder =
            data.placeholder;

        document.getElementById("c8CheckAnswer").textContent =
            data.check;


        document.getElementById("c8AnswerHeading").textContent =
            data.answerHeading;

        document.getElementById("c8AnswerExplanation").textContent =
            data.answerExplanation;


        document.getElementById("c8TeacherHeading").textContent =
            data.teacherHeading;

        document.getElementById("c8TeacherTip").textContent =
            data.teacherTip;


        previousButton.textContent = data.previous;
        nextButton.textContent = data.next;


        languageButtons.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.language === currentLanguage
            );

        });


        displayStep();

    }


    // DISPLAY STEP BY STEP SOLUTION

    function displayStep() {

        const data = lessonLanguages[currentLanguage];

        const step = data.steps[currentStep];

        stepNumber.textContent =
            data.step + " " + (currentStep + 1);

        stepTitle.textContent = step.title;

        stepEquation.textContent = step.equation;

        stepExplanation.textContent = step.explanation;

        stepCounter.textContent =
            (currentStep + 1) + " / " + data.steps.length;

        previousButton.disabled = currentStep === 0;

        nextButton.disabled =
            currentStep === data.steps.length - 1;

        finalAnswer.style.display =
            currentStep === data.steps.length - 1
                ? "block"
                : "none";

    }


    // LANGUAGE BUTTONS

    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            currentLanguage = button.dataset.language;

            displayLanguage();

        });

    });


    // PREVIOUS STEP

    previousButton.addEventListener("click", function () {

        if (currentStep > 0) {

            currentStep--;

            displayStep();

        }

    });


    // NEXT STEP

    nextButton.addEventListener("click", function () {

        if (currentStep < 3) {

            currentStep++;

            displayStep();

        }

    });


    // PRACTICE QUESTION

    const practiceInput =
        document.getElementById("c8PracticeAnswer");

    const checkButton =
        document.getElementById("c8CheckAnswer");

    const feedback =
        document.getElementById("c8PracticeFeedback");


    function checkPracticeAnswer() {

        const answer = practiceInput.value.trim();

        const data = lessonLanguages[currentLanguage];

        if (answer === "") {

            feedback.textContent =
                currentLanguage === "kn"
                    ? "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಉತ್ತರವನ್ನು ನಮೂದಿಸಿ."
                    : "Please enter your answer first.";

            feedback.className =
                "class8-practice-feedback incorrect";

            return;

        }

        if (Number(answer) === 4) {

            feedback.textContent = data.correct;

            feedback.className =
                "class8-practice-feedback correct";

        } else {

            feedback.textContent = data.incorrect;

            feedback.className =
                "class8-practice-feedback incorrect";

        }

    }


    checkButton.addEventListener(
        "click",
        checkPracticeAnswer
    );


    practiceInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            checkPracticeAnswer();

        }

    });


    // INITIAL DISPLAY

    displayLanguage();

})();

// =====================================
// VIDYASETU - CLASS 8 ACTIVITIES LOGIC
// =====================================

(function () {

    const page =
        document.querySelector(".class8-activities-page");

    if (!page) return;


    // ACTIVITY CONTENT IN ENGLISH AND KANNADA

    const activityData = {

        en: {

            title: "Let's Practise Linear Equations!",
            subtitle: "Solve challenges, balance equations and discover how much you have learned.",

            tabs: [
                "Balance the Equation",
                "Find the Unknown",
                "Choose the Correct Step"
            ],

            restart: "Restart",
            question: "Question",
            score: "Score",
            next: "Next Question →",
            finish: "See Results →",
            check: "Choose the correct answer.",
            correct: "Excellent! That's correct!",
            incorrect: "Not quite! The correct answer is: ",
            resultTitle: "Excellent Work!",
            resultDescription: "You have completed all the questions.",
            playAgain: "Play Again",

            teacherHeading: "Teacher's Tip",
            teacherText: "Encourage children to discuss their answers before selecting an option. Let different students explain their reasoning aloud.",

            activities: {

                balance: {
                    title: "Balance the Equation",
                    questions: [
                        {
                            question: "What should we subtract from both sides?",
                            equation: "x + 5 = 12",
                            options: ["5", "12", "2", "7"],
                            answer: 0,
                            explanation: "Subtract 5 from both sides. This gives x = 7."
                        },
                        {
                            question: "What should we subtract from both sides?",
                            equation: "x + 8 = 15",
                            options: ["15", "8", "7", "3"],
                            answer: 1,
                            explanation: "Subtract 8 from both sides to get x = 7."
                        },
                        {
                            question: "What should we divide both sides by?",
                            equation: "4x = 20",
                            options: ["20", "5", "4", "2"],
                            answer: 2,
                            explanation: "Divide both sides by 4. Therefore, x = 5."
                        }
                    ]
                },

                unknown: {
                    title: "Find the Unknown",
                    questions: [
                        {
                            question: "Find the value of x.",
                            equation: "x + 6 = 10",
                            options: ["2", "4", "6", "16"],
                            answer: 1,
                            explanation: "x = 10 − 6 = 4."
                        },
                        {
                            question: "Find the value of x.",
                            equation: "2x = 18",
                            options: ["6", "8", "9", "12"],
                            answer: 2,
                            explanation: "x = 18 ÷ 2 = 9."
                        },
                        {
                            question: "Find the value of x.",
                            equation: "3x + 2 = 14",
                            options: ["3", "4", "5", "6"],
                            answer: 1,
                            explanation: "3x = 14 − 2 = 12. Therefore, x = 4."
                        }
                    ]
                },

                steps: {
                    title: "Choose the Correct Step",
                    questions: [
                        {
                            question: "What is the first step?",
                            equation: "x + 4 = 9",
                            options: [
                                "Add 4 to both sides",
                                "Subtract 4 from both sides",
                                "Multiply both sides by 4",
                                "Divide both sides by 9"
                            ],
                            answer: 1,
                            explanation: "Subtract 4 from both sides to isolate x."
                        },
                        {
                            question: "What should we do next?",
                            equation: "2x = 16",
                            options: [
                                "Add 2",
                                "Subtract 2",
                                "Multiply by 2",
                                "Divide by 2"
                            ],
                            answer: 3,
                            explanation: "Divide both sides by 2 to get x = 8."
                        },
                        {
                            question: "After subtracting 3, what do we get?",
                            equation: "x + 3 = 11",
                            options: [
                                "x = 14",
                                "x = 8",
                                "x = 3",
                                "x = 11"
                            ],
                            answer: 1,
                            explanation: "Subtract 3 from 11. Therefore, x = 8."
                        }
                    ]
                }

            }

        },


        kn: {

            title: "ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳ ಅಭ್ಯಾಸ ಮಾಡೋಣ!",
            subtitle: "ಸಮೀಕರಣಗಳನ್ನು ಬಿಡಿಸಿ, ಸಮತೋಲನ ಕಾಯ್ದುಕೊಂಡು ನಿಮ್ಮ ಕಲಿಕೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ.",

            tabs: [
                "ಸಮೀಕರಣದ ಸಮತೋಲನ",
                "ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯ ಕಂಡುಹಿಡಿಯಿರಿ",
                "ಸರಿಯಾದ ಹಂತ ಆಯ್ಕೆಮಾಡಿ"
            ],

            restart: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ",
            question: "ಪ್ರಶ್ನೆ",
            score: "ಅಂಕ",
            next: "ಮುಂದಿನ ಪ್ರಶ್ನೆ →",
            finish: "ಫಲಿತಾಂಶ ನೋಡಿ →",
            check: "ಸರಿಯಾದ ಉತ್ತರವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
            correct: "ಅದ್ಭುತ! ನಿಮ್ಮ ಉತ್ತರ ಸರಿಯಾಗಿದೆ!",
            incorrect: "ಸರಿಯಲ್ಲ! ಸರಿಯಾದ ಉತ್ತರ: ",
            resultTitle: "ಅತ್ಯುತ್ತಮ ಪ್ರಯತ್ನ!",
            resultDescription: "ನೀವು ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ.",
            playAgain: "ಮತ್ತೆ ಆಟವಾಡಿ",

            teacherHeading: "ಶಿಕ್ಷಕರಿಗೆ ಸಲಹೆ",
            teacherText: "ಮಕ್ಕಳು ಉತ್ತರ ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ಚರ್ಚಿಸಲು ಪ್ರೋತ್ಸಾಹಿಸಿ. ಬೇರೆ ಬೇರೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ಉತ್ತರದ ಕಾರಣವನ್ನು ವಿವರಿಸಲು ಅವಕಾಶ ನೀಡಿ.",

            activities: {

                balance: {
                    title: "ಸಮೀಕರಣದ ಸಮತೋಲನ",
                    questions: [
                        {
                            question: "ಎರಡೂ ಬದಿಗಳಿಂದ ಯಾವುದನ್ನು ಕಳೆಯಬೇಕು?",
                            equation: "x + 5 = 12",
                            options: ["5", "12", "2", "7"],
                            answer: 0,
                            explanation: "ಎರಡೂ ಬದಿಗಳಿಂದ 5 ಕಳೆಯಿರಿ. ಆಗ x = 7."
                        },
                        {
                            question: "ಎರಡೂ ಬದಿಗಳಿಂದ ಯಾವುದನ್ನು ಕಳೆಯಬೇಕು?",
                            equation: "x + 8 = 15",
                            options: ["15", "8", "7", "3"],
                            answer: 1,
                            explanation: "ಎರಡೂ ಬದಿಗಳಿಂದ 8 ಕಳೆಯಿರಿ. ಆಗ x = 7."
                        },
                        {
                            question: "ಎರಡೂ ಬದಿಗಳನ್ನು ಯಾವುದರಿಂದ ಭಾಗಿಸಬೇಕು?",
                            equation: "4x = 20",
                            options: ["20", "5", "4", "2"],
                            answer: 2,
                            explanation: "ಎರಡೂ ಬದಿಗಳನ್ನು 4 ರಿಂದ ಭಾಗಿಸಿ. ಆದ್ದರಿಂದ x = 5."
                        }
                    ]
                },

                unknown: {
                    title: "ಗೊತ್ತಿಲ್ಲದ ಮೌಲ್ಯ ಕಂಡುಹಿಡಿಯಿರಿ",
                    questions: [
                        {
                            question: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
                            equation: "x + 6 = 10",
                            options: ["2", "4", "6", "16"],
                            answer: 1,
                            explanation: "x = 10 − 6 = 4."
                        },
                        {
                            question: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
                            equation: "2x = 18",
                            options: ["6", "8", "9", "12"],
                            answer: 2,
                            explanation: "x = 18 ÷ 2 = 9."
                        },
                        {
                            question: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ.",
                            equation: "3x + 2 = 14",
                            options: ["3", "4", "5", "6"],
                            answer: 1,
                            explanation: "3x = 14 − 2 = 12. ಆದ್ದರಿಂದ x = 4."
                        }
                    ]
                },

                steps: {
                    title: "ಸರಿಯಾದ ಹಂತ ಆಯ್ಕೆಮಾಡಿ",
                    questions: [
                        {
                            question: "ಮೊದಲ ಹಂತ ಯಾವುದು?",
                            equation: "x + 4 = 9",
                            options: [
                                "ಎರಡೂ ಬದಿಗಳಿಗೆ 4 ಸೇರಿಸಿ",
                                "ಎರಡೂ ಬದಿಗಳಿಂದ 4 ಕಳೆಯಿರಿ",
                                "ಎರಡೂ ಬದಿಗಳನ್ನು 4 ರಿಂದ ಗುಣಿಸಿ",
                                "ಎರಡೂ ಬದಿಗಳನ್ನು 9 ರಿಂದ ಭಾಗಿಸಿ"
                            ],
                            answer: 1,
                            explanation: "x ಅನ್ನು ಪ್ರತ್ಯೇಕಿಸಲು ಎರಡೂ ಬದಿಗಳಿಂದ 4 ಕಳೆಯಿರಿ."
                        },
                        {
                            question: "ಮುಂದೆ ಏನು ಮಾಡಬೇಕು?",
                            equation: "2x = 16",
                            options: [
                                "2 ಸೇರಿಸಿ",
                                "2 ಕಳೆಯಿರಿ",
                                "2 ರಿಂದ ಗುಣಿಸಿ",
                                "2 ರಿಂದ ಭಾಗಿಸಿ"
                            ],
                            answer: 3,
                            explanation: "x = 8 ಪಡೆಯಲು ಎರಡೂ ಬದಿಗಳನ್ನು 2 ರಿಂದ ಭಾಗಿಸಿ."
                        },
                        {
                            question: "3 ಕಳೆದ ನಂತರ ನಮಗೆ ಏನು ದೊರೆಯುತ್ತದೆ?",
                            equation: "x + 3 = 11",
                            options: [
                                "x = 14",
                                "x = 8",
                                "x = 3",
                                "x = 11"
                            ],
                            answer: 1,
                            explanation: "11 ರಿಂದ 3 ಕಳೆಯಿರಿ. ಆದ್ದರಿಂದ x = 8."
                        }
                    ]
                }

            }

        }

    };


    // ELEMENTS

    const tabs =
        page.querySelectorAll(".c8-activity-tab");

    const languageButtons =
        page.querySelectorAll(".c8-activity-language-btn");

    const questionCounter =
        document.getElementById("c8QuestionCounter");

    const scoreDisplay =
        document.getElementById("c8ScoreDisplay");

    const progressBar =
        document.getElementById("c8ActivityProgress");

    const optionsContainer =
        document.getElementById("c8ActivityOptions");

    const feedback =
        document.getElementById("c8ActivityFeedback");

    const nextButton =
        document.getElementById("c8ActivityNext");

    const questionArea =
        document.querySelector(".c8-activity-question-area");

    const resultArea =
        document.getElementById("c8ActivityResult");


    // STATE

    let language = "en";
    let currentActivity = "balance";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;


    function getData() {
        return activityData[language];
    }


    // UPDATE LANGUAGE

    function updateLanguage() {

        const data = getData();

        document.documentElement.lang =
            language === "kn" ? "kn" : "en";

        document.getElementById("c8ActivitiesTitle").textContent =
            data.title;

        document.getElementById("c8ActivitiesSubtitle").textContent =
            data.subtitle;

        document.getElementById("c8TabBalance").textContent =
            data.tabs[0];

        document.getElementById("c8TabUnknown").textContent =
            data.tabs[1];

        document.getElementById("c8TabSteps").textContent =
            data.tabs[2];

        document.getElementById("c8ResetText").textContent =
            data.restart;

        document.getElementById("c8ActivityTeacherHeading").textContent =
            data.teacherHeading;

        document.getElementById("c8ActivityTeacherText").textContent =
            data.teacherText;

        document.getElementById("c8ResultHeading").textContent =
            data.resultTitle;

        document.getElementById("c8ResultDescription").textContent =
            data.resultDescription;

        document.getElementById("c8PlayAgain").textContent =
            data.playAgain;


        languageButtons.forEach(function (button) {

            button.classList.toggle(
                "active",
                button.dataset.language === language
            );

        });


        tabs.forEach(function (tab, index) {

            tab.querySelector("span").textContent =
                data.tabs[index];

        });


        renderQuestion();

    }


    // RENDER QUESTION

    function renderQuestion() {

        const data = getData();

        const activity =
            data.activities[currentActivity];

        const question =
            activity.questions[currentQuestion];

        answered = false;

        resultArea.style.display = "none";
        questionArea.style.display = "block";

        document.getElementById("c8ActivityType").textContent =
            "ACTIVITY 0" +
            (["balance", "unknown", "steps"].indexOf(currentActivity) + 1);

        document.getElementById("c8ActivityHeading").textContent =
            activity.title;

        document.getElementById("c8ActivityInstruction").textContent =
            question.question;

        document.getElementById("c8ActivityEquation").textContent =
            question.equation;

        questionCounter.textContent =
            data.question + " " +
            (currentQuestion + 1) + " / " +
            activity.questions.length;

        scoreDisplay.textContent =
            data.score + ": " + score;

        progressBar.style.width =
            (currentQuestion / activity.questions.length * 100) + "%";

        feedback.textContent = data.check;
        feedback.className = "c8-activity-feedback";

        nextButton.disabled = true;

        nextButton.textContent =
            currentQuestion === activity.questions.length - 1
                ? data.finish
                : data.next;


        optionsContainer.innerHTML = "";

        question.options.forEach(function (option, index) {

            const button = document.createElement("button");

            button.className = "c8-activity-option";
            button.textContent = option;

            button.addEventListener("click", function () {

                selectAnswer(index, button);

            });

            optionsContainer.appendChild(button);

        });

    }


    // SELECT ANSWER

    function selectAnswer(selectedIndex, selectedButton) {

        if (answered) return;

        answered = true;

        const data = getData();

        const question =
            data.activities[currentActivity]
                .questions[currentQuestion];

        const optionButtons =
            optionsContainer.querySelectorAll("button");

        optionButtons.forEach(function (button, index) {

            button.disabled = true;

            if (index === question.answer) {

                button.classList.add("correct-option");

            }

        });


        if (selectedIndex === question.answer) {

            score++;

            selectedButton.classList.add("correct-option");

            feedback.textContent =
                data.correct + " " + question.explanation;

            feedback.className =
                "c8-activity-feedback correct";

        } else {

            selectedButton.classList.add("wrong-option");

            feedback.textContent =
                data.incorrect +
                question.options[question.answer] +
                ". " + question.explanation;

            feedback.className =
                "c8-activity-feedback incorrect";

        }


        scoreDisplay.textContent =
            data.score + ": " + score;

        nextButton.disabled = false;

    }


    // NEXT QUESTION OR RESULT

    function nextQuestion() {

        const questions =
            getData().activities[currentActivity].questions;

        if (currentQuestion < questions.length - 1) {

            currentQuestion++;

            renderQuestion();

        } else {

            showResult();

        }

    }


    // SHOW FINAL RESULT

    function showResult() {

        const data = getData();

        const total =
            data.activities[currentActivity].questions.length;

        questionArea.style.display = "none";
        resultArea.style.display = "block";

        progressBar.style.width = "100%";

        questionCounter.textContent =
            data.question + " " + total + " / " + total;

        scoreDisplay.textContent =
            data.score + ": " + score;

        document.getElementById("c8ResultScore").textContent =
            score + " / " + total;

    }


    // RESET ACTIVITY

    function resetActivity() {

        currentQuestion = 0;
        score = 0;

        renderQuestion();

    }


    // SELECT ACTIVITY

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            currentActivity = tab.dataset.activity;

            tabs.forEach(function (item) {

                item.classList.toggle(
                    "active",
                    item === tab
                );

            });

            resetActivity();

        });

    });


    // LANGUAGE SWITCHING

    languageButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            language = button.dataset.language;

            updateLanguage();

        });

    });


    // BUTTON EVENTS

    nextButton.addEventListener("click", nextQuestion);

    document.getElementById("c8ActivityReset")
        .addEventListener("click", resetActivity);

    document.getElementById("c8PlayAgain")
        .addEventListener("click", resetActivity);


    // INITIAL DISPLAY

    updateLanguage();

})();

/* =========================================
   CLASS 8 - QUIZ & ASSESSMENT
========================================= */

(function () {
    const page = document.querySelector(".class8-quiz-page");
    if (!page) return;

    const quizData = {
        en: [
            {
                question: "Solve the equation:",
                equation: "x + 5 = 12",
                options: ["5", "6", "7", "8"],
                answer: 2,
                explanation: "Subtract 5 from both sides: x = 12 − 5 = 7.",
                difficulty: "EASY"
            },
            {
                question: "Find the value of x:",
                equation: "x − 4 = 9",
                options: ["5", "12", "13", "14"],
                answer: 2,
                explanation: "Add 4 to both sides: x = 9 + 4 = 13.",
                difficulty: "EASY"
            },
            {
                question: "Solve the following:",
                equation: "3x = 21",
                options: ["6", "7", "8", "9"],
                answer: 1,
                explanation: "Divide both sides by 3: x = 21 ÷ 3 = 7.",
                difficulty: "EASY"
            },
            {
                question: "What is the value of x?",
                equation: "2x + 3 = 13",
                options: ["4", "5", "6", "8"],
                answer: 1,
                explanation: "Subtract 3: 2x = 10. Divide by 2: x = 5.",
                difficulty: "MEDIUM"
            },
            {
                question: "Solve the equation:",
                equation: "3x − 5 = 16",
                options: ["5", "6", "7", "8"],
                answer: 2,
                explanation: "Add 5: 3x = 21. Divide by 3: x = 7.",
                difficulty: "MEDIUM"
            },
            {
                question: "Find x:",
                equation: "5x + 2 = 27",
                options: ["4", "5", "6", "7"],
                answer: 1,
                explanation: "Subtract 2: 5x = 25. Divide by 5: x = 5.",
                difficulty: "MEDIUM"
            },
            {
                question: "Solve the equation:",
                equation: "x / 3 + 2 = 6",
                options: ["9", "10", "12", "15"],
                answer: 2,
                explanation: "Subtract 2: x / 3 = 4. Multiply by 3: x = 12.",
                difficulty: "MEDIUM"
            },
            {
                question: "If 2x + 7 = 3x + 2, find x.",
                equation: "2x + 7 = 3x + 2",
                options: ["3", "4", "5", "6"],
                answer: 2,
                explanation: "Subtract 2x: 7 = x + 2. Subtract 2: x = 5.",
                difficulty: "HARD"
            },
            {
                question: "The sum of a number and 8 is 20. What is the number?",
                equation: "x + 8 = 20",
                options: ["10", "11", "12", "13"],
                answer: 2,
                explanation: "Let the number be x. Then x + 8 = 20, so x = 12.",
                difficulty: "HARD"
            },
            {
                question: "The perimeter of a square is 36 cm. What is the length of one side?",
                equation: "4x = 36",
                options: ["6 cm", "8 cm", "9 cm", "12 cm"],
                answer: 2,
                explanation: "A square has four equal sides. So 4x = 36. Dividing by 4 gives x = 9 cm.",
                difficulty: "HARD"
            }
        ],

        kn: [
            {
                question: "ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸಿ:",
                equation: "x + 5 = 12",
                options: ["5", "6", "7", "8"],
                answer: 2,
                explanation: "ಎರಡೂ ಬದಿಗಳಿಂದ 5 ಕಳೆಯಿರಿ: x = 12 − 5 = 7.",
                difficulty: "ಸುಲಭ"
            },
            {
                question: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ:",
                equation: "x − 4 = 9",
                options: ["5", "12", "13", "14"],
                answer: 2,
                explanation: "ಎರಡೂ ಬದಿಗಳಿಗೆ 4 ಸೇರಿಸಿ: x = 9 + 4 = 13.",
                difficulty: "ಸುಲಭ"
            },
            {
                question: "ಕೆಳಗಿನ ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸಿ:",
                equation: "3x = 21",
                options: ["6", "7", "8", "9"],
                answer: 1,
                explanation: "ಎರಡೂ ಬದಿಗಳನ್ನು 3 ರಿಂದ ಭಾಗಿಸಿ: x = 21 ÷ 3 = 7.",
                difficulty: "ಸುಲಭ"
            },
            {
                question: "x ನ ಮೌಲ್ಯ ಎಷ್ಟು?",
                equation: "2x + 3 = 13",
                options: ["4", "5", "6", "8"],
                answer: 1,
                explanation: "3 ಅನ್ನು ಕಳೆಯಿರಿ: 2x = 10. ನಂತರ 2 ರಿಂದ ಭಾಗಿಸಿ: x = 5.",
                difficulty: "ಮಧ್ಯಮ"
            },
            {
                question: "ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸಿ:",
                equation: "3x − 5 = 16",
                options: ["5", "6", "7", "8"],
                answer: 2,
                explanation: "5 ಸೇರಿಸಿ: 3x = 21. ನಂತರ 3 ರಿಂದ ಭಾಗಿಸಿ: x = 7.",
                difficulty: "ಮಧ್ಯಮ"
            },
            {
                question: "x ನ ಮೌಲ್ಯವನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ:",
                equation: "5x + 2 = 27",
                options: ["4", "5", "6", "7"],
                answer: 1,
                explanation: "2 ಅನ್ನು ಕಳೆಯಿರಿ: 5x = 25. ನಂತರ 5 ರಿಂದ ಭಾಗಿಸಿ: x = 5.",
                difficulty: "ಮಧ್ಯಮ"
            },
            {
                question: "ಸಮೀಕರಣವನ್ನು ಬಿಡಿಸಿ:",
                equation: "x / 3 + 2 = 6",
                options: ["9", "10", "12", "15"],
                answer: 2,
                explanation: "2 ಅನ್ನು ಕಳೆಯಿರಿ: x / 3 = 4. ನಂತರ 3 ರಿಂದ ಗುಣಿಸಿ: x = 12.",
                difficulty: "ಮಧ್ಯಮ"
            },
            {
                question: "2x + 7 = 3x + 2 ಆದರೆ x ನ ಮೌಲ್ಯ ಎಷ್ಟು?",
                equation: "2x + 7 = 3x + 2",
                options: ["3", "4", "5", "6"],
                answer: 2,
                explanation: "2x ಅನ್ನು ಕಳೆಯಿರಿ: 7 = x + 2. ನಂತರ 2 ಕಳೆಯಿರಿ: x = 5.",
                difficulty: "ಕಠಿಣ"
            },
            {
                question: "ಒಂದು ಸಂಖ್ಯೆಗೆ 8 ಸೇರಿಸಿದಾಗ 20 ಬರುತ್ತದೆ. ಆ ಸಂಖ್ಯೆ ಯಾವುದು?",
                equation: "x + 8 = 20",
                options: ["10", "11", "12", "13"],
                answer: 2,
                explanation: "ಸಂಖ್ಯೆಯನ್ನು x ಎಂದು ತೆಗೆದುಕೊಳ್ಳಿ. x + 8 = 20. ಆದ್ದರಿಂದ x = 12.",
                difficulty: "ಕಠಿಣ"
            },
            {
                question: "ಒಂದು ಚೌಕದ ಪರಿಧಿ 36 ಸೆಂ.ಮೀ. ಆಗಿದ್ದರೆ, ಅದರ ಒಂದು ಬದಿಯ ಉದ್ದ ಎಷ್ಟು?",
                equation: "4x = 36",
                options: ["6 ಸೆಂ.ಮೀ.", "8 ಸೆಂ.ಮೀ.", "9 ಸೆಂ.ಮೀ.", "12 ಸೆಂ.ಮೀ."],
                answer: 2,
                explanation: "ಚೌಕಕ್ಕೆ ನಾಲ್ಕು ಸಮಾನ ಬದಿಗಳಿರುತ್ತವೆ. ಆದ್ದರಿಂದ 4x = 36. 4 ರಿಂದ ಭಾಗಿಸಿದಾಗ x = 9 ಸೆಂ.ಮೀ.",
                difficulty: "ಕಠಿಣ"
            }
        ]
    };

    const translations = {
        en: {
            title: "Quiz & Assessment",
            subtitle: "Test your understanding of Linear Equations!",
            question: "QUESTION",
            score: "YOUR SCORE",
            next: "Next Question →",
            finish: "View Results →",
            correct: "✓ Correct answer!",
            wrong: "✗ Not quite! The correct answer is:",
            resultHeading: "Quiz Completed!",
            resultDescription: "You have completed the Class 8 Linear Equations assessment.",
            finalScore: "Your Score",
            retry: "Try Again ↻",
            teacherHeading: "Teacher's Corner",
            teacherText: "Encourage students to solve each equation step by step. Ask them to explain why the same operation must be applied to both sides of an equation.",
            excellent: "Excellent work! You have a strong understanding of linear equations.",
            good: "Good effort! Review the explanations and practise a little more.",
            keepPractising: "Keep practising! Revisit the lesson and try the quiz again.",
            questionLabel: "QUESTION",
            scoreLabel: "YOUR SCORE"
        },
        kn: {
            title: "ರಸಪ್ರಶ್ನೆ ಮತ್ತು ಮೌಲ್ಯಮಾಪನ",
            subtitle: "ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳ ನಿಮ್ಮ ಜ್ಞಾನವನ್ನು ಪರೀಕ್ಷಿಸಿ!",
            question: "ಪ್ರಶ್ನೆ",
            score: "ನಿಮ್ಮ ಅಂಕಗಳು",
            next: "ಮುಂದಿನ ಪ್ರಶ್ನೆ →",
            finish: "ಫಲಿತಾಂಶ ನೋಡಿ →",
            correct: "✓ ಸರಿಯಾದ ಉತ್ತರ!",
            wrong: "✗ ಸರಿಯಲ್ಲ! ಸರಿಯಾದ ಉತ್ತರ:",
            resultHeading: "ರಸಪ್ರಶ್ನೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
            resultDescription: "8ನೇ ತರಗತಿಯ ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳ ಮೌಲ್ಯಮಾಪನವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ್ದೀರಿ.",
            finalScore: "ನಿಮ್ಮ ಅಂಕಗಳು",
            retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ↻",
            teacherHeading: "ಶಿಕ್ಷಕರ ವಿಭಾಗ",
            teacherText: "ವಿದ್ಯಾರ್ಥಿಗಳು ಪ್ರತಿಯೊಂದು ಸಮೀಕರಣವನ್ನೂ ಹಂತ ಹಂತವಾಗಿ ಬಿಡಿಸುವಂತೆ ಪ್ರೋತ್ಸಾಹಿಸಿ. ಸಮೀಕರಣದ ಎರಡೂ ಬದಿಗಳಲ್ಲಿ ಒಂದೇ ಕ್ರಿಯೆಯನ್ನು ಏಕೆ ಮಾಡಬೇಕು ಎಂಬುದನ್ನು ವಿವರಿಸಲು ತಿಳಿಸಿ.",
            excellent: "ಅತ್ಯುತ್ತಮ ಪ್ರಯತ್ನ! ರೇಖಾತ್ಮಕ ಸಮೀಕರಣಗಳ ಬಗ್ಗೆ ನಿಮಗೆ ಉತ್ತಮ ತಿಳುವಳಿಕೆ ಇದೆ.",
            good: "ಉತ್ತಮ ಪ್ರಯತ್ನ! ವಿವರಣೆಗಳನ್ನು ಮತ್ತೊಮ್ಮೆ ಓದಿ ಮತ್ತು ಇನ್ನಷ್ಟು ಅಭ್ಯಾಸ ಮಾಡಿ.",
            keepPractising: "ಅಭ್ಯಾಸ ಮುಂದುವರಿಸಿ! ಪಾಠವನ್ನು ಮತ್ತೊಮ್ಮೆ ಓದಿ ರಸಪ್ರಶ್ನೆಯನ್ನು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
            questionLabel: "ಪ್ರಶ್ನೆ",
            scoreLabel: "ನಿಮ್ಮ ಅಂಕಗಳು"
        }
    };

    let language = "en";
    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    const $ = (id) => document.getElementById(id);

    const elements = {
        title: $("c8QuizTitle"),
        subtitle: $("c8QuizSubtitle"),
        questionLabel: $("c8QuizQuestionLabel"),
        scoreLabel: $("c8QuizScoreLabel"),
        counter: $("c8QuizCounter"),
        score: $("c8QuizScore"),
        progress: $("c8QuizProgress"),
        difficulty: $("c8QuizDifficulty"),
        question: $("c8QuizQuestion"),
        equation: $("c8QuizEquation"),
        options: $("c8QuizOptions"),
        feedback: $("c8QuizFeedback"),
        next: $("c8QuizNext"),
        card: document.querySelector(".c8-quiz-card"),
        result: $("c8QuizResult"),
        resultHeading: $("c8QuizResultHeading"),
        resultDescription: $("c8QuizResultDescription"),
        finalScoreLabel: $("c8QuizFinalScoreLabel"),
        finalScore: $("c8QuizFinalScore"),
        resultMessage: $("c8QuizResultMessage"),
        retry: $("c8QuizRetry"),
        teacherHeading: $("c8QuizTeacherHeading"),
        teacherText: $("c8QuizTeacherText")
    };

    function updateLanguage() {
        const t = translations[language];

        elements.title.textContent = t.title;
        elements.subtitle.textContent = t.subtitle;
        elements.questionLabel.textContent = t.questionLabel;
        elements.scoreLabel.textContent = t.scoreLabel;
        elements.finalScoreLabel.textContent = t.finalScore;
        elements.retry.textContent = t.retry;
        elements.teacherHeading.textContent = t.teacherHeading;
        elements.teacherText.textContent = t.teacherText;

        document.querySelectorAll(".c8-quiz-language-btn").forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.language === language
            );
        });

        if (elements.result.hidden === false) {
            showResultText();
        } else {
            renderQuestion();
        }
    }

    function renderQuestion() {
        const questions = quizData[language];
        const q = questions[currentQuestion];
        const t = translations[language];

        answered = false;

        elements.counter.textContent =
            `${currentQuestion + 1} / ${questions.length}`;

        elements.score.textContent = score;
        elements.progress.style.width =
            `${((currentQuestion + 1) / questions.length) * 100}%`;

        elements.difficulty.textContent = q.difficulty;
        elements.question.textContent = q.question;
        elements.equation.textContent = q.equation;

        elements.options.innerHTML = "";
        elements.feedback.textContent = "";
        elements.feedback.className = "c8-quiz-feedback";
        elements.next.disabled = true;

        elements.next.textContent =
            currentQuestion === questions.length - 1
                ? t.finish
                : t.next;

        q.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "c8-quiz-option";
            button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;

            button.addEventListener("click", () => {
                selectAnswer(index);
            });

            elements.options.appendChild(button);
        });
    }

    function selectAnswer(selectedIndex) {
        if (answered) return;

        answered = true;

        const q = quizData[language][currentQuestion];
        const t = translations[language];
        const buttons = elements.options.querySelectorAll("button");
        const isCorrect = selectedIndex === q.answer;

        buttons.forEach((button, index) => {
            button.disabled = true;

            if (index === q.answer) {
                button.classList.add("correct");
            } else if (index === selectedIndex && !isCorrect) {
                button.classList.add("incorrect");
            }
        });

        if (isCorrect) {
            score++;
            elements.feedback.innerHTML =
                `<strong>${t.correct}</strong><br>${q.explanation}`;
            elements.feedback.className =
                "c8-quiz-feedback show correct-feedback";
        } else {
            elements.feedback.innerHTML =
                `<strong>${t.wrong} ${q.options[q.answer]}</strong><br>${q.explanation}`;
            elements.feedback.className =
                "c8-quiz-feedback show wrong-feedback";
        }

        elements.score.textContent = score;
        elements.next.disabled = false;
    }

    function nextQuestion() {
        if (!answered) return;

        if (currentQuestion < quizData[language].length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        elements.card.hidden = true;
        elements.result.hidden = false;
        showResultText();
        elements.result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    function showResultText() {
        const t = translations[language];
        const total = quizData[language].length;

        elements.resultHeading.textContent = t.resultHeading;
        elements.resultDescription.textContent = t.resultDescription;
        elements.finalScore.textContent = `${score} / ${total}`;

        if (score >= 8) {
            elements.resultMessage.textContent = t.excellent;
        } else if (score >= 5) {
            elements.resultMessage.textContent = t.good;
        } else {
            elements.resultMessage.textContent = t.keepPractising;
        }
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        answered = false;

        elements.card.hidden = false;
        elements.result.hidden = true;

        renderQuestion();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    document.querySelectorAll(".c8-quiz-language-btn").forEach(button => {
        button.addEventListener("click", () => {
            language = button.dataset.language;
            updateLanguage();
        });
    });

    elements.next.addEventListener("click", nextQuestion);
    elements.retry.addEventListener("click", resetQuiz);

    updateLanguage();
})();



/* =========================================
   VIDYASETU - CLASS DEMO STATUS & ACCESS
========================================= */

(function () {
    const classButtons = document.querySelectorAll("[data-class]");

    if (!classButtons.length) return;

    const availableClasses = [3, 8];

    classButtons.forEach(button => {
        const classNumber = parseInt(
            String(button.dataset.class).replace(/\D/g, ""),
            10
        );

        if (!classNumber || classNumber < 1 || classNumber > 10) return;

        const isAvailable = availableClasses.includes(classNumber);

        const oldStatus = button.querySelector(".class-demo-status");
        if (oldStatus) oldStatus.remove();

        const status = document.createElement("span");
        status.className = "class-demo-status";

        if (isAvailable) {
            status.classList.add("available");
            button.classList.remove("class-coming-soon");
            button.removeAttribute("aria-disabled");
            button.removeAttribute("tabindex");

            if (button.tagName === "BUTTON") {
                button.disabled = false;
            }
        } else {
            status.textContent = "Coming Soon";
            status.classList.add("coming-soon");
            button.classList.add("class-coming-soon");
            button.setAttribute("aria-disabled", "true");
            button.setAttribute("tabindex", "-1");

            if (button.tagName === "BUTTON") {
                button.disabled = true;
            }

            button.addEventListener("click", function (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
                event.stopPropagation();
            }, true);
        }

        button.appendChild(status);
    });
})();
