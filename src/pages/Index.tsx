
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Share2, RotateCcw, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: string;
  question: string;
  type: 'radio' | 'text';
  options?: string[];
}

interface RoastComment {
  [key: string]: string[];
}

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [showResult, setShowResult] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentRoast, setCurrentRoast] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const questions: Question[] = [
    {
      id: 'caste',
      question: 'First things first - Caste batao (for maximum roast potential) 🔥',
      type: 'radio',
      options: ['General', 'OBC', 'SC/ST', "I don't believe in caste", "What's caste?"]
    },
    {
      id: 'name',
      question: 'Name kya hai bhai? (We need to personalize your roast) 📝',
      type: 'text'
    },
    {
      id: 'college',
      question: 'College tier batao (so we know how hard to roast) 🎓',
      type: 'radio',
      options: ['Tier 1 (IIT/NIT/BITS)', 'Tier 2 (State Govt)', 'Tier 3 (Private)', 'Diploma/Polytechnic', 'Chhapri University']
    },
    {
      id: 'branch',
      question: 'Branch kya hai? (Job probability calculator) ⚙️',
      type: 'radio',
      options: ['CSE', 'ECE', 'Mech', 'Civil', 'Biotech', 'Other (means jobless)']
    },
    {
      id: 'cgpa',
      question: 'CGPA kitna hai? (Preparation for reality check) 📊',
      type: 'radio',
      options: ['9+', '8-9', '7-8', '<7', "Don't ask pls"]
    },
    {
      id: 'gender',
      question: 'Gender? (For diversity quota calculations) 🚹🚺',
      type: 'radio',
      options: ['Male', 'Female', 'Other']
    },
    {
      id: 'coding',
      question: 'Coding aati hai? 💻',
      type: 'radio',
      options: ['Yes', 'No', 'Copy from GitHub']
    },
    {
      id: 'drink',
      question: 'Peete ho? (Stress management skills) 🍻',
      type: 'radio',
      options: ['Yes, weekend only', "No, I'm sanskari", 'I live in a bottle']
    },
    {
      id: 'masturbate',
      question: 'Masturbate karte ho? (Self-employment experience) ✋',
      type: 'radio',
      options: ['Daily', 'Sometimes', 'Never', 'Prefer not to say']
    },
    {
      id: 'virgin',
      question: 'Virgin ho? (First-time experience with rejection) 🔒',
      type: 'radio',
      options: ['Yes (sadly)', 'No', 'Emotionally only', "Who's asking?"]
    },
    {
      id: 'relationship',
      question: 'GF/BF hai? (Distraction level measurement) 💘',
      type: 'radio',
      options: ['Yes', 'No', 'Situationship', 'I watch anime']
    }
  ];

  const roastComments: RoastComment = {
    caste: [
      "General ho? Toh placement bhi general category mein gaya — 'No Entry'.",
      "OBC ho? Toh reservation bhi kam aaya, bhai tu toh OP hi nikla.",
      "SC/ST? Placement quota bhi ignore kar gaya tujhe.",
      "You don't believe in caste? Recruiters don't believe in your resume.",
      "Caste nahi bataya? HR ne tujhe bhi shortlist nahi kiya."
    ],
    college: [
      "Tier 1? Tu toh coding ka Arijit Singh hoga.",
      "Tier 3? Placement cell bhi tere se avoid karta hai.",
      "Diploma? Matlab you're doing engineering's DLC version.",
      "Private college? Matlab 10L fees, 3.6L job, aur 0 self-respect.",
      "IIT? Gharwale abhi bhi shaadi fix kar rahe honge, job ki guarantee samajh ke."
    ],
    branch: [
      "Mech ho? Matlab placement mein lubrication aur jugaad.",
      "CSE? Tera laptop hi tera therapist hai.",
      "Civil? Banega toh bridge, but job nahi milega.",
      "Biotech? Matlab tu NEET bhi nahi nikal paya.",
      "Other? Matlab placement ke naam pe momos bechne ka plan hai?"
    ],
    cgpa: [
      "9+ CGPA? Gharwale proud hai, HR confused hai.",
      "8–9? Balance between Netflix & No Placement.",
      "<7? Resume mein emoji daalna start kar de.",
      "Don't ask? Matlab degree mein watermark bhi nahi dikhta.",
      "7-8? Matlab tu average hai, placement bhi average milegi."
    ],
    gender: [
      "Male? Matlab coding + crying = career.",
      "Female? Tera LinkedIn already viral hoga #WomenInTech",
      "Other? Recruiter bhi confused, but diversity mil gayi."
    ],
    coding: [
      "Yes? Toh tu placement nahi, hackathon jeetega.",
      "No? Matlab tu placement mein PPT banayega.",
      "GitHub se copy? Full-stack copy-paste engineer."
    ],
    drink: [
      "Weekend pe peeta hai? Matlab deadlines Sunday ko yaad aate hai.",
      "Sanskari? Matlab HR bhi bore ho gayi.",
      "Bottle mein rehta hai? Tu toh Spirit-level engineer hai."
    ],
    masturbate: [
      "Daily? Toh job ke liye haath bhi chal raha, CV bhi.",
      "Sometimes? Matlab tu intern se zyada internship mein interested hai.",
      "Never? Is lie se itna tension mein lagta hai."
    ],
    virgin: [
      "Virgin? Toh placement bhi tera pehla hoga.",
      "No? Toh CV mein likh 'Soft skills: seduction'.",
      "Emotionally? Matlab HR round mein rona sure hai."
    ],
    relationship: [
      "Yes? Matlab coding kam, cuddling zyada.",
      "No? HR bhi tera profile ignore karta hai.",
      "Situationship? Matlab tu placement mein bhi stuck hai.",
      "Anime dekhte ho? Toh tu emotionally Japanese ho chuka hai."
    ]
  };

  const finalRoasts = [
    "Congratulations! You'll be placed as unpaid intern in your cousin's startup.",
    "Our AI predicts: MBA after rejection from 12 companies.",
    "Breaking News: You are selected for… absolutely nothing. 🎉",
    "Placement result: Swiggy delivery boy with engineering degree.",
    "AI says: Start preparing for govt exam, private sector gave up on you.",
    "Prediction: You'll become a YouTuber teaching 'How NOT to get placed'.",
    "Final result: Family business mein 'Software Developer' ka designation milega.",
    "Our ML model crashed trying to find your placement probability.",
    "Congrats! You're qualified to be a coding bootcamp victim.",
    "Result: Teaching kids coding while crying about your own career."
  ];

  const typeWriter = (text: string, callback?: () => void) => {
    setIsTyping(true);
    setTypingText('');
    let i = 0;
    const timer = setInterval(() => {
      setTypingText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        setIsTyping(false);
        if (callback) callback();
      }
    }, 50);
  };

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    // Generate roast for current answer
    const roasts = roastComments[questionId] || ["Interesting choice... anyway moving on."];
    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    
    // If it's name question, personalize it
    let personalizedRoast = randomRoast;
    if (questionId === 'name' && value.trim()) {
      personalizedRoast = `${value}? Yeh naam toh rejection list mein 3rd baar aaya tha.`;
    }
    
    setCurrentRoast(personalizedRoast);
    typeWriter(personalizedRoast, () => {
      setTimeout(() => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setCurrentRoast('');
        } else {
          // Final analysis
          setIsAnalyzing(true);
          setTimeout(() => {
            setIsAnalyzing(false);
            const finalRoast = finalRoasts[Math.floor(Math.random() * finalRoasts.length)];
            typeWriter(finalRoast, () => {
              setShowResult(true);
            });
          }, 3000);
        }
      }, 2000);
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTypingText('');
    setCurrentRoast('');
    setIsAnalyzing(false);
  };

  const shareResult = () => {
    const shareText = `Just got roasted by an AI about my placement chances 😭 Check out this brutal ML predictor!`;
    if (navigator.share) {
      navigator.share({
        title: 'ML Placement Predictor Roast',
        text: shareText,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
      toast({
        title: "Link copied!",
        description: "Share kar de social media pe, let others get roasted too! 😈",
      });
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-slate-800/50 border-purple-500/20 backdrop-blur">
          <CardContent className="p-8 text-center">
            <div className="animate-spin text-6xl mb-6">🤖</div>
            <h2 className="text-2xl font-bold text-white mb-4">Analyzing with Advanced ML Algorithm...</h2>
            <div className="space-y-3 text-purple-300">
              <p className="animate-pulse">Training neural networks on your data...</p>
              <p className="animate-pulse">Cross-referencing with placement statistics...</p>
              <p className="animate-pulse">Calculating roast intensity...</p>
              <p className="animate-pulse">Loading brutal comments database...</p>
            </div>
            <div className="mt-6">
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full animate-pulse w-3/4"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl bg-slate-800/50 border-red-500/20 backdrop-blur">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">💀</div>
            <CardTitle className="text-3xl font-bold text-white">
              ML Placement Prediction Complete!
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 text-center space-y-6">
            <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-xl font-bold text-red-300 mb-3">Final Verdict:</h3>
              <p className="text-lg text-white">{typingText}</p>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-purple-300">
                Hey {answers.name || 'Anonymous'}, our AI has spoken! 🤖
              </p>
              <p className="text-sm text-slate-400">
                (This is all satirical fun, keep grinding! 💪)
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <Button 
                onClick={shareResult}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share My Roast
              </Button>
              <Button 
                onClick={resetQuiz}
                variant="outline"
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                Get Roasted Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            🤖 ML Placement Predictor
          </h1>
          <p className="text-lg text-purple-300">
            Satirical roasting machine for engineering students
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Prepare to get brutally roasted in Hin-glish! 😈
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-purple-300 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur mb-6">
          <CardHeader>
            <CardTitle className="text-xl text-white">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {currentQ.type === 'radio' ? (
              <RadioGroup 
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {currentQ.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-slate-700/30 transition-colors">
                    <RadioGroupItem 
                      value={option} 
                      id={option}
                      className="border-purple-500 text-purple-500"
                    />
                    <Label 
                      htmlFor={option} 
                      className="text-white cursor-pointer flex-1"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            ) : (
              <div className="space-y-4">
                <Input
                  placeholder="Type kar de bhai..."
                  className="bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      const value = (e.target as HTMLInputElement).value;
                      if (value.trim()) {
                        handleAnswer(value);
                      }
                    }
                  }}
                />
                <p className="text-sm text-slate-400">Press Enter to continue</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Roast Display */}
        {currentRoast && (
          <Card className="bg-red-900/20 border-red-500/30 backdrop-blur">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">🔥</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-red-300 mb-2">AI Roast:</h3>
                  <p className="text-white">
                    {isTyping ? (
                      <>
                        {typingText}
                        <span className="animate-pulse">|</span>
                      </>
                    ) : (
                      typingText
                    )}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-slate-400 text-sm">
          <p>⚠️ This is pure satire and entertainment. Don't take it seriously!</p>
          <p className="mt-2">Made with 💀 for engineering students who can take a joke</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
