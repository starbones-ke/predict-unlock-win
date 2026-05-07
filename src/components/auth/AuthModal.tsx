import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, Lock, User, TrendingUp } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

export function AuthModal({ isOpen, onClose, onLogin }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-zinc-950 border-zinc-800 p-0 overflow-hidden">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <TrendingUp className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              BETPRO<span className="text-green-500">INSIGHTS</span>
            </span>
          </div>

          <DialogHeader className="text-center mb-6">
            <DialogTitle className="text-2xl font-bold text-white">
              {isLogin ? "Welcome Back" : "Create Account"}
            </DialogTitle>
            <DialogDescription className="text-zinc-500">
              {isLogin 
                ? "Sign in to access your dashboard and premium tips." 
                : "Join thousands of experts making profitable predictions."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-zinc-400">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <Input id="name" placeholder="John Doe" className="pl-10 bg-zinc-900 border-zinc-800 focus:ring-green-500" />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-400">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <Input id="email" type="email" placeholder="name@example.com" className="pl-10 bg-zinc-900 border-zinc-800 focus:ring-green-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-zinc-400">Password</Label>
                {isLogin && <a href="#" className="text-xs text-green-500 hover:underline">Forgot?</a>}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <Input id="password" type="password" placeholder="••••••••" className="pl-10 bg-zinc-900 border-zinc-800 focus:ring-green-500" />
              </div>
            </div>

            <Button 
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold h-12 mt-4"
              onClick={onLogin}
            >
              {isLogin ? "Sign In" : "Sign Up"}
            </Button>

            <div className="text-center mt-6">
              <p className="text-sm text-zinc-500">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                {" "}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-green-500 font-bold hover:underline ml-1"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </button>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-zinc-900/50 p-4 border-t border-zinc-800 flex items-center justify-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Secure AES-256 Encryption</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}