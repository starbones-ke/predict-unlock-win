import { useState } from "react";
import { MatchCard } from "./MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Flame, Clock, Calendar, Sparkles } from "lucide-react";

const MOCK_MATCHES = [
  {
    id: "m1",
    homeTeam: "Manchester City",
    awayTeam: "Real Madrid",
    league: "UEFA Champions League",
    startTime: "20:45",
    date: "Today",
    isPremium: true,
    price: 4.99,
    prediction: "Home Win (1) @ 1.85",
    confidence: 94,
    status: "upcoming"
  },
  {
    id: "m2",
    homeTeam: "Arsenal",
    awayTeam: "Bayern Munich",
    league: "UEFA Champions League",
    startTime: "20:45",
    date: "Today",
    isPremium: false,
    price: 0,
    prediction: "Over 2.5 Goals @ 1.65",
    confidence: 82,
    status: "upcoming"
  },
  {
    id: "m3",
    homeTeam: "LA Lakers",
    awayTeam: "Golden State Warriors",
    league: "NBA Regular Season",
    startTime: "02:00",
    date: "Tomorrow",
    isPremium: true,
    price: 2.99,
    prediction: "Away Win (2) @ 2.10",
    confidence: 88,
    status: "upcoming"
  },
  {
    id: "m4",
    homeTeam: "Inter Milan",
    awayTeam: "AC Milan",
    league: "Serie A",
    startTime: "18:00",
    date: "Today",
    isPremium: true,
    price: 3.50,
    prediction: "Draw (X) @ 3.40",
    confidence: 76,
    status: "upcoming"
  },
  {
    id: "m5",
    homeTeam: "Barcelona",
    awayTeam: "PSG",
    league: "UEFA Champions League",
    startTime: "20:45",
    date: "Today",
    isPremium: false,
    price: 0,
    prediction: "Home Win @ 1.95",
    confidence: 79,
    status: "upcoming"
  }
];

interface MatchListProps {
  unlockedMatches: string[];
  onUnlock: (matchId: string, cost: number) => void;
}

export function MatchList({ unlockedMatches, onUnlock }: MatchListProps) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Daily Predictions</h2>
          <p className="text-zinc-500 mt-1">Carefully analyzed picks for the next 24 hours</p>
        </div>
        
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="bg-zinc-900 border border-zinc-800">
            <TabsTrigger value="all" className="data-[state=active]:bg-zinc-800">All</TabsTrigger>
            <TabsTrigger value="premium" className="data-[state=active]:bg-zinc-800 flex gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              Premium
            </TabsTrigger>
            <TabsTrigger value="free" className="data-[state=active]:bg-zinc-800">Free</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {MOCK_MATCHES.map((match) => (
          <MatchCard 
            key={match.id} 
            match={match} 
            isUnlocked={unlockedMatches.includes(match.id)}
            onUnlock={() => onUnlock(match.id, match.price)}
          />
        ))}
      </div>
    </div>
  );
}