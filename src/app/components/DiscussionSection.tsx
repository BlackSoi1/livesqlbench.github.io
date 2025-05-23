import React from 'react';

const DiscussionSection = () => {
  const discussions = [
    {
      title: "Current Model Performance",
      content: "LiveSQLBench-Base-Lite evaluates LLMs on PostgreSQL, the most widely used and feature-rich open-source database system. Our benchmark provides Docker-based evaluation environments for easy deployment and reproducibility. We conduct separate evaluations across three categories: (1) Model Base - direct SQL generation without external tools, (2) Agentless - models with built-in tool use capabilities, and (3) Agent - models with external tool orchestration. Initial results on Model Base reveal significant challenges, with the best-performing model (o3-mini) achieving only 42.59% success rate. The performance gap between models is notable, with top models (o3-mini, Qwen 3 235B, Gemini 2.0 Flash) showing similar capabilities around 35-43%, while others struggle to generate correct SQL queries."
    }
  ];

  return (
    <section className="w-full mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Discussion
        </h2>
        
        <div className="h-0.5 w-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        
        <div className="space-y-6">
          {discussions.map((section, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                <span className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-sm mr-2">
                  {index + 1}
                </span>
                {section.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionSection;