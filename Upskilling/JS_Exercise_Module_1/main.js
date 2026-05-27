// ==========================================
// EXERCISE 1: Basics & Setup
// ==========================================
console.log("=== EXERCISE 1: Basics ===");
console.log("Welcome to the Community Portal");

// Using alert on full page load
window.onload = () => {
    // Uncomment below for actual alert (suppressed to avoid annoyance during testing)
    // alert("Page fully loaded! Welcome to the JS Masterclass.");
    console.log("Page fully loaded.");
};

// ==========================================
// EXERCISE 2: Syntax, Data Types, Operators
// ==========================================
console.log("\n=== EXERCISE 2: Syntax ===");
const eventName = "Summer Tech Meetup";
const eventDate = "2026-08-15";
let availableSeats = 50;

// Template Literals
const eventInfo = `The event "${eventName}" is scheduled for ${eventDate}. Seats remaining: ${availableSeats}`;
console.log(eventInfo);

// Operators
availableSeats--;
console.log(`Someone registered! Seats remaining: ${availableSeats}`);

// ==========================================
// EXERCISE 5 & 10: Objects, Prototypes, ES6
// ==========================================
console.log("\n=== EXERCISE 5 & 10: Objects & Classes ===");

// Using ES6 Class instead of prototype function
class EventItem {
    // Ex 10: Default parameters
    constructor(id, name, category, seats = 10, isPast = false) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.seats = seats;
        this.isPast = isPast;
    }

    checkAvailability() {
        return this.seats > 0;
    }
}

// Local mock data array
let eventsList = [
    new EventItem(1, "Web Dev Workshop", "Tech", 5),
    new EventItem(2, "Jazz Night in the Park", "Music", 0), // Full
    new EventItem(3, "History Walk", "Art", 20, true), // Past event
    new EventItem(4, "AI & Future", "Tech", 30)
];

// Object.entries demo
console.log("Object.entries for Event 1:");
Object.entries(eventsList[0]).forEach(([key, value]) => {
    console.log(`  ${key}: ${value}`);
});

// ==========================================
// EXERCISE 6: Arrays and Methods
// ==========================================
console.log("\n=== EXERCISE 6: Arrays ===");

// .push()
eventsList.push(new EventItem(5, "Indie Rock Concert", "Music", 100));

// .filter() -> only Music events
const musicEvents = eventsList.filter(e => e.category === "Music");
console.log("Music Events:", musicEvents);

// .map() -> format display strings
const displayCards = eventsList.map(e => `[${e.category.toUpperCase()}] ${e.name}`);
console.log("Mapped Events:", displayCards);

// ==========================================
// EXERCISE 4: Closures & Higher-Order Functions
// ==========================================
console.log("\n=== EXERCISE 4: Closures ===");

// Closure to track total registrations for a category
function createCategoryTracker(categoryName) {
    let registrations = 0;
    return function() {
        registrations++;
        console.log(`[Closure] Total registrations for ${categoryName}: ${registrations}`);
    };
}
const trackTechReg = createCategoryTracker("Tech");
trackTechReg(); // 1
trackTechReg(); // 2

// ==========================================
// EXERCISE 3 & 7: DOM Manipulation & Conditionals
// ==========================================
const eventsContainer = document.querySelector("#eventsContainer");
const formEventSelect = document.querySelector("#formEventSelect");

// Using if-else and try-catch
function renderEvents(eventsToRender) {
    eventsContainer.innerHTML = ""; // Clear
    formEventSelect.innerHTML = '<option value="">Select Event...</option>';

    try {
        if (!eventsToRender || eventsToRender.length === 0) {
            eventsContainer.innerHTML = "<p>No events found.</p>";
            return;
        }

        // Loop using forEach (Ex 3)
        eventsToRender.forEach(ev => {
            // Conditional: Hide past events
            if (ev.isPast) return;

            // DOM Element Creation (Ex 7)
            const card = document.createElement("div");
            card.className = "event-card";
            
            // Destructuring (Ex 10)
            const { name, category, seats } = ev;
            
            card.innerHTML = `
                <h4 class="fw-bold">${name}</h4>
                <p class="mb-1"><span class="badge bg-dark">${category}</span></p>
                <p class="mb-2 fw-bold ${seats > 0 ? 'text-success' : 'text-danger'}">
                    ${seats > 0 ? seats + " seats left" : "FULLY BOOKED"}
                </p>
                ${seats > 0 ? `<button class="btn btn-sm btn-outline-dark register-btn" data-id="${ev.id}">Register</button>` : ''}
            `;
            eventsContainer.appendChild(card);

            // Populate form dropdown if available
            if(seats > 0) {
                const opt = document.createElement("option");
                opt.value = ev.id;
                opt.textContent = name;
                formEventSelect.appendChild(opt);
            }
        });
    } catch (error) {
        console.error("Error rendering events:", error);
    }
}

// Initial render
renderEvents(eventsList);


// ==========================================
// EXERCISE 8: Event Handling
// ==========================================
// Filter by search (keydown/keyup)
document.getElementById("searchInput").addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    // Ex 10: Spread operator to clone list
    const filtered = [...eventsList].filter(ev => ev.name.toLowerCase().includes(term));
    renderEvents(filtered);
});

// Filter by category (onchange)
document.getElementById("categoryFilter").addEventListener("change", (e) => {
    const cat = e.target.value;
    if (cat === "all") renderEvents(eventsList);
    else renderEvents(eventsList.filter(ev => ev.category === cat));
});


// ==========================================
// EXERCISE 9: Async JS, Promises, Fetch
// ==========================================
document.getElementById("loadMockDataBtn").addEventListener("click", async () => {
    const spinner = document.getElementById("loadingSpinner");
    spinner.style.display = "block";
    eventsContainer.style.display = "none";
    
    try {
        // Simulate network delay and fetch Mock JSON (Ex 9)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data fetch (In real app, replace with real URL)
        const mockApiResponse = [
            { id: 101, name: "Remote Cloud Summit", category: "Tech", seats: 100, isPast: false },
            { id: 102, name: "Digital Art Fair", category: "Art", seats: 50, isPast: false }
        ];

        // Merge with existing
        eventsList = [...eventsList, ...mockApiResponse];
        renderEvents(eventsList);
        console.log("Mock API data loaded successfully.");
    } catch (error) {
        console.error("Failed to load mock data:", error);
    } finally {
        spinner.style.display = "none";
        eventsContainer.style.display = "block";
    }
});


// ==========================================
// EXERCISE 11, 12, 14: Forms, AJAX, jQuery
// ==========================================
// Note: Using jQuery for Ex 14 requirement ($)
$('#registrationForm').on('submit', function(e) {
    // Prevent default (Ex 11)
    e.preventDefault();
    
    // form.elements (Ex 11)
    const formEl = document.getElementById('registrationForm');
    const name = formEl.elements['fullName'].value;
    const email = formEl.elements['email'].value;
    const eventId = formEl.elements['selectedEvent'].value;

    if(!name || !email || !eventId) {
        // Validation handled by HTML5, but just in case
        return;
    }

    const payload = { name, email, eventId };
    console.log("AJAX Payload (Ex 13 Check payload):", payload);

    const btn = $('#registerBtn');
    btn.prop('disabled', true).text('Registering...');

    // Simulate AJAX POST (Ex 12)
    setTimeout(() => {
        // Fake success response
        $('#formStatus').removeClass('text-danger').addClass('text-success')
                        .text(`Success! ${name} is registered.`)
                        .fadeIn(); // jQuery fadeIn (Ex 14)

        // Reset form
        formEl.reset();
        btn.prop('disabled', false).text('Register via AJAX');

        setTimeout(() => {
            $('#formStatus').fadeOut(); // jQuery fadeOut (Ex 14)
        }, 4000);
        
    }, 1000);
});
