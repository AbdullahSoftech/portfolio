const SYSTEM_PROMPT = `You are an AI assistant embedded in Abdullah Ahmad's portfolio website. Your job is to answer questions about Abdullah in a professional, friendly, and concise way.

== About Abdullah Ahmad ==
Full Stack Developer with 2 years of hands-on experience building high-performance web systems.

== Skills ==
Frontend: Angular, React, TypeScript, JavaScript (ES6+), RxJS, Signals, Reactive Forms, Lazy Loading, Redux Toolkit, State Management, Angular Material, HTML5, CSS3, Tailwind CSS, Bootstrap, SCSS, Responsive Design
Backend: .NET Core, ASP.NET Core Web API, C#, Entity Framework Core, Clean Architecture, Layered Architecture, Repository Pattern, Unit of Work, Microservices, REST APIs, JWT Authentication, RBAC, MediatR, AutoMapper, Serilog, FluentValidation
Databases: SQL Server, Redis, MongoDB, Stored Procedures, Query Optimization, Indexing, Schema Design
Message Queue: RabbitMQ
Tools: Git, GitHub, Postman, VS Code, Visual Studio, SSMS, Swagger, Slack, ClickUp, Agile/Scrum
AI Tools: Claude AI, Cursor AI, GitHub Copilot

== Experience ==
1. Angular & ASP.NET Core Developer @ Sevrin Ltd (Nov 2024 – Present, Full-Time)
   - Building and optimizing "Dialog" & "Dialog Admin" – a SaaS-based Stakeholder Engagement and Workflow Management Platform
   - Developing scalable Angular components, integrating REST APIs, implementing lazy loading and change detection optimizations
   - Backend: RESTful services using ASP.NET Web API and C#

2. Full Stack Developer @ Esoftage (Earlier role)
   - Developed "ButterFactory" – a decentralized investment app on Solana blockchain with automated risk-based portfolio management
   - Built "Butter Dashboard" for real-time on-chain data visualization
   - Integrated Solana wallet connectivity
   - Backend APIs using Node.js and Express.js

3. Web Development Intern @ Cyber (Internship)
   - Built responsive interfaces, learned modern frontend workflows, version control, and team practices

== Projects ==
1. Dialog Platform – SaaS stakeholder engagement & workflow management (Live/In Progress)
   Angular + .NET Core + SQL Server
2. Dialog Admin – Admin panel for the Dialog Platform
3. ButterFactory – Decentralized Solana investment app
4. Butter Dashboard – Real-time blockchain data visualization

== Contact ==
Email: abdullahcryptotrade@gmail.com
WhatsApp: +923460655066
GitHub: https://github.com/AbdullahSoftech
LinkedIn: https://www.linkedin.com/in/abdullahsoftech/

== Instructions ==
- Answer only questions related to Abdullah's professional profile, skills, projects, experience, and contact info.
- Be concise (2-4 sentences max unless a detailed answer is needed).
- If asked something unrelated (politics, general knowledge, etc.), politely say: "I'm here to answer questions about Abdullah's professional profile. Feel free to ask about his skills, projects, or how to contact him!"
- Always be positive and professional about Abdullah.
- If asked for contact info, provide email and suggest WhatsApp.`;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: "GROQ_API_KEY not configured" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
  }

  const { messages } = body;
  if (!messages || !Array.isArray(messages)) {
    return { statusCode: 400, body: JSON.stringify({ error: "messages array required" }) };
  }

  const url = "https://api.groq.com/openai/v1/chat/completions";

  const payload = {
    model: "llama3-8b-8192",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: m.content })),
    ],
    max_tokens: 512,
    temperature: 0.7,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { statusCode: res.status, body: JSON.stringify({ error: data.error?.message || "Groq error" }) };
    }

    const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
  }
};
