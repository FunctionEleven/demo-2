import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Select, SelectItem } from "./components/ui/select";

const guides = [
  { id: 1, title: "Fixing Dynamics Login Issues", excerpt: "Steps to resolve common Dynamics login problems.", category: "Dynamics" },
  { id: 2, title: "Power Automate Flow Timeout", excerpt: "How to troubleshoot Power Automate flow failures.", category: "Power Automate" },
  { id: 3, title: "Azure DevOps Pipeline Error", excerpt: "Quick fix for build agent connectivity issues.", category: "Azure DevOps" },
];

const projects = [
  { id: 1, title: "Dynamics 365 Integration", year: 2024, description: "End-to-end implementation of Dynamics with Azure." },
  { id: 2, title: "AWS Cloud Migration", year: 2023, description: "Moved workloads from on-prem to AWS Cloud." },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");

  const filteredGuides = guides.filter(
    (g) =>
      (category === "All" || g.category === category) &&
      (g.title.toLowerCase().includes(search.toLowerCase()) ||
        g.excerpt.toLowerCase().includes(search.toLowerCase()))
  );

  const filteredProjects = projects.filter(
    (p) =>
      (year === "All" || String(p.year) === year) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-8">
      <h1 className="text-3xl font-bold mb-2">🚀 Function Eleven</h1>
      <p className="text-gray-600 mb-6">
        Troubleshooting guides, implementation projects, and tutorials for Dynamics, Azure, AWS, and more.
      </p>

      {/* Search */}
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8"
      />

      {/* Guides */}
      <h2 className="text-2xl font-semibold mb-4">📘 Troubleshooting Guides</h2>
      <Select value={category} onChange={setCategory}>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="Dynamics">Dynamics</SelectItem>
        <SelectItem value="Power Automate">Power Automate</SelectItem>
        <SelectItem value="Azure DevOps">Azure DevOps</SelectItem>
      </Select>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        {filteredGuides.map((g) => (
          <Card key={g.id} className="shadow-md">
            <CardContent>
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-gray-600">{g.excerpt}</p>
              <span className="text-sm text-gray-500">{g.category}</span>
            </CardContent>
          </Card>
        ))}
        {filteredGuides.length === 0 && <p>No guides found.</p>}
      </div>

      {/* Projects */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">💡 Projects</h2>
      <Select value={year} onChange={setYear}>
        <SelectItem value="All">All</SelectItem>
        <SelectItem value="2024">2024</SelectItem>
        <SelectItem value="2023">2023</SelectItem>
      </Select>
      <div className="grid gap-4 md:grid-cols-2 mt-4">
        {filteredProjects.map((p) => (
          <Card key={p.id} className="shadow-md">
            <CardContent>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.description}</p>
              <span className="text-sm text-gray-500">{p.year}</span>
            </CardContent>
          </Card>
        ))}
        {filteredProjects.length === 0 && <p>No projects found.</p>}
      </div>

      {/* Tutorials */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">🎥 Tutorials</h2>
      <Card className="max-w-xl shadow-md">
        <CardContent className="p-2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube tutorial"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
