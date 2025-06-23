
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Send, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmailResponseProps {
  isVisible: boolean;
  userAnswers: { [key: string]: string };
  finalRoast: string;
}

const EmailResponse = ({ isVisible, userAnswers, finalRoast }: EmailResponseProps) => {
  const [userEmail, setUserEmail] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate email submission (in real app, you'd use a backend service)
    try {
      const emailData = {
        userEmail,
        userResponse,
        userAnswers,
        finalRoast,
        timestamp: new Date().toISOString(),
        targetEmail: 'jaiswalviraj72005@gmail.com'
      };

      // Log the data (in real implementation, send to backend)
      console.log('Email Data to send:', emailData);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Response Sent! 🚀",
        description: "Your feedback has been sent to jaiswalviraj72005@gmail.com",
      });

      setUserEmail('');
      setUserResponse('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="mt-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur animate-fade-in">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">📧</div>
        <CardTitle className="text-xl text-blue-300">
          How was your roasting experience?
        </CardTitle>
        <p className="text-sm text-slate-400">
          Send your feedback directly to <span className="text-blue-400">jaiswalviraj72005@gmail.com</span>
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="How did you find this roasting session? Was it funny? Too brutal? Share your thoughts..."
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              required
              rows={4}
              className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {isSubmitting ? (
              <>
                <Mail className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Response
              </>
            )}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            💡 Your response will be sent along with your quiz answers and roast results
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailResponse;
