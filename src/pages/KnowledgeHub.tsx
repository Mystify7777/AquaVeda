import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Droplets, 
  Recycle, 
  CloudRain, 
  Sprout,
  Factory,
  Home,
  Users,
  TrendingUp,
  Clock,
  Eye,
  ThumbsUp
} from "lucide-react";

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Categories", icon: Search, count: 1247, color: "bg-gradient-ocean" },
    { id: "water-reuse", name: "Water Reuse", icon: Recycle, count: 234, color: "bg-gradient-forest" },
    { id: "rainwater", name: "Rainwater Harvesting", icon: CloudRain, count: 189, color: "bg-gradient-ocean" },
    { id: "irrigation", name: "Efficient Irrigation", icon: Sprout, count: 156, color: "bg-gradient-forest" },
    { id: "greywater", name: "Greywater Recycling", icon: Droplets, count: 143, color: "bg-gradient-ocean" },
    { id: "industrial", name: "Industrial Solutions", icon: Factory, count: 198, color: "bg-gradient-forest" },
    { id: "residential", name: "Residential Systems", icon: Home, count: 167, color: "bg-gradient-ocean" },
    { id: "community", name: "Community Projects", icon: Users, count: 134, color: "bg-gradient-forest" },
  ];

  const articles = [
    {
      id: 1,
      title: "Smart Drip Irrigation Systems for Urban Gardens",
      summary: "Comprehensive guide to implementing water-efficient irrigation in urban settings using IoT sensors and automated control systems.",
      category: "irrigation",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 2341,
      likes: 156,
      tags: ["IoT", "Urban Agriculture", "Water Efficiency"],
      featured: true,
    },
    {
      id: 2,
      title: "Greywater Recycling in Residential Buildings",
      summary: "Step-by-step implementation of greywater systems for apartment complexes and single-family homes.",
      category: "greywater",
      author: "Mohammed Al-Rashid",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 1876,
      likes: 203,
      tags: ["Residential", "Recycling", "Plumbing"],
      featured: false,
    },
    {
      id: 3,
      title: "Community-Scale Rainwater Harvesting in Rural Areas",
      summary: "Case studies and best practices for implementing large-scale rainwater collection systems in developing regions.",
      category: "rainwater",
      author: "Prof. Elena Rodriguez",
      date: "2024-01-10",
      readTime: "15 min read",
      views: 3124,
      likes: 298,
      tags: ["Community", "Rural Development", "Infrastructure"],
      featured: true,
    },
    {
      id: 4,
      title: "Industrial Water Recycling Technologies",
      summary: "Advanced treatment technologies for industrial wastewater recycling and closed-loop systems.",
      category: "industrial",
      author: "Dr. James Wilson",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 1543,
      likes: 134,
      tags: ["Industry", "Treatment", "Technology"],
      featured: false,
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Knowledge Hub</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover water sustainability innovations, best practices, and expert insights from our global community.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles, guides, and resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg rounded-2xl border-2 border-border/50 focus:border-primary bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <Card 
                  key={category.id}
                  className={`category-card cursor-pointer transition-all duration-300 ${
                    isSelected ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${category.color} mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Articles Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">
              {selectedCategory === "all" ? "Latest Articles" : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="category-card group">
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                    {/* Article Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        {article.featured && (
                          <Badge className="bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline">
                          {categories.find(c => c.id === article.category)?.name}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {article.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Article Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="font-medium">By {article.author}</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {article.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            {article.likes}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Article Actions */}
                    <div className="flex lg:flex-col gap-2">
                      <Button className="btn-hero">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground text-lg mb-4">No articles found matching your search.</div>
              <Button onClick={() => {setSearchQuery(""); setSelectedCategory("all");}} variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHub;