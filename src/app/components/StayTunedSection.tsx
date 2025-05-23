import React from 'react';

const StayTunedSection = () => {
  return (
    <section className="w-full mb-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">
          Stay tuned!
        </h2>
        
        <div className="h-0.5 w-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <div className="space-y-2">
            <p>We are developing several new versions of LiveSQLBench:</p>
            <ul className="list-none space-y-2 pl-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <span><strong className="text-purple-600">LiveSQLBench-Base-Full</strong> with <strong className="text-blue-600">600 BI tasks</strong> and <strong className="text-blue-600">200 Management tasks</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <span><strong className="text-purple-600">LiveSQLBench-Large-Lite</strong> featuring <strong className="text-blue-600">industrial-scale databases</strong> with <strong className="text-blue-600">1340+ columns</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-semibold mr-2">•</span>
                <span><strong className="text-purple-600">LiveSQLBench-Large-Full</strong> containing complete large version DBs and tasks</span>
              </li>
            </ul>
            <p>Additionally, we are expanding to <strong className="text-purple-600">multi-dialect support</strong>, starting with <strong className="text-blue-600">SQLite</strong> for research purposes, with plans to add more dialects based on community voting.</p>
            <p className="text-gray-600 italic">Each new version will include both open development and hidden test sets, with hidden tests becoming the next version's open development set.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayTunedSection; 