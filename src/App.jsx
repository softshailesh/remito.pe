import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [show, setshow] = useState(false);
  return (
    <>
    <button onClick={()=>setshow(prev => !prev)}>toggle show</button>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        { show && (<motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 bg-white rounded-2xl shadow-lg"
        >
          <h1 className="text-2xl font-bold text-gray-800">
            Hello, Framer Motion 👋
          </h1>
        </motion.div>)}
      </div>
    </>
  );
}

export default App;
