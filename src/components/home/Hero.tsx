import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Trophy } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
  isLoggedIn: boolean;
}

export function Hero({ onCtaClick, isLoggedIn }: HeroProps) {
  return (
    <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/08055308-cf38-45da-b432-2281b24d2d90/hero-stadium-ef40ed2c-1778189918072.webp"
          alt="Sports Stadium"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold tracking-wider uppercase mb-6">
            <Star className="w-3 h-3 fill-green-500" />
            92% Accuracy Rate This Month
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Predict Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Pro</span>, Win Like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">King</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get daily expert predictions for football, basketball, and more. Unlock premium high-confidence matches starting from just $1.99.
          </p>

          {!isLoggedIn && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-10 py-7 text-lg bg-green-600 hover:bg-green-500 shadow-xl shadow-green-600/20 transition-all active:scale-95"
              >
                Start Winning Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto px-10 py-7 text-lg border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition-all"
              >
                View Today's Odds
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <ShieldCheck className="w-6 h-6 text-zinc-400" />
            </div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Secure Payments</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Expert Analysts</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800">
              <Star className="w-6 h-6 text-green-500" />
            </div>
            <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Premium Insights</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}