import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck, DollarSign } from "lucide-react";

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopUp: (amount: number) => void;
}

const AMOUNTS = [5, 10, 25, 50, 100];

export function TopUpModal({ isOpen, onClose, onTopUp }: TopUpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-zinc-950 border-zinc-800 p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="text-center mb-8">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold text-white">
              Add Funds
            </DialogTitle>
            <DialogDescription className="text-zinc-500">
              Top up your wallet to unlock premium match predictions instantly.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {AMOUNTS.map((amount) => (
              <Button
                key={amount}
                variant="outline"
                className="h-14 border-zinc-800 hover:border-green-500/50 hover:bg-green-500/5 text-zinc-300 font-bold text-lg"
                onClick={() => onTopUp(amount)}
              >
                ${amount}
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            <Button 
              className="w-full bg-zinc-100 hover:bg-white text-zinc-950 font-bold h-12 flex items-center justify-center gap-2"
              onClick={() => onTopUp(50)}
            >
              <CreditCard className="w-5 h-5" />
              Pay with Card
            </Button>
            
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-zinc-500" />
                <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Secure</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter italic">VISA</span>
              </div>
              <div className="h-4 w-px bg-zinc-800" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-[10px] text-zinc-500 uppercase font-black tracking-tighter italic">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}