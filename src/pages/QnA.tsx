import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  TrendingUp,
  Clock,
  Users,
  BookOpen,
  Filter,
  Award,
  HelpCircle
} from "lucide-react";
import AskQuestion from "@/components/AskQuestion";
import QuestionCard from "@/components/QuestionCard";
import AnswerCard from "@/components/AnswerCard";

const QnA = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAskQuestion, setShowAskQuestion] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Questions", icon: HelpCircle },
    { id: "unanswered", label: "Unanswered", icon: Clock },
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "following", label: "Following", icon: Users },
  ];

  const topicTags = [
    { name: "Water Conservation", count: 234, color: "bg-gradient-ocean" },
    { name: "Rainwater Harvesting", count: 189, color: "bg-gradient-forest" },
    { name: "Greywater Systems", count: 156, color: "bg-gradient-ocean" },
    { name: "Smart Irrigation", count: 143, color: "bg-gradient-forest" },
    { name: "Industrial Water", count: 98, color: "bg-gradient-ocean" },
    { name: "Community Projects", count: 87, color: "bg-gradient-forest" },
  ];

  const questions = [
    {
      id: 1,
      title: "How to calculate ROI for greywater recycling systems in residential buildings?",
      description: "I'm working on a proposal for implementing greywater recycling in a 50-unit apartment complex. What factors should I consider when calculating the return on investment? Are there any standard metrics or tools you'd recommend?",
      author: {
        name: "Mike Thompson",
        avatar: "MT",
        title: "Project Manager",
        expertise: ["Greywater", "Economics"],
      },
      timeAgo: "2 hours ago",
      votes: 24,
      answers: 3,
      views: 156,
      followers: 12,
      tags: ["Greywater", "ROI", "Residential", "Economics"],
      hasAcceptedAnswer: false,
      isFollowing: false,
      userVote: null,
    },
    {
      id: 2,
      title: "Best practices for community-scale rainwater harvesting in urban areas?",
      description: "Our municipality is planning a community rainwater harvesting project for a dense urban area. What are the key considerations for design, implementation, and maintenance?",
      author: {
        name: "Dr. Priya Sharma",
        avatar: "PS",
        title: "Urban Planner",
        expertise: ["Urban Planning", "Rainwater"],
      },
      timeAgo: "4 hours ago",
      votes: 67,
      answers: 8,
      views: 432,
      followers: 28,
      tags: ["Rainwater Harvesting", "Urban", "Community", "Planning"],
      hasAcceptedAnswer: true,
      isFollowing: true,
      userVote: "up" as const,
    },
    {
      id: 3,
      title: "IoT sensor recommendations for leak detection in large industrial facilities?",
      description: "Looking for reliable, cost-effective IoT sensors for early leak detection in a manufacturing facility with complex piping systems.",
      author: {
        name: "James Rodriguez",
        avatar: "JR", 
        title: "Facilities Manager",
        expertise: ["IoT", "Industrial"],
      },
      timeAgo: "6 hours ago",
      votes: 15,
      answers: 2,
      views: 89,
      followers: 7,
      tags: ["IoT", "Leak Detection", "Industrial", "Technology"],
      hasAcceptedAnswer: false,
      isFollowing: false,
      userVote: null,
    },
  ];

  const answers = [
    {
      id: 1,
      content: `For calculating ROI on greywater systems, I'd recommend focusing on these key metrics:

**Direct Water Savings:**
- Current water costs (municipal water + sewer charges)
- Volume of greywater that can be recycled (typically 50-80% of total usage)
- Projected water price increases (usually 3-5% annually)

**System Costs:**
- Initial installation: $2,000-5,000 per unit for basic systems
- Maintenance: 2-5% of system cost annually
- Energy costs for pumps and treatment

**Payback Calculation:**
Simple payback = Total system cost / Annual water savings

For a 50-unit complex, you're typically looking at 8-12 year payback periods, but factor in water price inflation and potential rebates.

I've used the EPA's WaterSense calculator with good results. Happy to share a spreadsheet template if useful!`,
      author: {
        name: "Dr. Sarah Chen",
        avatar: "SC",
        title: "Water Systems Engineer",
        expertise: ["Engineering", "Economics"],
        reputation: 12340,
      },
      timeAgo: "1 hour ago",
      votes: 18,
      isAccepted: true,
      comments: 3,
      userVote: null,
      isAuthor: false,
    },
    {
      id: 2,
      content: `From my experience with similar projects, don't forget to include these often-overlooked factors:

- **Regulatory compliance costs** - permits, inspections, reporting
- **Insurance implications** - some carriers offer discounts for water-efficient buildings
- **Property value impact** - green certifications can increase property values by 3-7%
- **Tenant retention** - lower utility costs can reduce turnover

Also consider phased implementation - start with laundry-to-landscape systems which have lower upfront costs and faster payback.`,
      author: {
        name: "Lisa Park",
        avatar: "LP",
        title: "Sustainability Consultant", 
        expertise: ["Sustainability", "Finance"],
        reputation: 8950,
      },
      timeAgo: "30 minutes ago",
      votes: 12,
      isAccepted: false,
      comments: 1,
      userVote: "up" as const,
      isAuthor: false,
    },
  ];

  const topContributors = [
    { name: "Dr. Sarah Chen", reputation: 12340, badge: "Expert", avatar: "SC" },
    { name: "Prof. Elena Rodriguez", reputation: 11890, badge: "Researcher", avatar: "ER" },
    { name: "Mohammed Al-Rashid", reputation: 10650, badge: "Consultant", avatar: "MA" },
  ];

  const handleAskQuestion = (questionData: any) => {
    console.log("New question:", questionData);
    // In a real app, this would submit to backend
  };

  const handleVote = (id: number, voteType: "up" | "down" | null) => {
    console.log("Vote:", id, voteType);
    // In a real app, this would update vote count
  };

  const handleFollow = (questionId: number) => {
    console.log("Follow question:", questionId);
    // In a real app, this would toggle follow status
  };

  const handleAnswer = (questionId: number) => {
    setSelectedQuestion(questionId);
    // In a real app, this would open answer editor
  };

  const handleComment = (answerId: number) => {
    console.log("Comment on answer:", answerId);
    // In a real app, this would handle comments
  };

  const handleAcceptAnswer = (answerId: number) => {
    console.log("Accept answer:", answerId);
    // In a real app, this would mark answer as accepted
  };

  if (selectedQuestion) {
    const question = questions.find(q => q.id === selectedQuestion);
    if (!question) return null;

    return (
      <div className="min-h-screen bg-gradient-aqua">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Back Button */}
          <Button 
            variant="outline" 
            className="mb-6"
            onClick={() => setSelectedQuestion(null)}
          >
            ← Back to Questions
          </Button>

          {/* Question Detail */}
          <QuestionCard
            question={question}
            onVote={handleVote}
            onFollow={handleFollow}
            onAnswer={handleAnswer}
          />

          {/* Answers Section */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">
                {question.answers} Answers
              </h2>
              <Button className="btn-hero">
                Write Answer
              </Button>
            </div>

            <div className="space-y-6">
              {answers.map((answer) => (
                <AnswerCard
                  key={answer.id}
                  answer={answer}
                  onVote={handleVote}
                  onAccept={handleAcceptAnswer}
                  onComment={handleComment}
                  canAcceptAnswers={true} // In real app, check if user is question author
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Water Sustainability Q&A</h1>
            <p className="text-xl text-muted-foreground">
              Get expert answers to your water sustainability questions
            </p>
          </div>
          <Button 
            onClick={() => setShowAskQuestion(true)}
            className="btn-hero"
          >
            <Plus className="mr-2 h-5 w-5" />
            Ask Question
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search & Filters */}
            <Card className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-3"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => {
                    const Icon = filter.icon;
                    return (
                      <Button
                        key={filter.id}
                        variant={selectedFilter === filter.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFilter(filter.id)}
                        className="flex items-center gap-2"
                      >
                        <Icon className="h-4 w-4" />
                        {filter.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            </Card>

            {/* Questions List */}
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} onClick={() => setSelectedQuestion(question.id)}>
                  <QuestionCard
                    question={question}
                    onVote={handleVote}
                    onFollow={handleFollow}
                    onAnswer={handleAnswer}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Topics */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Popular Topics
              </h3>
              <div className="space-y-3">
                {topicTags.map((topic) => (
                  <div key={topic.name} className="flex items-center justify-between">
                    <Badge 
                      className={`${topic.color} text-white hover:scale-105 transition-transform cursor-pointer`}
                    >
                      {topic.name}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{topic.count}</span>
                  </div>
                ))}
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
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-ocean text-white">
                        {contributor.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{contributor.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {contributor.reputation.toLocaleString()} reputation
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {contributor.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Community Stats */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                This Week
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Questions Asked</span>
                  <span className="font-semibold text-primary">+89</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Answers Posted</span>
                  <span className="font-semibold text-primary">+156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">New Members</span>
                  <span className="font-semibold text-accent">+23</span>
                </div>
              </div>
            </Card>

            {/* Your Activity */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Your Activity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Questions Asked</span>
                  <span className="font-semibold text-primary">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Answers Given</span>
                  <span className="font-semibold text-primary">34</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reputation</span>
                  <span className="font-semibold text-accent">1,245</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Ask Question Modal */}
        {showAskQuestion && (
          <AskQuestion
            onClose={() => setShowAskQuestion(false)}
            onSubmit={handleAskQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default QnA;