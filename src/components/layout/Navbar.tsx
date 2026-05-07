import { Button } from "@/components/ui/button";
import { Wallet, LogOut, User, LayoutDashboard, TrendingUp, Plus } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  user: any;
  onLogout: () => void;
  onLogin: () => void;
  onTopUp: () => void;
}

export function Navbar({ user, onLogout, onLogin, onTopUp }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: -10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20"
            >
              <TrendingUp className="text-white w-6 h-6" />
            </motion.div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 tracking-tight">
              BETPRO<span className="text-green-500">INSIGHTS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Today's Matches</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Premium Tips</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Results</a>
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                  <Wallet className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold">${user.balance.toFixed(2)}</span>
                  <button 
                    onClick={onTopUp}
                    className="ml-1 p-0.5 bg-green-500/20 hover:bg-green-500/30 text-green-500 rounded-full transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <Button variant="ghost" size="icon" className="hidden sm:flex text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-full">
                  <User className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={onLogout} className="text-zinc-400 hover:text-red-400 hover:bg-red-400/10 rounded-full">
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" className="text-zinc-400 hover:text-white" onClick={onLogin}>
                  Log in
                </Button>
                <Button className="bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/20" onClick={onLogin}>
                  Sign up
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}