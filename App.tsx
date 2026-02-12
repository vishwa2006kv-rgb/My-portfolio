
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactAI from './components/ContactAI';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Header />
      
      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Experience / About Short */}
        <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 italic">Professional <span className="text-blue-500">Summary</span></h2>
                <p className="text-xl text-slate-400 leading-relaxed mb-8">
                  I am a passionate <span className="text-white font-medium">B.Tech IT student</span> at IFET College of Engineering with a strong foundation in 
                  networking, IoT, and cloud systems. Currently maintaining a <span className="text-blue-400 font-bold">CGPA of 8.07</span>.
                </p>
                <p className="text-slate-400 mb-8">
                  My journey involves building real-world applications that solve environmental and mechanical problems 
                  through IoT automation, backed by a robust understanding of Cisco networking principles.
                </p>
                
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-blue-500 font-bold">3+</span>
                    <span className="text-slate-500 text-sm leading-none uppercase tracking-tighter">Relevant<br/>Internships</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl text-cyan-500 font-bold">10+</span>
                    <span className="text-slate-500 text-sm leading-none uppercase tracking-tighter">Certifications<br/>Earned</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-[2rem] p-1 border-blue-500/20 overflow-hidden group">
                 <div className="relative aspect-[3/4] rounded-[1.8rem] overflow-hidden">
                    {/* Note: In a real repo, replace this with your actual image path like './vishwa.jpg' */}
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                      alt="Vishwa K" 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <p className="text-white font-bold text-xl">Vishwa K</p>
                      <p className="text-blue-400 text-sm">IFET College of Engineering</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Projects Portfolio */}
        <Projects />

        {/* Section 5: AI Contact */}
        <ContactAI />
      </main>

      <footer className="py-12 glass border-t-0 mt-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} VISHWA.DEV — Aspiring Network Engineer
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs uppercase tracking-widest text-slate-600">
             <span>B.Tech IT</span>
             <span>•</span>
             <span>CCNA Certified</span>
             <span>•</span>
             <span>IoT Developer</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
