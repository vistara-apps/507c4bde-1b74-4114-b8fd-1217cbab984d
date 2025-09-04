'use client';

import { ReactNode } from 'react';
import { Wallet } from '@coinbase/onchainkit/wallet';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { User, MapPin, Bell } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen relative">
      {/* Floating orbs for visual appeal */}
      <div className="floating-orb w-32 h-32 bg-purple-400 top-20 left-10 opacity-30"></div>
      <div className="floating-orb w-24 h-24 bg-blue-400 top-40 right-20 opacity-40" style={{animationDelay: '2s'}}></div>
      <div className="floating-orb w-20 h-20 bg-pink-400 bottom-40 left-1/4 opacity-35" style={{animationDelay: '4s'}}></div>
      
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-purple-600 font-bold text-lg">🔗</span>
            </div>
            <h1 className="text-white font-bold text-xl">LocalLinkups</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 text-white/80">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Marketplace</a>
            <a href="#" className="hover:text-white transition-colors">Workflow</a>
            <a href="#" className="hover:text-white transition-colors">Sign Up</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Wallet>
              <ConnectWallet className="bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
            </Wallet>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
