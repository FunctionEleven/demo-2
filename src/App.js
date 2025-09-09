import React, { useState } from "react";
import Slider from "react-slick";
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

const tutorials = [
  { id: 1, title: "Dynamics 365 Basics", category: "Dynamics", url: "https://www.youtube.com/embed/aFWDOFg7X2A" },
  { id: 2, title: "Power Automate Tutorial", category: "Power Automate", url: "https://www.youtube.com/embed/2U4y2X2QY-8" },
  { id: 3, title: "Azure DevOps CI/CD", category: "Azure DevOps", url: "https://www.youtube.com/embed/d6s3E4t9M_w" },
  { id: 4, title: "AWS Cloud Basics", category: "AWS", url: "https://www.youtube.com/embed/9V1bipPkCTU" },
  { id: 5, title: "Azure Cloud Networking", category: "Azure", url: "https://www.youtube.com/embed/JM7D7rfzE9E" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");

  // Filters
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

  const filteredTutorials = tutorials.filter(
    (t) =>
      search === "" ||
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
  );

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,   // 3 videos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4 gap-4">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wide whitespace-nowrap">
            Function Eleven
          </div>

          {/* Search bar */}
          <div className="flex-grow max-w-md mx-4">
            <Input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-black placeholder-gray-500"
            />
          </div>

          {/* Navigation */}
          <nav className="space-x-4 hidden md:flex">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">Guides</a>
            <a href="#" className="hover:text-gray-300">Projects</a>
            <a href="#" className="hover:text-gray-300">Videos</a>
            <a href="#" className="hover:text-gray-300">About</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">🚀 Function Eleven</h1>
        <p className="text-gray-600 mb-6">
          Troubleshooting guides, implementation projects, and tutorials for Dynamics, Azure, AWS, and more.
        </p>

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

        {/* Tutorials Carousel */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">🎥 Tutorials</h2>
        <Slider {...sliderSettings}>
          {filteredTutorials.map((t) => (
            <div key={t.id} className="p-4">
              <Card className="shadow-md h-full">
                <CardContent className="p-2">
                  <iframe
                    width="100%"
                    height="250"
                    src={t.url}
                    title={t.title}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                  <h3 className="mt-2 font-semibold">{t.title}</h3>
                  <span className="text-sm text-gray-500">{t.category}</span>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Function Eleven. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
