import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      title: "Senior Developer Community Manager",
      company: "CloudForge",
      location: "Remote · Global",
      score: 96,
    },
    {
      title: "Developer Programs Lead",
      company: "OpenStack Labs",
      location: "Singapore / Remote",
      score: 92,
    },
    {
      title: "Global DevRel Manager",
      company: "APIFlow",
      location: "USA · Remote",
      score: 90,
    },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "white",
      fontFamily: "Arial, sans-serif",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
        DevRel Radar
      </h1>

      <p style={{ color: "#999", maxWidth: "700px" }}>
        AI-powered global job intelligence platform for Developer Relations,
        Community Leadership, Developer Programs, MVP programs, forums,
        hackathons, and developer ecosystem careers.
      </p>

      <div style={{ marginTop: "30px", marginBottom: "40px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search global DevRel jobs..."
          style={{
            width: "100%",
            padding: "18px",
            borderRadius: "12px",
            border: "1px solid #333",
            background: "#111",
            color: "white",
            fontSize: "16px"
          }}
        />
      </div>

      <div style={{
        display: "grid",
        gap: "20px"
      }}>
        {jobs
          .filter((job) =>
            !search ||
            job.title.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase())
          )
          .map((job, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #222",
                background: "#111",
                padding: "24px",
                borderRadius: "20px"
              }}
            >
              <div style={{
                color: "#00ff99",
                marginBottom: "10px"
              }}>
                {job.score}% AI Match
              </div>

              <h2>{job.title}</h2>

              <div style={{ color: "#888" }}>
                {job.company} · {job.location}
              </div>

              <button style={{
                marginTop: "20px",
                padding: "12px 18px",
                borderRadius: "12px",
                border: "none",
                background: "white",
                color: "black",
                cursor: "pointer",
                fontWeight: "bold"
              }}>
                Apply
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
