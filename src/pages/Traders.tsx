import { useState } from "react";
import { TraderCard } from "@/components/trader-card";
import { BotCard } from "@/components/bot-card";
import { InputField } from "@/components/ui/input-field";
import { Search, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const Traders = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const traders = [
    {
      name: "Alex Morgan",
      roi: 47.3,
      maxDrawdown: 12.5,
      followers: 1250,
      style: "Day Trading",
      avatar: "",
    },
    {
      name: "Sarah Chen",
      roi: 35.8,
      maxDrawdown: 8.2,
      followers: 980,
      style: "Swing Trading",
      avatar: "",
    },
    {
      name: "Marcus Johnson",
      roi: 28.4,
      maxDrawdown: 15.1,
      followers: 742,
      style: "Scalping",
      avatar: "",
    },
    {
      name: "Emily Rodriguez",
      roi: 42.1,
      maxDrawdown: 9.8,
      followers: 1540,
      style: "Position Trading",
      avatar: "",
    },
    {
      name: "David Kim",
      roi: 31.5,
      maxDrawdown: 11.2,
      followers: 823,
      style: "Day Trading",
      avatar: "",
    },
    {
      name: "Lisa Anderson",
      roi: -5.2,
      maxDrawdown: 18.3,
      followers: 412,
      style: "Scalping",
      avatar: "",
    },
  ];

  const bots = [
    {
      name: "Alpha Scalper Pro",
      description: "Stratégie scalping haute fréquence",
      roi: 52.8,
      maxDrawdown: 8.5,
      riskLevel: "Moyen",
      strategy: "Scalping AI",
    },
    {
      name: "TrendMaster ML",
      description: "Détection de tendances par Machine Learning",
      roi: 38.4,
      maxDrawdown: 11.2,
      riskLevel: "Faible",
      strategy: "Trend Following",
    },
    {
      name: "Grid Trading Bot",
      description: "Stratégie de grille automatisée",
      roi: 29.7,
      maxDrawdown: 15.8,
      riskLevel: "Élevé",
      strategy: "Grid Trading",
    },
    {
      name: "Neural Predictor",
      description: "Prédictions par réseaux neuronaux",
      roi: 45.1,
      maxDrawdown: 9.3,
      riskLevel: "Moyen",
      strategy: "ML Prediction",
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 sticky top-0 z-10 backdrop-blur-lg bg-card/95">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-soft-text hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <h1 className="text-foreground">Traders</h1>
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1">
              <InputField
                placeholder="Rechercher un trader..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search className="h-5 w-5" />}
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="p-6 animate-fade-in">
        <Tabs defaultValue="human" className="w-full">
          <TabsList className="w-full grid grid-cols-2 mb-6">
            <TabsTrigger value="human">Human Traders</TabsTrigger>
            <TabsTrigger value="bots">AI Trading Bots</TabsTrigger>
          </TabsList>

          <TabsContent value="human" className="mt-0">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="card-trader text-center">
                <p className="caption mb-1">Total</p>
                <p className="text-2xl font-bold tnum">{traders.length}</p>
              </div>
              <div className="card-trader text-center">
                <p className="caption mb-1">ROI Moyen</p>
                <p className="text-2xl font-bold tnum text-success">+32.4%</p>
              </div>
              <div className="card-trader text-center">
                <p className="caption mb-1">Actifs</p>
                <p className="text-2xl font-bold tnum">124</p>
              </div>
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {["Tous", "Day Trading", "Swing Trading", "Scalping", "Position"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      filter === "Tous"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-soft-text hover:bg-muted/80"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            <div className="space-y-4">
              {traders.map((trader, index) => (
                <div key={index} onClick={() => navigate("/trader/1")} className="cursor-pointer">
                  <TraderCard {...trader} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bots" className="mt-0">
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="card-trader text-center">
                <p className="caption mb-1">Total Bots</p>
                <p className="text-2xl font-bold tnum">{bots.length}</p>
              </div>
              <div className="card-trader text-center">
                <p className="caption mb-1">ROI Moyen</p>
                <p className="text-2xl font-bold tnum text-success">+41.5%</p>
              </div>
              <div className="card-trader text-center">
                <p className="caption mb-1">Actifs</p>
                <p className="text-2xl font-bold tnum">87</p>
              </div>
            </div>

            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
              {["Tous", "Scalping", "Trend", "Grid", "ML Prediction"].map(
                (filter) => (
                  <button
                    key={filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      filter === "Tous"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-soft-text hover:bg-muted/80"
                    }`}
                  >
                    {filter}
                  </button>
                )
              )}
            </div>

            <div className="space-y-4">
              {bots.map((bot, index) => (
                <div key={index} onClick={() => navigate("/bot/1")} className="cursor-pointer">
                  <BotCard {...bot} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Traders;
