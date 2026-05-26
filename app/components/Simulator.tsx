'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Bot, Sliders, Check, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Simulator() {
  const [simStep, setSimStep] = useState(0);
  const [isSimRunning, setIsSimRunning] = useState(true);

  useEffect(() => {
    if (!isSimRunning) return;
    const interval = setInterval(() => {
      setSimStep((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSimRunning]);

  return (
    <div className="rounded-md border border-[#E5E5E2] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.02)] relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E5E2]">
        <div className="flex items-center gap-2">
          <div className="flex space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
          </div>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-[#555555]">n8n_agent_pipeline_v2.json</span>
        </div>
        <button 
          onClick={() => setIsSimRunning(!isSimRunning)} 
          className={`text-[9px] uppercase tracking-wider font-bold px-2.5 py-1 rounded border flex items-center gap-1.5 transition-colors cursor-pointer ${
            isSimRunning ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'
          }`}
          title={isSimRunning ? 'Pause live simulation' : 'Play live simulation'}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${isSimRunning ? 'bg-green-500 animate-ping' : 'bg-gray-400'}`}></span>
          {isSimRunning ? 'Active' : 'Paused'}
        </button>
      </div>

      <ol className="space-y-3.5">
        <li className={`p-3 rounded border transition-all duration-300 ${simStep === 0 ? 'border-[#4A6FA5] bg-[#F9F9F7]' : 'border-[#E5E5E2]/50 bg-transparent'}`}>
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded ${simStep === 0 ? 'bg-[#4A6FA5] text-white' : 'bg-neutral-100 text-[#555555]'}`}>
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">TRIGGER: Incoming Lead</p>
              <p className="text-[10px] text-[#555555] truncate">Webhook received from Contact, Email, or Telegram request</p>
            </div>
            {simStep > 0 && <CheckCircle2 className="w-3.5 h-3.5 text-green-500 self-center" />}
          </div>
        </li>

        <li className={`p-3 rounded border transition-all duration-300 ${simStep === 1 ? 'border-[#4A6FA5] bg-[#F9F9F7]' : 'border-[#E5E5E2]/50 bg-transparent'}`}>
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded ${simStep === 1 ? 'bg-[#4A6FA5] text-white' : 'bg-neutral-100 text-[#555555]'}`}>
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">PROCESSING: Claude API & Vector DB</p>
              <p className="text-[10px] text-[#555555] truncate">Matching custom prompt against internal system RAG knowledge</p>
            </div>
            {simStep > 1 ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 self-center" /> : simStep === 1 ? <span className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] animate-ping self-center" /> : null}
          </div>
        </li>

        <li className={`p-3 rounded border transition-all duration-300 ${simStep === 2 ? 'border-[#4A6FA5] bg-[#F9F9F7]' : 'border-[#E5E5E2]/50 bg-transparent'}`}>
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded ${simStep === 2 ? 'bg-[#4A6FA5] text-white' : 'bg-neutral-100 text-[#555555]'}`}>
              <Sliders className="w-3.5 h-3.5" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">INTEGRATION: CRM & Lead Scoring</p>
              <p className="text-[10px] text-[#555555] truncate">Syncing data to Pipedrive, notifying team via Discord/Slack</p>
            </div>
            {simStep > 2 ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500 self-center" /> : simStep === 2 ? <span className="w-1.5 h-1.5 rounded-full bg-[#4A6FA5] animate-ping self-center" /> : null}
          </div>
        </li>

        <li className={`p-3 rounded border transition-all duration-300 ${simStep === 3 ? 'border-[#4A6FA5] bg-[#F9F9F7]' : 'border-[#E5E5E2]/50 bg-transparent'}`}>
          <div className="flex items-start gap-3">
            <div className={`p-1.5 rounded ${simStep === 3 ? 'bg-[#4A6FA5] text-white' : 'bg-neutral-100 text-[#555555]'}`}>
              <Check className="w-3.5 h-3.5" />
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-wider">COMPLETED: Autopilot Work Done</p>
              <p className="text-[10px] text-[#555555] truncate">Zero human interaction, saved approximately 45 Minutes</p>
            </div>
            {simStep === 3 && <Sparkles className="w-3.5 h-3.5 text-[#4A6FA5] animate-spin self-center" />}
          </div>
        </li>
      </ol>

      <div className="mt-4 pt-4 border-t border-[#E5E5E2] flex items-center justify-between text-[10px] text-[#555555] uppercase tracking-wider" id="simulator-metrics">
        <span>Average Execution Time: <strong className="text-[#1A1A1A]">1.4s</strong></span>
        <span>Success Rate: <strong className="text-[#1A1A1A]">100%</strong></span>
      </div>
    </div>
  );
}
