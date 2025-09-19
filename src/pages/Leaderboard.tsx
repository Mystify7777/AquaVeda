import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Trophy, 
  Medal, 
  Award, 
  TrendingUp,
  Users, 
  BookOpen, 
  MessageSquare,
  Clock,
  Crown,
  Star,
  Zap
} from "lucide-react";

const Leaderboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("all-time");
  const [selectedCategory, setSelectedCategory] = useState("overall");

  const periods = [
    { id: "this-week", label: "This Week" },
    { id: "this-month", label: "This Month" },
    { id: "this-year", label: "This Year" },
    { id: "all-time", label: "All Time" },
  ];

  const categories = [
    { id: "overall", label: "Overall", icon: Trophy },
    { id: "articles", label: "Articles", icon: BookOpen },
    { id: "discussions", label: "Discussions", icon: MessageSquare },
    { id: "contributions", label: "Contributions", icon: Users },
  ];

  const topContributors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Water Systems Engineer",
      location: "Singapore",
      points: 12340,
      rank: 1,
      articles: 89,
      discussions: 156,
      contributions: 234,
      badges: ["Expert", "Pioneer", "Mentor"],
      recentActivity: "Published article on smart irrigation 2 hours ago",
      joined: "2022-03-15",
      avatar: "SC",
      specialties: ["Smart Irrigation", "IoT Systems", "Urban Planning"],
      trend: "up",
    },
    {
      id: 2,
      name: "Prof. Elena Rodriguez",
      title: "Environmental Science Researcher", 
      location: "Barcelona, Spain",
      points: 11890,
      rank: 2,
      articles: 78,
      discussions: 203,
      contributions: 187,
      badges: ["Researcher", "Global Impact", "Innovator"],
      recentActivity: "Started discussion on African water projects 4 hours ago",
      joined: "2021-11-08",
      avatar: "ER",
      specialties: ["Community Projects", "Research", "Policy"],
      trend: "up",
    },
    {
      id: 3,
      name: "Mohammed Al-Rashid",
      title: "Sustainable Technology Consultant",
      location: "Dubai, UAE",
      points: 10650,
      rank: 3,
      articles: 67,
      discussions: 189,
      contributions: 298,
      badges: ["Consultant", "Regional Expert", "Sustainability Champion"],
      recentActivity: "Contributed to greywater recycling guide 6 hours ago",
      joined: "2022-01-20",
      avatar: "MA",
      specialties: ["Greywater Systems", "Desalination", "Industrial Solutions"],
      trend: "stable",
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      title: "Hydrological Engineer",
      location: "Toronto, Canada",
      points: 9876,
      rank: 4,
      articles: 92,
      discussions: 134,
      contributions: 167,
      badges: ["Engineer", "Technical Expert", "Innovation Leader"],
      recentActivity: "Reviewed 3 technical articles yesterday",
      joined: "2021-07-12",
      avatar: "JW",
      specialties: ["Hydrology", "Infrastructure", "Climate Adaptation"],
      trend: "up",
    },
    {
      id: 5,
      name: "Lisa Zhang",
      title: "Community Water Program Manager",
      location: "San Francisco, USA",
      points: 8945,
      rank: 5,
      articles: 54,
      discussions: 267,
      contributions: 234,
      badges: ["Community Leader", "Program Manager", "Advocate"],
      recentActivity: "Moderated community forum discussion 1 day ago",
      joined: "2022-05-03",
      avatar: "LZ",
      specialties: ["Community Engagement", "Program Management", "Education"],
      trend: "up",
    },
  ];

  const nextRanks = [
    { name: "Tech Innovator", points: 8234, rank: 6, avatar: "TI" },
    { name: "Water Saver Pro", points: 7891, rank: 7, avatar: "WS" },
    { name: "Eco Engineer", points: 7456, rank: 8, avatar: "EE" },
    { name: "Sustainability Expert", points: 7123, rank: 9, avatar: "SE" },
    { name: "Green Tech", points: 6890, rank: 10, avatar: "GT" },
  ];

  const achievements = [
    { name: "First Article", description: "Published your first knowledge article", points: 100, icon: BookOpen },
    { name: "Community Helper", description: "Answered 10 community questions", points: 250, icon: MessageSquare },
    { name: "Expert Contributor", description: "Reached 1000 contribution points", points: 1000, icon: Star },
    { name: "Global Impact", description: "Your content reached 50+ countries", points: 500, icon: TrendingUp },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center bg-muted rounded-full text-xs font-bold">{rank}</div>;
    }
  };

  const getBadgeColor = (badge: string) => {
    const colors: Record<string, string> = {
      "Expert": "bg-gradient-ocean text-white",
      "Pioneer": "bg-gradient-forest text-white", 
      "Mentor": "bg-accent text-accent-foreground",
      "Researcher": "bg-secondary text-secondary-foreground",
      "Global Impact": "bg-gradient-ocean text-white",
      "Innovator": "bg-gradient-forest text-white",
    };
    return colors[badge] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-10 w-10 text-primary" />
            Community Leaderboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognizing our top contributors who are making the biggest impact in water sustainability knowledge sharing.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            {/* Filters */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-foreground flex items-center">Period:</span>
                  {periods.map((period) => (
                    <Button
                      key={period.id}
                      variant={selectedPeriod === period.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedPeriod(period.id)}
                    >
                      {period.label}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-foreground">Category:</span>
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className="flex items-center gap-1"
                      >
                        <Icon className="h-3 w-3" />
                        {category.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Top 3 Podium */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {topContributors.slice(0, 3).map((contributor, index) => {
                const positions = [1, 0, 2]; // Center the #1, left #2, right #3
                const actualIndex = positions[index];
                const actualContributor = topContributors[actualIndex];
                return (
                  <Card key={actualContributor.id} className={`category-card text-center ${actualIndex === 0 ? 'md:order-2 ring-2 ring-primary scale-105' : ''}`}>
                    <div className="p-6">
                      <div className="flex justify-center mb-4">
                        {getRankIcon(actualContributor.rank)}
                      </div>
                      
                      <Avatar className="h-16 w-16 mx-auto mb-4">
                        <AvatarFallback className="text-lg font-bold bg-gradient-ocean text-white">
                          {actualContributor.avatar}
                        </AvatarFallback>
                      </Avatar>
                      
                      <h3 className="font-bold text-foreground mb-1">{actualContributor.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{actualContributor.title}</p>
                      
                      <div className="text-2xl font-bold text-primary mb-3">
                        {actualContributor.points.toLocaleString()} pts
                      </div>
                      
                      <div className="flex flex-wrap gap-1 justify-center">
                        {actualContributor.badges.slice(0, 2).map((badge, badgeIndex) => (
                          <Badge key={badgeIndex} className={`${getBadgeColor(badge)} text-xs`}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Detailed Rankings */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Detailed Rankings
              </h2>
              
              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div key={contributor.id} className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors">
                    <div className="flex items-center justify-center min-w-[40px]">
                      {getRankIcon(contributor.rank)}
                    </div>
                    
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="font-semibold bg-gradient-ocean text-white">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate">{contributor.name}</h3>
                        {contributor.trend === "up" && (
                          <Zap className="h-4 w-4 text-accent" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{contributor.title} • {contributor.location}</p>
                      <div className="flex flex-wrap gap-1">
                        {contributor.badges.map((badge, index) => (
                          <Badge key={index} className={`${getBadgeColor(badge)} text-xs`}>
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{contributor.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                      
                      <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                        <div className="text-center">
                          <div className="font-medium">{contributor.articles}</div>
                          <div className="text-muted-foreground">articles</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{contributor.discussions}</div>
                          <div className="text-muted-foreground">posts</div>
                        </div>
                        <div className="text-center">
                          <div className="font-medium">{contributor.contributions}</div>
                          <div className="text-muted-foreground">edits</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Next Rankings */}
                <div className="border-t border-border pt-4">
                  <h3 className="font-medium text-muted-foreground mb-4">Next in Rankings</h3>
                  {nextRanks.map((contributor) => (
                    <div key={contributor.rank} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-muted-foreground min-w-[24px]">#{contributor.rank}</span>
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{contributor.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-foreground">{contributor.name}</span>
                      </div>
                      <span className="text-sm font-medium text-primary">{contributor.points.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/30">
                      <div className="p-2 bg-gradient-ocean rounded-lg">
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-foreground">{achievement.name}</div>
                        <div className="text-xs text-muted-foreground mb-1">{achievement.description}</div>
                        <div className="text-xs font-medium text-accent">+{achievement.points} points</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Weekly Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                This Week
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New Members</span>
                  <span className="font-semibold text-primary">+234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Articles Published</span>
                  <span className="font-semibold text-primary">+67</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Discussions Started</span>
                  <span className="font-semibold text-primary">+89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Contributions</span>
                  <span className="font-semibold text-accent">+1,234</span>
                </div>
              </div>
            </Card>

            {/* Your Progress */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Progress</h3>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">1,245</div>
                <div className="text-muted-foreground mb-3">Current Points</div>
                <div className="text-sm text-muted-foreground mb-2">Rank #127 of 12,456</div>
                <div className="w-full bg-muted rounded-full h-2 mb-2">
                  <div className="bg-gradient-ocean h-2 rounded-full" style={{width: "68%"}}></div>
                </div>
                <div className="text-xs text-muted-foreground">755 points to next rank</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;