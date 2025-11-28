import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio-card";
import { TraderCard } from "@/components/trader-card";
import { useNavigate } from "react-router-dom";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Copy,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  // Mock data
  const portfolioBalance = 12580.45;
  const portfolioChange = 8.3;
  const tradingBalance = 5000;
  const tradingChange = 12.7;

  const topTraders = [
    {
      name: "Alex Morgan",
      roi: 47.3,
      maxDrawdown: 12.5,
      followers: 1250,
      style: "Day Trading",
    },
    {
      name: "Sarah Chen",
      roi: 35.8,
      maxDrawdown: 8.2,
      followers: 980,
      style: "Swing Trading",
    },
    {
      name: "Marcus Johnson",
      roi: 28.4,
      maxDrawdown: 15.1,
      followers: 742,
      style: "Scalping",
    },
  ];

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 sticky top-0 z-10 backdrop-blur-lg bg-card/95">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground mb-1">Bienvenue 👋</h2>
            <p className="text-sm text-soft-text">Voici votre tableau de bord</p>
          </div>
          <button className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <Users className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="p-6 space-y-8 animate-fade-in">
        {/* Portfolio Section */}
        <section className="space-y-4">
          <PortfolioCard
            title="Solde Total Portefeuille"
            subtitle="Votre capital total"
            balance={portfolioBalance}
            change={portfolioChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <div className="card-trader">
              <Wallet className="h-5 w-5 text-primary mb-2" />
              <p className="caption mb-1">Trading</p>
              <p className="text-xl font-bold tnum">${tradingBalance}</p>
              <p className="text-sm text-success">+{tradingChange}%</p>
            </div>
            <div className="card-trader">
              <TrendingUp className="h-5 w-5 text-primary mb-2" />
              <p className="caption mb-1">Gains</p>
              <p className="text-xl font-bold tnum">$580.45</p>
              <p className="text-sm text-success">Ce mois</p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid grid-cols-3 gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-col h-auto py-4 gap-2"
            onClick={() => navigate("/deposit")}
          >
            <ArrowDownToLine className="h-5 w-5" />
            <span className="text-xs">Dépôt</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-col h-auto py-4 gap-2"
            onClick={() => navigate("/withdraw")}
          >
            <ArrowUpFromLine className="h-5 w-5" />
            <span className="text-xs">Retrait</span>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="flex-col h-auto py-4 gap-2"
            onClick={() => navigate("/copy-config")}
          >
            <Copy className="h-5 w-5" />
            <span className="text-xs">Copier</span>
          </Button>
        </section>

        {/* Performance Chart Placeholder */}
        <section className="card-portfolio">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-foreground">Performance</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs rounded-full bg-primary text-primary-foreground">
                7J
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-muted text-soft-text hover:bg-muted/80">
                30J
              </button>
              <button className="px-3 py-1 text-xs rounded-full bg-muted text-soft-text hover:bg-muted/80">
                1A
              </button>
            </div>
          </div>
          <div className="h-48 bg-gradient-chart rounded-lg flex items-center justify-center border border-border">
            <p className="text-soft-text text-sm">Graphique de performance</p>
          </div>
        </section>

        {/* Top Traders */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground">Traders Populaires</h3>
            <button 
              onClick={() => navigate("/traders")}
              className="text-sm text-primary hover:text-primary/80"
            >
              Voir tout
            </button>
          </div>

          <div className="space-y-4">
            {topTraders.map((trader, index) => (
              <div key={index} onClick={() => navigate("/trader/1")}>
                <TraderCard {...trader} />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 bg-card border border-border rounded-[20px] shadow-hover z-20">
        <div className="grid grid-cols-5 p-2">
          {[
            { icon: "🏠", label: "Accueil", active: true, path: "/dashboard" },
            { icon: "👥", label: "Traders", active: false, path: "/traders" },
            { icon: "📋", label: "Copy", active: false, path: "/copy-config" },
            { icon: "🎯", label: "Affiliation", active: false, path: "/affiliation" },
            { icon: "👤", label: "Profil", active: false, path: "/profile" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-soft-text hover:text-foreground"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
