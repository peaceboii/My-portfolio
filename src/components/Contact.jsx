import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full -z-10" />
      
      <div className="container px-6">
        <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-3xl border border-slate-800">
           <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="text-cyan-400 font-mono mb-4">05. COLLABORATION</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="text-gradient">Connect</span></h2>
                <p className="text-slate-400 text-lg mb-12">
                  Have a challenging project in mind or just want to say hi? I'm always open to discussing new opportunities and innovative ideas.
                </p>
                
                <div className="space-y-6">
                   <a href="mailto:hello@example.com" className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                        <Mail size={20} />
                      </div>
                      <span className="font-mono text-sm tracking-widest">HELLO@EXAMPLE.COM</span>
                   </a>
                   <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                      </a>
                      <a href="#" className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                        <Linkedin size={20} />
                      </a>
                   </div>
                </div>
              </div>
              
              <form className="space-y-6">
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white"
                      placeholder="Jane Doe"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white"
                      placeholder="jane@example.com"
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-slate-500 ml-1">Message</label>
                    <textarea 
                      rows="4"
                      className="w-full bg-slate-800/30 border border-slate-700/50 rounded-xl px-6 py-4 outline-none focus:border-cyan-500/50 transition-colors text-white resize-none"
                      placeholder="Your message here..."
                    />
                 </div>
                 
                 <motion.button 
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   className="w-full py-4 bg-gradient-to-right from-cyan-500 to-purple-500 text-black font-bold rounded-xl flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
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
