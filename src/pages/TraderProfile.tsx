import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  Target,
  Shield,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TraderProfile = () => {
  const navigate = useNavigate();

  const trader = {
    name: "Alex Morgan",
    style: "Day Trading",
    roi: 47.3,
    maxDrawdown: 12.5,
    winRate: 68.5,
    followers: 1250,
    totalTrades: 342,
    avgProfit: 2.8,
    riskScore: 6.5,
    since: "Jan 2023",
  };

  const openPositions = [
    { pair: "EUR/USD", type: "BUY", lot: 0.5, profit: 125.5, pips: 23 },
    { pair: "GBP/JPY", type: "SELL", lot: 0.3, profit: -42.3, pips: -15 },
    { pair: "BTC/USD", type: "BUY", lot: 0.1, profit: 380.2, pips: 120 },
  ];

  const tradeHistory = [
    { pair: "EUR/USD", type: "BUY", profit: 245.5, date: "Aujourd'hui", time: "14:32" },
    { pair: "GBP/USD", type: "SELL", profit: -85.2, date: "Aujourd'hui", time: "11:15" },
    { pair: "USD/JPY", type: "BUY", profit: 167.8, date: "Hier", time: "16:45" },
    { pair: "XAU/USD", type: "BUY", profit: 523.1, date: "Hier", time: "09:20" },
  ];

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-10 backdrop-blur-lg bg-card/95">
        <div className="p-6 pb-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-4 flex items-center gap-2 text-soft-text hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-sm font-medium">Retour</span>
          </button>

          <div className="flex items-start gap-4">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage src="" alt={trader.name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-xl">
                {trader.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{trader.name}</h1>
                <StatusBadge type="profit">Vérifié</StatusBadge>
              </div>
              <p className="text-soft-text mb-3">{trader.style}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-soft-text">
                  <Users className="h-4 w-4" />
                  <span className="tnum">{trader.followers}</span>
                </div>
                <div className="flex items-center gap-1.5 text-soft-text">
                  <Calendar className="h-4 w-4" />
                  <span>Depuis {trader.since}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-3 gap-px bg-border p-6 pt-0">
          <div className="bg-card p-4 rounded-lg">
            <p className="caption mb-1">ROI 30j</p>
            <p className="text-xl font-bold tnum text-success">+{trader.roi}%</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <p className="caption mb-1">Win Rate</p>
            <p className="text-xl font-bold tnum">{trader.winRate}%</p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <p className="caption mb-1">Max DD</p>
            <p className="text-xl font-bold tnum text-destructive">{trader.maxDrawdown}%</p>
          </div>
        </div>
      </header>

      <main className="p-6 space-y-6 animate-fade-in">
        {/* Performance Chart */}
        <section className="card-portfolio">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Equity Curve
            </h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground">
                30J
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-muted text-soft-text">
                90J
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-muted text-soft-text">
                1A
              </button>
            </div>
          </div>
          <div className="h-56 bg-gradient-chart rounded-lg flex items-center justify-center border border-border">
            <BarChart3 className="h-12 w-12 text-soft-text opacity-50" />
          </div>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-2 gap-4">
          <div className="card-trader">
            <Target className="h-5 w-5 text-primary mb-2" />
            <p className="caption mb-1">Trades Total</p>
            <p className="text-2xl font-bold tnum">{trader.totalTrades}</p>
          </div>
          <div className="card-trader">
            <TrendingUp className="h-5 w-5 text-success mb-2" />
            <p className="caption mb-1">Profit Moyen</p>
            <p className="text-2xl font-bold tnum text-success">+{trader.avgProfit}%</p>
          </div>
          <div className="card-trader">
            <Shield className="h-5 w-5 text-warning mb-2" />
            <p className="caption mb-1">Score Risque</p>
            <p className="text-2xl font-bold tnum">{trader.riskScore}/10</p>
          </div>
          <div className="card-trader">
            <Users className="h-5 w-5 text-primary mb-2" />
            <p className="caption mb-1">Copieurs</p>
            <p className="text-2xl font-bold tnum">{trader.followers}</p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="space-y-4">
          <h3 className="text-foreground">Positions Ouvertes ({openPositions.length})</h3>
          <div className="space-y-3">
            {openPositions.map((position, index) => (
              <div key={index} className="card-trader flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{position.pair}</p>
                    <StatusBadge type={position.type === "BUY" ? "profit" : "loss"}>
                      {position.type}
                    </StatusBadge>
                  </div>
                  <p className="caption">Lot: {position.lot} • {position.pips > 0 ? "+" : ""}{position.pips} pips</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold tnum ${position.profit > 0 ? "text-success" : "text-destructive"}`}>
                    {position.profit > 0 ? "+" : ""}${position.profit.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trade History */}
        <section className="space-y-4">
          <h3 className="text-foreground">Historique des Trades</h3>
          <div className="space-y-3">
            {tradeHistory.map((trade, index) => (
              <div key={index} className="card-trader">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{trade.pair}</p>
                    <StatusBadge type={trade.type === "BUY" ? "profit" : "risk"}>
                      {trade.type}
                    </StatusBadge>
                  </div>
                  <p className={`text-lg font-bold tnum ${trade.profit > 0 ? "text-success" : "text-destructive"}`}>
                    {trade.profit > 0 ? "+" : ""}${trade.profit.toFixed(2)}
                  </p>
                </div>
                <p className="caption">{trade.date} • {trade.time}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 left-6 right-6 z-20">
        <Button 
          size="lg" 
          className="w-full shadow-hover"
          onClick={() => navigate("/copy-config")}
        >
          Copier ce trader
        </Button>
      </div>
    </div>
  );
};

export default TraderProfile;
