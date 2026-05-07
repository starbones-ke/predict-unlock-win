import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Unlock, Sparkles, TrendingUp, Circle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  startTime: string;
  date: string;
  isPremium: boolean;
  price: number;
  prediction: string;
  confidence: number;
  status: string;
}

interface MatchCardProps {
  match: Match;
  isUnlocked: boolean;
  onUnlock: () => void;
}

export function MatchCard({ match, isUnlocked, onUnlock }: MatchCardProps) {
  const needsUnlocking = match.isPremium && !isUnlocked;

  return (
    <Card className="group relative bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden shadow-xl">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{match.league}</span>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Circle className="w-2 h-2 fill-green-500 text-green-500 animate-pulse" />
              <span>{match.date} • {match.startTime}</span>
            </div>
          </div>
          {match.isPremium && !isUnlocked && (
            <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20 flex gap-1 items-center">
              <Sparkles className="w-3 h-3" />
              PREMIUM
            </Badge>
          )}
          {!match.isPremium && (
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20">
              FREE
            </Badge>
          )}
          {match.isPremium && isUnlocked && (
            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
              UNLOCKED
            </Badge>
          )}
        </div>

        {/* Teams */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xl font-bold tracking-tight text-white">{match.homeTeam}</p>
          </div>
          <div className="px-6">
            <span className="text-xs font-black text-zinc-700">VS</span>
          </div>
          <div className="flex-1 text-center sm:text-right">
            <p className="text-xl font-bold tracking-tight text-white">{match.awayTeam}</p>
          </div>
        </div>

        {/* Prediction Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {needsUnlocking ? (
              <motion.div 
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-8 bg-zinc-950/50 rounded-xl border border-dashed border-zinc-800"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center mb-3">
                  <Lock className="w-5 h-5 text-zinc-500" />
                </div>
                <p className="text-sm font-medium text-zinc-400 mb-4 text-center px-4">
                  Expert analysis & high-confidence prediction is locked.
                </p>
                <Button 
                  onClick={onUnlock}
                  className="bg-yellow-500 hover:bg-yellow-400 text-zinc-950 font-bold shadow-lg shadow-yellow-500/10"
                >
                  Unlock for ${match.price}
                </Button>
              </motion.div>
            ) : (
              <motion.div 
                key="unlocked"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Prediction</p>
                  <p className="text-md font-bold text-green-500">{match.prediction}</p>
                </div>
                <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/50">
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Confidence</p>
                  <div className="flex items-center gap-2">
                    <span className="text-md font-bold text-white">{match.confidence}%</span>
                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full" 
                        style={{ width: `${match.confidence}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Footer Decoration */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </Card>
  );
}