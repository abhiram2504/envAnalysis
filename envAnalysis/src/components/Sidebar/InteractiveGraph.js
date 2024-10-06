import React from 'react';

function InteractiveGraph() {
  return (
    <div className="interactive-graph">
      <iframe
        title="Interactive Graph"
        src="./pH_levels_over_time_sorted.html" // Replace with the path to your HTML file
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default InteractiveGraph;
