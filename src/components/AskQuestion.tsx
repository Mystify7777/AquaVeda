import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  X, 
  Plus,
  HelpCircle,
  Tag,
  Globe,
  Lock,
  Users
} from "lucide-react";

interface AskQuestionProps {
  onClose: () => void;
  onSubmit: (question: {
    title: string;
    description: string;
    tags: string[];
    privacy: string;
  }) => void;
}

const AskQuestion = ({ onClose, onSubmit }: AskQuestionProps) => {
  const [question, setQuestion] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [privacy, setPrivacy] = useState("public");

  const suggestedTags = [
    "Water Conservation",
    "Rainwater Harvesting", 
    "Greywater Systems",
    "Smart Irrigation",
    "Industrial Water",
    "Community Projects",
    "Technology",
    "Policy",
    "Research",
    "Implementation"
  ];

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag) && tags.length < 5) {
      setTags([...tags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    if (question.trim()) {
      onSubmit({
        title: question,
        description,
        tags,
        privacy
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-ocean rounded-xl">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Ask a Question</h2>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-3 mb-6 p-3 bg-background/50 rounded-xl">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-gradient-ocean text-white">SC</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-foreground">Dr. Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Water Systems Engineer</div>
            </div>
          </div>

          {/* Question Input */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                What's your question?
              </label>
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., How to implement greywater recycling in apartment buildings?"
                className="text-lg"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Be specific and clear. Good questions get better answers.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Add more details (optional)
              </label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide context, constraints, or additional information that might help others give you a better answer..."
                rows={4}
              />
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Add topics (up to 5)
              </label>
              
              {/* Current tags */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <Badge key={tag} className="bg-gradient-ocean text-white pr-1">
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 hover:bg-white/20 rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              {/* Add tag input */}
              <div className="flex gap-2 mb-3">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Type a topic..."
                  className="flex-1"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addTag(newTag);
                      setNewTag("");
                    }
                  }}
                />
                <Button 
                  onClick={() => {
                    addTag(newTag);
                    setNewTag("");
                  }}
                  variant="outline"
                  size="sm"
                  disabled={!newTag || tags.includes(newTag) || tags.length >= 5}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Suggested tags */}
              <div>
                <p className="text-xs text-muted-foreground mb-2">Suggested topics:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedTags
                    .filter(tag => !tags.includes(tag))
                    .slice(0, 6)
                    .map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      onClick={() => addTag(tag)}
                      disabled={tags.length >= 5}
                      className="text-xs h-7"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Who can see this question?
              </label>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant={privacy === "public" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPrivacy("public")}
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs">Public</span>
                </Button>
                <Button
                  variant={privacy === "community" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPrivacy("community")}
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Users className="h-4 w-4" />
                  <span className="text-xs">Community</span>
                </Button>
                <Button
                  variant={privacy === "private" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPrivacy("private")}
                  className="flex flex-col items-center gap-1 h-auto py-3"
                >
                  <Lock className="h-4 w-4" />
                  <span className="text-xs">Private</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              By posting, you agree to our Community Guidelines
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!question.trim()}
                className="btn-hero"
              >
                Post Question
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AskQuestion;