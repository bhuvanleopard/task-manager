import React from 'react';
import { 
  BrainCircuit, 
  Mail, 
  BarChart3, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Send, 
  Slack,
  Lightbulb
} from 'lucide-react';

/*
----------------------------------------------------------------------
 MOCK UI COMPONENTS (Internal)
 (Visuals to represent each feature point, no functionality)
----------------------------------------------------------------------
*/

/**
 * Mock UI for the Autonomous AI Agent Framework
 */
const AgentFrameworkMock: React.FC = () => (
  <div className="w-full max-w-sm bg-white p-5 rounded-lg shadow-lg border border-gray-200">
    <div className="flex items-center space-x-2">
      <Sparkles className="w-5 h-5 text-indigo-500" />
      <input
        type="text"
        readOnly
        value="Prep Q4 launch plan and email the marketing team"
        className="flex-1 text-sm font-medium text-gray-800 bg-gray-100 rounded p-2 border-none"
      />
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-100">
      <h5 className="text-sm font-semibold text-gray-700 mb-3">AI Agent: Workflow Created</h5>
      <ul className="space-y-3">
        <li className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600 line-through">Interpreted user intent (NLP)</span>
        </li>
        <li className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-sm text-gray-600 line-through">Draft Q4 launch document</span>
        </li>
        <li className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
          <span className="text-sm text-gray-800 font-medium">Drafting email to marketing...</span>
        </li>
        <li className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <span className="text-sm text-gray-400">Schedule follow-up meeting</span>
        </li>
      </ul>
    </div>
  </div>
);

/**
 * Mock UI for Intelligent Communication Automation
 */
const CommunicationAutomationMock: React.FC = () => (
  <div className="w-full max-w-sm bg-white p-5 rounded-lg shadow-lg border border-gray-200">
    <div className="flex items-center space-x-3 border-b border-gray-100 pb-3 mb-3">
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
        <Slack className="w-5 h-5 text-gray-700" />
      </div>
      <div>
        <h5 className="font-semibold text-gray-800">New Message: #general</h5>
        <p className="text-sm text-gray-600">From: Alex (Design)</p>
      </div>
    </div>
    
    <div className="p-3 bg-gray-50 rounded">
      <p className="text-sm text-gray-800">"Hey, what's the status on the new landing page copy? Need it for the mockups."</p>
    </div>
    
    <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
      <h5 className="text-sm font-bold text-indigo-700 mb-2">AI-Drafted Reply:</h5>
      <p className="text-sm text-indigo-900">
        "Hi Alex, the copy is 80% complete. I'm just finalizing the CTA section and will send it over in ~1 hour."
      </p>
      <button
        type="button"
        className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 flex items-center justify-center space-x-2"
      >
        <Send className="w-4 h-4" />
        <span>Approve & Send</span>
      </button>
    </div>
  </div>
);

/**
 * Mock UI for AI-Powered Productivity Insights
 */
const ProductivityInsightsMock: React.FC = () => (
  <div className="w-full max-w-sm bg-white p-5 rounded-lg shadow-lg border border-gray-200">
    <h4 className="font-semibold text-gray-800 mb-4">Your Daily Work Summary</h4>
    
    {/* Mock Chart */}
    <div className="space-y-3 mb-4">
      <div>
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Focus Work</span>
          <span>5.2 hrs (65%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
          <span>Meetings</span>
          <span>2.8 hrs (35%)</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '35%' }}></div>
        </div>
      </div>
    </div>
    
    {/* Actionable Insights */}
    <div className="mt-4 pt-4 border-t border-gray-100">
      <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
        <Lightbulb className="w-4 h-4 text-yellow-500 mr-2" />
        Actionable Insights
      </h5>
      <ul className="space-y-2 list-disc list-inside text-sm text-gray-600">
        <li>You had 3 unscheduled interruptions. Try blocking "Focus Time" on your calendar.</li>
        <li>Task "Q4 Report" is at risk. Prioritize it tomorrow morning.</li>
      </ul>
    </div>
  </div>
);


/*
----------------------------------------------------------------------
 MAIN EXPORTED COMPONENT
 (This is the single component you'd import into your app)
----------------------------------------------------------------------
*/

const AiTaskFeatures: React.FC = () => {
  
  const features = [
    {
      title: "Autonomous AI Agent Framework",
      description: "Developed a core framework for intelligent agents that leverage Natural Language Processing (NLP) to interpret user intent, autonomously manage tasks, and execute complex, multi-step workflows.",
      icon: BrainCircuit,
      mockUI: <AgentFrameworkMock />
    },
    {
      title: "Intelligent Communication Automation",
      description: "Integrated third-party APIs (e.g., Gmail, Slack) to empower AI agents to draft and dispatch context-aware email and message replies, significantly reducing manual communication overhead.",
      icon: Mail,
      mockUI: <CommunicationAutomationMock />
    },
    {
      title: "AI-Powered Productivity Insights",
      description: "Implemented an analytics module where AI agents analyze user activity and task patterns to generate daily work summaries and actionable insights, helping users optimize their workflow and focus.",
      icon: BarChart3,
      mockUI: <ProductivityInsightsMock />
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Future of Productivity is Autonomous
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our intelligent agents don't just manage tasks—they anticipate needs,
            automate communications, and optimize your focus.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title} 
                className="flex flex-col bg-gray-50 rounded-xl shadow-lg overflow-hidden"
              >
                {/* --- Text Content --- */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="shrink-0 flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                {/* --- Mock UI Visual --- */}
                <div className="grow bg-gray-200 p-8 flex items-center justify-center">
                  {feature.mockUI}
                </div>
              </div>
            );
          })}
          
        </div>

      </div>
    </section>
  );
};

export default AiTaskFeatures;