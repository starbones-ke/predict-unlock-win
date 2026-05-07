import { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { MatchList } from "./components/betting/MatchList";
import { AuthModal } from "./components/auth/AuthModal";
import { TopUpModal } from "./components/payment/TopUpModal";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

// Mock User State
const MOCK_USER = {
  id: "1",
  email: "user@example.com",
  balance: 5.0,
  isPremium: false,
};

function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const [unlockedMatches, setUnlockedMatches] = useState<string[]>([]);

  const handleLogin = () => {
    setUser(MOCK_USER);
    setIsAuthModalOpen(false);
    toast.success("Welcome back, Champion!");
  };

  const handleLogout = () => {
    setUser(null);
    setUnlockedMatches([]);
    toast.info("Logged out successfully");
  };

  const handleTopUp = (amount: number) => {
    setUser((prev: any) => ({ ...prev, balance: prev.balance + amount }));
    setIsTopUpOpen(false);
    toast.success(`Successfully added $${amount.toFixed(2)} to your wallet!`);
  };

  const handleUnlockMatch = (matchId: string, cost: number) => {
    if (!user) {
      setIsAuthModalOpen(true);
      toast.error("Please login to unlock predictions");
      return;
    }

    if (user.balance < cost) {
      setIsTopUpOpen(true);
      toast.error(`Insufficient balance ($${cost.toFixed(2)} required). Please top up.`);
      return;
    }

    setUser((prev: any) => ({ ...prev, balance: prev.balance - cost }));
    setUnlockedMatches((prev) => [...prev, matchId]);
    toast.success("Match unlocked! High-accuracy prediction revealed.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-green-500/30">
      <Navbar 
        user={user} 
        onLogout={handleLogout} 
        onLogin={() => setIsAuthModalOpen(true)} 
        onTopUp={() => setIsTopUpOpen(true)}
      />
      
      <main className="pb-20">
        <Hero onCtaClick={() => setIsAuthModalOpen(true)} isLoggedIn={!!user} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <MatchList 
            unlockedMatches={unlockedMatches} 
            onUnlock={handleUnlockMatch}
          />
        </div>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin}
      />

      <TopUpModal 
        isOpen={isTopUpOpen}
        onClose={() => setIsTopUpOpen(false)}
        onTopUp={handleTopUp}
      />
      
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;