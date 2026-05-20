import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import InternalLink from './InternalLink';

interface ProjectData {
  name: string;
  category: 'Corporate' | 'In Lab' | 'Client';
  techStack: string[];
  description: string;
  link: string;
}

interface Message {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  projects?: ProjectData[];
  isStreaming?: boolean;
}

interface PortfolioProps {
  onNavigate?: (href: string) => void;
}

const PROJECTS_DATA: ProjectData[] = [
  // CORPORATE PROJECTS
  {
    name: "Queuebuster",
    category: "Corporate",
    techStack: ["Native Android", "Java", "Kotlin", "MVVM", "POS SDKs"],
    description: "QueueBuster POS is a powerful all-in-one application with Billing, Inventory, Loyalty, Khata & Online Dukaan bundled into one.",
    link: "https://play.google.com/store/apps/details?id=com.dpdtech.application.mpos&hl=en_IN"
  },
  {
    name: "Hudle",
    category: "Corporate",
    techStack: ["Flutter", "WebRTC", "Firebase", "Clean Architecture"],
    description: "India's largest sports community platform, enabling players to book sports venues, events, find players and join games. Hudle - Where India Plays.",
    link: "https://hudle.page.link/website"
  },

  // CLIENT PROJECTS
  {
    name: "MyEx",
    category: "Client",
    techStack: ["Flutter", "Dart", "Firebase", "REST API"],
    description: "Explore thousands of real video reviews across 28+ categories. Film your experience with any product, upload it, and earn cash instantly.",
    link: "https://www.my-ex.app/en/explore"
  },
  {
    name: "DriveThru",
    category: "Client",
    techStack: ["React", "TypeScript", "Node.js", "Web"],
    description: "A scalable, multi-app food ordering platform with location-based restaurant discovery, real-time order management, and centralized store administration.",
    link: "#"
  },
  {
    name: "DreamyBuilder",
    category: "Client",
    techStack: ["React", "TypeScript", "Node.js", "Web"],
    description: "A freelance construction and builder management platform custom-built for a developer client in Saudi Arabia.",
    link: "#"
  },
  {
    name: "Vani Voice Assistance",
    category: "Client",
    techStack: ["Android Native", "Java", "MVP"],
    description: "Vani is a Voice Assistant App Which Allows you to Manage your Incoming Calls Just by your Voice. Easy and Simple to Use Just Use your Voice to Set Commands.",
    link: "https://www.vaniassistant.com/"
  },

  // IN LAB PROJECTS
  {
    name: "VibeTask",
    category: "In Lab",
    techStack: ["React", "TypeScript", "Jira API", "AI Agent"],
    description: "Jira × Jules Integration. Compose prompts and delegate tasks to coding agents by selecting a Jira ticket.",
    link: "https://vibe-task-rose.vercel.app/"
  },
  {
    name: "DimagX",
    category: "In Lab",
    techStack: ["Python", "Kuzu DB", "MCP", "Tree-sitter"],
    description: "Project brain for coding agents. One command. Persistent memory. Switch models freely — your agent always knows where you left off.",
    link: "https://github.com/shmehdi01/dimagx/"
  },
  {
    name: "Nauha Diary App",
    category: "In Lab",
    techStack: ["Android Native", "Java", "SQLite"],
    description: "4000+ Nauha lyrics. Search, read, and recite offline. A native mobile companion for the popular lyrics repository.",
    link: "https://play.google.com/store/apps/details?id=com.nauha.diary"
  },
  {
    name: "NauhaDiary Web",
    category: "In Lab",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Prisma"],
    description: "A minimal, distraction-free lyrics platform for Islamic nauha poetry. Positioned as a digital bayaz.",
    link: "https://nauhadiary.com"
  },
  {
    name: "CodeSH Lab Portfolio",
    category: "In Lab",
    techStack: ["Next.js", "Tailwind CSS"],
    description: "Personal portfolio and studio site showcasing services and past work.",
    link: "https://codesh.in"
  },
  {
    name: "Society Maintenance Ledger - Maintainly",
    category: "In Lab",
    techStack: ["React", "TypeScript", "Node.js", "Web"],
    description: "Transparent maintenance ledger without Excel chaos. Generate your society link in seconds and share it with residents.",
    link: "https://www.maintainly.online/"
  },
  {
    name: "Society Portal",
    category: "In Lab",
    techStack: ["React", "TypeScript", "Node.js", "Web"],
    description: "Manage your society, Low rise apartments.",
    link: "https://saphomes.codesh.in"
  },
  {
    name: "Log My Work",
    category: "In Lab",
    techStack: ["React", "TypeScript", "Node.js", "Web"],
    description: "Log your daily work. Generate client-ready timesheets.",
    link: "https://logmywork.codesh.in/"
  },
  {
    name: "Do Not Touch Purple",
    category: "In Lab",
    techStack: ["HTML"],
    description: "Play game test you focus, Just dont touch on Purple.",
    link: "https://donttouchpurple.online/"
  }
];

const STARTER_PROMPTS = [
  "What have you built for clients?",
  "Show me your lab projects",
  "What's your most recent project?"
];

const CATEGORIES = ["All", "Corporate", "In Lab", "Client"] as const;
type Category = typeof CATEGORIES[number];

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLiveAPI, setIsLiveAPI] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message
  useEffect(() => {
    const isKeyConfigured = Boolean(import.meta.env.VITE_CLAUDE_API_KEY);
    setIsLiveAPI(isKeyConfigured);

    const welcomeText = "Hi! I'm Claude, Syed's interactive project explorer. Select a category pill above, use a starter question, or ask me anything directly about the products, stacks, or roles Syed has worked on.";
    // Initially show featured projects in the welcome card
    const featuredProjects = PROJECTS_DATA.slice(0, 4);

    setMessages([
      {
        id: "welcome",
        sender: "agent",
        text: welcomeText,
        projects: featuredProjects
      }
    ]);
  }, []);

  // Auto-scroll response area to bottom on new messages
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Local simulated response generator if no API key is present
  const getSimulatedResponse = (query: string): { text: string; matchedProjects?: ProjectData[] } => {
    const q = query.toLowerCase();

    // 1. Check for category requests
    if (q.includes("client") || q.includes("for clients") || q.includes("freelance")) {
      const matched = PROJECTS_DATA.filter(p => p.category === "Client");
      return {
        text: "Syed builds platform-specific and cross-platform apps for clients, ensuring clean architectures and production-ready deployments. Here are the client & freelance projects:",
        matchedProjects: matched
      };
    }

    if (q.includes("corporate") || q.includes("company") || q.includes("enterprise") || q.includes("companies")) {
      const matched = PROJECTS_DATA.filter(p => p.category === "Corporate");
      return {
        text: "In his corporate engineering and architecture roles, Syed has led development on high-scale systems. Here are the core corporate projects:",
        matchedProjects: matched
      };
    }

    if (q.includes("lab") || q.includes("personal") || q.includes("experiment") || q.includes("in lab") || q.includes("playground")) {
      const matched = PROJECTS_DATA.filter(p => p.category === "In Lab");
      return {
        text: "CodeSH Lab is Syed's innovation playground where he rapid-prototypes ideas into functional MVPs. Here are the active lab projects:",
        matchedProjects: matched
      };
    }

    // 2. Check for most recent
    if (q.includes("recent") || q.includes("latest") || q.includes("newest") || q.includes("recent project")) {
      const matched = PROJECTS_DATA.filter(p => p.name === "DimagX" || p.name === "MyEx" || p.name === "Nauha Diary App" || p.name === "DreamyBuilder");
      return {
        text: "Here are Syed's most recent project launches, client builds, and open-source tools:",
        matchedProjects: matched
      };
    }

    // 3. Check for specific technologies
    if (q.includes("flutter")) {
      const matched = PROJECTS_DATA.filter(p => p.techStack.some(t => t.toLowerCase() === "flutter"));
      return {
        text: "Syed uses Flutter for performant, cross-platform mobile apps. Here are the Flutter projects:",
        matchedProjects: matched
      };
    }

    if (q.includes("react")) {
      const matched = PROJECTS_DATA.filter(p => p.techStack.some(t => t.toLowerCase() === "react"));
      return {
        text: "Syed builds web apps and portals using React, TypeScript, and Node.js. Here are the matching React projects:",
        matchedProjects: matched
      };
    }

    if (q.includes("next.js") || q.includes("nextjs") || q.includes("next")) {
      const matched = PROJECTS_DATA.filter(p => p.techStack.some(t => t.toLowerCase().includes("next.js") || t.toLowerCase().includes("next")));
      return {
        text: "For production React setups, Syed uses Next.js for optimized rendering. Here are the Next.js builds:",
        matchedProjects: matched
      };
    }

    if (q.includes("android") || q.includes("kotlin") || q.includes("java")) {
      const matched = PROJECTS_DATA.filter(p => p.techStack.some(t => ["android", "kotlin", "java", "android native", "native android"].includes(t.toLowerCase())));
      return {
        text: "With a strong native mobile engineering foundation, Syed builds highly-integrated Android applications. Here are the Android projects:",
        matchedProjects: matched
      };
    }

    // 4. Check for specific project names
    for (const project of PROJECTS_DATA) {
      if (q.includes(project.name.toLowerCase()) || (project.name.includes("-") && q.includes(project.name.split("-")[1]?.trim().toLowerCase() || ""))) {
        return {
          text: `Here is the requested details on **${project.name}**:`,
          matchedProjects: [project]
        };
      }
    }

    if (q.includes("vibetask") || q.includes("jules") || q.includes("jira")) {
      const p = PROJECTS_DATA.find(p => p.name === "VibeTask");
      return {
        text: "VibeTask is a Jira × Jules Integration tool designed to help you compose prompts and delegate tasks to coding agents.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("dimagx") || q.includes("mcp") || q.includes("memory") || q.includes("agent brain")) {
      const p = PROJECTS_DATA.find(p => p.name === "DimagX");
      return {
        text: "DimagX is a project brain for coding agents. It provides one command, persistent memory, and allows you to switch LLMs freely while keeping project context.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("myex") || q.includes("video") || q.includes("reviews") || q.includes("review platform")) {
      const p = PROJECTS_DATA.find(p => p.name === "MyEx");
      return {
        text: "MyEx is an interactive platform to explore thousands of real video reviews, upload reviews, and earn cash.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("dreamy") || q.includes("dreamybuilder") || q.includes("saudi")) {
      const p = PROJECTS_DATA.find(p => p.name === "DreamyBuilder");
      return {
        text: "DreamyBuilder is a freelance custom-built construction and project builder management panel developed for a Saudi Arabian developer client.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("poetry") || q.includes("lyrics") || q.includes("nauhadiary") || q.includes("diary")) {
      const matched = PROJECTS_DATA.filter(p => p.name.includes("Nauha"));
      return {
        text: "Syed developed both the NauhaDiary web bayaz lyrics repository and the offline Nauha Diary native Android App:",
        matchedProjects: matched
      };
    }

    if (q.includes("maintainly") || q.includes("ledger") || q.includes("maintenance")) {
      const p = PROJECTS_DATA.find(p => p.name.includes("Maintainly"));
      return {
        text: "Maintainly replaces messy Excel ledgers with a transparent shared balance sheet for housing societies.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("queuebuster") || q.includes("pos")) {
      const p = PROJECTS_DATA.find(p => p.name === "Queuebuster");
      return {
        text: "Queuebuster is a retail POS solution where Syed architected native integrations and billing systems.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("hudle") || q.includes("sports")) {
      const p = PROJECTS_DATA.find(p => p.name === "Hudle");
      return {
        text: "Hudle is India's largest sports community booking platform where Syed drove cross-platform mobile execution.",
        matchedProjects: p ? [p] : []
      };
    }

    if (q.includes("purple") || q.includes("game")) {
      const p = PROJECTS_DATA.find(p => p.name === "Do Not Touch Purple");
      return {
        text: "Do Not Touch Purple is a lightweight reaction-test mini-game built for absolute simplicity.",
        matchedProjects: p ? [p] : []
      };
    }

    // 5. Greetings
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) {
      return {
        text: "Hello! I am Claude. Ask me about any of Syed's projects, technical stacks, or architectural experience, and I will filter the appropriate entries for you."
      };
    }

    // 6. Fallback
    return {
      text: "I can help you filter through all of Syed's engineering builds. Here is the complete list of projects:",
      matchedProjects: PROJECTS_DATA
    };
  };

  // Perform Live API call to Claude
  const askClaudeAPI = async (userMessage: string, chatHistory: Message[]): Promise<string> => {
    const apiKey = import.meta.env.VITE_CLAUDE_API_KEY;
    const apiEndpoint = import.meta.env.VITE_CLAUDE_API_URL || 'https://api.anthropic.com/v1/messages';

    const systemPrompt = `You are Claude 3.5 Sonnet, representing Syed Hussain Mehdi's portfolio.
Syed is the founder of CodeSH Lab and helps non-technical founders go from idea to working MVP in a week.
Here is the official list of projects Syed has worked on:
${JSON.stringify(PROJECTS_DATA, null, 2)}

When the visitor asks about projects, answer directly, professionally, and in a friendly, founder-to-founder tone. 
Always include Markdown links to the project site if they exist (e.g. [NauhaDiary](https://nauhadiary.com)).
Be concise (maximum 3-4 sentences).`;

    const apiMessages = chatHistory
      .filter(m => m.text && m.id !== 'welcome')
      .map(m => ({
        role: m.sender === 'user' ? 'user' as const : 'assistant' as const,
        content: m.text
      }));

    apiMessages.push({
      role: 'user',
      content: userMessage
    });

    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'dangerously-allow-browser': 'true'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 600,
        system: systemPrompt,
        messages: apiMessages
      })
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || `HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data.content && data.content[0]) {
      return data.content[0].text;
    }
    throw new Error("Empty content returned from Claude API");
  };

  // Simulates typewriter streaming text output
  const simulateStreamingText = (fullText: string, matchedProjects?: ProjectData[]) => {
    setIsTyping(true);
    let currentText = '';
    const words = fullText.split(' ');
    let wordIndex = 0;
    
    const messageId = Date.now().toString();
    setMessages(prev => [...prev, {
      id: messageId,
      sender: 'agent',
      text: '',
      projects: matchedProjects,
      isStreaming: true
    }]);

    const timer = setInterval(() => {
      if (wordIndex < words.length) {
        currentText += (wordIndex === 0 ? '' : ' ') + words[wordIndex];
        setMessages(prev => prev.map(m => m.id === messageId ? { ...m, text: currentText } : m));
        wordIndex++;
      } else {
        clearInterval(timer);
        setMessages(prev => prev.map(m => m.id === messageId ? { ...m, isStreaming: false } : m));
        setIsTyping(false);
      }
    }, 25);
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isTyping) return;

    const userMessageText = textToSend.trim();
    setInputVal("");

    // Add User message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMessageText
    };
    setMessages(prev => [...prev, userMsg]);

    setIsTyping(true);

    if (isLiveAPI) {
      try {
        const responseText = await askClaudeAPI(userMessageText, messages);
        // Extract any projects referenced in the text to display them as cards
        const lowercaseResponse = responseText.toLowerCase();
        const matched = PROJECTS_DATA.filter(p => lowercaseResponse.includes(p.name.toLowerCase()));
        
        simulateStreamingText(responseText, matched.length > 0 ? matched : undefined);
      } catch (err) {
        console.warn("Claude API failed, falling back to local NLP engine:", err);
        const fallbackRes = getSimulatedResponse(userMessageText);
        simulateStreamingText(`(API offline fallback) ${fallbackRes.text}`, fallbackRes.matchedProjects);
      }
    } else {
      // Local NLP Simulation
      const res = getSimulatedResponse(userMessageText);
      setTimeout(() => {
        simulateStreamingText(res.text, res.matchedProjects);
      }, 350);
    }
  };

  const handleCategoryClick = (category: Category) => {
    if (isTyping) return;
    setActiveCategory(category);

    const userMessageText = category === "All" ? "Show me all projects" : `Show me ${category} projects`;
    
    // Add User Message
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMessageText
    };
    setMessages(prev => [...prev, userMsg]);

    setIsTyping(true);

    const query = category === "All" ? "all" : category;
    const res = getSimulatedResponse(query);

    setTimeout(() => {
      simulateStreamingText(res.text, res.matchedProjects);
    }, 350);
  };

  return (
    <section id="portfolio" className="py-24 border-t border-zinc-900 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <SectionHeading title="Projects" subtitle="Ask me about what I've built" />
        
        {/* Connection status indicator */}
        <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600 pb-4 md:pb-0">
          <span className={`w-1.5 h-1.5 rounded-full ${isLiveAPI ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-800'}`}></span>
          <span>Claude 3.5 Sonnet: {isLiveAPI ? 'Live API' : 'Simulated'}</span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              disabled={isTyping}
              className={`px-5 py-2 font-mono text-[10px] uppercase tracking-widest border transition-all duration-300 rounded-sm ${
                isActive
                  ? 'bg-zinc-100 text-zinc-950 font-bold border-zinc-100'
                  : 'bg-transparent border-zinc-800 text-zinc-400 hover:border-zinc-500 hover:text-zinc-100 disabled:opacity-50'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Chat Explorer Container */}
      <div className="glass border border-zinc-850 rounded-sm overflow-hidden flex flex-col">
        
        {/* Messages List Area */}
        <div 
          ref={scrollContainerRef}
          className="h-[400px] overflow-y-auto p-6 space-y-6 scrollbar-thin bg-black/20"
        >
          {messages.map((message) => {
            const isUser = message.sender === 'user';
            return (
              <div 
                key={message.id} 
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} max-w-full`}
              >
                {/* Sender Tag */}
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mb-1.5 px-1">
                  {isUser ? 'Visitor' : 'Claude'}
                </span>

                {/* Message Bubble */}
                <div 
                  className={`p-4 rounded-sm max-w-3xl leading-relaxed text-sm ${
                    isUser 
                      ? 'bg-zinc-900 border border-zinc-800 text-zinc-100' 
                      : 'text-zinc-300 border border-transparent'
                  }`}
                >
                  <p className="whitespace-pre-line">
                    {message.text}
                    {message.isStreaming && (
                      <span className="inline-block w-2 h-4 bg-zinc-400 animate-pulse ml-1 align-middle"></span>
                    )}
                  </p>

                  {/* Inside-bubble project card rendering */}
                  {message.projects && message.projects.length > 0 && (
                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                      {message.projects.map((project, idx) => (
                        <div 
                          key={idx}
                          className="border border-zinc-800 bg-zinc-950/60 p-5 rounded-sm hover:border-zinc-500 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex justify-between items-center mb-3 gap-3">
                              <h4 className="font-bold text-sm md:text-base text-zinc-100">{project.name}</h4>
                              <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-zinc-400 mb-5 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          <div className="flex justify-between items-center mt-auto pt-3 border-t border-zinc-900/60 gap-3">
                            <div className="flex flex-wrap gap-1.5">
                              {project.techStack.map((tech) => (
                                <span key={tech} className="text-[9px] md:text-[10px] font-mono uppercase px-2 py-0.5 bg-zinc-900 border border-zinc-850 text-zinc-500">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            {project.link && project.link !== '#' && (
                              <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-xs font-mono text-zinc-400 hover:text-zinc-100 hover:underline transition-colors shrink-0"
                              >
                                Link →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls Section */}
        <div className="p-4 border-t border-zinc-900 bg-black/40">
          
          {/* Starter Prompts chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {STARTER_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSendMessage(prompt)}
                disabled={isTyping}
                className="px-3.5 py-1.5 border border-zinc-850 text-[10px] text-zinc-450 hover:text-zinc-100 hover:border-zinc-600 transition-colors font-mono rounded-full bg-zinc-950/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input text field & Send */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputVal);
            }}
            className="flex gap-2 items-center border border-zinc-800 bg-zinc-950/20 p-1.5 focus-within:border-zinc-500 transition-colors rounded-sm"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              disabled={isTyping}
              placeholder="Ask Claude about Syed's projects, tech stack, or MVPs..."
              className="flex-1 bg-transparent text-xs text-zinc-100 placeholder:text-zinc-700 focus:outline-none px-2.5 py-2 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="px-5 py-2 bg-zinc-100 text-zinc-950 font-mono text-[10px] uppercase tracking-[0.15em] font-bold hover:bg-zinc-300 disabled:bg-zinc-900 disabled:text-zinc-650 transition-colors rounded-sm active:scale-[0.98]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
