import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { getBasePath } from '@/utils/fileUtils';

interface ModelResult {
  name: string;
  completionRate: number;
  logo: string;
  fullName: string;
  category: 'modelBase' | 'agent';
  organization: string;
  link: string;
  date: string;
  hasReasoning: boolean;
  cost?: string;
}

const Leaderboard = () => {
  const [activeTab, setActiveTab] = useState<'overall' | 'modelBase' | 'agent'>('overall');

  const modelData: { modelBase: ModelResult[]; agent: ModelResult[] } = {
    modelBase: [
      { 
        name: 'o3-mini-2025-01-31',
        completionRate: 42.59,
        logo: `${getBasePath()}/model_logos/openai_reasoning.png`,
        fullName: 'o3-mini',
        category: 'modelBase',
        organization: 'OpenAI',
        link: 'https://openai.com',
        date: '2025-05-23',
        hasReasoning: true,
        cost: '0.0237'
      },
      { 
        name: 'qwen-qwen3-235b-a22b',
        completionRate: 35.93,
        logo: `${getBasePath()}/model_logos/qwen.png`,
        fullName: 'Qwen 3 235B',
        category: 'modelBase',
        organization: 'Alibaba',
        link: 'https://qwenlm.github.io',
        date: '2025-05-23',
        hasReasoning: false,
        cost: '0.0044'
      },
      { 
        name: 'gemini-2-0-flash-001',
        completionRate: 35.56,
        logo: `${getBasePath()}/model_logos/google-gemini-icon.png`,
        fullName: 'Gemini 2.0 Flash',
        category: 'modelBase',
        organization: 'Google',
        link: 'https://deepmind.google/technologies/gemini/',
        date: '2025-05-23',
        hasReasoning: false,
        cost: '0.0019'
      },
      { 
        name: 'gpt-4o-2024-11-20',
        completionRate: 34.81,
        logo: `${getBasePath()}/model_logos/openai.png`,
        fullName: 'GPT-4o',
        category: 'modelBase',
        organization: 'OpenAI',
        link: 'https://openai.com',
        date: '2025-05-23',
        hasReasoning: false,
        cost: '0.0458'
      },
      { 
        name: 'claude-3-7-sonnet-20250219',
        completionRate: 32.96,
        logo: `${getBasePath()}/model_logos/claude_logo.png`,
        fullName: 'Claude 3.7 Sonnet',
        category: 'modelBase',
        organization: 'Anthropic',
        link: 'https://www.anthropic.com',
        date: '2025-05-23',
        hasReasoning: false,
        cost: '0.0646'
      },
      { 
        name: 'deepsseek-deepseek-r1',
        completionRate: 0,
        logo: `${getBasePath()}/model_logos/deepseek_logo.png`,
        fullName: 'DeepSeek R1',
        category: 'modelBase',
        organization: 'DeepSeek',
        link: 'https://deepseek.com',
        date: '2025-05-23',
        hasReasoning: true,
        cost: '/'
      },
      { 
        name: 'deepsseek-deepseek-chat',
        completionRate: 0,
        logo: `${getBasePath()}/model_logos/deepseek_logo.png`,
        fullName: 'DeepSeek Chat',
        category: 'modelBase',
        organization: 'DeepSeek',
        link: 'https://deepseek.com',
        date: '2025-05-23',
        hasReasoning: false,
        cost: '/'
      }
    ],
    agent: [] // Empty for now, will be populated later
  };

  // Get overall data by combining all categories
  const overallData = [...modelData.modelBase, ...modelData.agent].sort((a, b) => b.completionRate - a.completionRate);

  // Get data for current tab
  const getCurrentData = () => {
    switch (activeTab) {
      case 'overall':
        return overallData;
      case 'modelBase':
        return modelData.modelBase.sort((a, b) => b.completionRate - a.completionRate);
      case 'agent':
        return modelData.agent.sort((a, b) => b.completionRate - a.completionRate);
      default:
        return overallData;
    }
  };

  const currentData = getCurrentData();

  return (
    <section className="w-full mb-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">LiveSQLBench Leaderboard</h2>
        
        <div className="h-0.5 w-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <p className="mb-6 text-base leading-relaxed text-gray-700">
              <span className="font-semibold">Success Rate.</span> Defined by the ratio of the number of tasks passing the test cases to the total number of tasks.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-2">Evaluation Methodology</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>SELECT queries: Compare execution results with golden SQL outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Management SQLs: Verify through comprehensive test cases</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full">
            <div className="text-xs text-gray-600 text-right mb-2">
              Last Updated: 05/23/2025
            </div>

            {/* Category Tabs */}
            <div className="flex space-x-2 mb-4">
              {[
                { id: 'overall', label: 'Overall' },
                { id: 'modelBase', label: 'Model Base' },
                { id: 'agent', label: 'Agent' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'overall' | 'modelBase' | 'agent')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.label}
                  {tab.id === 'agent' && currentData.length === 0 && (
                    <span className="ml-1 text-xs text-gray-400">(Coming Soon)</span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="relative w-full overflow-auto rounded-lg border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="h-12 px-4 text-center align-middle font-medium text-gray-600">
                      Rank / Date
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-600">
                      Model
                    </th>
                    <th className="h-12 px-4 text-center align-middle font-medium text-gray-600">
                      Organization
                    </th>
                    <th className="h-12 px-4 text-center align-middle font-medium text-gray-600">
                      Success Rate (%) <ArrowDown className="inline h-4 w-4 text-gray-400" />
                    </th>
                    <th className="h-12 px-4 text-center align-middle font-medium text-gray-600">
                      Avg. Cost / Task
                    </th>
                    <th className="h-12 px-4 text-center align-middle font-medium text-gray-600">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.length > 0 ? (
                    currentData.map((model, index) => (
                      <tr 
                        key={model.name}
                        className={`border-b hover:bg-gray-50 transition-colors ${
                          index === 0 ? 'bg-blue-50' : ''
                        }`}
                      >
                        <td className="p-4 align-middle text-center">
                          {model.completionRate > 0 ? (
                            <div className="flex flex-col items-center justify-center gap-1">
                              <div className="flex items-center gap-1">
                                {index === 0 && <span className="text-yellow-500">🥇</span>}
                                {index === 1 && <span className="text-gray-400">🥈</span>}
                                {index === 2 && <span className="text-amber-600">🥉</span>}
                                <span className={`font-medium ${
                                  index < 3 ? 'text-gray-700' : 'text-gray-500'
                                }`}>
                                  {index + 1}
                                </span>
                              </div>
                              <span className="mt-1 px-2 py-0.5 rounded bg-blue-100 text-xs text-blue-700 font-medium">
                                {model.date}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4 align-middle">
                          <div className="flex items-center gap-3 justify-start">
                            <img
                              src={model.logo}
                              alt={`${model.fullName} logo`}
                              className={`w-5 h-5 object-contain ${model.hasReasoning ? 'filter grayscale' : ''}`}
                            />
                            <span className="font-medium">{model.fullName}</span>
                          </div>
                        </td>
                        <td className="p-4 align-middle text-center"> 
                          <span className="italic text-gray-500">{model.organization}</span>
                        </td>
                        <td className="p-4 align-middle text-center font-medium">
                          {model.completionRate > 0 ? `${model.completionRate.toFixed(2)}` : 'N/A'}
                        </td>
                        <td className="p-4 align-middle text-center font-medium">
                          {model.cost && model.cost !== '/' ? (
                            <div className="inline-flex items-center px-1.5 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-50 to-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                              {model.cost}
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </td>
                        <td className="p-4 align-middle text-center">
                          <a 
                            href={model.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline text-lg"
                            title="Visit Model Page"
                          >
                            🔗
                          </a>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="p-8 text-center text-gray-500">
                        No results available for this category yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              <span className="font-medium">Note:</span> Results are based on LiveSQLBench-Base-Lite (270 tasks across 18 end-user level databases), including both SELECT queries and management operations; Model with reasoning ability is marked with a grayed-out logo. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;