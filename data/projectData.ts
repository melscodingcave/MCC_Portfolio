export interface ProjectScreenshot {
    src: string
    alt: string
    caption: string
}

export interface ProjectDetail {
    id: string
    slug: string
    title: string
    emoji: string
    tagline: string
    description: string
    problem: string
    solution: string
    techStack: { name: string; reason: string }[]
    keyDecisions: string[]
    screenshots: ProjectScreenshot[]
    testCount: string
    testFramework: string
    githubUrl: string
    relatedProject?: { title: string; slug: string }
}

export const projectDetails: ProjectDetail[] = [
    {
        id: '1',
        slug: 'league-api',
        title: 'league-api',
        emoji: '🏆',
        tagline: 'REST API for billiards league management',
        description: 'A fully documented REST API for managing a billiards league — players, matches, standings, and win/loss records. Built to showcase C#/.NET backend engineering, REST API design, Entity Framework, PostgreSQL integration, and containerized deployment.',
        problem: 'Most billiards league management is done in spreadsheets or basic apps that don\'t enforce the domain rules that make league play meaningful — handicap races, active player management, computed standings.',
        solution: 'A domain-driven REST API that validates billiards-specific business rules at the API level. Winner\'s score must equal their race. Loser\'s score must be below their race. Forfeits auto-set the winner\'s score. Standings are computed on the fly from match results — never stored.',
        techStack: [
            { name: 'C# / ASP.NET Core', reason: 'Primary language from 7+ years at Net Health' },
            { name: 'Entity Framework Core', reason: 'ORM for clean database interaction without raw SQL' },
            { name: 'PostgreSQL', reason: 'Production-grade database in Docker container' },
            { name: 'Docker', reason: 'Single command deployment with docker-compose up' },
            { name: 'Swagger / OpenAPI', reason: 'Auto-generated API documentation' },
        ],
        keyDecisions: [
            'Standings computed on the fly rather than stored — always accurate, better for testing',
            'Soft delete for players (IsActive flag) because league players go inactive and return',
            'Hard delete for matches — an incorrectly recorded match should simply not exist',
            'DeleteBehavior.Restrict on all three Player foreign keys to prevent cascade delete conflicts',
            'Email normalized to lowercase on save — consistent data storage over runtime comparisons',
        ],
        screenshots: [
            { src: '/screenshots/league-api-swagger.png', alt: 'Swagger UI showing all endpoints', caption: 'Full API surface documented via Swagger — Matches, Players, and Standings controllers' },
            { src: '/screenshots/league-api-post-match.png', alt: 'POST /api/Matches response', caption: 'Recording a match with domain validation — winner score, race length, and game type enforced' },
            { src: '/screenshots/league-api-standings.png', alt: 'GET /api/Standings response', caption: 'Computed standings returned on the fly — win percentage, streak, and rack efficiency' },
        ],
        testCount: '32 scenarios',
        testFramework: 'SpecFlow/Gherkin',
        githubUrl: 'https://github.com/melscodingcave/league-api',
        relatedProject: { title: 'break-and-verify', slug: 'break-and-verify' },
    },
    {
        id: '2',
        slug: 'break-and-verify',
        title: 'break-and-verify',
        emoji: '✅',
        tagline: 'BDD test suite for league-api',
        description: 'A SpecFlow/Gherkin BDD test suite that validates every endpoint and business rule in league-api. Written in plain English scenarios that non-technical stakeholders can read and verify.',
        problem: 'API validation logic — especially domain-specific rules like handicap scoring — is easy to break silently. A test suite that reads like requirements prevents that.',
        solution: '32 Gherkin scenarios organized into three feature files: Player Management, Match Management, and Standings. Each scenario is self-contained with GUID-based test data and cleanup hooks.',
        techStack: [
            { name: 'C# / NUnit', reason: 'Matches the language of the system under test' },
            { name: 'SpecFlow', reason: 'Industry standard BDD framework for .NET' },
            { name: 'Gherkin', reason: 'Human-readable test scenarios stakeholders can verify' },
        ],
        keyDecisions: [
            'GUID-based email addresses for test data isolation — no conflicts between runs',
            'Soft delete cleanup in AfterScenario hooks — active roster stays clean after tests',
            'Separate ListResponse and Response context keys — prevents 204 overwriting 200 assertions',
            'Page Object Model equivalent using ScenarioContext as shared state between steps',
            'Tests run against Docker container — same environment as production',
        ],
        screenshots: [
            { src: '/screenshots/break-and-verify-tests.png', alt: 'Test Explorer showing 32 passing scenarios', caption: '32 passing scenarios across Match Management, Player Management, and Standings feature files' },
        ],
        testCount: '32 scenarios',
        testFramework: 'SpecFlow BDD',
        githubUrl: 'https://github.com/melscodingcave/break-and-verify',
        relatedProject: { title: 'league-api', slug: 'league-api' },
    },
    {
        id: '3',
        slug: 'rack-stats',
        title: 'rack-stats',
        emoji: '📈',
        tagline: 'Tournament analytics pipeline for the Florida Billiards Circuit',
        description: 'A Python data pipeline that generates synthetic billiards tournament data, stores it in SQLite, computes meaningful stats via SQL aggregations, and presents everything in an interactive Streamlit dashboard.',
        problem: 'Tournament data in billiards is typically tracked in spreadsheets with no analytics layer. Understanding venue performance, player trends, and game type distributions requires manual work.',
        solution: 'An ETL pipeline with domain-accurate synthetic data — real Florida venue names, realistic Fargo rating distributions, proper handicap vs open tournament separation — feeding an interactive dashboard.',
        techStack: [
            { name: 'Python', reason: 'Primary data engineering language' },
            { name: 'SQLAlchemy', reason: 'ORM for database modeling — same pattern as EF Core' },
            { name: 'Pandas', reason: 'DataFrame-based data manipulation and aggregation' },
            { name: 'Streamlit', reason: 'Instant web dashboard from Python scripts' },
            { name: 'Plotly', reason: 'Interactive charts with hover and zoom' },
            { name: 'SQLite', reason: 'Zero-config database — anyone can run it locally' },
        ],
        keyDecisions: [
            'Synthetic data uses real Florida venue names and accurate tournament formats',
            'Handicap tournaments ($20-50 entry, Fargo ≤650) vs open tournaments ($100-200, any Fargo) modeled separately',
            'Race lengths domain-accurate: Race to 7 for 9/10-ball, Race to 3 or 5 for Banks',
            'Field size weighted toward 22-24 players to match real local tournament averages',
            'W/L computed from match results rather than stored — caught 2 real query bugs during testing',
        ],
        screenshots: [
            { src: '/screenshots/rack-stats-overview.png', alt: 'Circuit overview metrics', caption: '12 tournaments, 32 players, 224 matches, $17,050 total payout across the 2025 circuit' },
            { src: '/screenshots/rack-stats-standings.png', alt: 'Player standings chart', caption: 'Top 10 players by win percentage with rack efficiency color coding — Marvel vs DC on the felt' },
            { src: '/screenshots/rack-stats-venues.png', alt: 'Venue analytics chart', caption: 'Total payout by venue and game type — Davie and West Palm Beach leading the circuit' },
            { src: '/screenshots/rack-stats-tournaments.png', alt: 'Tournament details table', caption: 'Full tournament details table with sortable columns' },
        ],
        testCount: '14 scenarios',
        testFramework: 'PyTest',
        githubUrl: 'https://github.com/melscodingcave/rack-stats',
    },
    {
        id: '4',
        slug: 'the-practice-log',
        title: 'the-practice-log',
        emoji: '🎱',
        tagline: 'AI-powered billiards practice tracker',
        description: 'A React/TypeScript app for logging billiards practice sessions with shot-level detail, trend visualization across sessions, and Claude API coaching feedback.',
        problem: 'Billiards practice without tracking is just hitting balls. Knowing which contact points you miss, at which power levels, across which drills — that\'s how you improve.',
        solution: 'A practice logger that captures drill type, individual shots (contact point, power, result), and session notes. Recharts visualizes trends over time. The Claude API analyzes your session data and provides coaching feedback specific to your patterns.',
        techStack: [
            { name: 'React 19', reason: 'Component architecture for a multi-panel UI' },
            { name: 'TypeScript', reason: 'Type safety across session and shot data models' },
            { name: 'Vite', reason: 'Fast dev server and build tool' },
            { name: 'Tailwind CSS', reason: 'Utility-first styling matching billiards color palette' },
            { name: 'Recharts', reason: 'Line charts for made/missed trends by drill type' },
            { name: 'Claude API', reason: 'AI coaching debrief based on actual shot data' },
        ],
        keyDecisions: [
            'localStorage persistence — no backend needed for a practice log',
            'Shot logger uses accordion pattern — collapses after save to keep UI compact',
            'Shots not required to save a session — Ghost ball practice doesn\'t lend itself to shot logging',
            'AI prompt instructs Claude to return plain text, not markdown — simpler rendering',
            'Drill types domain-accurate: Straight-ins, Cut Shots, Cue Ball Control, Breaking, Safety, Kick, Bank, Ghost',
        ],
        screenshots: [
            { src: '/screenshots/practice-log-session.png', alt: 'Session logger with shots', caption: 'Logging a Straight-ins session with 6 shots tracked by contact point, power, and result' },
            { src: '/screenshots/practice-log-trends.png', alt: 'Practice trends chart', caption: 'Made/missed trend line showing improvement across sessions for a drill type' },
            { src: '/screenshots/practice-log-debrief.png', alt: 'AI Coach Debrief', caption: 'Claude analyzes shot patterns and provides specific coaching feedback based on your data' },
        ],
        testCount: '16 unit + 21 E2E',
        testFramework: 'Vitest + Playwright',
        githubUrl: 'https://github.com/melscodingcave/the-practice-log',
        relatedProject: { title: 'cue-qa', slug: 'cue-qa' },
    },
    {
        id: '5',
        slug: 'cue-qa',
        title: 'cue-qa',
        emoji: '🔬',
        tagline: 'Playwright E2E test suite for the-practice-log',
        description: 'A Playwright TypeScript test suite covering navigation, session management, and trend filtering for the-practice-log. 21 scenarios across 3 spec files with GitHub Actions CI integration.',
        problem: 'UI logic — accordion behavior, localStorage persistence, drill type filtering — is easy to break silently. E2E tests catch what unit tests miss.',
        solution: '21 scenarios organized into Navigation, Session, and Trends spec files. Tests run against the live dev server. GitHub Actions runs the full suite on every push.',
        techStack: [
            { name: 'Playwright', reason: 'Cross-browser E2E testing with built-in HTML reports' },
            { name: 'TypeScript', reason: 'Type-safe test code matching the app\'s language' },
            { name: 'GitHub Actions', reason: 'CI pipeline runs tests on every push' },
        ],
        keyDecisions: [
            'localStorage cleared in beforeEach — each test starts with a clean slate',
            'Semantic locators (getByRole, getByText) over CSS selectors — resilient to styling changes',
            'Separate navigation, session, and trends spec files — each concern independently runnable',
            'webServer config auto-starts the-practice-log dev server before tests run',
            'Screenshot on failure captures the exact state when a test breaks',
        ],
        screenshots: [
            { src: '/screenshots/cue-qa-report.png', alt: 'Playwright HTML report', caption: '21/21 passing — navigation, session management, and trends covered across Chromium' },
            { src: '/screenshots/cue-qa-terminal.png', alt: 'Terminal showing test results', caption: '21 passed in 11 seconds across 8 workers' },
        ],
        testCount: '21 scenarios',
        testFramework: 'Playwright',
        githubUrl: 'https://github.com/melscodingcave/cue-qa',
        relatedProject: { title: 'the-practice-log', slug: 'the-practice-log' },
    },
    {
        id: '6',
        slug: 'chalk-it-up',
        title: 'chalk-it-up',
        emoji: '📱',
        tagline: 'Cross-platform 9-Ball scorekeeper',
        description: 'A Flutter/Dart casual match scorekeeper for 9-Ball with innings tracking, break tracking, undo support, and an AI trash talk generator powered by the Claude API.',
        problem: 'Keeping score during a casual billiards match means someone has to remember the count, or use a phone app that wasn\'t designed for pool. Most score apps are generic.',
        solution: 'A minimal, tap-to-score interface designed for billiards — split screen for two players, tap to score, long press to undo, track innings and who broke. The AI trash talk generator adds personality at match end.',
        techStack: [
            { name: 'Flutter', reason: 'Cross-platform — one codebase for iOS, Android, and Windows' },
            { name: 'Dart', reason: 'Flutter\'s language — familiar from company Shell App work' },
            { name: 'Claude API', reason: 'AI trash talk generator at match completion' },
            { name: 'flutter_dotenv', reason: 'API key management via .env file' },
        ],
        keyDecisions: [
            'Intentionally minimal — no accounts, no cloud, no history. Just score the match.',
            'Soft lock after match complete — tapping after winner declared does nothing',
            'Long press to undo — prevents accidental score increments',
            'Race length as number input (1-20) not dropdown — handicapped races vary',
            'AI trash talk prompt instructs Claude to be billiards-specific and keep it light',
        ],
        screenshots: [
            { src: '/screenshots/chalk-it-up-setup.png', alt: 'Setup screen', caption: 'Enter player names and race length before the match — defaults to Race to 7' },
            { src: '/screenshots/chalk-it-up-match.png', alt: 'Match in progress', caption: 'Tap to score, hold to undo, track innings and break — Allen leading 6-3' },
            { src: '/screenshots/chalk-it-up-winner.png', alt: 'Winner banner with trash talk', caption: 'AI-generated billiards trash talk from Claude at match completion' },
        ],
        testCount: '12 scenarios',
        testFramework: 'Flutter Widget Tests',
        githubUrl: 'https://github.com/melscodingcave/chalk-it-up',
    },
]