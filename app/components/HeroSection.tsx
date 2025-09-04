'use client';

import { Button } from './Button';

export function HeroSection() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                LocalLinkups
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Discover local tasks, gigs, and collaboration opportunities. 
                Connect with your community while building skills and earning locally.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Dashboard
              </Button>
              <Button variant="outline" size="lg">
                🚀 Freelance
              </Button>
            </div>
          </div>
          
          {/* Right Content - Stats Cards */}
          <div className="space-y-4">
            {/* Balance Card */}
            <div className="glass-card rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/70 text-sm">linkbase.com</span>
                <span className="text-2xl">🔗</span>
              </div>
              <div className="text-2xl font-bold text-white">$0.506</div>
            </div>
            
            {/* Profile Card */}
            <div className="glass-card rounded-xl p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center">
                  <span className="text-white font-bold">LL</span>
                </div>
                <div>
                  <div className="text-white font-medium">LocalLinkups</div>
                  <div className="text-white/70 text-sm">GetStartedNow</div>
                </div>
              </div>
              <div className="text-white/90 text-sm mb-3">Letter via Seamless Location</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-white text-sm">Local Forms</span>
                </div>
                <div className="text-white font-bold">$1.24+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
