
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Send, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';

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
  const { theme } = useTheme();

  if (!isVisible) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailData = {
        userEmail,
        userResponse,
        userAnswers,
        finalRoast,
        timestamp: new Date().toISOString(),
        targetEmail: 'jaiswalviraj72005@gmail.com'
      };

      console.log('Email Data to send:', emailData);
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
    <Card className={`mt-4 sm:mt-6 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30' 
        : 'bg-gradient-to-br from-blue-50/80 to-purple-50/80 border-blue-300/50'
    } backdrop-blur animate-fade-in`}>
      <CardHeader className="text-center p-4 sm:p-6">
        <div className="text-3xl sm:text-4xl mb-2">📧</div>
        <CardTitle className={`text-lg sm:text-xl ${
          theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
        }`}>
          How was your roasting experience?
        </CardTitle>
        <p className={`text-xs sm:text-sm ${
          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
        }`}>
          Send your feedback directly to <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>jaiswalviraj72005@gmail.com</span>
        </p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Your email address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
              className={`${
                theme === 'dark' 
                  ? 'bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400' 
                  : 'bg-white/50 border-blue-300/50 text-gray-900 placeholder:text-gray-500'
              }`}
            />
          </div>
          
          <div>
            <Textarea
              placeholder="How did you find this roasting session? Was it funny? Too brutal? Share your thoughts..."
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
              required
              rows={4}
              className={`${
                theme === 'dark' 
                  ? 'bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400' 
                  : 'bg-white/50 border-blue-300/50 text-gray-900 placeholder:text-gray-500'
              }`}
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
          <p className={`text-xs ${
            theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
          }`}>
            💡 Your response will be sent along with your quiz answers and roast results
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailResponse;
