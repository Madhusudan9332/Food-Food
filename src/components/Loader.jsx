
const Loader = () => {
    const css = `
        @keyframes jump {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
        }
        
        .circle {
        animation: jump 1s ease-in-out infinite;
        }
        
        .circle:nth-child(2) {
        animation-delay: 0.2s;
        }
        
        .circle:nth-child(3) {
        animation-delay: 0.4s;
        }
        
        .circle:nth-child(4) {
        animation-delay: 0.6s;
        }
        
        .circle:nth-child(5) {
        animation-delay: 0.8s;
        }
    `;
    
  return (
    <div className="flex justify-center items-center h-64 bg-gray-100">
      <style> {css} </style>
      <div className="flex space-x-4">
        <span className="circle w-5 h-5 bg-blue-500 rounded-full"></span>
        <span className="circle w-5 h-5 bg-blue-500 rounded-full"></span>
        <span className="circle w-5 h-5 bg-blue-500 rounded-full"></span>
        <span className="circle w-5 h-5 bg-blue-500 rounded-full"></span>
        <span className="circle w-5 h-5 bg-blue-500 rounded-full"></span>
      </div>
    </div>
  );
};

export default Loader;
