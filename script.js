const weekData = {
  week1: [
    {
      title: "Computer Basics",
      points: [
        "Google Docs, Sheets, Slides, Drive",
        "Basic shortcuts and file handling",
        "Using Gemini for quick tasks"
      ],
      info: "This week focused on building fundamental computer skills used in office productivity."
    },
    {
      title: "Communication Skills",
      points: [
        "Email etiquette",
        "Confidence building",
        "How to speak professionally"
      ],
      info: "Soft skills training to improve workplace communication."
    },
    {
      title: "SQL Basics",
      points: [
        "CRUD operations",
        "Joins and filtering",
        "DDL vs DML"
      ],
      info: "Basics of database handling and SQL operations."
    }
  ],

  week2: [
    {
      title: "Linux Basics",
      points: [
        "Understanding terminal commands",
        "File & folder navigation",
        "Permissions and user roles",
        "Basic shell operations"
      ],
      info: "This session introduced essential Linux commands that are useful for support, deployments, and server-side activities."
    },
    {
      title: "TIBCO Overview",
      points: [
        "What is TIBCO?",
        "Why companies use TIBCO",
        "BW5 vs BW6 high-level differences",
        "Real-time use cases"
      ],
      info: "Overview of the TIBCO ecosystem and how integration platforms help automate business processes."
    },
    {
      title: "TIBCO Installation",
      points: [
        "BW5 studio setup",
        "Runtime & EMS basic configuration",
        "Environment setup steps",
        "Troubleshooting installation issues"
      ],
      info: "Installation session explained how to install and configure TIBCO tools for development and runtime."
    },
    {
      title: "BW5 Design",
      points: [
        "Process design basics",
        "Palettes introduction",
        "BW5 project structure",
        "Simple workflow creation"
      ],
      info: "A hands-on introduction to building processes in BW5, understanding palettes, and designing basic workflows."
    },
    {
      title: "HR Etiquettes",
      points: [
        "Email professionalism",
        "Team communication style",
        "How to talk to HR",
        "Workplace behavior basics"
      ],
      info: "A soft-skills session focused on communication etiquette and professional workplace conduct."
    }
  ],

  week3: [
    {
      title: "TIBCO BW6 Palettes",
      points: [
        "Understanding palettes and their purpose",
        "Commonly used palettes (HTTP, JSON, XML, Mapper, JDBC)",
        "Designing processes using BW6 Canvas",
        "Activities and transitions inside palette components"
      ],
      info: "BW6 palettes are the building blocks used to design services. They allow developers to connect systems, process data, and build automated integrations."
    },
    {
      title: "EMS (Enterprise Messaging Service)",
      points: [
        "What is EMS and why it is used",
        "Queues vs Topics",
        "Publishing & subscribing message flows",
        "BW6 integration with EMS"
      ],
      info: "EMS helps applications communicate asynchronously by sending messages through queues or topics. It is widely used for scalable, reliable integration."
    }
  ],

  week4: [
    {
      title: "Applications & Servers",
      points: [
        "Types of servers",
        "Git & CICD basics",
        "SSL Certificate understanding"
      ],
      info: "Understanding infrastructure and deployment flow."
    },
    {
      title: "Admin Console",
      points: [
        "Viewing logs",
        "Application management",
        "Monitoring runtime status"
      ],
      info: "Essential for day-to-day support activities."
    },
    {
      title: "Troubleshooting",
      points: [
        "Backend errors",
        "Timeouts",
        "Environment issues"
      ],
      info: "Real-time issue identification and debugging strategies."
    }
  ],

  week5: [
    {
      title: "Cloud Basics",
      points: [
        "Compute, Storage & Networking",
        "Shared Responsibility Model",
        "Importance of cloud adoption"
      ],
      info: "Introduction to fundamental cloud concepts used in modern IT infrastructure."
    },
    {
      title: "Virtual Machine (VM)",
      points: [
        "Basic Virtualization",
        "Container Editions & deployment",
        "Virtualization & scaling"
      ],
      info: "Understanding Virtualization architecture and its advantages in large-scale systems."
    }
    // ,
    // {
    //   title: "Cloud Migration Overview",
    //   points: [
    //     "Rehost (Lift & Shift)",
    //     "Replatform",
    //     "Refactor",
    //     "Cloud migration tools"
    //   ],
    //   info: "Different strategies for moving applications to the cloud and tools that assist in migration."
    // }
  ]
};

function goProfile() {
  // Hide report screen
  document.getElementById("report-screen").classList.add("hidden");
  // Show intro/profile screen
  document.getElementById("intro-screen").classList.remove("hidden");
}


// OPEN WEEK
function openWeek(week) {
  const weekScreen = document.getElementById("week-screen");
  weekScreen.classList.remove("hidden");

  let html = `<h2 class="week-title">${week.replace("week", "Week ")}</h2>`;

  weekData[week].forEach(section => {
    html += `
      <div class="section-box">
        <div class="section-header">${section.title}</div>
        <ul>
          ${section.points.map(p => `<li>✔ ${p}</li>`).join("")}
        </ul>
        <p><strong>About:</strong> ${section.info}</p>
      </div>
    `;
  });

  html += `<button class="back-btn" onclick="goHome()">Back</button>`;
  weekScreen.innerHTML = html;
}

// GO HOME
function goHome() {
  document.getElementById("week-screen").classList.add("hidden");
}
// appi mobile switch Off,  i love u