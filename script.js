

const students = [
    ["BILLU NIHARIKA", "24JNA05101"],
    ["BOYELLA INDRAJA", "24JNA05121"],
    ["CHAKKA SRIVALLI", "24JNA05130"],
    ["BUDIDA SUJITHA", "24JNA05125"],
    ["BOCHU ABHINAYASRI", "24JNA05103"]
];

document.getElementById("students").innerHTML =
    students.map((student, index) => `
        <div class="student">
            ${index + 1}. <strong>${student[0]}</strong>
            (${student[1]})
        </div>
    `).join("");

const weeks = {
    1: [
        ["Day 1", "Introduction to Community Service Project and its objectives.", "Understood the purpose of the CSP."],
        ["Day 2", "Discussed and planned the project topic related to plants.", "Learned how to plan project activities."],
        ["Day 3", "Selected the locality for conducting the project.", "Understood the importance of selecting a project area."],
        ["Day 4", "Prepared the required project documents.", "Learned about project documentation."],
        ["Day 5", "Visited Sachivalayam and discussed project permissions.", "Understood the importance of local support."],
        ["Day 6", "Submitted project details to the college.", "Learned the project submission process."]
    ],

    2: [
        ["Day 1", "Collected information about different types of plants.", "Learned about different plant varieties."],
        ["Day 2", "Studied the basic needs of plants and their products.", "Understood the requirements for plant growth."],
        ["Day 3", "Observed different plants in the local area.", "Identified different types of plants."],
        ["Day 4", "Learned about biodiversity and its importance.", "Understood the importance of biodiversity."],
        ["Day 5", "Visited farms and observed agricultural activities.", "Gained practical knowledge about farming."],
        ["Day 6", "Collected feedback from farmers.", "Learned about farmers' experiences."]
    ],

    3: [
        ["Day 1", "Collected information about different flowering plants.", "Learned about flowering plants."],
        ["Day 2", "Observed different varieties of flowering plants.", "Identified different flowering plant varieties."],
        ["Day 3", "Studied the maintenance and care of flowering plants.", "Understood how to maintain flowering plants."],
        ["Day 4", "Observed plant growth and flowering conditions.", "Learned about factors affecting flowering."],
        ["Day 5", "Visited a nursery and observed different plants.", "Gained practical knowledge about nurseries."],
        ["Day 6", "Collected information about nursery management.", "Understood basic nursery activities."]
    ],

    4: [
        ["Day 1", "Studied environmental factors affecting plant growth.", "Learned how environmental factors influence plants."],
        ["Day 2", "Observed the effect of sunlight on plant growth.", "Understood the importance of sunlight."],
        ["Day 3", "Studied the importance of water and soil.", "Learned about the basic requirements of plants."],
        ["Day 4", "Collected information about climatic conditions.", "Understood the relationship between climate and plants."],
        ["Day 5", "Observed how weather conditions affect plant growth.", "Learned about the effects of weather."],
        ["Day 6", "Recorded observations about environmental conditions.", "Improved observation skills."]
    ],

    5: [
        ["Day 1", "Collected information about plant genetics.", "Learned the basic concepts of plant genetics."],
        ["Day 2", "Studied characteristics inherited by plants.", "Understood how plants inherit characteristics."],
        ["Day 3", "Observed different plant structures and morphology.", "Learned about plant morphology."],
        ["Day 4", "Studied roots, stems, leaves and flowers.", "Identified the main parts of plants."],
        ["Day 5", "Collected information about mutations in plants.", "Learned the basic meaning of plant mutations."],
        ["Day 6", "Reviewed information about plant genetics and morphology.", "Improved knowledge about plant characteristics."]
    ],

    6: [
        ["Day 1", "Collected information about endangered plant species.", "Learned about endangered plants."],
        ["Day 2", "Identified reasons why some plant species are endangered.", "Understood the causes of plant endangerment."],
        ["Day 3", "Studied the importance of protecting endangered plants.", "Learned the importance of plant conservation."],
        ["Day 4", "Collected information about plant conservation measures.", "Understood methods of protecting plant species."],
        ["Day 5", "Studied the role of people in protecting plants and nature.", "Learned how people can support conservation."],
        ["Day 6", "Reviewed the six-week project activities and outcomes.", "Gained overall knowledge about plants and conservation."]
    ]
};

const weekGrid = document.getElementById("weekGrid");
const homeSection = document.getElementById("homeSection");
const activityPanel = document.getElementById("activityPanel");
const weekTitle = document.getElementById("weekTitle");
const activityRows = document.getElementById("activityRows");

for (let i = 1; i <= 6; i++) {
    const button = document.createElement("button");

    button.className = "week-card";
    button.textContent = `🌿 Week ${i}`;
    button.addEventListener("click", () => showWeek(i));

    weekGrid.appendChild(button);
}

function showWeek(number) {
    weekTitle.textContent = `Week ${number} - Activity Report`;

    activityRows.innerHTML = "";

    weeks[number].forEach(activity => {
        const row = document.createElement("tr");

        activity.forEach(detail => {
            const cell = document.createElement("td");
            cell.textContent = detail;
            row.appendChild(cell);
        });

        const signature = document.createElement("td");
        signature.className = "signature-cell";
        row.appendChild(signature);

        activityRows.appendChild(row);
    });

    homeSection.hidden = true;
    activityPanel.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("backButton").addEventListener("click", () => {
    activityPanel.hidden = true;
    homeSection.hidden = false;

    window.scrollTo({ top: 0, behavior: "smooth" });
});
