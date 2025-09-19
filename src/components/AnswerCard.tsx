import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowUp, 
  ArrowDown, 
  MessageSquare, 
  Share, 
  MoreHorizontal,
  Clock,
  CheckCircle,
  Award,
  Edit,
  Reply
} from "lucide-react";

interface Answer {
  id: number;
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    expertise: string[];
    reputation: number;
  };
  timeAgo: string;
  votes: number;
  isAccepted: boolean;
  comments: number;
  userVote?: "up" | "down" | null;
  isAuthor?: boolean;
}

interface AnswerCardProps {
  answer: Answer;
  onVote: (answerId: number, voteType: "up" | "down" | null) => void;
  onAccept?: (answerId: number) => void;
  onComment: (answerId: number) => void;
  canAcceptAnswers?: boolean;
}

const AnswerCard = ({ answer, onVote, onAccept, onComment, canAcceptAnswers = false }: AnswerCardProps) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState("");

  const handleVote = (voteType: "up" | "down") => {
    const newVote = answer.userVote === voteType ? null : voteType;
    onVote(answer.id, newVote);
  };

  const handleComment = () => {
    if (newComment.trim()) {
      onComment(answer.id);
      setNewComment("");
      setShowCommentForm(false);
    }
  };

  return (
    <div className={`relative ${answer.isAccepted ? "ring-2 ring-accent rounded-xl" : ""}`}>
      {answer.isAccepted && (
        <div className="absolute -top-2 left-6 z-10">
          <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Accepted Answer
          </Badge>
        </div>
      )}
      
      <Card className="category-card">
        <div className="p-6">
          <div className="flex gap-4">
            {/* Voting Column */}
            <div className="flex flex-col items-center gap-2 min-w-[60px]">
              <Button 
                variant="ghost" 
                size="sm" 
                className={`p-2 hover:bg-accent/50 ${answer.userVote === "up" ? "bg-accent text-accent-foreground" : ""}`}
                onClick={() => handleVote("up")}
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
              <span className="font-semibold text-lg text-primary">{answer.votes}</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className={`p-2 hover:bg-destructive/10 ${answer.userVote === "down" ? "bg-destructive/10 text-destructive" : ""}`}
                onClick={() => handleVote("down")}
              >
                <ArrowDown className="h-5 w-5" />
              </Button>
              
              {canAcceptAnswers && !answer.isAccepted && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onAccept?.(answer.id)}
                  className="p-2 mt-2"
                  title="Mark as accepted answer"
                >
                  <CheckCircle className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Answer Content */}
            <div className="flex-1">
              {/* Answer Text */}
              <div className="prose prose-sm max-w-none mb-4">
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">
                  {answer.content}
                </p>
              </div>

              {/* Author Info & Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="text-sm bg-gradient-ocean text-white">
                      {answer.author.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{answer.author.name}</span>
                      {answer.author.expertise.length > 0 && (
                        <Badge className="bg-gradient-forest text-white text-xs">
                          {answer.author.expertise[0]}
                        </Badge>
                      )}
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Award className="h-3 w-3" />
                        <span>{answer.author.reputation}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{answer.author.title}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {answer.timeAgo}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  {answer.isAuthor && (
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowCommentForm(!showCommentForm)}
                  >
                    <Reply className="h-4 w-4 mr-1" />
                    Comment
                  </Button>

                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>

                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Comments Section */}
              {answer.comments > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary"
                    onClick={() => onComment(answer.id)}
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    View {answer.comments} comments
                  </Button>
                </div>
              )}

              {/* Comment Form */}
              {showCommentForm && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8 flex-shrink-0">
                      <AvatarFallback className="text-xs bg-gradient-ocean text-white">
                        SC
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        rows={2}
                        className="resize-none"
                      />
                      <div className="flex items-center justify-end gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setShowCommentForm(false);
                            setNewComment("");
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          size="sm"
                          onClick={handleComment}
                          disabled={!newComment.trim()}
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnswerCard;