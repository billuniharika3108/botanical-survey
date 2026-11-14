const weeks = {
    1: [
        {
            day: "Day 1",
            activity: "Introduction to Community Service Project (CSP) and its objectives.",
            outcome: "Understood the purpose and importance of the CSP."
        },
        {
            day: "Day 2",
            activity: "Discussed and planned the project topic related to plants.",
            outcome: "Learned how to plan and organize project activities."
        },
        {
            day: "Day 3",
            activity: "Selected the locality for conducting the plant-related project.",
            outcome: "Understood the importance of selecting a suitable project area."
        },
        {
            day: "Day 4",
            activity: "Prepared the required documents for the project.",
            outcome: "Learned about project documentation."
        },
        {
            day: "Day 5",
            activity: "Visited the Sachivalayam and discussed the project permissions.",
            outcome: "Understood the importance of local support and permissions."
        },
        {
            day: "Day 6",
            activity: "Submitted the project details to the college.",
            outcome: "Learned the process of submitting project information."
        }
    ],

    2: [
        {
            day: "Day 1",
            activity: "Collected information about different types of plants.",
            outcome: "Learned about different plant varieties."
        },
        {
            day: "Day 2",
            activity: "Studied the basic needs of plants and their products.",
            outcome: "Understood the requirements for plant growth."
        },
        {
            day: "Day 3",
            activity: "Observed different plants in the local area.",
            outcome: "Identified different types of plants."
        },
        {
            day: "Day 4",
            activity: "Learned about biodiversity and its importance.",
            outcome: "Understood the importance of biodiversity."
        },
        {
            day: "Day 5",
            activity: "Visited farms and observed agricultural activities.",
            outcome: "Gained practical knowledge about farming."
        },
        {
            day: "Day 6",
            activity: "Collected feedback from farmers about plants and cultivation.",
            outcome: "Learned about farmers' experiences and challenges."
        }
    ],

    3: [
        {
            day: "Day 1",
            activity: "Collected information about different flowering plants.",
            outcome: "Learned about flowering plants and their features."
        },
        {
            day: "Day 2",
            activity: "Observed different varieties of flowering plants.",
            outcome: "Identified different flowering plant varieties."
        },
        {
            day: "Day 3",
            activity: "Studied the maintenance and care of flowering plants.",
            outcome: "Understood how to maintain flowering plants."
        },
        {
            day: "Day 4",
            activity: "Observed plant growth and flowering conditions.",
            outcome: "Learned about the factors affecting flowering."
        },
        {
            day: "Day 5",
            activity: "Visited a nursery and observed different plants.",
            outcome: "Gained practical knowledge about plant nurseries."
        },
        {
            day: "Day 6",
            activity: "Collected information about nursery management.",
            outcome: "Understood basic nursery activities."
        }
    ],

    4: [
        {
            day: "Day 1",
            activity: "Studied environmental factors affecting plant growth.",
            outcome: "Learned how environmental factors influence plants."
        },
        {
            day: "Day 2",
            activity: "Observed the effect of sunlight on plant growth.",
            outcome: "Understood the importance of sunlight."
        },
        {
            day: "Day 3",
            activity: "Studied the importance of water and soil for plants.",
            outcome: "Learned about the basic requirements of plants."
        },
        {
            day: "Day 4",
            activity: "Collected information about climatic conditions.",
            outcome: "Understood the relationship between climate and plants."
        },
        {
            day: "Day 5",
            activity: "Observed how weather conditions affect plant growth.",
            outcome: "Learned about the effects of weather on plants."
        },
        {
            day: "Day 6",
            activity: "Recorded observations about environmental conditions.",
            outcome: "Improved observation and documentation skills."
        }
    ],

    5: [
        {
            day: "Day 1",
            activity: "Collected information about plant genetics.",
            outcome: "Learned the basic concepts of plant genetics."
        },
        {
            day: "Day 2",
            activity: "Studied the characteristics inherited by plants.",
            outcome: "Understood how plants inherit characteristics."
        },
        {
            day: "Day 3",
            activity: "Observed different plant structures and morphology.",
            outcome: "Learned about plant morphology."
        },
        {
            day: "Day 4",
            activity: "Studied roots, stems, leaves and flowers.",
            outcome: "Identified the main parts of plants."
        },
        {
            day: "Day 5",
            activity: "Collected information about mutations in plants.",
            outcome: "Learned the basic meaning of plant mutations."
        },
        {
            day: "Day 6",
            activity: "Reviewed the collected information about plant genetics and morphology.",
            outcome: "Improved knowledge about plant characteristics."
        }
    ],

    6: [
        {
            day: "Day 1",
            activity: "Collected information about endangered plant species.",
            outcome: "Learned about endangered plants."
        },
        {
            day: "Day 2",
            activity: "Identified reasons why some plant species are endangered.",
            outcome: "Understood the causes of plant endangerment."
        },
        {
            day: "Day 3",
            activity: "Studied the importance of protecting endangered plants.",
            outcome: "Learned the importance of plant conservation."
        },
        {
            day: "Day 4",
            activity: "Collected information about plant conservation measures.",
            outcome: "Understood methods of protecting plant species."
        },
        {
            day: "Day 5",
            activity: "Studied the role of people in protecting plants and nature.",
            outcome: "Learned how people can support conservation."
        },
        {
            day: "Day 6",
            activity: "Reviewed the six-week project activities and learning outcomes.",
            outcome: "Gained overall knowledge about plants and their conservation."
        }
    ]
};

// Display the six week buttons
const weekGrid = document.getElementById("weekGrid");
const activityPanel = document.getElementById("activityPanel");
const weekTitle = document.getElementById("weekTitle");
const activityRows = document.getElementById("activityRows");
const backButton = document.getElementById("backButton");

// Create week cards
for (let weekNumber = 1; weekNumber <= 6; weekNumber++) {
    const button = document.createElement("button");

    button.className = "week-card";
    button.textContent = `Week ${weekNumber}`;

    button.addEventListener("click", () => {
        showWeek(weekNumber);
    });

    weekGrid.appendChild(button);
}

// Display selected week's activities
function showWeek(weekNumber) {
    weekTitle.textContent = `Week ${weekNumber} - Activity Details`;

    activityRows.innerHTML = "";

    weeks[weekNumber].forEach((activity) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${activity.day}</td>
            <td>${activity.activity}</td>
            <td>${activity.outcome}</td>
            <td class="signature-cell"></td>
        `;

        activityRows.appendChild(row);
    });

    weekGrid.style.display = "none";
    activityPanel.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Return to the six week buttons
backButton.addEventListener("click", () => {
    activityPanel.style.display = "none";
    weekGrid.style.display = "grid";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});