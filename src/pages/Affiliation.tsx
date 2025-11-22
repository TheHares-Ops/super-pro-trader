import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Users,
  DollarSign,
  TrendingUp,
  QrCode,
  Copy,
  Share2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Affiliation = () => {
  const { toast } = useToast();

  const affiliationData = {
    balance: 1247.85,
    monthlyEarnings: 385.50,
    totalReferrals: 47,
    totalVolume: 125840,
    referralLink: "https://copytrade.app/ref/USER123",
    levels: [
      { level: 1, percentage: 10, referrals: 15, earnings: 845.20 },
      { level: 2, percentage: 3, referrals: 24, earnings: 312.45 },
      { level: 3, percentage: 1, referrals: 8, earnings: 90.20 },
    ],
  };

  const recentEarnings = [
    { name: "Sophie M.", level: 1, amount: 12.50, source: "Trading fees", date: "Aujourd'hui" },
    { name: "Marc L.", level: 2, amount: 8.30, source: "Copy fees", date: "Aujourd'hui" },
    { name: "Julie K.", level: 1, amount: 25.80, source: "Trading fees", date: "Hier" },
    { name: "Thomas B.", level: 3, amount: 3.40, source: "Trading fees", date: "Hier" },
  ];

  const copyReferralLink = () => {
    navigator.clipboard.writeText(affiliationData.referralLink);
    toast({
      title: "Lien copié!",
      description: "Le lien de parrainage a été copié dans le presse-papier",
    });
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 sticky top-0 z-10 backdrop-blur-lg bg-card/95">
        <div>
          <h1 className="text-foreground mb-1">Programme d'Affiliation</h1>
          <p className="text-sm text-soft-text">Générez des revenus passifs</p>
        </div>
      </header>

      <main className="p-6 space-y-6 animate-fade-in">
        {/* Balance Card */}
        <div className="card-portfolio relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative">
            <p className="caption mb-2">Solde Total</p>
            <div className="flex items-baseline gap-2 mb-1">
              <h2 className="text-4xl font-bold tnum">${affiliationData.balance.toFixed(2)}</h2>
              <StatusBadge type="profit">Disponible</StatusBadge>
            </div>
            <p className="text-success text-sm">+${affiliationData.monthlyEarnings} ce mois</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="card-trader">
            <Users className="h-5 w-5 text-primary mb-2" />
            <p className="caption mb-1">Filleuls</p>
            <p className="text-2xl font-bold tnum">{affiliationData.totalReferrals}</p>
          </div>
          <div className="card-trader">
            <TrendingUp className="h-5 w-5 text-success mb-2" />
            <p className="caption mb-1">Volume Total</p>
            <p className="text-2xl font-bold tnum">${(affiliationData.totalVolume / 1000).toFixed(0)}K</p>
          </div>
        </div>

        {/* Referral Link */}
        <section className="card-portfolio space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground">Votre Lien de Parrainage</h3>
            <button className="text-primary">
              <QrCode className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 p-4 bg-muted rounded-button">
            <p className="flex-1 text-sm text-foreground truncate font-mono">
              {affiliationData.referralLink}
            </p>
            <button
              onClick={copyReferralLink}
              className="shrink-0 text-primary hover:text-primary/80 transition-colors"
            >
              <Copy className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" size="default">
              <Share2 className="h-4 w-4 mr-2" />
              Partager
            </Button>
            <Button variant="default" size="default">
              <QrCode className="h-4 w-4 mr-2" />
              QR Code
            </Button>
          </div>
        </section>

        {/* Levels Structure */}
        <section className="space-y-4">
          <h3 className="text-foreground">Structure des Niveaux</h3>
          
          <div className="space-y-3">
            {affiliationData.levels.map((level) => (
              <div key={level.level} className="card-trader">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-bold text-primary">N{level.level}</span>
                    </div>
                    <div>
                      <p className="font-semibold">Niveau {level.level}</p>
                      <p className="caption">{level.percentage}% de commission</p>
                    </div>
                  </div>
                  <StatusBadge type="profit">
                    ${level.earnings}
                  </StatusBadge>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2 text-soft-text">
                    <Users className="h-4 w-4" />
                    <span className="text-sm tnum">{level.referrals} filleuls</span>
                  </div>
                  <div className="flex items-center gap-2 text-soft-text">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm tnum">{level.percentage}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-portfolio bg-gradient-primary/5 border-primary/20">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">
                  Gagnez jusqu'à 14% de commission
                </p>
                <p className="text-sm text-soft-text leading-relaxed">
                  10% niveau 1 + 3% niveau 2 + 1% niveau 3 sur toutes les transactions de votre réseau
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Earnings */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground">Gains Récents</h3>
            <button className="text-sm text-primary hover:text-primary/80">
              Voir tout
            </button>
          </div>

          <div className="space-y-3">
            {recentEarnings.map((earning, index) => (
              <div key={index} className="card-trader">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">N{earning.level}</span>
                    </div>
                    <div>
                      <p className="font-medium">{earning.name}</p>
                      <p className="caption">{earning.source}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold tnum text-success">+${earning.amount}</p>
                    <p className="caption">{earning.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Withdrawal Button */}
        <Button size="lg" className="w-full" variant="outline">
          Retirer mes Gains
        </Button>
      </main>
    </div>
  );
};

export default Affiliation;
