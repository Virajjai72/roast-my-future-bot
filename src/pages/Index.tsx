import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Share2, RotateCcw, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/contexts/ThemeContext';
import Background3D from '@/components/Background3D';
import MemeDisplay from '@/components/MemeDisplay';
import EmailResponse from '@/components/EmailResponse';
import ThemeToggle from '@/components/ThemeToggle';

interface Question {
  id: string;
  question: string;
  type: 'radio' | 'text';
  options?: string[];
}

interface RoastComments {
  [key: string]: {
    [optionKey: string]: string[];
  };
}

const Index = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: string]: string}>({});
  const [showResult, setShowResult] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentRoast, setCurrentRoast] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showMeme, setShowMeme] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

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

  const roastComments: RoastComments = {
    caste: {
      'General': [
        "General ho? Toh placement bhi general category mein gaya — 'No Entry'.",
        "General quota mein sab common milta hai — pain, trauma, and TCS offer.",
        "General? Matlab 8 CGPA = reject, 9 CGPA = overqualified.",
        "Tera naam dekh ke HR ne bola: 'Yeh bhi general hi hoga.'",
        "Reservation nahi mila, placement bhi nahi mil raha. Consistency!"
      ],
      'OBC': [
        "OBC? Toh tu Other Bakchodi Category mein hi jaata hai.",
        "Tera placement OBC mein bhi backlog mein chala gaya hai.",
        "OBC ho? Phir bhi quota wasted. Kya kar raha tha 4 saal?",
        "Tujhe sirf PAN card mila, placement card nahi.",
        "OBC + Tier 3 = No BC, only OC (Over Crying)."
      ],
      'SC/ST': [
        "SC/ST ho? Par placement toh sabka SC hai ab.",
        "SC/ST quota bhi tujhe skip kar gaya bhai.",
        "HR ne SC/ST dekh ke bola: 'Isko shortlist karne se meri bhi SC lagegi.'",
        "Tu placement mein last round tak gaya — aur waha bhi category dekh ke reject.",
        "SC/ST ho? Par tu toh category se zyada confusion mein nikla."
      ],
      "I don't believe in caste": [
        "Caste ignore karta hai? Resume bhi tujhe ignore karta hai.",
        "Na tu General, na Reserved — tu toh straight Unemployed hai.",
        "Caste nahi maanta? HR bhi tera existence nahi maanta.",
        "Modern thinking hai, par placement ancient age mein stuck hai.",
        "You don't believe in caste? Recruiters don't believe in your resume."
      ],
      "What's caste?": [
        "Caste kya hai? Beta, HR ne tera profile bhi 'Unknown' daala.",
        "Tu caste se free, placement se bhi!",
        "HR bhi tera caste dekh ke confusion mein pad gaya.",
        "Caste nahi pata? Matlab tu category mein bhi aur placement mein bhi lost hai.",
        "Innocence level: Caste nahi pata. Job level: Bhi nahi pata."
      ]
    },
    college: {
      'Tier 1 (IIT/NIT/BITS)': [
        "Tier 1? Pehle placement, fir depression guaranteed.",
        "IIT? Gharwale abhi bhi shaadi fix kar rahe honge, job ki guarantee samajh ke.",
        "Tier 1 se ho? Toh coding ka Arijit Singh hoga.",
        "NIT/BITS? Matlab tu brand value pe survive kar raha hai.",
        "Tier 1 college, Tier 3 personality."
      ],
      'Tier 2 (State Govt)': [
        "Tier 2? Naukri.com hi tera Harvard hai.",
        "State college? Matlab tu govt job ka sapna dekh raha tha.",
        "Tier 2 se nikla? Toh placement bhi 2nd class milegi.",
        "Government college? Free mein padhke bhi free mein reject ho gaya.",
        "State quota se admission, placement mein state bhi nahi pucha."
      ],
      'Tier 3 (Private)': [
        "Tier 3? Placement cell bhi tere se avoid karta hai.",
        "Private college? Matlab 10L fees, 3.6L job, aur 0 self-respect.",
        "Tier 3? Toh CV ka format bhi copied hai.",
        "Private university? Tu MBA karne wala hai next year.",
        "Tier 3 college = Placement guarantee void."
      ],
      'Diploma/Polytechnic': [
        "Diploma? Matlab you're doing engineering's DLC version.",
        "Polytechnic? Tu toh practical se theoretical tak haar gaya.",
        "Diploma wala? Toh degree bhi half, placement bhi half.",
        "3 saal mein kya seekha? 4 saal wale bhi unemployed hain.",
        "Diploma hai? Matlab shortcut leke bhi destination nahi mila."
      ],
      'Chhapri University': [
        "Chhapri University? Bhai honest ho gaya finally.",
        "University ka naam sunte hi HR phone disconnect kar deta hai.",
        "Chhapri se degree? Matlab chhapri hi rahega career bhi.",
        "College name mein hi placement prospects clear hain.",
        "Tu toh university ki website pe bhi placement statistics hide karta hai."
      ]
    },
    branch: {
      'CSE': [
        "CSE? Tera laptop hi tera therapist hai.",
        "CSE wala? Toh tu code bhi likhta hai aur ro bhi leta hai.",
        "Computer Science? Par tera future science fiction lagta hai.",
        "CSE branch, but social skills delete kar diya.",
        "Tu coding aur crying mein balance maintain kar raha hai."
      ],
      'ECE': [
        "ECE? Matlab tu hardware aur HR dono ko confuse karta hai.",
        "Electronics se ho? Par tera circuit placement mein short ho gaya.",
        "ECE branch? Toh tu analog problems ke saath digital solutions dhund raha hai.",
        "Electronics aata hai? Par communication skills mein current nahi aa raha.",
        "ECE ka matlab: Either Coding or Engineering — dono mein fail."
      ],
      'Mech': [
        "Mech ho? Matlab placement mein lubrication aur jugaad.",
        "Mechanical? Toh tera career bhi manually operated hai.",
        "Mech wale? Job nahi, gearbox samajh aata hai.",
        "Mechanical engineering? Par tera placement mechanism fail ho gaya.",
        "Mech branch se ho? Toh internship bhi oiling ka milega."
      ],
      'Civil': [
        "Civil? Banega toh bridge, but job nahi milega.",
        "Civil ho? Toh tera career bhi under construction hai.",
        "Civil engineer? Matlab tu roads banayega, par apna rasta nahi mil raha.",
        "Civil branch? Government job ke alawa koi option nahi.",
        "Civil se ho? Toh tera placement bhi infrastructure problem hai."
      ],
      'Biotech': [
        "Biotech? Matlab tu NEET bhi nahi nikal paya.",
        "Biotechnology? Par tera career extinct ho raha hai.",
        "Biotech branch? Matlab tu biology aur technology dono mein average hai.",
        "Biotech wala? Research karne ke alawa koi job nahi milta.",
        "Biology + Technology = Jobless with scientific explanation."
      ],
      'Other (means jobless)': [
        "Other? Matlab placement ke naam pe momos bechne ka plan hai?",
        "Other branch? Matlab tu syllabus mein bhi aur placement mein bhi '404 Not Found'.",
        "Other means tu category mein bhi confusion mein hai.",
        "Branch 'Other'? HR ne tujhe bhi 'Other' category mein daal diya.",
        "Other branch = Other plans (non-engineering) confirmed."
      ]
    },
    cgpa: {
      '9+': [
        "9+ CGPA? Gharwale proud hai, HR confused hai.",
        "9+ hai? Toh tu beta, resume ke saath ego bhi submit karta hai.",
        "High CGPA? Matlab overqualified for rejection.",
        "9+ CGPA with 0 soft skills = Premium rejection.",
        "CGPA toh top hai, par placement bottom mein."
      ],
      '8-9': [
        "8–9? Balance between Netflix & No Placement.",
        "8-9 CGPA? Matlab smart, but still rejected — life is fair.",
        "Good CGPA, bad luck in placement. Story of every engineer.",
        "8+ CGPA? Matlab padhaai ki, par skills nahi seekhi.",
        "Academic topper, placement flopper."
      ],
      '7-8': [
        "7-8? Matlab tu average hai, placement bhi average milegi.",
        "Decent CGPA, indecent placement prospects.",
        "7+ CGPA? Matlab mediocre performance, mediocre job guaranteed.",
        "Tu average student hai, average salary bhi accept kar le.",
        "7-8 CGPA = Perfectly balanced rejection rate."
      ],
      '<7': [
        "<7? Resume mein emoji daalna start kar de.",
        "7 ke neeche? Degree ke saath sympathy bhi print ho rahi hai.",
        "Low CGPA? Matlab tu final year mein realise hua placement bhi chahiye.",
        "CGPA low hai? Toh expectation bhi low rakh.",
        "Sub-7 CGPA = Sub-standard placement confirmed."
      ],
      "Don't ask pls": [
        "Don't ask? Matlab degree mein watermark bhi nahi dikhta.",
        "CGPA chhupata hai? HR ne tujhe bhi hide kar diya shortlist se.",
        "Don't ask pls? Matlab tera academic record bhi embarrassing hai.",
        "CGPA confidential? Matlab placement bhi confidential rahegi.",
        "Tu CGPA se darr raha hai, placement se toh ro padega."
      ]
    },
    gender: {
      'Male': [
        "Male? Matlab coding + crying = career.",
        "Male engineer = less salary + more memes.",
        "Tu male hai? Toh competition bhi zyada, sympathy bhi kam.",
        "Male candidate? HR ne gender dekh ke sigh kar diya.",
        "Ladka hai? Matlab struggle real, placement surreal."
      ],
      'Female': [
        "Female? Tera LinkedIn already viral hoga #WomenInTech",
        "Female engineer? Matlab diversity quota mein advantage.",
        "Ladki ho? Toh placement mein thoda easy mode mil jaayega.",
        "Female candidate? Companies lined up hongi, interviews ke liye.",
        "She codes? Companies immediately interested."
      ],
      'Other': [
        "Other? Recruiter bhi confused, but diversity mil gayi.",
        "Other gender? HR ne Google search kiya diversity policy ke liye.",
        "Gender 'Other'? Matlab tu categories mein bhi unique hai.",
        "Other? Placement mein bhi tu different treatment expect kar.",
        "Progressive gender choice, regressive placement chances."
      ]
    },
    coding: {
      'Yes': [
        "Yes? Toh tu placement nahi, hackathon jeetega.",
        "Coding aati hai? Toh leetcode pe shaadi karle.",
        "Haan coding aata hai, par logic se zyada logon ko ignore karta hai.",
        "Coder hai? Toh salary expectation bhi decode kar le.",
        "Coding skills: Present. Social skills: undefined."
      ],
      'No': [
        "No? Matlab tu placement mein PPT banayega.",
        "No coding? Toh tu PPT banane ke liye engineer bana kya?",
        "Coding nahi aata? Excel expert ban ja, safer hai.",
        "Non-coder engineer? Matlab tu management trainee material hai.",
        "No coding = No high-paying job. Simple math."
      ],
      'Copy from GitHub': [
        "GitHub se copy? Full-stack copy-paste engineer.",
        "GitHub se copy? Tu toh Ctrl+C ka HR version hai.",
        "Copy-paste expert? Interview mein original code maangenge.",
        "GitHub dependency? Matlab tu open-source unemployed hai.",
        "Copy from GitHub = Copy someone else's job prospects too."
      ]
    },
    drink: {
      'Yes, weekend only': [
        "Weekend pe peeta hai? Matlab deadlines Sunday ko yaad aate hai.",
        "Weekend drinking? Toh tera startup ka naam hoga 'Hangover Pvt Ltd'.",
        "Weekend drinker? Monday blues permanent hain tere liye.",
        "Sirf weekend? Placement ke baad daily ho jaayega.",
        "Weekend pe peeta hai? Interview mein bhi weekend mood rahega."
      ],
      "No, I'm sanskari": [
        "Sanskari? Matlab HR bhi bore ho gayi.",
        "Non-drinker? Toh tujhe placement ke liye sacrifice banana padega.",
        "Sanskari ho? Par placement asanskari hai tera saath.",
        "No drinking? Toh friends circle mein tu always driver hoga.",
        "Sanskari candidate? Companies ko lagta hai tu flexible nahi hai."
      ],
      'I live in a bottle': [
        "Bottle mein rehta hai? Tu toh Spirit-level engineer hai.",
        "Bottle mein rehta hai? Toh tere SOP mein bhi Old Monk hoga.",
        "Heavy drinker? Placement chances bhi heavy drunk hain.",
        "Bottle lover? Interview mein bhi drunk and disorderly rahega.",
        "Alcoholic engineer? Matlab debugging skills alcohol mein doob gaye."
      ]
    },
    masturbate: {
      'Daily': [
        "Daily? Toh job ke liye haath bhi chal raha, CV bhi.",
        "Roz ke routine mein tu sirf self-employment kar raha hai.",
        "Daily practice? Interview mein bhi nervous ho jaayega.",
        "Jitna tu apne haath chalaata hai, utna toh placement drive bhi nahi chalte.",
        "Daily routine hai? Toh self-motivation toh perfect hoga."
      ],
      'Sometimes': [
        "Sometimes? Matlab tu intern se zyada internship mein interested hai.",
        "Kabhi kabhi? Toh tu placement ke liye bhi 'sometimes interested' hai.",
        "Part-time activity? Full-time job ke liye commitment nahi hai.",
        "Sometimes means tu consistent bhi nahi hai isme.",
        "Irregular practice? Placement results bhi irregular honge."
      ],
      'Never': [
        "Never? Is lie se itna tension mein lagta hai.",
        "Never? Bro tu toh HR ke samne bhi nervous breakdown ho jaayega.",
        "Kabhi nahi? Matlab tu stress release bhi nahi kar sakta.",
        "Never masturbate? Toh tu interviews mein kaise cope karega?",
        "Never means tu self-care mein bhi failure hai."
      ],
      'Prefer not to say': [
        "Prefer not to say? Interview mein bhi private rahega?",
        "Batana nahi chahta? HR round mein bhi secretive rahega.",
        "Confidential hai? Salary bhi confidential rahegi.",
        "Not to say? Matlab tu personal questions se uncomfortable hai.",
        "Privacy lover? Corporate world mein privacy nahi milti."
      ]
    },
    virgin: {
      'Yes (sadly)': [
        "Virgin? Toh placement bhi tera pehla hoga.",
        "Virgin ho? Matlab abhi tak kisi company ne touch bhi nahi kiya.",
        "Sadly virgin? Placement mein bhi sadly rejected rahega.",
        "First time experience ke liye ready? Rejection bhi first time hoga.",
        "Virgin candidate? Companies ko innocence pasand nahi."
      ],
      'No': [
        "No? Toh CV mein likh 'Soft skills: seduction'.",
        "Non-virgin? HR ne tujhe 'experienced candidate' maan liya.",
        "Experience hai? Toh tu placement se zyada HR se mil chuka hai.",
        "Not virgin? Matlab confidence level high hoga interviews mein.",
        "Experienced in life? Experienced in rejection bhi ho jaayega."
      ],
      'Emotionally only': [
        "Emotionally? Matlab HR round mein rona sure hai.",
        "Emotionally only? Matlab tu LinkedIn pe bhi crying emoji daal raha hai.",
        "Emotional virgin? Placement rejection emotional damage karega.",
        "Physically experienced, emotionally naive? Weird combination.",
        "Emotionally virgin means workplace politics mein survive nahi karega."
      ],
      "Who's asking?": [
        "Who's asking? HR bhi yahi question karega background check mein.",
        "Privacy chahiye? Interview mein bhi defensive rahega.",
        "Who's asking? Matlab tu uncomfortable questions se darr raha hai.",
        "Defensive attitude? Workplace mein team player nahi ban paayega.",
        "Question counter-question? Problem-solving skills questionable."
      ]
    },
    relationship: {
      'Yes': [
        "Yes? Matlab coding kam, cuddling zyada.",
        "Yes? Tera motivation partner hai, placement nahi.",
        "Relationship hai? Toh attention divided, focus bhi divided.",
        "GF/BF hai? Distraction level maximum.",
        "In relationship? Matlab tu emotionally unavailable for career growth."
      ],
      'No': [
        "No? HR bhi tera profile ignore karta hai.",
        "No? Toh tu apne CV ko hi swipe kar raha hai daily.",
        "Single ho? Matlab desperate for any kind of acceptance.",
        "No relationship? Social skills mein improvement needed.",
        "Forever alone? Career mein bhi alone hi rahega."
      ],
      'Situationship': [
        "Situationship? Matlab tu placement mein bhi stuck hai.",
        "Situationship? Tera career bhi 'it's complicated' mein hai.",
        "Confused relationship status? Job status bhi confused rahegi.",
        "Situationship means commitment issues. Employers hate that.",
        "Undefined relationship? Career path bhi undefined."
      ],
      'I watch anime': [
        "Anime dekhte ho? Toh tu emotionally Japanese ho chuka hai.",
        "Anime watcher? Real world mein adjustment problems honge.",
        "Waifu > real life? Salary bhi virtual milegi.",
        "Anime addict? Social interaction skills compromised.",
        "2D love? 3D career prospects bhi flat."
      ]
    }
  };

  const finalRoasts = [
    "🎉 Congratulations! You'll be placed as Chief Meme Officer in your uncle's WhatsApp group business.",
    "🤖 Our quantum AI predicts: MBA after getting rejected by 47 companies (including your local grocery store).",
    "💀 Breaking News: You are selected for the most prestigious position... absolutely nothing! Your parents are so proud.",
    "🏆 Placement result: Swiggy delivery executive with a software engineering degree (at least you'll know algorithms for shortest path).",
    "🎓 AI says: Start preparing for govt exam, private sector filed a restraining order against you.",
    "📹 Prediction: You'll become a YouTuber teaching 'How NOT to get placed' - finally, a career that matches your expertise!",
    "👔 Final result: Family business mein 'Chief Technology Officer' ka designation milega (technology = Excel + WhatsApp).",
    "💻 Our ML model crashed trying to calculate your placement probability. Error: Division by zero.",
    "🎪 Congrats! You're overqualified to be a coding bootcamp victim and underqualified for everything else.",
    "📚 Result: Teaching kids 'Scratch programming' while internally scratching your head about your own future.",
    "🤡 Plot twist: You'll end up in HR, rejecting students just like yourself. The circle of corporate life!",
    "🚀 Startup prediction: You'll launch 'PlaceMint 2.0' - a therapy app for unemployed engineers.",
    "💰 Salary expectation vs Reality: You asked for 6 LPA, you'll get 6 months free internship + travel allowance (bus pass).",
    "🎯 Achievement unlocked: Professional interview attendee. 200+ interviews, 0 offers, but hey, free samosas!",
    "🏠 Final destination: Ghar pe baith ke freelancing (aka watching Netflix while parents think you're working)."
  ];

  const getRandomFromArray = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getRoastForAnswer = (questionId: string, answer: string) => {
    const questionComments = roastComments[questionId];
    if (!questionComments) return "Interesting choice... anyway moving on.";
    
    const optionComments = questionComments[answer];
    if (!optionComments || optionComments.length === 0) {
      return "Interesting choice... anyway moving on.";
    }
    
    return getRandomFromArray(optionComments);
  };

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
    
    // Generate roast for current answer using proper mapping
    let personalizedRoast = '';
    
    if (questionId === 'name' && value.trim()) {
      personalizedRoast = `${value}? Yeh naam toh rejection list mein 3rd baar aaya tha.`;
    } else {
      personalizedRoast = getRoastForAnswer(questionId, value);
    }
    
    setCurrentRoast(personalizedRoast);
    setShowMeme(true);
    
    typeWriter(personalizedRoast, () => {
      setTimeout(() => {
        setShowMeme(false);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
          setCurrentRoast('');
        } else {
          // Final analysis
          setIsAnalyzing(true);
          setTimeout(() => {
            setIsAnalyzing(false);
            const finalRoast = getRandomFromArray(finalRoasts);
            typeWriter(finalRoast, () => {
              setShowResult(true);
              setShowMeme(true);
            });
          }, 3000);
        }
      }, 3000);
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTypingText('');
    setCurrentRoast('');
    setIsAnalyzing(false);
    setShowMeme(false);
  };

  const shareResult = () => {
    const shareText = `Just got roasted by Placemint.AI about my placement chances 😭 Check out this brutal ML predictor!`;
    if (navigator.share) {
      navigator.share({
        title: 'Placemint.AI Roast Results',
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
      <div className="min-h-screen relative">
        <Background3D />
        <ThemeToggle />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <Card className={`w-full max-w-lg sm:max-w-2xl ${
            theme === 'dark' 
              ? 'bg-slate-800/50 border-purple-500/20' 
              : 'bg-white/50 border-purple-300/30'
          } backdrop-blur`}>
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="animate-spin text-4xl sm:text-6xl mb-4 sm:mb-6">🛸</div>
              <h2 className={`text-xl sm:text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Placemint.AI Quantum Analysis...</h2>
              <div className={`space-y-2 sm:space-y-3 text-sm sm:text-base ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
              }`}>
                <p className="animate-pulse">🌌 Consulting galactic placement database...</p>
                <p className="animate-pulse">🤖 Training neural networks on cosmic rejection patterns...</p>
                <p className="animate-pulse">🔥 Calculating maximum roast intensity without causing existential crisis...</p>
                <p className="animate-pulse">💀 Loading brutal comments from parallel universe...</p>
                <p className="animate-pulse">🎯 Cross-referencing with unemployment statistics across galaxies...</p>
              </div>
              <div className="mt-4 sm:mt-6">
                <div className={`w-full rounded-full h-2 ${
                  theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                }`}>
                  <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 h-2 rounded-full animate-pulse w-3/4"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen relative">
        <Background3D />
        <ThemeToggle />
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div className="w-full max-w-lg sm:max-w-2xl space-y-4 sm:space-y-6">
            <Card className={`${
              theme === 'dark' 
                ? 'bg-slate-800/50 border-red-500/20' 
                : 'bg-white/50 border-red-300/30'
            } backdrop-blur`}>
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🛸💀🚀</div>
                <CardTitle className={`text-2xl sm:text-3xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Placemint.AI Galactic Prediction Complete!
                </CardTitle>
                <p className={`text-sm sm:text-base mt-2 ${
                  theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                }`}>
                  Transmitted from the cosmic unemployment bureau 🌌
                </p>
              </CardHeader>
              <CardContent className="p-4 sm:p-8 text-center space-y-4 sm:space-y-6">
                <div className={`${
                  theme === 'dark' 
                    ? 'bg-red-900/30 border-red-500/30' 
                    : 'bg-red-50/80 border-red-300/50'
                } p-4 sm:p-6 rounded-lg border`}>
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 ${
                    theme === 'dark' ? 'text-red-300' : 'text-red-700'
                  }`}>🎭 Final Cosmic Verdict:</h3>
                  <p className={`text-base sm:text-lg ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{typingText}</p>
                </div>
                
                <MemeDisplay isVisible={showMeme} />
                
                <div className="text-center space-y-3 sm:space-y-4">
                  <p className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                  }`}>
                    Hey {answers.name || 'Anonymous Space Cadet'}, our interstellar AI has spoken from beyond! 🛸
                  </p>
                  <p className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    (This is 100% satirical entertainment from a parallel universe where humor exists 🌌)
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button 
                    onClick={shareResult}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share My Galactic Roast
                  </Button>
                  <Button 
                    onClick={resetQuiz}
                    variant="outline"
                    className={`text-sm sm:text-base ${
                      theme === 'dark' 
                        ? 'border-purple-500/30 text-purple-300 hover:bg-purple-500/10' 
                        : 'border-purple-300/50 text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Get Roasted Again
                  </Button>
                </div>
              </CardContent>
            </Card>

            <EmailResponse 
              isVisible={true} 
              userAnswers={answers} 
              finalRoast={typingText} 
            />
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen relative">
      <Background3D />
      <ThemeToggle />
      <div className="relative z-10 min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 pt-6 sm:pt-8">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              🛸 Placemint.AI 🌌
            </h1>
            <p className={`text-base sm:text-xl mb-2 ${
              theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
            }`}>
              Galactic satirical roasting machine for engineering students
            </p>
            <p className={`text-xs sm:text-sm mt-2 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Prepare to get brutally roasted by our cosmic AI in Hin-glish! 🚀😈
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className={`flex justify-between text-xs sm:text-sm mb-2 ${
              theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
            }`}>
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className={`${
            theme === 'dark' 
              ? 'bg-slate-800/60 border-purple-500/20' 
              : 'bg-white/60 border-purple-300/30'
          } backdrop-blur mb-4 sm:mb-6`}>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className={`text-lg sm:text-xl ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {currentQ.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 sm:p-6">
              {currentQ.type === 'radio' ? (
                <RadioGroup 
                  onValueChange={handleAnswer}
                  className="space-y-2 sm:space-y-3"
                >
                  {currentQ.options?.map((option, index) => (
                    <div key={index} className={`flex items-center space-x-2 p-2 sm:p-3 rounded-lg transition-colors ${
                      theme === 'dark' ? 'hover:bg-slate-700/30' : 'hover:bg-gray-100/50'
                    }`}>
                      <RadioGroupItem 
                        value={option} 
                        id={option}
                        className="border-purple-500 text-purple-500"
                      />
                      <Label 
                        htmlFor={option} 
                        className={`cursor-pointer flex-1 text-sm sm:text-base ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
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
                    className={`${
                      theme === 'dark' 
                        ? 'bg-slate-700/50 border-purple-500/30 text-white placeholder:text-slate-400' 
                        : 'bg-white/50 border-purple-300/50 text-gray-900 placeholder:text-gray-500'
                    }`}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const value = (e.target as HTMLInputElement).value;
                        if (value.trim()) {
                          handleAnswer(value);
                        }
                      }
                    }}
                  />
                  <p className={`text-xs sm:text-sm ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>Press Enter to continue</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Roast Display */}
          {currentRoast && (
            <Card className={`${
              theme === 'dark' 
                ? 'bg-red-900/20 border-red-500/30' 
                : 'bg-red-50/80 border-red-300/50'
            } backdrop-blur mb-4 sm:mb-6`}>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start space-x-3">
                  <div className="text-xl sm:text-2xl">🔥</div>
                  <div className="flex-1">
                    <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                      theme === 'dark' ? 'text-red-300' : 'text-red-700'
                    }`}>Placemint.AI Roast:</h3>
                    <p className={`text-sm sm:text-base ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
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

          <MemeDisplay isVisible={showMeme && currentRoast && !isTyping} />

          {/* Footer */}
          <div className={`text-center mt-6 sm:mt-8 text-xs sm:text-sm ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
          }`}>
            <p>⚠️ This is pure satire and entertainment. Don't take it seriously!</p>
            <p className="mt-2">Made with 💀 for engineering students who can take a joke</p>
            <p className={`mt-1 ${
              theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
            }`}>Powered by Placemint.AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
