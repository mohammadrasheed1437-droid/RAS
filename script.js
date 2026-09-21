javascript
// ==========================================
// SPORTS LEAGUE MANAGEMENT SYSTEM
// JavaScript File
// ==========================================

// Get the main application area
const app = document.getElementById("app");

// ==========================================
// TEAM DATA
// ==========================================

const teams = [
    {
        id: 1,
        name: "Thunder Kings",
        city: "Hyderabad",
        logo: "⚡",
        played: 8,
        wins: 6,
        draws: 1,
        losses: 1,
        points: 19
    },
    {
        id: 2,
        name: "Coastal Warriors",
        city: "Visakhapatnam",
        logo: "🌊",
        played: 8,
        wins: 5,
        draws: 2,
        losses: 1,
        points: 17
    },
    {
        id: 3,
        name: "Deccan Stars",
        city: "Vijayawada",
        logo: "⭐",
        played: 8,
        wins: 4,
        draws: 1,
        losses: 3,
        points: 13
    },
    {
        id: 4,
        name: "Royal Challengers",
        city: "Guntur",
        logo: "👑",
        played: 8,
        wins: 3,
        draws: 2,
        losses: 3,
        points: 11
    },
    {
        id: 5,
        name: "City Strikers",
        city: "Nellore",
        logo: "🔥",
        played: 8,
        wins: 2,
        draws: 1,
        losses: 5,
        points: 7
    },
    {
        id: 6,
        name: "Green Warriors",
        city: "Kakinada",
        logo: "🌿",
        played: 8,
        wins: 1,
        draws: 1,
        losses: 6,
        points: 4
    }
];

// ==========================================
// FIXTURE DATA
// ==========================================

let fixtures =
    JSON.parse(localStorage.getItem("fixtures")) || [

        {
            id: 1,
            date: "Sep 23, 2026",
            time: "6:30 PM",
            home: "Thunder Kings",
            away: "Coastal Warriors",
            homeScore: 0,
            awayScore: 0,
            status: "Upcoming"
        },

        {
            id: 2,
            date: "Sep 24, 2026",
            time: "7:00 PM",
            home: "Deccan Stars",
            away: "Royal Challengers",
            homeScore: 0,
            awayScore: 0,
            status: "Upcoming"
        },

        {
            id: 3,
            date: "Sep 25, 2026",
            time: "6:30 PM",
            home: "City Strikers",
            away: "Green Warriors",
            homeScore: 0,
            awayScore: 0,
            status: "Upcoming"
        },

        {
            id: 4,
            date: "Sep 27, 2026",
            time: "7:00 PM",
            home: "Coastal Warriors",
            away: "Deccan Stars",
            homeScore: 2,
            awayScore: 1,
            status: "Completed"
        }
    ];

// ==========================================
// NEWS DATA
// ==========================================

const news = [

    [
        "League opener attracts huge fan interest",
        "Teams are preparing for an exciting week of league action.",
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80"
    ],

    [
        "Player of the Week announced",
        "Thunder Kings forward Arjun has been selected after a strong performance.",
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=80"
    ],

    [
        "Tickets now available",
        "Fans can reserve match tickets directly from the User Module.",
        "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=900&q=80"
    ]

];

// ==========================================
// PLAYER DATA
// ==========================================

const players = [

    ["Arjun Kumar", "Thunder Kings", 8, 7, 2],

    ["Rahul Singh", "Coastal Warriors", 8, 6, 4],

    ["Vikram Reddy", "Deccan Stars", 8, 5, 3],

    ["Aman Shaik", "Royal Challengers", 8, 4, 5],

    ["Rohit Das", "City Strikers", 8, 3, 2]

];

// ==========================================
// USER FUNCTIONS
// ==========================================

// Get currently logged-in user
function getUser() {

    return JSON.parse(
        localStorage.getItem("slmsUser")
    );
}


// Save logged-in user
function setUser(user) {

    localStorage.setItem(
        "slmsUser",
        JSON.stringify(user)
    );
}


// Logout
function logout() {

    localStorage.removeItem("slmsUser");

    location.hash = "#login";

    render();
}


// Navigate to another page
function nav(page) {

    location.hash = "#" + page;

    render();
}


// Save fixtures
function saveFixtures() {

    localStorage.setItem(
        "fixtures",
        JSON.stringify(fixtures)
    );
}


// Get initials of team name
function initials(name) {

    return name
        .split(" ")
        .map(word => word[0])
        .join("")
        .slice(0, 2);
}


// ==========================================
// HEADER / NAVIGATION
// ==========================================

function header() {

    const user = getUser();

    return `

    <header class="topbar">

        <div class="brand">
            🏆 <span>SLMS</span>
        </div>

        <nav class="nav">

            <button onclick="nav('home')">
                Home
            </button>

            ${
                user?.role === "admin"
                    ? `
                    <button onclick="nav('admin')">
                        Admin Dashboard
                    </button>
                    `
                    : ""
            }

            ${
                user?.role === "user"
                    ? `
                    <button onclick="nav('user')">
                        User Dashboard
                    </button>
                    `
                    : ""
            }

            <button onclick="nav('fixtures')">
                Fixtures
            </button>

            <button onclick="nav('standings')">
                Standings
            </button>

            <button onclick="nav('stats')">
                Player Stats
            </button>

            ${
                user
                    ? `
                    <button onclick="logout()">
                        Logout
                    </button>
                    `
                    : `
                    <button onclick="nav('login')">
                        Login
                    </button>
                    `
            }

        </nav>

    </header>

    `;
}


// ==========================================
// HOME PAGE
// ==========================================

function home() {

    return `

    ${header()}

    <main class="container">

        <section class="hero">

            <div>

                <span class="badge">
                    SPORTS LEAGUE MANAGEMENT SYSTEM
                </span>

                <h1>
                    Manage the league.
                    Follow every match.
                </h1>

                <p>
                    A dynamic sports league platform
                    for organizers and fans to manage
                    teams, fixtures, live scores,
                    standings, player statistics,
                    tickets and news.
                </p>

                <div class="actions">

                    <button
                        class="btn"
                        onclick="nav('fixtures')">

                        View Fixtures

                    </button>

                    <button
                        class="btn secondary"
                        onclick="nav('standings')">

                        League Standings

                    </button>

                </div>

            </div>

            <img
                class="hero-img"
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80"
                alt="Sports Stadium">

        </section>


        <div class="section-title">

            <h2>
                League Overview
            </h2>

            <span class="muted">
                Season 2026
            </span>

        </div>


        <section class="grid four">

            <div class="card">

                <div class="muted">
                    Teams
                </div>

                <div class="stat">
                    ${teams.length}
                </div>

                <span class="badge">
                    Registered
                </span>

            </div>


            <div class="card">

                <div class="muted">
                    Fixtures
                </div>

                <div class="stat">
                    ${fixtures.length}
                </div>

                <span class="badge">
                    Scheduled
                </span>

            </div>


            <div class="card">

                <div class="muted">
                    Players
                </div>

                <div class="stat">
                    ${players.length}
                </div>

                <span class="badge">
                    Tracked
                </span>

            </div>


            <div class="card">

                <div class="muted">
                    Live Matches
                </div>

                <div class="stat">
                    ${
                        fixtures.filter(
                            f => f.status === "Live"
                        ).length
                    }
                </div>

                <span class="badge">
                    Updates
                </span>

            </div>

        </section>


        <div class="section-title">

            <h2>
                Latest News
            </h2>

            <button
                class="btn secondary"
                onclick="nav('news')">

                All News

            </button>

        </div>


        <section class="grid">

            ${
                news.map(item => `

                    <article class="card">

                        <img
                            class="news-img"
                            src="${item[2]}"
                            alt="Sports News">

                        <h3>
                            ${item[0]}
                        </h3>

                        <p class="muted">
                            ${item[1]}
                        </p>

                    </article>

                `).join("")
            }

        </section>

    </main>


    <footer class="footer">

        © 2026 SLMS |
        Sports League Management System

    </footer>

    `;
}


// ==========================================
// LOGIN / SIGNUP PAGE
// ==========================================

function authPage(type) {

    return `

    <div class="form-wrap">

        <div class="form-card">

            <div class="brand">
                🏆 <span>SLMS</span>
            </div>

            <h1>
                ${
                    type === "login"
                        ? "Welcome Back"
                        : "Create Account"
                }
            </h1>

            <p class="muted">

                ${
                    type === "login"
                        ? "Login to access your module."
                        : "Sign up as a league user."
                }

            </p>


            <div id="authMsg"></div>


            ${
                type === "signup"
                    ? `
                    <div class="field">

                        <label>
                            Full Name
                        </label>

                        <input
                            id="name"
                            placeholder="Your Name">

                    </div>
                    `
                    : ""
            }


            <div class="field">

                <label>
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="you@example.com">

            </div>


            <div class="field">

                <label>
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    placeholder="Minimum 4 characters">

            </div>


            <button
                class="btn"
                style="width:100%"
                onclick="${
                    type === "login"
                        ? "login()"
                        : "signup()"
                }">

                ${
                    type === "login"
                        ? "Login"
                        : "Sign Up"
                }

            </button>


            <p
                style="
                margin-top:16px;
                text-align:center
                ">

                ${
                    type === "login"

                        ? `
                        New user?

                        <a
                            href="#signup"
                            style="
                            color:#155eef;
                            font-weight:700
                            ">

                            Create Account

                        </a>
                        `

                        : `
                        Already registered?

                        <a
                            href="#login"
                            style="
                            color:#155eef;
                            font-weight:700
                            ">

                            Login

                        </a>
                        `
                }

            </p>


            ${
                type === "login"

                    ? `
                    <div
                        class="card"
                        style="
                        margin-top:20px;
                        background:#f9fafb">

                        <b>
                            Demo Admin Login
                        </b>

                        <br>

                        Email:
                        admin@slms.com

                        <br>

                        Password:
                        admin123

                    </div>
                    `

                    : ""
            }

        </div>

    </div>

    `;
}


// ==========================================
// LOGIN FUNCTION
// ==========================================

function login() {

    const email =
        document.getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("password")
        .value;

    const message =
        document.getElementById("authMsg");


    // Admin login
    if (
        email === "admin@slms.com" &&
        password === "admin123"
    ) {

        setUser({

            name: "League Admin",

            email: email,

            role: "admin"

        });

        nav("admin");

        return;
    }


    // Get registered users
    const users =
        JSON.parse(
            localStorage.getItem("slmsUsers") || "[]"
        );


    // Find user
    const user =
        users.find(
            u =>
                u.email === email &&
                u.password === password
        );


    // Invalid login
    if (!user) {

        message.innerHTML = `

            <div class="alert">

                Invalid Email or Password.

            </div>

        `;

        return;
    }


    // Save logged-in user
    setUser(user);

    // Redirect to user dashboard
    nav("user");
}


// ==========================================
// SIGNUP FUNCTION
// ==========================================

function signup() {

    const name =
        document.getElementById("name")
        .value
        .trim();

    const email =
        document.getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const password =
        document.getElementById("password")
        .value;

    const message =
        document.getElementById("authMsg");


    // Validation
    if (
        !name ||
        !email ||
        password.length < 4
    ) {

        message.innerHTML = `

            <div class="alert">

                Please enter all details.
                Password must contain
                at least 4 characters.

            </div>

        `;

        return;
    }


    // Get existing users
    const users =
        JSON.parse(
            localStorage.getItem("slmsUsers") || "[]"
        );


    // Check existing email
    if (
        users.some(
            user => user.email === email
        )
    ) {

        message.innerHTML = `

            <div class="alert">

                An account with this
                email already exists.

            </div>

        `;

        return;
    }


    // Create new user
    const user = {

        name: name,

        email: email,

        password: password,

        role: "user"

    };


    // Save user
    users.push(user);

    localStorage.setItem(
        "slmsUsers",
        JSON.stringify(users)
    );


    // Login automatically
    setUser(user);


    // Redirect
    nav("user");
}


// ==========================================
// USER DASHBOARD
// ==========================================

function userDashboard() {

    const user = getUser();


    if (!user) {

        return authPage("login");

    }


    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <div>

                <h2>
                    Welcome,
                    ${user.name} 👋
                </h2>

                <p class="muted">
                    Fan / User Module
                </p>

            </div>


            <button
                class="btn"
                onclick="nav('tickets')">

                Book Tickets

            </button>

        </div>


        <section class="grid four">

            <div class="card">

                <div class="muted">
                    Upcoming Matches
                </div>

                <div class="stat">

                    ${
                        fixtures.filter(
                            f =>
                                f.status ===
                                "Upcoming"
                        ).length
                    }

                </div>

            </div>


            <div class="card">

                <div class="muted">
                    Teams
                </div>

                <div class="stat">
                    ${teams.length}
                </div>

            </div>


            <div class="card">

                <div class="muted">
                    News Updates
                </div>

                <div class="stat">
                    ${news.length}
                </div>

            </div>


            <div class="card">

                <div class="muted">
                    Account
                </div>

                <div class="stat">
                    USER
                </div>

            </div>

        </section>


        <div class="section-title">

            <h2>
                Quick Actions
            </h2>

        </div>


        <section class="grid">

            <div class="card">

                <h3>
                    📅 Fixtures
                </h3>

                <p class="muted">

                    Check upcoming
                    and completed matches.

                </p>

                <button
                    class="btn secondary"
                    style="margin-top:12px"
                    onclick="nav('fixtures')">

                    Open

                </button>

            </div>


            <div class="card">

                <h3>
                    📊 Standings
                </h3>

                <p class="muted">

                    Track team points
                    and league position.

                </p>

                <button
                    class="btn secondary"
                    style="margin-top:12px"
                    onclick="nav('standings')">

                    Open

                </button>

            </div>


            <div class="card">

                <h3>
                    🔔 Fan News
                </h3>

                <p class="muted">

                    Read league news
                    and engagement updates.

                </p>

                <button
                    class="btn secondary"
                    style="margin-top:12px"
                    onclick="nav('news')">

                    Open

                </button>

            </div>

        </section>

    </main>

    `;
}


// ==========================================
// ADMIN DASHBOARD
// ==========================================

function adminDashboard() {

    const user = getUser();


    if (
        !user ||
        user.role !== "admin"
    ) {

        return authPage("login");

    }


    const users =
        JSON.parse(
            localStorage.getItem("slmsUsers") || "[]"
        );


    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <div>

                <h2>
                    Admin Dashboard ⚙️
                </h2>

                <p class="muted">
                    Manage league operations
                </p>

            </div>

        </div>


        <section class="grid four">

            <div class="card">

                <div class="muted">
                    Teams
                </div>

                <div class="stat">
                    ${teams.length}
                </div>

            </div>


            <div class="card">

                <div class="muted">
                    Fixtures
                </div>

                <div class="stat">
                    ${fixtures.length}
                </div>

            </div>


            <div class="card">

                <div class="muted">
                    Live Matches
                </div>

                <div class="stat">

                    ${
                        fixtures.filter(
                            f => f.status === "Live"
                        ).length
                    }

                </div>

            </div>


            <div class="card">

                <div class="muted">
                    Users
                </div>

                <div class="stat">
                    ${users.length}
                </div>

            </div>

        </section>


        <div class="section-title">

            <h2>
                Fixture Management
            </h2>

            <button
                class="btn"
                onclick="showAddFixture()">

                + Add Fixture

            </button>

        </div>


        <div id="fixtureForm"></div>


        <section class="card">

            <table>

                <thead>

                    <tr>

                        <th>
                            Date
                        </th>

                        <th>
                            Match
                        </th>

                        <th>
                            Score
                        </th>

                        <th>
                            Status
                        </th>

                        <th>
                            Action
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${
                        fixtures.map(
                            fixture => `

                            <tr>

                                <td>

                                    ${fixture.date}

                                    <br>

                                    ${fixture.time}

                                </td>


                                <td>

                                    ${fixture.home}

                                    vs

                                    ${fixture.away}

                                </td>


                                <td>

                                    ${fixture.homeScore}

                                    -

                                    ${fixture.awayScore}

                                </td>


                                <td>

                                    <span class="badge">

                                        ${fixture.status}

                                    </span>

                                </td>


                                <td>

                                    <button
                                        class="btn success"
                                        onclick="updateScore(${fixture.id})">

                                        Update

                                    </button>


                                    <button
                                        class="btn danger"
                                        onclick="deleteFixture(${fixture.id})">

                                        Delete

                                    </button>

                                </td>

                            </tr>

                            `
                        ).join("")
                    }

                </tbody>

            </table>

        </section>

    </main>

    `;
}


// ==========================================
// ADD FIXTURE FORM
// ==========================================

function showAddFixture() {

    document.getElementById(
        "fixtureForm"
    ).innerHTML = `

    <div
        class="card"
        style="margin-bottom:18px">

        <h3>
            Add New Fixture
        </h3>


        <div class="grid two">

            <div class="field">

                <label>
                    Date
                </label>

                <input
                    id="fd"
                    placeholder="Sep 30, 2026">

            </div>


            <div class="field">

                <label>
                    Time
                </label>

                <input
                    id="ft"
                    placeholder="7:00 PM">

            </div>


            <div class="field">

                <label>
                    Home Team
                </label>

                <select id="fh">

                    ${
                        teams.map(
                            team =>
                                `<option>
                                    ${team.name}
                                </option>`
                        ).join("")
                    }

                </select>

            </div>


            <div class="field">

                <label>
                    Away Team
                </label>

                <select id="fa">

                    ${
                        teams.map(
                            team =>
                                `<option>
                                    ${team.name}
                                </option>`
                        ).join("")
                    }

                </select>

            </div>

        </div>


        <button
            class="btn"
            onclick="addFixture()">

            Save Fixture

        </button>

    </div>

    `;
}


// ==========================================
// ADD FIXTURE
// ==========================================

function addFixture() {

    const date =
        document.getElementById("fd").value ||
        "TBD";

    const time =
        document.getElementById("ft").value ||
        "TBD";

    const home =
        document.getElementById("fh").value;

    const away =
        document.getElementById("fa").value;


    // Prevent same team
    if (home === away) {

        alert(
            "Home and Away teams must be different."
        );

        return;
    }


    // Create fixture
    const fixture = {

        id: Date.now(),

        date: date,

        time: time,

        home: home,

        away: away,

        homeScore: 0,

        awayScore: 0,

        status: "Upcoming"

    };


    // Add fixture
    fixtures.push(fixture);


    // Save
    saveFixtures();


    // Refresh page
    render();
}


// ==========================================
// UPDATE SCORE
// ==========================================

function updateScore(id) {

    const fixture =
        fixtures.find(
            f => f.id === id
        );


    if (!fixture) {
        return;
    }


    const homeScore =
        prompt(
            "Enter Home Team Score:",
            fixture.homeScore
        );


    const awayScore =
        prompt(
            "Enter Away Team Score:",
            fixture.awayScore
        );


    if (
        homeScore === null ||
        awayScore === null
    ) {

        return;

    }


    fixture.homeScore =
        Number(homeScore) || 0;

    fixture.awayScore =
        Number(awayScore) || 0;


    const live =
        confirm(
            "Click OK for LIVE match.\n" +
            "Click Cancel for COMPLETED match."
        );


    fixture.status =
        live
            ? "Live"
            : "Completed";


    saveFixtures();

    render();
}


// ==========================================
// DELETE FIXTURE
// ==========================================

function deleteFixture(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this fixture?"
        );


    if (!confirmDelete) {
        return;
    }


    fixtures =
        fixtures.filter(
            fixture => fixture.id !== id
        );


    saveFixtures();

    render();
}


// ==========================================
// FIXTURES PAGE
// ==========================================

function fixturesPage() {

    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <h2>
                Match Fixtures
            </h2>

            <span class="muted">
                Live Updates
            </span>

        </div>


        <section class="grid two">

            ${
                fixtures.map(
                    fixture => `

                    <div class="card">

                        <div
                            style="
                            display:flex;
                            justify-content:space-between">

                            <span class="badge">

                                ${
                                    fixture.status === "Live"
                                        ? "🔴 LIVE"
                                        : fixture.status
                                }

                            </span>

                            <span class="muted">

                                ${fixture.date}

                            </span>

                        </div>


                        <div class="match">

                            <div class="team">

                                <div class="logo">

                                    ${initials(
                                        fixture.home
                                    )}

                                </div>

                                <b>
                                    ${fixture.home}
                                </b>

                            </div>


                            <div class="score">

                                ${fixture.homeScore}

                                -

                                ${fixture.awayScore}

                            </div>


                            <div class="team">

                                <b>
                                    ${fixture.away}
                                </b>

                                <div class="logo">

                                    ${initials(
                                        fixture.away
                                    )}

                                </div>

                            </div>

                        </div>


                        <p class="muted">

                            ⏰ ${fixture.time}

                        </p>

                    </div>

                    `
                ).join("")
            }

        </section>

    </main>

    `;
}


// ==========================================
// STANDINGS PAGE
// ==========================================

function standings() {

    const sortedTeams =
        [...teams].sort(
            (a, b) =>
                b.points - a.points
        );


    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <h2>
                League Standings
            </h2>

            <span class="muted">
                Points Table
            </span>

        </div>


        <section class="card">

            <table>

                <thead>

                    <tr>

                        <th>
                            #
                        </th>

                        <th>
                            Team
                        </th>

                        <th>
                            P
                        </th>

                        <th>
                            W
                        </th>

                        <th>
                            D
                        </th>

                        <th>
                            L
                        </th>

                        <th>
                            Points
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${
                        sortedTeams.map(
                            (team, index) => `

                            <tr>

                                <td>
                                    <b>
                                        ${index + 1}
                                    </b>
                                </td>


                                <td>

                                    <div class="team">

                                        <div class="logo">

                                            ${team.logo}

                                        </div>

                                        ${team.name}

                                    </div>

                                </td>


                                <td>
                                    ${team.played}
                                </td>

                                <td>
                                    ${team.wins}
                                </td>

                                <td>
                                    ${team.draws}
                                </td>

                                <td>
                                    ${team.losses}
                                </td>

                                <td>

                                    <b>
                                        ${team.points}
                                    </b>

                                </td>

                            </tr>

                            `
                        ).join("")
                    }

                </tbody>

            </table>

        </section>

    </main>

    `;
}


// ==========================================
// PLAYER STATISTICS
// ==========================================

function stats() {

    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <h2>
                Player Statistics
            </h2>

            <span class="muted">
                Season 2026
            </span>

        </div>


        <section class="card">

            <table>

                <thead>

                    <tr>

                        <th>
                            Player
                        </th>

                        <th>
                            Team
                        </th>

                        <th>
                            Matches
                        </th>

                        <th>
                            Goals
                        </th>

                        <th>
                            Assists
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${
                        players.map(
                            player => `

                            <tr>

                                <td>
                                    <b>
                                        ${player[0]}
                                    </b>
                                </td>

                                <td>
                                    ${player[1]}
                                </td>

                                <td>
                                    ${player[2]}
                                </td>

                                <td>
                                    ${player[3]}
                                </td>

                                <td>
                                    ${player[4]}
                                </td>

                            </tr>

                            `
                        ).join("")
                    }

                </tbody>

            </table>

        </section>

    </main>

    `;
}


// ==========================================
// TICKET BOOKING
// ==========================================

function tickets() {

    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <h2>
                🎟️ Ticket Booking
            </h2>

            <span class="muted">
                Demo Booking Module
            </span>

        </div>


        <section class="grid">

            ${
                fixtures
                    .filter(
                        fixture =>
                            fixture.status !==
                            "Completed"
                    )
                    .map(
                        fixture => `

                        <div class="card">

                            <span class="badge">

                                ${fixture.date}

                            </span>


                            <h3
                                style="margin:12px 0">

                                ${fixture.home}

                                vs

                                ${fixture.away}

                            </h3>


                            <p class="muted">

                                ${fixture.time}

                            </p>


                            <div class="price">

                                ₹299

                            </div>


                            <button
                                class="btn"
                                style="margin-top:12px"
                                onclick="bookTicket('${fixture.home} vs ${fixture.away}')">

                                Book Ticket

                            </button>

                        </div>

                        `
                    ).join("")
            }

        </section>

    </main>

    `;
}


// ==========================================
// BOOK TICKET
// ==========================================

function bookTicket(match) {

    const user = getUser();


    if (!user) {

        nav("login");

        return;

    }


    alert(

        "Ticket booked successfully!\n\n" +

        "Match: " +
        match +
        "\n\n" +

        "Customer: " +
        user.name

    );
}


// ==========================================
// NEWS PAGE
// ==========================================

function newsPage() {

    return `

    ${header()}

    <main class="container">

        <div class="section-title">

            <h2>
                📰 News & Notifications
            </h2>

        </div>


        <section class="grid">

            ${
                news.map(
                    item => `

                    <article class="card">

                        <img
                            class="news-img"
                            src="${item[2]}"
                            alt="News Image">


                        <span class="badge">

                            League News

                        </span>


                        <h3
                            style="margin:10px 0">

                            ${item[0]}

                        </h3>


                        <p class="muted">

                            ${item[1]}

                        </p>


                        <button
                            class="btn secondary"
                            style="margin-top:12px"
                            onclick="enableNotification()">

                            🔔 Notify Me

                        </button>

                    </article>

                    `
                ).join("")
            }

        </section>

    </main>

    `;
}


// ==========================================
// NOTIFICATION
// ==========================================

function enableNotification() {

    alert(
        "Notification enabled successfully!"
    );

}


// ==========================================
// PAGE ROUTING
// ==========================================

function render() {

    const page =
        location.hash
        .replace("#", "") ||
        "home";


    const routes = {

        home: home,

        login: () =>
            authPage("login"),

        signup: () =>
            authPage("signup"),

        admin: adminDashboard,

        user: userDashboard,

        fixtures: fixturesPage,

        standings: standings,

        stats: stats,

        tickets: tickets,

        news: newsPage

    };


    // Display selected page
    app.innerHTML =
        (
            routes[page] ||
            home
        )();

}


// ==========================================
// LISTEN FOR URL CHANGES
// ==========================================

window.addEventListener(
    "hashchange",
    render
);


// ==========================================
// START APPLICATION
// ==========================================

render();
