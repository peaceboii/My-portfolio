import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-cyan-600 font-mono mb-4">05. COLLABORATION</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Let's <span className="text-gradient">Connect</span></h2>
                <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                  Open to collaborations, feedback, and interesting finance/AI problems. Feel free to reach out via any of the channels below.
                </p>
                
                <div className="space-y-6">
                   <a href="mailto:kumaravelu2003@gmail.com" className="flex items-center gap-4 text-slate-700 hover:text-cyan-600 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        <Mail size={20} />
                      </div>
                      <span className="font-mono text-sm tracking-widest uppercase font-bold text-slate-500 group-hover:text-cyan-600">kumaravelu2003@gmail.com</span>
                   </a>
                   <div className="flex gap-4">
                      <a href="https://github.com/peaceboii" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                        <Github size={20} />
                      </a>
                      <a href="https://linkedin.com/in/kumaravel-raj" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                        <Linkedin size={20} />
                      </a>
                   </div>
                </div>
              </div>
              
              <form className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-400 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="Jane Doe"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all text-slate-900 placeholder:text-slate-300"
                      placeholder="jane@example.com"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-all text-slate-900 placeholder:text-slate-300 resize-none"
                      placeholder="Your message here..."
                    />
                 </div>
                 
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-4 bg-gradient-to-right from-cyan-600 to-purple-600 text-white font-bold rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(14,165,233,0.2)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.3)] transition-all"
                 >
                    <span>INITIALIZE TRANSMISSION</span>
                    <Send size={18} />
                 </motion.button>
              </form>
           </div>
        </div>
      </div>
    </section>
  );
}
