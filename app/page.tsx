"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, ArrowRight, Database, Server, Webhook, Cloud, Activity, Lock, Layers } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-8 flex justify-between items-center">
        <div className="font-heading text-2xl font-bold tracking-tight">Vorleak Som</div>
        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
          <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center p-0.5">
             <div className="w-full h-full bg-white rounded-full"></div>
          </div>
          <span className="font-medium text-sm">Backend Engine of the Year 2026</span>
        </div>

        <button className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/50 backdrop-blur-sm hover:bg-white transition-colors">
          <Menu size={20} />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 flex flex-col items-center">
        <div className="absolute inset-0 hero-glow -z-10 pointer-events-none w-full h-[120%] -top-[10%]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10 w-full"
        >
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[7rem] xl:text-[8rem] leading-tight md:leading-[1.05] tracking-tight font-bold mb-4">
            Hi I'm Vorleak
            <br className="hidden md:block" />
            <span className="font-light italic tracking-normal text-brand/90 md:mr-4">Backend</span> Developer
          </h1>
        </motion.div>

        <div className="w-full max-w-7xl mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-between gap-8 z-10 relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-3 rounded-full border border-black/5 shadow-sm md:w-64"
          >
            <div className="w-3 h-3 bg-brand rounded-full animate-pulse shrink-0"></div>
            <span className="font-medium text-sm leading-tight text-left">Available for new opportunities</span>
          </motion.div>

          {/* Center Portrait - Using a clean, professional placeholder that fits the vibe */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative w-64 h-80 md:w-[22rem] md:h-[28rem] mx-auto md:-mt-20 z-20"
          >
             <Image 
                src="https://picsum.photos/seed/backend/1000/1600" 
                alt="Vorleak Som"
                fill
                className="object-cover rounded-[2rem] shadow-2xl z-20 object-top"
                sizes="(max-width: 768px) 100vw, 350px"
                priority
              />
              {/* Decorative elements behind image */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-black/5 rounded-[3rem] -z-10 rotate-3"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-black/5 rounded-[2.5rem] -z-10 -rotate-2"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center md:items-end text-center md:text-right max-w-[250px] md:w-64"
          >
             <p className="text-sm font-medium mb-6">
                Passionate about architecting robust server-side systems and building scalable APIs.
             </p>
             <button className="bg-[#111] text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-black/80 transition-colors w-full md:w-auto">
                <ArrowRight size={18} />
                Get in Touch
             </button>
          </motion.div>
        </div>
      </section>

      {/* Trusted By / Tech Stack Banner */}
      <div className="w-full border-y border-black/10 bg-white/50 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 backdrop-blur-sm relative z-20">
         <div className="flex items-center gap-4">
           <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7F7F7] overflow-hidden bg-gray-200">
                   <Image src={`https://picsum.photos/seed/client${i}/100/100`} alt="Client" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              ))}
           </div>
           <p className="text-sm">Trusted by over <strong className="font-bold">50+ technical<br/>teams</strong> across enterprise projects.</p>
         </div>
         <div className="flex gap-8 opacity-40 font-heading font-bold text-xl uppercase tracking-wider flex-wrap justify-center">
            <span>PostgreSQL</span>
            <span>Redis</span>
            <span>GraphQL</span>
            <span>Docker</span>
            <span>AWS</span>
         </div>
      </div>

      {/* Hello / Skills Section */}
      <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto text-center">
        <h3 className="font-heading italic text-3xl mb-8">Hello!</h3>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            focus is on building <span className="font-bold">scalable architecture</span>, 
            robust APIs, and optimizing <span className="font-bold">database performance</span> 
            <br className="hidden md:block"/> to craft systems that <span className="text-brand/80 pb-1 border-b-2 border-brand/50">solve real problems</span>
          </h2>
          
          {/* Floating Skills Pills */}
          <div className="hidden md:block absolute top-0 -left-12 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 flex items-center gap-2 -rotate-6">
            <Server size={14} className="text-[#a3e635]" /> <span className="text-sm font-medium">Microservices</span>
          </div>
          <div className="hidden md:block absolute bottom-12 -left-4 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 flex items-center gap-2 rotate-3">
            <Database size={14} className="text-[#a3e635]" /> <span className="text-sm font-medium">Data Modeling</span>
          </div>
          <div className="hidden md:block absolute top-4 -right-12 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 flex items-center gap-2 rotate-6">
            <Cloud size={14} className="text-[#a3e635]" /> <span className="text-sm font-medium">Cloud Native</span>
          </div>
           <div className="hidden md:block absolute -bottom-6 -right-4 bg-white px-4 py-2 rounded-full shadow-sm border border-black/5 flex items-center gap-2 -rotate-2">
            <Lock size={14} className="text-[#a3e635]" /> <span className="text-sm font-medium">Security</span>
          </div>
        </div>
      </section>

      {/* API Integrations & Database Expertise */}
      <section className="py-24 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">/ Core Expertise /</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">API & Data Management</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* API Integration Card */}
            <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-black/5 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
               <div className="text-5xl font-heading font-light text-black/20 mb-6">01</div>
               <Webhook size={32} strokeWidth={1.5} className="mb-6 text-black" />
               <h3 className="text-2xl font-heading font-bold mb-4">REST & GraphQL APIs</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 Designing unified, secure, and performant interfaces. Expertise in integrating complex third-party endpoints (Stripe, Twilio, OAuth) and constructing reliable Webhooks for real-time events.
               </p>
               <ul className="space-y-2">
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Rate Limiting & Caching</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> API Gateway implementation</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Swagger/OpenAPI Spec</li>
               </ul>
            </div>

            {/* Database Card */}
            <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-black/5 shadow-sm lg:-mt-12 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full -z-10 group-hover:scale-110 transition-transform"></div>
               <div className="text-5xl font-heading font-light text-black/20 mb-6">02</div>
               <Database size={32} strokeWidth={1.5} className="mb-6 text-black" />
               <h3 className="text-2xl font-heading font-bold mb-4">Database Architecture</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 Transforming raw data into structured, highly-available knowledge. Managing relational integrity with PostgreSQL while leveraging NoSQL (MongoDB, Redis) for speed and flexibility.
               </p>
               <ul className="space-y-2">
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Complex Query Optimization</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> High-Availability Clustering</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Multi-tenant Architectures</li>
               </ul>
            </div>

             {/* Cloud Architecture Card */}
             <div className="bg-[#fcfcfc] rounded-3xl p-8 border border-black/5 shadow-sm md:mt-12 relative overflow-hidden group hover:shadow-md transition-shadow">
               <div className="absolute top-1/2 right-0 translate-x-1/2 -rotate-45 w-24 h-48 bg-brand/10 rounded-full -z-10 group-hover:scale-110 transition-transform"></div>
               <div className="text-5xl font-heading font-light text-black/20 mb-6">03</div>
               <Layers size={32} strokeWidth={1.5} className="mb-6 text-black" />
               <h3 className="text-2xl font-heading font-bold mb-4">Cloud & Serverless</h3>
               <p className="text-gray-600 leading-relaxed mb-6">
                 Deploying and operating resilient backend services. Orchestrating containers across distributed environments and setting up efficient CI/CD pipelines.
               </p>
               <ul className="space-y-2">
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> AWS (EC2, Lambda, S3)</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Docker & Kubernetes</li>
                 <li className="flex items-center gap-2 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-brand"></div> Event-Driven Messaging</li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works - Bento Grid Style */}
      <section className="py-24 px-6 md:px-12 bg-white pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">/ Best Projects /</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4">Selected Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Project 1 - Main Feature */}
             <div className="lg:col-span-2 group cursor-pointer">
                <div className="bg-[#f4f4f5] rounded-[2rem] aspect-[16/9] md:aspect-[21/9] p-8 overflow-hidden relative border border-black/5">
                   {/* Abstract representation of a dashboard/API tool */}
                   <div className="w-full h-full bg-white rounded-xl shadow-xl border border-black/5 p-4 flex flex-col gap-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                      <div className="flex justify-between items-center border-b pb-2">
                         <div className="h-4 w-24 bg-gray-200 rounded"></div>
                         <div className="flex gap-2">
                            <div className="h-4 w-4 bg-brand/50 rounded-full"></div>
                            <div className="h-4 w-4 bg-yellow-400 rounded-full"></div>
                            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                         </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-grow">
                         <div className="col-span-2 bg-gray-50 rounded-lg p-4 border border-black/5 flex flex-col gap-3">
                            <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                            <div className="flex-grow w-full border-b-2 border-dashed border-brand/50 relative">
                               <div className="absolute bottom-0 left-1/4 w-1 h-12 bg-brand transform -translate-x-1/2"></div>
                               <div className="absolute bottom-0 left-2/4 w-1 h-24 bg-brand transform -translate-x-1/2"></div>
                               <div className="absolute bottom-0 left-3/4 w-1 h-16 bg-brand transform -translate-x-1/2"></div>
                            </div>
                         </div>
                         <div className="col-span-1 flex flex-col gap-4">
                            <div className="flex-grow bg-blue-50 rounded-lg border border-blue-100 p-4">
                                <div className="h-2 w-1/2 bg-blue-200 rounded mb-2"></div>
                                <div className="h-6 w-3/4 bg-blue-400 rounded"></div>
                            </div>
                            <div className="flex-grow bg-gray-900 rounded-lg p-4 font-mono text-[10px] text-green-400 overflow-hidden">
                                {`> POST /api/v1/sync`}<br/>
                                {`> Status: 200 OK`}<br/>
                                {`> Latency: 24ms`}
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="mt-4 flex justify-between items-end">
                   <div>
                     <h3 className="font-heading text-xl font-bold">Finvera Payments API</h3>
                     <p className="text-gray-500 text-sm mt-1">High-throughput transaction processing engine.</p>
                   </div>
                   <div className="flex gap-2">
                     <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">Fintech</span>
                     <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">Go / PostgreSQL</span>
                   </div>
                </div>
             </div>

             {/* Project 2 */}
              <div className="group cursor-pointer">
                <div className="bg-[#f4f4f5] rounded-[2rem] aspect-square lg:aspect-auto lg:h-[calc(100%-4.5rem)] p-8 overflow-hidden relative border border-black/5 flex items-center justify-center">
                    <div className="w-full h-full max-h-64 bg-white rounded-xl shadow-xl border border-black/5 p-4 flex flex-col justify-between transform group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600"><Activity size={20}/></div>
                           <div>
                             <div className="h-3 w-20 bg-gray-200 rounded mb-1"></div>
                             <div className="h-2 w-12 bg-gray-100 rounded"></div>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                           <div className="h-16 w-full bg-gray-50 rounded-lg border border-black/5 relative overflow-hidden">
                             <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500"></div>
                           </div>
                           <div className="h-16 w-full bg-gray-50 rounded-lg border border-black/5 relative overflow-hidden">
                             <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500"></div>
                           </div>
                        </div>

                         <div className="w-full bg-gray-900 rounded-lg p-3 font-mono text-xs text-gray-400">
                           <span className="text-pink-400">query</span> {'{'} <br/>
                           &nbsp;&nbsp;users(limit: 1M) {'{'}...
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                   <div>
                     <h3 className="font-heading text-lg font-bold">HealthSync GraphQL</h3>
                     <p className="text-gray-500 text-sm mt-1">Unified health records API.</p>
                   </div>
                   <div className="flex gap-2">
                     <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">HealthTech</span>
                   </div>
                </div>
             </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-[#111] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">Ready to scale your backend?</h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          Let's discuss how we can build robust, high-performance architecture for your next big product.
        </p>
        <button className="bg-brand text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#b0f23d] transition-colors inline-flex items-center gap-2">
          Start a Conversation <ArrowRight size={20} />
        </button>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Vorleak Som. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
