import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
          Blank Canvas
        </h1>
        <p className="text-sm text-neutral-400">
          Ready for your project. Tell me what you'd like to build.
        </p>
      </div>
    </div>
  );
};

export default App;
