import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CopyConfig = () => {
  const navigate = useNavigate();
  const [copyMode, setCopyMode] = useState("multiplier");
  const [multiplier, setMultiplier] = useState(1);
  const [stopLoss, setStopLoss] = useState([20]);
  const [takeProfit, setTakeProfit] = useState([50]);
  const [minCapital, setMinCapital] = useState("1000");

  const traderName = "Alex Morgan";
  const accountBalance = 5000;

  const calculateRisk = () => {
    const riskAmount = (accountBalance * stopLoss[0]) / 100;
    return riskAmount.toFixed(2);
  };

  const calculateProfit = () => {
    const profitAmount = (accountBalance * takeProfit[0]) / 100;
    return profitAmount.toFixed(2);
  };

  return (
    <div className="min-h-screen pb-24 bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border p-6 sticky top-0 z-10 backdrop-blur-lg bg-card/95">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center gap-2 text-soft-text hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-sm font-medium">Retour</span>
        </button>
        <div>
          <h1 className="text-foreground mb-1">Configuration du Copy</h1>
          <p className="text-sm text-soft-text">Trader: {traderName}</p>
        </div>
      </header>

      <main className="p-6 space-y-6 animate-fade-in">
        {/* Account Balance */}
        <div className="card-portfolio">
          <p className="caption mb-2">Solde disponible</p>
          <p className="text-3xl font-bold tnum">${accountBalance.toLocaleString()}</p>
        </div>

        {/* Copy Mode */}
        <section className="card-portfolio space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground">Mode de Copie</h3>
            <button className="text-primary">
              <Info className="h-5 w-5" />
            </button>
          </div>

          <RadioGroup value={copyMode} onValueChange={setCopyMode} className="space-y-3">
            <div className="flex items-start gap-3 p-4 rounded-button border-2 border-border has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
              <RadioGroupItem value="multiplier" id="multiplier" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="multiplier" className="font-medium text-foreground cursor-pointer">
                  Multiplicateur
                </Label>
                <p className="text-sm text-soft-text mt-1">
                  Copiez avec un multiplicateur de lots
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-button border-2 border-border has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
              <RadioGroupItem value="fixed" id="fixed" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="fixed" className="font-medium text-foreground cursor-pointer">
                  Lot Fixe
                </Label>
                <p className="text-sm text-soft-text mt-1">
                  Copiez avec un lot fixe par trade
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-button border-2 border-border has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
              <RadioGroupItem value="percentage" id="percentage" className="mt-1" />
              <div className="flex-1">
                <Label htmlFor="percentage" className="font-medium text-foreground cursor-pointer">
                  % du Capital
                </Label>
                <p className="text-sm text-soft-text mt-1">
                  Copiez avec un pourcentage de votre capital
                </p>
              </div>
            </div>
          </RadioGroup>

          {copyMode === "multiplier" && (
            <div className="space-y-3 pt-2">
              <Label className="text-foreground">Multiplicateur: {multiplier}x</Label>
              <Slider
                value={[multiplier]}
                onValueChange={(value) => setMultiplier(value[0])}
                min={0.1}
                max={5}
                step={0.1}
                className="w-full"
              />
              <p className="text-xs text-soft-text">
                Si le trader ouvre 1 lot, vous ouvrirez {multiplier} lot(s)
              </p>
            </div>
          )}
        </section>

        {/* Protection Settings */}
        <section className="card-portfolio space-y-4">
          <h3 className="text-foreground">Protection & Limites</h3>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-foreground">Stop Copy à {stopLoss[0]}%</Label>
                <span className="text-sm text-destructive font-medium">-${calculateRisk()}</span>
              </div>
              <Slider
                value={stopLoss}
                onValueChange={setStopLoss}
                min={5}
                max={50}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-soft-text mt-2">
                La copie s'arrêtera automatiquement si votre perte atteint ce pourcentage
              </p>
            </div>

            <div className="h-px bg-border" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label className="text-foreground">Take Profit Global à {takeProfit[0]}%</Label>
                <span className="text-sm text-success font-medium">+${calculateProfit()}</span>
              </div>
              <Slider
                value={takeProfit}
                onValueChange={setTakeProfit}
                min={10}
                max={100}
                step={5}
                className="w-full"
              />
              <p className="text-xs text-soft-text mt-2">
                La copie s'arrêtera automatiquement si votre gain atteint ce pourcentage
              </p>
            </div>

            <div className="h-px bg-border" />

            <InputField
              label="Capital Minimum"
              type="number"
              placeholder="1000"
              value={minCapital}
              onChange={(e) => setMinCapital(e.target.value)}
            />
            <p className="text-xs text-soft-text -mt-2">
              Montant minimum requis sur votre compte pour maintenir la copie active
            </p>
          </div>
        </section>

        {/* Simulation */}
        <section className="card-portfolio space-y-4">
          <h3 className="text-foreground">Simulation</h3>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-soft-text">Mode de copie</span>
              <span className="font-medium tnum">
                {copyMode === "multiplier" ? `Multiplicateur ${multiplier}x` : 
                 copyMode === "fixed" ? "Lot Fixe" : "% du Capital"}
              </span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-soft-text">Stop Loss</span>
              <span className="font-medium text-destructive tnum">{stopLoss[0]}% (-${calculateRisk()})</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <span className="text-soft-text">Take Profit</span>
              <span className="font-medium text-success tnum">{takeProfit[0]}% (+${calculateProfit()})</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-soft-text">Capital Min.</span>
              <span className="font-medium tnum">${parseInt(minCapital).toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-primary/10 rounded-button border border-primary/20">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">Risque estimé par trade:</span> Maximum {(stopLoss[0] / 10).toFixed(1)}% de votre capital selon votre configuration.
            </p>
          </div>
        </section>
      </main>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-6 left-6 right-6 z-20">
        <Button size="lg" className="w-full shadow-hover" onClick={() => navigate("/dashboard")}>
          Activer la Copie
        </Button>
      </div>
    </div>
  );
};

export default CopyConfig;
