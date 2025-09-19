import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Plus,
  TrendingUp,
  Clock,
  Users,
  Award
} from "lucide-react";

const Community = () => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [showNewPost, setShowNewPost] = useState(false);

  const forumThreads = [
    {
      id: 1,
      title: "Best practices for small-scale rainwater harvesting?",
      author: "WaterSaver23",
      category: "Q&A",
      description: "I'm looking to install a rainwater harvesting system for my 2-bedroom home. What capacity tank should I consider for a family of 4?",
      votes: 23,
      replies: 12,
      views: 456,
      timeAgo: "2 hours ago",
      tags: ["Rainwater", "Residential", "Beginner"],
      isAnswered: true,
    },
    {
      id: 2,
      title: "Community greywater project update - 500 households connected!",
      author: "Dr. Sarah Chen",
      category: "Success Story",
      description: "Excited to share that our community greywater recycling project in Mumbai has successfully connected 500 households, saving over 2 million liters of water monthly.",
      votes: 67,
      replies: 24,
      views: 1234,
      timeAgo: "4 hours ago",
      tags: ["Greywater", "Community", "Impact"],
      isAnswered: false,
    },
    {
      id: 3,
      title: "ISO 14046 Water Footprint Assessment - Implementation challenges?",
      author: "EnviroExpert",
      category: "Technical Discussion",
      description: "Has anyone worked with ISO 14046 for water footprint assessments in manufacturing? Looking for insights on implementation challenges and solutions.",
      votes: 15,
      replies: 8,
      views: 289,
      timeAgo: "6 hours ago",
      tags: ["ISO", "Manufacturing", "Assessment"],
      isAnswered: false,
    },
    {
      id: 4,
      title: "New AI-powered leak detection system showing promising results",
      author: "TechInnovator",
      category: "Innovation",
      description: "Our pilot program using IoT sensors and machine learning for early leak detection has reduced water loss by 35% in the test area. Happy to share technical details!",
      votes: 89,
      replies: 31,
      views: 2156,
      timeAgo: "8 hours ago",
      tags: ["AI", "IoT", "Leak Detection"],
      isAnswered: false,
    },
    {
      id: 5,
      title: "Seeking collaboration for water sustainability research in Africa",
      author: "Prof. Elena Rodriguez",
      category: "Collaboration",
      description: "Looking for researchers and organizations interested in collaborative water sustainability projects across sub-Saharan Africa. Grant funding available.",
      votes: 34,
      replies: 18,
      views: 678,
      timeAgo: "1 day ago",
      tags: ["Research", "Africa", "Collaboration"],
      isAnswered: false,
    },
  ];

  const topContributors = [
    { name: "Dr. Sarah Chen", points: 2340, badge: "Expert", contributions: 89 },
    { name: "WaterTech Pro", points: 1890, badge: "Innovator", contributions: 67 },
    { name: "Prof. Elena Rodriguez", points: 1650, badge: "Researcher", contributions: 78 },
    { name: "EcoEngineer", points: 1423, badge: "Specialist", contributions: 56 },
  ];

  const handleCreatePost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      // In a real app, this would create a new post
      console.log("Creating post:", { title: newPostTitle, content: newPostContent });
      setNewPostTitle("");
      setNewPostContent("");
      setShowNewPost(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">Community Forum</h1>
              <p className="text-xl text-muted-foreground">
                Connect with water sustainability experts, share knowledge, and collaborate on solutions.
              </p>
            </div>

            {/* New Post Button */}
            <div className="mb-6">
              <Button 
                onClick={() => setShowNewPost(!showNewPost)}
                className="btn-hero"
              >
                <Plus className="mr-2 h-5 w-5" />
                Start New Discussion
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPost && (
              <Card className="mb-6 p-6">
                <h3 className="text-lg font-semibold mb-4">Create New Post</h3>
                <div className="space-y-4">
                  <Input
                    placeholder="Post title..."
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                  <Textarea
                    placeholder="Share your question, insight, or experience..."
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleCreatePost}>Post</Button>
                    <Button variant="outline" onClick={() => setShowNewPost(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* Forum Threads */}
            <div className="space-y-4">
              {forumThreads.map((thread) => (
                <Card key={thread.id} className="category-card group">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Voting */}
                      <div className="flex flex-col items-center gap-2 min-w-[60px]">
                        <Button variant="ghost" size="sm" className="p-2 hover:bg-accent/50">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className="font-semibold text-primary">{thread.votes}</span>
                        <Button variant="ghost" size="sm" className="p-2 hover:bg-destructive/10">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={
                            thread.category === "Q&A" ? "bg-accent text-accent-foreground" :
                            thread.category === "Success Story" ? "bg-gradient-forest text-white" :
                            thread.category === "Innovation" ? "bg-gradient-ocean text-white" :
                            thread.category === "Technical Discussion" ? "bg-secondary text-secondary-foreground" :
                            "bg-muted text-muted-foreground"
                          }>
                            {thread.category}
                          </Badge>
                          {thread.isAnswered && (
                            <Badge className="bg-accent text-accent-foreground">
                              ✓ Answered
                            </Badge>
                          )}
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors cursor-pointer">
                          {thread.title}
                        </h3>

                        <p className="text-muted-foreground mb-4">
                          {thread.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {thread.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {thread.author.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <span>{thread.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {thread.timeAgo}
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {thread.replies} replies
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {thread.views} views
                            </div>
                            <Button variant="ghost" size="sm" className="p-1">
                              <Share className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Community Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Members</span>
                  <span className="font-semibold text-primary">12,456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Posts</span>
                  <span className="font-semibold text-primary">8,934</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">This Week</span>
                  <span className="font-semibold text-accent">+234</span>
                </div>
              </div>
            </Card>

            {/* Top Contributors */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-sm font-bold text-primary min-w-[20px]">
                      #{index + 1}
                    </div>
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">
                        {contributor.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {contributor.points} points • {contributor.contributions} posts
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Popular Topics */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Popular Topics</h3>
              <div className="space-y-2">
                {["Rainwater Harvesting", "Greywater Systems", "IoT Monitoring", "Community Projects", "Industrial Solutions"].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">{topic}</span>
                    <Badge variant="secondary" className="text-xs">
                      {Math.floor(Math.random() * 100) + 20}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;