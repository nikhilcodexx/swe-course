/* =====================================================
   script.js: course data and checklist logic
   Needs index.html and style.css in the same folder
   ===================================================== */

/* 1. TERM DATA: one entry per term.
   Format: [term number, title, goal, [course items], project, [checkpoint questions]]
   Each course item is "Tag|Title|Link|Note". Tags: SW, AI, Math, Pro.
   Edit, add or remove courses here. Links open in a new tab. */
var D=[
[1,"Computing basics","Think like a programmer in one language before touching a second. Get a working machine, a GitHub account and the habit of building every week.",
["SW|CS50x, weeks 0–6|https://cs50.harvard.edu/x/|Scratch, C, arrays, algorithms, memory, data structures, then Python.","SW|Git, Linux and the command line|https://missing.csail.mit.edu/|MIT’s Missing Semester, plus learngitbranching.js.org for branching and merging.","Math|Algebra|https://www.khanacademy.org/math/algebra|Everything later, especially the ML maths, sits on this.","Pro|English I and learning how to learn|https://www.bbc.co.uk/learningenglish|Daily listening, grammar, and the working method above.","Pro|Project management I: Kanban|https://www.atlassian.com/agile/kanban|Run your own board for the whole term."],
"Command-line tool|A small Python or C tool you use yourself, tracked on a Kanban board.",
["Create, edit and delete files in the terminal without the mouse.","Explain a loop, a function and a variable to someone who does not code.","Make a branch, commit to it, and merge it back."]],
[2,"Python and problem solving","Finish the formal foundation. This separates someone who follows tutorials from someone who solves problems no tutorial covers.",
["SW|CS50x, weeks 7–10 and final project|https://cs50.harvard.edu/x/|SQL, HTML, JavaScript, Flask. The final project is your first real portfolio piece.","SW|Data structures and algorithms I|https://neetcode.io/|Arrays, hash maps, recursion, Big-O. 50 problems, with visualgo.net to see structures move.","SW|Write your first tests|https://docs.pytest.org/|Unit tests in Python.","Math|Statistics and probability|https://www.khanacademy.org/math/statistics-probability|Distributions, sampling, bias. The maths that explains why models go wrong.","Pro|English II and product thinking|https://paulgraham.com/articles.html|Read 10 essays. Write a one-page summary of what makes a product useful."],
"CS50 final project|Ship it to GitHub with a README explaining what it does and how to run it.",
["State the time complexity of a problem before writing code.","Implement a hash map from scratch.","Write a test that fails, then make it pass."]],
[3,"Web front end","Web development is the lowest-barrier route to employable proof of work: free to learn, free to deploy, visible to people who cannot read code.",
["SW|Responsive Web Design|https://www.freecodecamp.org/learn/|HTML, CSS, accessibility, Flexbox, Grid.","SW|JavaScript|https://www.freecodecamp.org/learn/|The language the whole web runs on, and the prerequisite for TypeScript.","SW|The Odin Project, foundations|https://www.theodinproject.com/|More open-ended than freeCodeCamp. Closes the gap to real work.","Math|Linear algebra intuition|https://www.3blue1brown.com/topics/linear-algebra|Vectors and matrices, visually, before the full course in Term 7.","Pro|English III and Scrum|https://scrumguides.org/|Write technical documentation. Run a real sprint on your project."],
"Portfolio site and one web app|Deploy free on GitHub Pages, Netlify or Vercel.",
["Send someone a live URL of something you built.","Explain what happens between pressing Enter in a browser and the page appearing.","Open a pull request on someone else’s repository."]],
[4,"Full-stack and first AI concepts","Add a back end and a database, and start AI with concepts and ethics before maths.",
["SW|Front-End Development Libraries (React)|https://www.freecodecamp.org/learn/|React is what most junior front-end adverts name.","SW|Relational Databases and Back End APIs|https://www.freecodecamp.org/learn/|PostgreSQL, Node, Express. Practise queries at pgexercises.com.","AI|Elements of AI|https://www.elementsofai.com/|University of Helsinki. No maths or programming needed.","Pro|Architecture I: client, server, HTTP, REST|https://roadmap.sh/|Use roadmap.sh as a map and read the first chapters of the System Design Primer.","Pro|English IV: presenting|https://learnenglish.britishcouncil.org/|Record every demo and review how you speak."],
"Year 1 capstone: full-stack app|Login, database, API, deployed, with an architecture diagram and a README.",
["Write a SQL query joining three tables.","Build an API with three documented endpoints.","Name one thing that breaks if 1,000 people use your app at once."]],
[5,"Computer science core","Algorithms and discrete maths, plus a statically typed language.",
["SW|Algorithms|https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/|MIT 6.006 lectures and problem sets, with NeetCode 100.","SW|Java Programming I|https://java-programming.mooc.fi/|University of Helsinki. Automatic grader gives instant feedback.","Math|Mathematics for Computer Science|https://ocw.mit.edu/|Search MIT OCW for 6.042J: logic, proofs, graphs, counting.","Pro|Project management II|https://www.atlassian.com/agile|Estimation, risk register, retrospectives.","Pro|English V: reading technical writing|https://owl.purdue.edu/|Read one paper or long article a week and summarize it."],
"Algorithms or Java project|For example a pathfinding visualizer with tests and complexity notes.",
["Prove an algorithm correct on paper.","Explain a class, an object and inheritance without cars or animals.","Solve 3 unseen medium problems in 90 minutes."]],
[6,"Data systems and TypeScript","Databases, typed JavaScript, and a service you can test and ship.",
["SW|Java Programming II|https://java-programming.mooc.fi/|Finish the graded exercises through part II.","SW|TypeScript|https://scrimba.com/learn-typescript-c03c|Convert one old project to TypeScript.","SW|Database systems|https://15445.courses.cs.cmu.edu/|CMU 15-445 lectures: indexes, transactions, query plans.","Pro|Architecture II: APIs, caching, queues|https://github.com/donnemartin/system-design-primer|Read the System Design Primer and draw each design yourself.","Pro|Product and selling I: customer discovery|https://www.startupschool.org/|Interview 5 real users about a problem."],
"TypeScript and Postgres service|Tests, CI and an API document. Interview users before you build.",
["Explain what a type error catches that a runtime error would not.","Explain an index and when it hurts.","Show your 5 interview notes."]],
[7,"Machine learning foundations","Learn the maths and the methods. Train on free Colab or Kaggle notebooks.",
["AI|Machine learning|https://cs229.stanford.edu/|Stanford CS229 lectures and notes, supported by Google’s ML Crash Course.","AI|Python data stack|https://www.kaggle.com/learn|NumPy, pandas, scikit-learn, with exercises.","Math|Linear algebra|https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/|Gilbert Strang’s MIT 18.06.","AI|Ethics of AI|https://ethics-of-ai.mooc.fi/|University of Helsinki.","Pro|English VI and product basics|https://www.startupschool.org/|Write a technical blog post about your ML project."],
"End-to-end ML project|Pick a real dataset, clean it, model it, evaluate it, write it up. Enter one Kaggle competition.",
["Explain bias and variance with an example.","Explain how a model learns from data, without jargon.","Describe a real unfair AI outcome and where unfairness entered."]],
[8,"Systems, cloud and security","Make software that runs somewhere real and stays up.",
["SW|Operating systems|https://pages.cs.wisc.edu/~remzi/OSTEP/|OSTEP: processes, memory, files, concurrency.","SW|Docker and CI/CD|https://docs.docker.com/get-started/|Containers, then GitHub Actions for tests and deploys.","SW|AWS Cloud Practitioner Essentials|https://aws.amazon.com/training/|Do the billing module first and set a zero budget alert.","SW|CS50 Cybersecurity|https://cs50.harvard.edu/cybersecurity/|Then audit your own project against the OWASP Top Ten.","Pro|Architecture III: reliability|https://sre.google/books/|Google’s SRE book: monitoring, failure, trade-offs."],
"Year 2 capstone: deployed ML API|A model in a container behind an API, with CI, monitoring, a design document and a post-mortem.",
["Explain what you rent when you rent a virtual machine.","Deploy something, then prove the bill is zero.","Fix one real vulnerability in your own code."]],
[9,"Deep learning","Neural networks from scratch, then the standard tools.",
["AI|Neural Networks: Zero to Hero|https://karpathy.ai/zero-to-hero.html|Andrej Karpathy builds backpropagation and GPT from scratch.","AI|Practical Deep Learning|https://course.fast.ai/|fast.ai part 1, in PyTorch.","AI|Computer vision|https://cs231n.github.io/|Stanford CS231n notes and assignments.","Math|Calculus and optimization for ML|https://www.3blue1brown.com/|Gradients, chain rule, gradient descent.","Pro|Project management III|https://scrumguides.org/|Plan the term project in sprints with estimates."],
"Deep learning application|Image or text model behind a small web app, with error analysis.",
["Derive backpropagation for a small network.","Explain overfitting and three ways to fight it.","Show your error analysis."]],
[10,"NLP and LLM applications","Transformers, language models and applications built on them.",
["AI|Natural language processing|https://web.stanford.edu/class/cs224n/|Stanford CS224n.","AI|Hugging Face course|https://huggingface.co/learn|Transformers, fine-tuning, datasets.","AI|DeepLearning.AI short courses|https://www.deeplearning.ai/short-courses/|RAG, agents, evaluation.","Pro|Architecture IV: AI-era design|https://www.promptingguide.ai/|RAG, agents, evals, cost, latency, guardrails. Draw each design.","Pro|Product and selling II: pricing|https://www.startupschool.org/|Position your project and test a price."],
"RAG application with evaluation|Question-answering over real documents, with a test set that measures quality.",
["Explain attention in plain words.","Show an eval that caught a real failure.","Compare two architectures for one product by cost and risk."]],
[11,"Distributed systems and security","How software behaves when it is large and under attack.",
["SW|Distributed systems|https://pdos.csail.mit.edu/6.824/|MIT 6.824 lectures: consensus, replication, fault tolerance.","SW|System design practice|https://github.com/donnemartin/system-design-primer|Do 10 case studies in writing.","SW|ISC2 Certified in Cybersecurity|https://www.isc2.org/certifications/cc|Check whether the free offer is still running.","SW|TryHackMe, free tier|https://tryhackme.com/|Browser-based labs.","Pro|Project management for startups|https://www.atlassian.com/agile|Prioritize, scope, cut."],
"Scalable backend|Load-test it, break it, fix it, document what you learned.",
["Explain why consensus is hard.","Do a 45-minute system design on paper.","Explain SQL injection and its fix."]],
[12,"MLOps and product","Take a model from notebook to something users rely on.",
["AI|Made With ML|https://madewithml.com/|Testing, tracking, serving, monitoring ML systems.","AI|Full Stack Deep Learning|https://fullstackdeeplearning.com/|Building ML-powered products.","Pro|Entrepreneurship|https://ocw.mit.edu/courses/15-390-new-enterprises-spring-2013/|MIT 15.390 and the Startup School library.","Pro|Selling: outreach and demos|https://www.startupschool.org/|Send 20 outreach messages, hold 5 conversations.","Pro|English VII: pitching|https://learnenglish.britishcouncil.org/|Give a 5-minute pitch to a real audience."],
"Year 3 capstone: AI product MVP|Real users, real feedback, metrics, a pitch.",
["Show monitoring that would catch a model getting worse.","Show 5 customer conversations.","Describe a feature you cut and why."]],
[13,"Specialize and plan the thesis","Pick one track: AI engineering, applied ML, or backend and platform.",
["AI|Reinforcement learning (optional)|https://spinningup.openai.com/|OpenAI Spinning Up.","SW|Open-source contribution|https://github.com/|Fix issues in a project you use.","AI|Read 15 papers in your track|https://paperswithcode.com/|Keep a summary of each in your notes.","Pro|Thesis proposal|https://owl.purdue.edu/|10 pages: problem, literature, plan, risks, milestones.","Pro|Selling III|https://www.startupschool.org/|Find your first 10 target users."],
"Thesis proposal and plan|Milestones for terms 14 to 16, reviewed by an outside person.",
["Defend the problem choice in 3 minutes.","Show your paper notes.","Show the milestone plan."]],
[14,"Capstone build I","Build the core of the capstone. Run it like a company.",
["SW|Core implementation|https://github.com/|Five hours a day of deep work, tests from day one.","AI|Model and data work|https://www.kaggle.com/learn|Baselines first, then improve with evidence.","Pro|Architecture decision records|https://martinfowler.com/|One page for each major decision.","Pro|Project management IV|https://scrumguides.org/|Weekly sprints and design reviews.","Pro|User testing|https://www.startupschool.org/|Watch 5 people use it, and fix what confuses them."],
"Capstone, first half|Working core, tests, and a design document.",
["Demo the working core.","Show the decision records.","Show what user testing changed."]],
[15,"Capstone build II and launch","Finish, measure, and put it in front of real people.",
["SW|Harden and deploy|https://owasp.org/www-project-top-ten/|Security pass, monitoring, rollback plan.","AI|Evaluate honestly|https://madewithml.com/|Benchmarks, failure analysis, limits.","Pro|Launch|https://itch.io/|Public release, website, demo video, announcement.","Pro|Sales practice|https://www.startupschool.org/|30 outreach messages, 10 conversations.","Pro|Write the report|https://owl.purdue.edu/|Technical report with results and limits."],
"Capstone launched|Public, documented, with real user numbers.",
["Show real usage numbers.","Describe your top 3 limits.","Present a 10-minute demo."]],
[16,"Career launch","Defend, polish, and apply.",
["Pro|Final defense|https://owl.purdue.edu/|A 45-minute talk with Q&A from invited mentors.","SW|Interview preparation|https://neetcode.io/|Algorithms, 10 mock system designs, ML fundamentals.","Pro|Portfolio polish|https://github.com/|3 to 5 flagship projects with clear READMEs.","Pro|CV and applications|https://nptel.ac.in/|Apply, freelance or start something. Use NPTEL if a free certificate helps your CV.","Pro|Retrospective and next 12 months|https://github.com/|Publish your thesis, capstone and a 4-year retrospective."],
"Graduation|Publish everything. Send your portfolio to 30 people.",
["Do a mock interview and record it.","Explain every project in your portfolio in 3 minutes.","Write your plan for the next year."]]
];
/* 2. TERM EVENTS: the same six events are added to every term (like a university calendar) */
var EV=[["Week 1","Orientation: new Git repo, Kanban board, term plan"],["Week 3","Project proposal: one page with problem, scope and success test"],["Week 6","Midterm: closed-book self-test and a design review of your project"],["Week 9","Mid-project review: show a mentor or peer, write down feedback"],["Week 12","Finals and Demo Day: README, 5-minute video, one blog post"],["Week 13","Break: retrospective in your decision log, plan the next term"]];
/* 3. YEAR HEADINGS: shown before terms 1, 5, 9 and 13 */
var YR=[["Year 1: Foundations","Terms 1 to 4. Code, tools, web, databases and your first AI concepts."],["Year 2: Engineering core","Terms 5 to 8. Algorithms, systems, machine learning and cloud."],["Year 3: AI engineering","Terms 9 to 12. Deep learning, language models, distributed systems and product."],["Year 4: Capstone and launch","Terms 13 to 16. Specialize, build, launch and get hired or start."]];
/* 4. PROGRESS STORAGE: your ticks are saved in this browser (localStorage). Change KEY to start a fresh copy. */
var KEY="curr4y-v1",S={};
try{S=JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){S={}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
/* 5. HELPER FUNCTIONS: escape text and build one checklist row */
function esc(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;")}
function item(id,inner){return '<li id="li-'+id+'"><input type="checkbox" id="'+id+'"'+(S[id]?" checked":"")+'><div class="tb">'+inner+'</div></li>'}
/* 6. BUILD THE PAGE: loops over the term data and writes the HTML into the page */
var h="",toc="";
D.forEach(function(t,i){
 if(i%4==0){var y=YR[i/4];h+='<h2 class="year" id="y'+(i/4+1)+'">'+y[0]+'</h2><p class="yg">'+y[1]+'</p>';toc+='<li><a href="#y'+(i/4+1)+'">'+y[0]+'</a></li>'}
 var n=t[0];h+='<section class="term" id="t'+n+'"><div class="th"><span class="tn">'+n+'</span><h3>'+esc(t[1])+'</h3><span class="tw">Term '+n+' · 13 weeks</span></div><p class="tg">'+esc(t[2])+'</p><ul class="tasks">';
 t[3].forEach(function(k,j){var p=k.split("|");h+=item("t"+n+"k"+j,'<span class="tag'+(p[0]=="Pro"?" pro":"")+'">'+(p[0]=="Pro"?"Professional":p[0]=="SW"?"Software":p[0]=="AI"?"AI and ML":"Maths")+'</span><span class="tt"><a href="'+p[2]+'" target="_blank" rel="noopener">'+esc(p[1])+'</a></span><span class="note">'+esc(p[3])+'</span>')});
 var pr=t[4].split("|");
 h+='</ul><h4>Term project</h4><ul class="tasks">'+item("t"+n+"p",'<span class="tt">'+esc(pr[0])+'</span><span class="note">'+esc(pr[1])+'</span>')+'</ul><h4>Term events</h4><ul class="tasks">';
 EV.forEach(function(e,j){h+=item("t"+n+"e"+j,'<span class="tt">'+e[0]+'</span><span class="note">'+e[1]+'</span>')});
 h+='</ul><details class="check"><summary>Checkpoint '+n+'</summary><div class="in"><ol>'+t[5].map(function(c){return"<li>"+esc(c)+"</li>"}).join("")+'</ol></div></details></section>';
});
document.getElementById("terms").innerHTML=h;
document.getElementById("toc").insertAdjacentHTML("beforeend",toc+'<li><a href="#pro">Secondary subjects by year</a></li>');
/* 7. UPDATE PROGRESS: counts ticks, moves the bar, strikes through finished items */
function upd(){var c=document.querySelectorAll("#terms input[type=checkbox]"),d=0;
 c.forEach(function(x){var on=x.checked;if(on)d++;x.closest("li").classList.toggle("done",on)});
 document.getElementById("done").textContent=d;document.getElementById("total").textContent=c.length;
 document.getElementById("fill").style.width=(c.length?100*d/c.length:0)+"%"}
/* 8. SAVE ON TICK: runs every time you tick or untick a box */
document.getElementById("terms").addEventListener("change",function(e){if(e.target.type=="checkbox"){S[e.target.id]=e.target.checked?1:0;save();upd()}});
/* 9. CLEAR PROGRESS BUTTON: click twice within 3 seconds to confirm */
var rb=document.getElementById("reset"),armed=false;
rb.addEventListener("click",function(){if(!armed){armed=true;rb.textContent="Click again to clear";setTimeout(function(){armed=false;rb.textContent="Clear progress"},3000);return}
 S={};save();document.querySelectorAll("#terms input[type=checkbox]").forEach(function(x){x.checked=false});armed=false;rb.textContent="Clear progress";upd()});
upd();

/* 10. LIGHT AND DARK THEME: the button saves your choice in this browser.
   Default is light (cream and teal). To follow the device setting instead, change "light" to
   (window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light") in the two places marked below. */
var THEME_KEY="curr4y-theme",root=document.documentElement,tbtn=document.getElementById("theme");
function setTheme(t){
 root.setAttribute("data-theme",t);
 tbtn.textContent=t=="dark"?"Light mode":"Dark mode";
 try{localStorage.setItem(THEME_KEY,t)}catch(e){}
}
var savedTheme="light"; /* default theme is here */
try{savedTheme=localStorage.getItem(THEME_KEY)||"light"}catch(e){} /* and here */
setTheme(savedTheme);
tbtn.addEventListener("click",function(){setTheme(root.getAttribute("data-theme")=="dark"?"light":"dark")});
