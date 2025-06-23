
import React from 'react';

interface MemeDisplayProps {
  isVisible: boolean;
}

const MemeDisplay = ({ isVisible }: MemeDisplayProps) => {
  const memes = [
    { text: "When HR asks about your projects", emoji: "🤡", subtitle: "Copy-paste se GitHub green kar diya" },
    { text: "Tier 3 college me placement", emoji: "😭", subtitle: "Excel expert banne ka time aa gaya" },
    { text: "9+ CGPA but no offer", emoji: "🤓", subtitle: "Overqualified for rejection" },
    { text: "Civil engineer in 2024", emoji: "🏗️", subtitle: "Bridge banaunga, career nahi" },
    { text: "When you say 'I know Python'", emoji: "🐍", subtitle: "Print('Hello World') expert" },
    { text: "Watching coding tutorials", emoji: "📺", subtitle: "YouTube University graduate" },
    { text: "Girlfriend vs Placement", emoji: "💔", subtitle: "Dono nahi mile bhai" },
    { text: "Mass recruiter email", emoji: "📧", subtitle: "'Congratulations! You're rejected'" },
    { text: "LinkedIn pe motivation post", emoji: "🤳", subtitle: "Failed successfully" },
    { text: "Campus placement day", emoji: "🎪", subtitle: "Circus shuru ho gaya" },
    { text: "When asked about salary", emoji: "💰", subtitle: "Food allowance chahiye bas" },
    { text: "Coding bootcamp ad", emoji: "🎯", subtitle: "6 months me software engineer" },
    { text: "Open source contribution", emoji: "📝", subtitle: "README.md fix kar diya" },
    { text: "Technical interview prep", emoji: "📚", subtitle: "GeeksforGeeks ka 14" },
    { text: "Startup culture", emoji: "🚀", subtitle: "Equity me salary denge" },
    { text: "DSA practice on weekends", emoji: "🧠", subtitle: "Social life = NULL" },
    { text: "When someone asks about FAANG", emoji: "🍎", subtitle: "Facebook ka F bhi nahi aata" },
    { text: "Coding while crying", emoji: "😢", subtitle: "Tears.exe is running" },
    { text: "Debugging at 3 AM", emoji: "🌙", subtitle: "Error: Life not found" },
    { text: "Git push kar diya galti se", emoji: "😱", subtitle: "Career bhi push ho gaya" },
    { text: "Stack Overflow dependency", emoji: "📚", subtitle: "Ctrl+C Ctrl+V developer" },
    { text: "When you deploy on Friday", emoji: "🔥", subtitle: "Weekend plans = Server down" },
    { text: "Learning new framework", emoji: "🤯", subtitle: "React ke baad React Native, ab React Negative" },
    { text: "Code review meeting", emoji: "👨‍💼", subtitle: "Sab log judge kar rahe hain" },
    { text: "Production bug found", emoji: "🐛", subtitle: "It works on my machine bro" }
  ];

  const randomMeme = memes[Math.floor(Math.random() * memes.length)];

  if (!isVisible) return null;

  return (
    <div className="mt-6 animate-fade-in">
      <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 text-center shadow-2xl shadow-purple-500/20">
        <div className="text-6xl mb-3 animate-bounce">{randomMeme.emoji}</div>
        <h3 className="text-lg font-bold text-purple-300 mb-2">{randomMeme.text}</h3>
        <p className="text-sm text-slate-400 italic">{randomMeme.subtitle}</p>
      </div>
    </div>
  );
};

export default MemeDisplay;
