import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Droplets, 
  TrendingUp, 
  Users, 
  Calendar,
  ExternalLink,
  Filter,
  Globe
} from "lucide-react";
import worldMapImage from "@/assets/world-map.jpg";

const InteractiveMap = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [filterType, setFilterType] = useState("all");

  const regions = [
    {
      id: "north-america",
      name: "North America",
      projects: 234,
      waterSaved: "15.2M liters",
      position: { top: "25%", left: "20%" },
    },
    {
      id: "south-america", 
      name: "South America",
      projects: 189,
      waterSaved: "12.8M liters", 
      position: { top: "55%", left: "28%" },
    },
    {
      id: "europe",
      name: "Europe",
      projects: 312,
      waterSaved: "18.7M liters",
      position: { top: "20%", left: "50%" },
    },
    {
      id: "africa",
      name: "Africa", 
      projects: 445,
      waterSaved: "28.3M liters",
      position: { top: "45%", left: "52%" },
    },
    {
      id: "asia",
      name: "Asia",
      projects: 678,
      waterSaved: "42.1M liters",
      position: { top: "30%", left: "70%" },
    },
    {
      id: "oceania",
      name: "Oceania",
      projects: 87,
      waterSaved: "5.4M liters", 
      position: { top: "65%", left: "82%" },
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Mumbai Community Greywater System",
      location: "Mumbai, India",
      region: "asia",
      type: "Greywater Recycling",
      impact: "2.1M liters saved/month",
      households: 500,
      date: "2024-01-15",
      status: "Active",
      description: "Large-scale community greywater recycling system serving 500 households in urban Mumbai.",
    },
    {
      id: 2,
      title: "California Drought Response Program",
      location: "Los Angeles, USA",
      region: "north-america",
      type: "Water Conservation",
      impact: "5.8M liters saved/month",
      households: 1200,
      date: "2023-12-20",
      status: "Expanding",
      description: "Comprehensive water conservation program including smart meters and leak detection.",
    },
    {
      id: 3,
      title: "Kenyan Rainwater Harvesting Initiative",
      location: "Nairobi, Kenya",
      region: "africa",
      type: "Rainwater Harvesting",
      impact: "3.2M liters collected/month",
      households: 800,
      date: "2024-01-10",
      status: "Active",
      description: "Community-wide rainwater harvesting system with storage tanks and distribution network.",
    },
    {
      id: 4,
      title: "Netherlands Smart Irrigation Network",
      location: "Amsterdam, Netherlands", 
      region: "europe",
      type: "Smart Irrigation",
      impact: "1.9M liters saved/month",
      households: 300,
      date: "2023-11-30",
      status: "Active",
      description: "IoT-enabled smart irrigation system for urban agricultural spaces.",
    },
    {
      id: 5,
      title: "São Paulo Water Reuse Plant",
      location: "São Paulo, Brazil",
      region: "south-america", 
      type: "Industrial Reuse",
      impact: "8.5M liters recycled/month",
      households: 2000,
      date: "2023-10-15",
      status: "Active",
      description: "Industrial wastewater treatment and reuse facility serving multiple districts.",
    },
    {
      id: 6,
      title: "Sydney Residential Water Management",
      location: "Sydney, Australia",
      region: "oceania",
      type: "Residential Systems", 
      impact: "1.3M liters saved/month",
      households: 400,
      date: "2024-01-05",
      status: "Pilot",
      description: "Integrated residential water management system with smart monitoring.",
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filterType === "all") return true;
    return project.type.toLowerCase().includes(filterType.toLowerCase());
  });

  const projectTypes = ["all", "Greywater Recycling", "Rainwater Harvesting", "Smart Irrigation", "Industrial Reuse"];

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Global Water Projects Map</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore water sustainability projects and their impact across the globe. Click on regions to see local initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <Card className="p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  World Impact Map
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>

              {/* Map Container */}
              <div className="relative bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl overflow-hidden">
                <img 
                  src={worldMapImage}
                  alt="World map showing water sustainability projects"
                  className="w-full h-96 object-cover opacity-80"
                />
                
                {/* Region Markers */}
                {regions.map((region) => (
                  <div
                    key={region.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={region.position}
                    onClick={() => setSelectedRegion(region)}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-gradient-ocean rounded-full flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg">
                        <MapPin className="h-3 w-3 text-white" />
                      </div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        <div className="font-semibold text-foreground">{region.name}</div>
                        <div className="text-sm text-muted-foreground">{region.projects} projects</div>
                        <div className="text-sm text-primary">{region.waterSaved} saved</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">Global Impact</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-gradient-ocean rounded-full"></div>
                      <span>Active Projects: 1,945</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplets className="h-3 w-3 text-primary" />
                      <span>Total Water Saved: 122.5M liters</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Filters */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Filter Projects by Type</h3>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <Button
                    key={type}
                    variant={filterType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilterType(type)}
                    className="capitalize"
                  >
                    {type === "all" ? "All Types" : type}
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Projects Sidebar */}
          <div className="space-y-6">
            {/* Regional Stats */}
            {selectedRegion && (
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {selectedRegion.name} Overview
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Projects</span>
                    <span className="font-semibold text-primary">{selectedRegion.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Water Saved</span>
                    <span className="font-semibold text-accent">{selectedRegion.waterSaved}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={() => setSelectedRegion(null)}
                  >
                    View All Regions
                  </Button>
                </div>
              </Card>
            )}

            {/* Featured Projects */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">
                {selectedRegion ? `Projects in ${selectedRegion.name}` : "Featured Projects"}
              </h3>
              
              {filteredProjects
                .filter(project => !selectedRegion || project.region === selectedRegion.id)
                .slice(0, 4)
                .map((project) => (
                <Card key={project.id} className="category-card">
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={
                        project.status === "Active" ? "bg-accent text-accent-foreground" :
                        project.status === "Expanding" ? "bg-gradient-ocean text-white" :
                        "bg-secondary text-secondary-foreground"
                      }>
                        {project.status}
                      </Badge>
                      <Button variant="ghost" size="sm" className="p-1">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>

                    <h4 className="font-semibold text-foreground mb-2">{project.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{project.location}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Type</span>
                        <Badge variant="outline" className="text-xs">{project.type}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Impact</span>
                        <span className="font-medium text-primary">{project.impact}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Households</span>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{project.households.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-1 mt-3 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>Started {new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Global Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Global Impact
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Projects</span>
                  <span className="font-semibold text-primary">1,945</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Water Saved</span>
                  <span className="font-semibold text-accent">122.5M L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Households Served</span>
                  <span className="font-semibold text-primary">45,600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Countries</span>
                  <span className="font-semibold text-primary">67</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;