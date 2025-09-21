import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  User, 
  Edit, 
  Save,
  MapPin, 
  Calendar, 
  Award,
  BookOpen, 
  MessageSquare, 
  TrendingUp,
  Eye,
  ThumbsUp,
  Settings,
  Globe,
  Mail,
  Briefcase,
  Star
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const [userData, setUserData] = useState({
    name: "Dr. Sarah Chen",
    title: "Water Systems Engineer",
    bio: "Passionate about sustainable water management and smart irrigation systems. 10+ years of experience in urban water planning and IoT implementation for water conservation.",
    location: "Singapore",
    email: "sarah.chen@aquaveda.org",
    joinDate: "March 2022",
    website: "https://sarahchen-water.com",
    specialties: ["Smart Irrigation", "IoT Systems", "Urban Planning", "Water Conservation"],
    points: 12340,
    rank: 1,
  });

  const userStats = {
    articlesPublished: 89,
    discussionsStarted: 45,
    repliesMade: 234,
    totalViews: 156780,
    totalLikes: 2340,
    projectsContributed: 23,
  };

  const badges = [
    { name: "Expert Contributor", description: "Published 50+ high-quality articles", color: "bg-gradient-ocean text-white", icon: Star },
    { name: "Community Pioneer", description: "Among the first 100 members", color: "bg-gradient-forest text-white", icon: Award },
    { name: "Mentor", description: "Helped 100+ community members", color: "bg-accent text-accent-foreground", icon: User },
    { name: "Innovation Leader", description: "Contributed to breakthrough projects", color: "bg-gradient-ocean text-white", icon: TrendingUp },
  ];

  const recentArticles = [
    {
      id: 1,
      title: "Smart Drip Irrigation Systems for Urban Gardens",
      views: 2341,
      likes: 156,
      date: "2024-01-15",
      status: "published",
    },
    {
      id: 2,
      title: "IoT Sensors in Water Management: A Comprehensive Guide",
      views: 1876,
      likes: 203,
      date: "2024-01-10",
      status: "published",
    },
    {
      id: 3,
      title: "Future of Water Conservation in Smart Cities",
      views: 0,
      likes: 0,
      date: "2024-01-20",
      status: "draft",
    },
  ];

  const recentActivity = [
    { type: "article", action: "Published", item: "Smart Drip Irrigation Systems", time: "2 hours ago" },
    { type: "discussion", action: "Started", item: "IoT implementation challenges", time: "1 day ago" },
    { type: "reply", action: "Replied to", item: "Rainwater harvesting discussion", time: "2 days ago" },
    { type: "edit", action: "Edited", item: "Community water project guide", time: "3 days ago" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "articles", label: "Articles", icon: BookOpen },
    { id: "activity", label: "Activity", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save to backend
  };

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarFallback className="text-2xl font-bold bg-gradient-ocean text-white">
                    SC
                  </AvatarFallback>
                </Avatar>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <Input
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      className="text-center font-semibold"
                    />
                    <Input
                      value={userData.title}
                      onChange={(e) => setUserData({...userData, title: e.target.value})}
                      className="text-center"
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-xl font-bold text-foreground">{userData.name}</h1>
                    <p className="text-muted-foreground">{userData.title}</p>
                  </>
                )}

                <div className="flex items-center justify-center gap-2 mt-3">
                  <Badge className="bg-gradient-ocean text-white">#{userData.rank} Contributor</Badge>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{userData.points.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{userStats.articlesPublished}</div>
                  <div className="text-xs text-muted-foreground">Articles</div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={userData.location}
                      onChange={(e) => setUserData({...userData, location: e.target.value})}
                      className="text-sm"
                    />
                  ) : (
                    <span>{userData.location}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {userData.joinDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{userData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  {isEditing ? (
                    <Input
                      value={userData.website}
                      onChange={(e) => setUserData({...userData, website: e.target.value})}
                      className="text-sm"
                    />
                  ) : (
                    <a href={userData.website} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                      {userData.website}
                    </a>
                  )}
                </div>
              </div>

              {/* Edit Button */}
              <div className="mt-6">
                {isEditing ? (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="flex-1">
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </Card>

            {/* Specialties */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                Specialties
              </h3>
              <div className="flex flex-wrap gap-2">
                {userData.specialties.map((specialty, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </Button>
                );
              })}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Bio */}
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">About</h3>
                  {isEditing ? (
                    <Textarea
                      value={userData.bio}
                      onChange={(e) => setUserData({...userData, bio: e.target.value})}
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{userData.bio}</p>
                  )}
                </Card>

                {/* Badges */}
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5 text-accent" />
                    Achievements & Badges
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {badges.map((badge, index) => {
                      const Icon = badge.icon;
                      return (
                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/30">
                          <div className={`p-2 rounded-lg ${badge.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{badge.name}</div>
                            <div className="text-sm text-muted-foreground">{badge.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>

                {/* Stats Overview */}
                <Card className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Contribution Statistics
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{userStats.articlesPublished}</div>
                      <div className="text-muted-foreground">Articles Published</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">{userStats.totalViews.toLocaleString()}</div>
                      <div className="text-muted-foreground">Total Views</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{userStats.totalLikes.toLocaleString()}</div>
                      <div className="text-muted-foreground">Total Likes</div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "articles" && (
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-6">Published Articles</h3>
                <div className="space-y-4">
                  {recentArticles.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 rounded-xl bg-background/30">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{article.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Published {article.date}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            {article.likes}
                          </div>
                        </div>
                      </div>
                      <Badge className={article.status === "published" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}>
                        {article.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "activity" && (
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-6">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/30">
                      <div className="p-2 bg-gradient-ocean rounded-lg mt-1">
                        <MessageSquare className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-foreground">
                          <span className="font-medium">{activity.action}</span> {activity.item}
                        </p>
                        <p className="text-sm text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "settings" && (
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-6">Account Settings</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Email Notifications</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">New replies to my posts</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Weekly community digest</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Marketing emails</span>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Privacy Settings</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Show profile in public directory</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded" />
                        <span className="text-sm">Allow others to see my activity</span>
                      </label>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;