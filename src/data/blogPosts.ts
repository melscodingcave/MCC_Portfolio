export interface BlogPost {
    id: string
    title: string
    slug: string
    category: string
    readTime: string
    date: string
    summary: string
    content: string
    tags: string[]
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'vibe-coding-ai-collaborator-not-ghostwriter',
        title: 'Vibe Coding: AI as a Collaborator, Not a Ghostwriter',
        category: 'AI Development',
        readTime: '6 min read',
        date: 'March 2025',
        summary: 'What I learned from intentionally building alongside AI instead of just using it for quick answers — and why the biggest shift wasn\'t speed, it was clarity.',
        tags: ['AI', 'Development', 'Vibe Coding', 'Engineering Philosophy'],
        content: `
  I've been intentionally practicing what people call "vibe coding" — building alongside AI instead of just using it for quick answers.
  
  Two things pushed me there.
  
  A billiards league teammate — a seasoned software engineer — challenged himself to build a full site using only AI. The result was a working web app comparing pro stats and payouts. Not a gimmick. Functional. Around the same time, I started a ZTM course focused on this approach.
  
  So I tested it myself.
  
  Not copy/paste coding. More like pressure-testing design decisions, generating scaffolding to focus on structure, and surfacing edge cases earlier.
  
  **The biggest shift wasn't speed. It was clarity.**
  
  If I can't clearly define what I'm building, AI exposes that quickly. Vague prompts produce vague results. The discipline required to work effectively with AI is the same discipline that makes you a better engineer without it — you have to know what you want before you can ask for it.
  
  ## What I Actually Mean by Vibe Coding
  
  I'm not talking about accepting whatever the model produces and shipping it. That's not vibe coding — that's outsourcing your judgment.
  
  What I mean is using AI as a thinking partner:
  
  - I describe the problem, not just the implementation
  - I push back when the suggestion doesn't fit my context
  - I ask "why" when something looks off
  - I own every line that goes into the codebase
  
  My portfolio projects all have an \`AI-NOTES.md\` file that documents exactly this — what AI suggested, what I changed, and why. Not to prove I'm clever, but because the reasoning behind a decision matters as much as the decision itself.
  
  ## The Comprehension Debt Problem
  
  I've been reading about a concept called "Comprehension Debt" — the idea that as more AI-generated code gets committed, overall understanding of that code declines. It might be technically correct. It might even pass review. But that doesn't mean it aligns with your architecture, your team's mental model, or long-term maintainability.
  
  Having worked in healthcare and aerospace, that gap concerns me deeply. In regulated environments, "it works" isn't enough. You need to know *why* it works, *under what conditions*, and *what breaks it*.
  
  AI is a powerful tool. It doesn't replace responsibility.
  
  ## The Practical Takeaway
  
  Used intentionally, AI doesn't replace judgment — it sharpens it.
  
  The engineers who will thrive in an AI-assisted world aren't the ones who use it most. They're the ones who use it most *deliberately* — who know when to accept a suggestion, when to push back, and when to throw it out entirely.
  
  That requires domain knowledge. Context. Experience. Things AI doesn't have and won't develop.
  
  Ask it questions. Use its help. But own your work.
  
  Tools don't replace ownership. People do.
      `
    },
    {
        id: '2',
        slug: 'outputs-lie-what-qa-taught-me-about-trusting-data',
        title: 'Outputs Lie: What QA Taught Me About Trusting Data',
        category: 'Engineering Philosophy',
        readTime: '5 min read',
        date: 'March 2025',
        summary: 'A passing test doesn\'t prove system resilience. A clean dashboard doesn\'t guarantee clean inputs. Working in QA taught me to question the structure behind the output.',
        tags: ['QA', 'Data', 'Engineering Philosophy', 'Testing'],
        content: `
  Working in QA — and spending a lot of time around data — taught me something early:
  
  **Outputs lie. Or at least, they mislead without context.**
  
  - A passing test doesn't prove system resilience
  - A clean dashboard doesn't guarantee clean inputs
  - A defect rarely starts where it surfaces
  - "No alerts" isn't the same as "no risk"
  
  I've become less interested in the number and more interested in what produced it.
  
  ## The Questions That Actually Matter
  
  When I look at a test result, a metric, or a system output, the surface value is almost never the interesting part. The interesting part is:
  
  - What assumptions were made to produce this?
  - What dependencies shifted since we last validated this?
  - What edge case hasn't been exercised yet?
  - What would have to be true for this to be wrong?
  
  These aren't cynical questions. They're engineering questions. The difference between a system you trust and a system you *think* you trust is usually found somewhere in the answers.
  
  ## Defects Don't Start Where They Surface
  
  This is the one that took me longest to internalize.
  
  In distributed systems especially, the place a defect shows up is rarely the place it originated. A billing error might trace back to a data mapping issue that's been silently wrong for months. An API timeout might be caused by a query that worked fine until the dataset hit a certain size.
  
  QA work taught me to trace backwards — to treat every defect as a symptom first, and a cause second. That mindset changes how you investigate, how you write tests, and how you design systems.
  
  ## Trust Comes From Understanding Behavior Under Stress
  
  Reports don't build trust. Understanding does.
  
  I've seen teams feel confident about a system because their dashboards were green — right up until the moment something unexpected happened and nobody understood why. The green dashboard didn't reflect the system's actual behavior under load, under edge cases, or under conditions the tests hadn't anticipated.
  
  Real trust in a system comes from knowing how it behaves when things go wrong. That means:
  
  - Testing the unhappy paths as thoroughly as the happy ones
  - Understanding failure modes before they're triggered in production
  - Treating "no known issues" as a starting point for investigation, not a conclusion
  
  ## The Practical Shift
  
  Whether it's a test result or a business metric, the real engineering work is understanding the structure behind the output.
  
  Don't trust the number. Understand the system that produced it.
  
  That's the shift QA gave me — and it's shaped how I approach every problem I work on.
      `
    },
    {
        id: '3',
        slug: 'automation-in-legacy-systems',
        title: 'Automation in Legacy Systems: The Questions Nobody Asks',
        category: 'Test Automation',
        readTime: '5 min read',
        date: 'March 2025',
        summary: 'Adding automation to a legacy codebase isn\'t about tools. It\'s about understanding the structure well enough to introduce change responsibly.',
        tags: ['Automation', 'Legacy Systems', 'Testing', 'Engineering'],
        content: `
  I've been spending time thinking through what it actually takes to add automation into a legacy codebase.
  
  It's one thing to automate something built with testing in mind. It's another when the original design didn't account for it at all.
  
  ## The Wrong Questions
  
  Most conversations about legacy automation start in the wrong place:
  
  - "Which framework should we use?"
  - "What's our coverage target?"
  - "How long will this take?"
  
  These aren't bad questions. They're just premature. The more important questions come first.
  
  ## The Right Questions
  
  **Where can you introduce seams without changing behavior?**
  
  A seam is a place in the code where you can change behavior without modifying the code itself. In legacy systems, seams are often hidden — buried in tight coupling, global state, or direct dependencies that make isolation nearly impossible. Finding them requires reading the system carefully before writing a single test.
  
  **How do you improve visibility without overengineering it?**
  
  The temptation in legacy automation work is to build a beautiful, comprehensive framework from scratch. Resist it. The goal isn't to build the perfect test suite — it's to add enough visibility that you can change the system with confidence. Start small. Add value incrementally.
  
  **What's worth adapting — and what should remain untouched?**
  
  Not everything in a legacy system is wrong. A lot of it reflects decisions made under real constraints — performance requirements, team knowledge, infrastructure limitations. The goal isn't to rewrite it. The goal is to understand it well enough to layer in testability without breaking what works.
  
  ## Legacy Systems Aren't "Bad"
  
  This is worth saying directly: legacy systems aren't failures. They're systems that survived.
  
  They reflect years of decisions made under different constraints, with different information, by different teams. Treating them as enemies to be defeated usually produces worse outcomes than treating them as systems to be understood.
  
  The engineers who do this work well are the ones who approach legacy code with curiosity instead of contempt.
  
  ## Automation at This Stage
  
  Coverage numbers are almost meaningless in legacy automation work. What matters is:
  
  - Understanding the structure well enough to know where tests will actually catch regressions
  - Introducing automation in places where the cost of a bug is highest
  - Building confidence incrementally rather than promising comprehensive coverage upfront
  
  The hardest part of legacy automation isn't technical. It's having the patience to understand the system before trying to change it.
  
  That's the kind of engineering problem I enjoy most.
      `
    },
    {
        id: '4',
        slug: 'durability-over-bandaid',
        title: 'Durability Over a Band-Aid: How I Think About Software',
        category: 'Engineering Philosophy',
        readTime: '5 min read',
        date: 'March 2025',
        summary: 'I stopped thinking about the immediate fix and started thinking about durability. The billiards table taught me that small inputs shape the entire run.',
        tags: ['Engineering Philosophy', 'Career', 'Software Design', 'Billiards'],
        content: `
  When I look back on my career, I don't think I was chasing roles. I was moving closer to understanding how things actually work.
  
  - In customer support, I saw where users got stuck and wanted to reduce that friction.
  - In product support, I started recognizing the same issues resurfacing — different tickets, same root cause.
  - In QA, I questioned assumptions and flagged the "not a problem yet, but it will be" scenarios.
  - Now, doing automation and development work, my focus has shifted. Instead of fixing one issue at a time, I look at root causes and make changes that actually hold up.
  
  Somewhere along the way, I stopped thinking only about the immediate fix and started thinking about durability.
  
  ## The Billiards Parallel
  
  I've always been drawn to that mindset. And billiards made it concrete for me.
  
  In billiards, you don't just take the next shot — you play position for the ones after it. Angle, speed, spin — small inputs shape the entire run. The difference between a good player and a great one isn't pocket-making ability. It's cue ball control. It's leaving yourself a shot after the shot.
  
  Software isn't much different.
  
  The fix you implement today either sets you up for the next problem or compounds it. The architecture decision you make now shapes what's possible — and what's painful — two years later.
  
  ## What Durability Actually Looks Like
  
  Durable solutions tend to share a few characteristics:
  
  **They're understandable.** The engineer who reads this code six months from now — probably you — can follow the logic without reverse-engineering it.
  
  **They handle failure gracefully.** Not just the happy path, but the edge cases, the unexpected inputs, the conditions that weren't anticipated when the feature was first built.
  
  **They're testable.** If you can't write a test for it, that's usually a signal that the design has a problem — not a test problem, a structure problem.
  
  **They don't create new problems to solve the current one.** This is the hardest one. The temptation to add complexity in the name of flexibility is real. Durable solutions add as little complexity as possible while solving the actual problem.
  
  ## Fixing the Issue vs. Designing What Happens Next
  
  Fixing the current issue matters. Designing what happens next matters more.
  
  That shift has shaped how I build — and it's shaped the way I evaluate work. Not just "does this work?" but "does this hold up?" Not just "is this correct?" but "will this still be correct under conditions we haven't thought of yet?"
  
  Still building with that question in mind.
      `
    },
    {
        id: '5',
        slug: 'best-route-vs-easiest-route',
        title: 'The Best Route vs The Easiest Route',
        category: 'Engineering Philosophy',
        readTime: '4 min read',
        date: 'April 2025',
        summary: 'Most companies push for the quickest solution. But 9 times out of 10, those aren\'t the best solutions. The question we should be asking isn\'t "what\'s fastest?" — it\'s "what\'s smartest?"',
        tags: ['Engineering Philosophy', 'Software Design', 'Career'],
        content: `
  I've had a coworker who took the easy way out. Someone who would try to get others to do the work they were responsible for. I never found out whether it was a lack of knowledge, experience, or confidence — but watching it happen got me thinking.
  
  If you had to choose between the quickest route and the more time-intensive, detailed one, which would you pick?
  
  Most people choose the former. My answer wouldn't be so straightforward.
  
  **My response would be a question: which one is actually needed, and why?**
  
  ## The Speed Trap
  
  Most companies — especially with AI in the mix — are pushing for the quickest solutions. Ship faster. Move faster. Decide faster.
  
  But 9 times out of 10, the fastest solution isn't the best one. It's often the one that creates the most downstream problems — problems that better research, better design, or a slightly longer conversation upfront could have prevented entirely.
  
  I've seen this pattern consistently across healthcare, aerospace, and enterprise software:
  
  - The quick fix ships
  - It works fine under normal conditions
  - Six months later, an edge case hits
  - The fix for the quick fix takes three times as long as the original work would have
  
  ## The Right Question
  
  Instead of asking "what's the fastest way to do this?" we should be asking "what's the smartest and most efficient way?"
  
  Efficiency doesn't always mean immediate speed. Sometimes it means investing weeks — or even months — into building something right, so you never have to do it again.
  
  In billiards, this maps directly. You don't just take the next shot. You play position for the ones after it. The angle you leave yourself on determines whether you run the rack or hand it to your opponent.
  
  Software isn't different. The decision you make today shapes the problem you're solving six months from now.
  
  ## The Response Nobody Wants to Hear
  
  When you ask for that time — to do it right, to design it properly, to think it through — the response is often: "we can't afford it."
  
  What's rarely acknowledged is that "we can't afford it" is itself a decision. A decision to accept the risk of downstream problems, rework, and technical debt in exchange for speed today.
  
  That's sometimes the right call. Constraints are real. Deadlines matter. But it should be an explicit decision, made with full awareness of the tradeoff — not a default.
  
  ## The Mindset That Actually Helps
  
  The engineers I've respected most aren't the ones who move fastest. They're the ones who ask the best questions before they start moving.
  
  - What problem are we actually solving?
  - What does success look like in 6 months, not just at launch?
  - What breaks if this assumption is wrong?
  - What's the cost of getting this wrong?
  
  Those questions slow you down at the start. They save you enormous amounts of time everywhere else.
  
  That's not the easy route. But it's usually the right one.
      `
    },
    {
        id: '6',
        slug: 'high-impact-work-small-observations',
        title: 'High Impact Work Starts With Small Observations',
        category: 'Engineering Philosophy',
        readTime: '4 min read',
        date: 'April 2025',
        summary: 'The highest-impact work often comes from improving systems, not just executing within them. None of my most meaningful improvements started as assigned work.',
        tags: ['Engineering', 'Career', 'Impact', 'Automation'],
        content: `
  One thing I've been reflecting on recently is how often inefficiencies become "normal" over time.
  
  A process that takes hours. A tool that doesn't scale. A workflow with built-in bottlenecks. We adapt to them. We work around them. Eventually, we stop noticing them.
  
  But every so often, it's worth stepping back and asking: is there a better way this could work?
  
  ## The Things That Started as Observations
  
  In the past few years, that question led to a few meaningful improvements:
  
  **Cutting a 6–10 hour disk copy process down to under an hour.** What started as noticing that the existing process was painfully slow turned into a systematic approach to imaging and provisioning that the team now uses as a standard.
  
  **Replacing a shared spreadsheet with a database-backed approach.** The spreadsheet had a waitlist. People were waiting to update it. That's not a spreadsheet problem — that's a design problem. Recognizing the pattern led to a better solution.
  
  **Prototyping a more scalable testing approach using a dev codebase.** The existing coverage wasn't keeping pace with system complexity. Instead of just adding more tests to the existing structure, I looked at the architecture and found a better place to start.
  
  What stood out in each case: none of these started as assigned work.
  
  They started as small observations.
  
  ## Why This Matters
  
  Most engineering work is execution — taking a defined problem and building a defined solution. That work matters. It keeps systems running.
  
  But the highest-impact work is usually found one level up: identifying which problems are worth solving, and why the current approach isn't solving them well enough.
  
  That requires permission to notice things. To say "this seems inefficient" without immediately being redirected to the current sprint. To treat observations as the beginning of a conversation, not a complaint.
  
  ## The Mindset Shift
  
  I've found that engineers who consistently do high-impact work share something in common: they're genuinely curious about the systems they work in, not just the tasks they're assigned.
  
  They ask:
  - Why does this process work this way?
  - What would have to be true for this to be the right approach?
  - What's the cost of this inefficiency, compounded over time?
  
  The answers to those questions often point to work that's more valuable than anything on the backlog.
  
  The highest-impact work often comes from improving systems, not just executing within them.
  
  Start with the observation. See where it leads.
      `
    },
    {
        id: '7',
        slug: 'passive-adaptive-workout-tech',
        title: 'Why Workout Apps Still Behave Like Spreadsheets With Timers',
        category: 'Product Thinking',
        readTime: '6 min read',
        date: 'May 2026',
        summary: 'We have AI systems capable of interpreting language and adapting to users over time. So why do most fitness apps still require constant manual interaction during the worst possible moment to use a phone?',
        tags: ['Product Thinking', 'AI', 'UX', 'Fitness Tech'],
        content: `
  Why do workout apps still behave like spreadsheets with timers attached?
  
  We have AI systems capable of interpreting language, analyzing patterns, and adapting to users over time. Yet most fitness apps still require people to unlock their phone between sets, manually enter reps, start rest timers, and navigate workout screens mid-session.
  
  Workouts are one of the worst environments for constant user interaction. Your hands are sweaty. You're breathing hard. You're mentally focused on movement, recovery, or simply trying to finish.
  
  The more I think about it, the more it feels like fitness tech may be approaching the problem backwards.
  
  ## The Backwards Assumption
  
  Most fitness apps are built around data entry. The user is responsible for logging what they did. The app stores it. Maybe it shows you a graph.
  
  But the assumption — that users *want* to interact with their phone during a workout — is worth questioning.
  
  What if the goal isn't to make data entry easier, but to make it unnecessary?
  
  ## What Passive and Adaptive Actually Means
  
  Not VR. Not AI screaming motivational quotes. Not replacing coaches.
  
  More like:
  
  - **Voice-first interaction** — "log that set" instead of navigating three screens
  - **Automatic rest timing** — the system knows you finished a set
  - **Passive rep detection** — wearable or camera-based, no manual entry
  - **Wearable telemetry** — heart rate, HRV, and movement data feeding into recommendations
  - **Movement pattern recognition** — detecting compensation, form breakdown, fatigue
  
  ## The Adaptive Layer
  
  Here's where it gets interesting.
  
  Imagine a system where the first few weeks are user-guided while the system learns: pacing, fatigue patterns, recovery tendencies, mobility limitations, movement compensations, progression capability, even motivation patterns.
  
  Then it starts adapting in real time.
  
  Not just "increase weight." But things like:
  
  - "Your shoulder mobility has been declining lately. Want to add a quick mobility block before pressing today?"
  - "You seem exhausted today. Want to reduce volume and focus on movement quality instead?"
  - "Your performance trends suggest you can push harder today if you want to."
  - "You've skipped a few workouts. Want a shorter recovery-focused session instead?"
  
  The system quietly reduces friction, adapts to the user, and supports consistency over time.
  
  ## The Gap Worth Exploring
  
  There's a massive unexplored space between basic workout trackers and elite biomechanics labs.
  
  Consumer fitness tech has gotten very good at tracking. It hasn't gotten nearly as good at *adapting* — at using what it knows about a specific person to change what it recommends for that specific person, in that specific session, on that specific day.
  
  That's the gap. And it feels like the right kind of engineering problem.
  
  Curious what people in fitness tech, wearables, biomechanics, AI systems, or UX think about where this space is heading.
      `
    },
    {
  id: '8',
  slug: 'millennials-perspective-on-ai',
  title: "A Millennial's Perspective on AI: Tool, Not Replacement",
  category: 'AI Development',
  readTime: '6 min read',
  date: 'May 2026',
  summary: "They say millennials are the last generation that truly remembers life before technology consumed it. Here's what that perspective means for how I think about AI in software development.",
  tags: ['AI', 'Engineering Philosophy', 'Career', 'Technology'],
  content: `
They say millennials are the last generation that truly remembers what life was like before technology consumed it. I don't just remember it — I lived it, in full detail.

I remember softball games where the biggest distraction was keeping score on a paper sheet someone's mom was holding. Afterward, we'd pile into the ice cream parlor, argue over what flavors to get, and get it all over each other in the process. Nobody was looking at a phone. There were no phones to look at. Just a group of kids being loud and present and completely, unselfconsciously *there*.

I remember the specific thrill of buying a prepaid cell phone with free nighttime minutes — secretly, obviously — so I could text friends when I was supposed to be asleep. I remember the equally specific humiliation of getting it taken away when my parents found out. I remember dual-booting my PC with Linux and Windows because I wanted to dig into the kernel *and* keep playing The Sims, and I remember my dad installing every parental control known to man after he had to rescue my computer from yet another virus I'd somehow caught.

I was embarrassed. I was grounded. And here's what I appreciate most in retrospect: **none of it was documented.** No screenshots. No posts. No threads. Those moments existed, and then they were just memories — mine and my family's — and nothing else.

*Also shared on [LinkedIn](https://www.linkedin.com/posts/melaniebasso_softwaredevelopment-ai-techindustry-share-7460394757748600833-iNh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsaJtYBVeD3Fi7kLP1aXml_3EABYCZLjDo).*

## Growing Up and Falling in Love with Code

I eventually channeled all of that early curiosity into a real career in technology. But it wasn't until I found software development and coding that something fully clicked. There's a particular kind of satisfaction in building something from scratch — in writing logic that works, in debugging something that didn't, in finally understanding a concept you'd been circling for weeks. I was learning languages, building projects, and starting to think seriously about what it means to engineer software well.

And right in the middle of all of that, AI stepped onto the scene in a serious way.

## AI as a Learning Tool — Not Just a Productivity Hack

The conversation around AI in tech tends to default quickly to productivity and efficiency: it generates code faster, it automates repetitive tasks, it shortens timelines. All of that is true. But what caught me off guard was something less expected — **AI has become one of the most powerful learning tools I've encountered.**

When you're working through a problem you don't fully understand yet, you can think out loud with an AI and get a response that meets you where you are. You can ask it to explain a concept three different ways until one of them lands. You can build test coverage around edge cases you hadn't thought of. You can get a second set of eyes on dead code you missed, or ask it to walk you through a newer concept in frontend development that you haven't had time to dig into yet.

It doesn't replace the learning — it accelerates and deepens it. There's a meaningful difference.

For someone in the middle of building out a technical skillset, that's not a small thing. It's genuinely changed how I learn and how I work.

## The Complications Are Real

That said, pretending AI isn't creating serious disruption would be dishonest.

The infrastructure demands are significant — the computation power and architecture required to run these systems at scale is enormous, and that cost is being distributed in ways we're still understanding. The environmental footprint alone is a legitimate concern worth tracking.

And then there's the job displacement conversation, which has become impossible to ignore. "AI can do their job" has turned into a justification for layoffs across the industry, and the hype cycle is accelerating faster than our ability to evaluate it clearly. It raises a real question that I find myself sitting with:

**Are we overvaluing the tool — or undervaluing the people who have spent years building the knowledge, judgment, and intuition that actually make things work?**

The developers who've been writing software for a decade bring something that can't be prompted into existence. They know why a particular architectural decision was made three years ago. They know what the edge case looks like in production. They know when something feels wrong before they can fully articulate why. That's not knowledge a model is trained on. That's experience.

## Where I Land

AI will always have a place now. That's not a question. It makes things faster. It helps surface things we might have missed. It extends what individual developers can do. In the right hands, it's a genuinely powerful force multiplier.

But it is not a replacement for human reasoning. It doesn't carry context the way people do. It doesn't have the kind of judgment that comes from living through a project, a failure, a pivot, a launch. It doesn't understand what's at stake — for the user, for the team, for the business — the way a human being does.

The right frame isn't AI versus humans. It's AI *and* humans, with a clear-eyed understanding of what each brings to the table.

We should keep using it as the powerful tool it is. We should keep learning from it, building with it, and pushing what's possible with it. But we should not lose sight of what no tool — however sophisticated — can replicate: the human being on the other side of it.

*👉 [View the LinkedIn post](https://www.linkedin.com/posts/melaniebasso_softwaredevelopment-ai-techindustry-share-7460394757748600833-iNh4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsaJtYBVeD3Fi7kLP1aXml_3EABYCZLjDo)*
  `
},
    {
    id: '9',
    slug: 'documentation-foundation-not-afterthought',
    title: 'Documentation Is the Foundation, Not the Afterthought',
    category: 'Engineering Philosophy',
    readTime: '5 min read',
    date: 'May 2026',
    summary: "Most companies treat documentation as optional. It isn't. Without it, training takes years instead of months, bugs go unresolved, and decisions become mysteries — even to the people who made them.",
    tags: ['Documentation', 'Engineering Philosophy', 'Software Engineering', 'Engineering Culture', 'Tech Leadership'],
    content: `
Documentation is the foundation of everything in the digital age.

Every system you build, every process you define, every decision you make — documentation is what transforms individual knowledge into institutional knowledge. It's what allows teams to scale, onboarding to take months instead of years, and bugs to get resolved before they become crises.

So why do so many companies still treat it as optional?

*Also shared on [LinkedIn](https://www.linkedin.com/posts/melaniebasso_documentation-softwareengineering-engineeringculture-share-7462128378591203329-4Iif?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsaJtYBVeD3Fi7mkLP1aXml_3EABYCZLjDo).*

## The Spectrum I've Seen

I've seen the full spectrum across my career. Formal user manuals and work instructions on one end. A single comment buried in a 1,000-line JavaScript file — reflecting a developer's frustration more than the code's intent — on the other.

What stays consistent across all of it: even when one person advocates for documentation, most people treat it as a nuisance. Tedious. Unnecessary. Something to do after the real work is done.

But the real work *is* documentation.

## What Gets Lost Without It

The cost of undocumented systems isn't always immediately visible. It compounds quietly until it isn't quiet anymore.

- Bugs that could have been prevented if a stakeholder conversation had been written down
- Architectural decisions that made perfect sense at the time and are now a mystery to everyone, including the person who made them
- Training that drags on for a year because nothing was ever formalized
- Onboarding that takes three times as long as it should

These aren't hypotheticals. They're patterns I've watched repeat across industries — healthcare, aerospace, enterprise software. The environment changes. The outcome doesn't.

## The AI-Speed Problem

This concern is sharper now with the pace at which new companies are being stood up, many of them powered by AI that can generate code, content, and product faster than most teams can review it.

I find myself wondering: how many of those teams documented the decisions behind what they built? How many established a foundation before shipping?

My instinct says not many. And my prediction is that in a year or two, the ones who didn't will show it.

**You can't scale what you haven't thought through.** You can't maintain what you haven't explained. You can't grow a team, a product, or a company on undocumented assumptions.

Moving fast is valuable. But speed without a foundation isn't momentum — it's drift. The companies that survive aren't the ones who shipped fastest. They're the ones who built something that could be understood, maintained, and handed to the next person without starting from scratch.

## Documentation as Engineering Discipline

I've started thinking about documentation less as a deliverable and more as a discipline — the same way testing is a discipline, or code review is a discipline.

It's not something you do at the end. It's something you do throughout, because the act of documenting a decision forces clarity about why you made it. If you can't explain the reasoning, that's a signal worth paying attention to.

The teams I've respected most aren't the ones who moved the fastest. They're the ones who could answer the question "why did we do it this way?" six months after the fact — because someone wrote it down.

That's not bureaucracy. That's engineering.

*👉 [View the LinkedIn post](https://www.linkedin.com/posts/melaniebasso_documentation-softwareengineering-engineeringculture-share-7462128378591203329-4Iif?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAsaJtYBVeD3Fi7mkLP1aXml_3EABYCZLjDo)*
    `
},
]
