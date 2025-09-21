import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  ArrowUp, 
  ArrowDown, 
  MessageSquare, 
  Share, 
  Bookmark,
  MoreHorizontal,
  Clock,
  Eye,
  Users,
  CheckCircle
} from "lucide-react";

interface Question {
  id: number;
  title: string;
  description?: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    expertise: string[];
  };
  timeAgo: string;
  votes: number;
  answers: number;
  views: number;
  followers: number;
  tags: string[];
  hasAcceptedAnswer: boolean;
  isFollowing: boolean;
  userVote?: "up" | "down" | null;
}

interface QuestionCardProps {
  question: Question;
  onVote: (questionId: number, voteType: "up" | "down" | null) => void;
  onFollow: (questionId: number) => void;
  onAnswer: (questionId: number) => void;
}

const QuestionCard = ({ question, onVote, onFollow, onAnswer }: QuestionCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleVote = (voteType: "up" | "down") => {
    const newVote = question.userVote === voteType ? null : voteType;
    onVote(question.id, newVote);
  };

  return (
    <Card className="category-card group">
      <div className="p-6">
        {/* Question Header */}
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[60px]">
            <Button 
              variant="ghost" 
              size="sm" 
              className={`p-2 hover:bg-accent/50 ${question.userVote === "up" ? "bg-accent text-accent-foreground" : ""}`}
              onClick={() => handleVote("up")}
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
            <span className="font-semibold text-lg text-primary">{question.votes}</span>
            <Button 
              variant="ghost" 
              size="sm" 
              className={`p-2 hover:bg-destructive/10 ${question.userVote === "down" ? "bg-destructive/10 text-destructive" : ""}`}
              onClick={() => handleVote("down")}
            >
              <ArrowDown className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1">
            {/* Question Title */}
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
              {question.title}
            </h3>

            {/* Question Description */}
            {question.description && (
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {question.description}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {question.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs hover:bg-accent/50 cursor-pointer">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs bg-gradient-ocean text-white">
                  {question.author.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">{question.author.name}</span>
                  {question.author.expertise.length > 0 && (
                    <Badge className="bg-gradient-forest text-white text-xs">
                      {question.author.expertise[0]}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{question.author.title}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {question.timeAgo}
                  </div>
                </div>
              </div>
            </div>

            {/* Question Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{question.answers} answers</span>
                  {question.hasAcceptedAnswer && (
                    <CheckCircle className="h-4 w-4 text-accent ml-1" />
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{question.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{question.followers} followers</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onFollow(question.id)}
                  className={question.isFollowing ? "bg-accent text-accent-foreground" : ""}
                >
                  {question.isFollowing ? "Following" : "Follow"}
                </Button>
                
                <Button
                  onClick={() => onAnswer(question.id)}
                  className="btn-hero"
                  size="sm"
                >
                  Answer
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={isBookmarked ? "text-accent" : ""}
                >
                  <Bookmark className="h-4 w-4" fill={isBookmarked ? "currentColor" : "none"} />
                </Button>

                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4" />
                </Button>

                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuestionCard;