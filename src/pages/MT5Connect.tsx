import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { ArrowLeft, Server, User, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MT5Connect = () => {
  const navigate = useNavigate();
  const [platform, setPlatform] = useState<"MT4" | "MT5">("MT5");
  const [serverName, setServerName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleConnect = () => {
    // Handle connection logic
    navigate("/mt5/status");
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
        <h1 className="text-2xl font-bold">Connexion MT4/MT5</h1>
        <p className="text-soft-text text-sm mt-1">
          Connectez votre compte MetaTrader pour synchroniser vos trades
        </p>
      </header>

      <main className="p-6 space-y-6 animate-fade-in">
        {/* Platform Selector */}
        <section className="space-y-3">
          <label className="text-sm font-medium text-foreground">Plateforme</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPlatform("MT4")}
              className={`p-4 rounded-button border-2 transition-all ${
                platform === "MT4"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-soft-text hover:border-border/60"
              }`}
            >
              <p className="font-semibold">MT4</p>
            </button>
            <button
              onClick={() => setPlatform("MT5")}
              className={`p-4 rounded-button border-2 transition-all ${
                platform === "MT5"
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-soft-text hover:border-border/60"
              }`}
            >
              <p className="font-semibold">MT5</p>
            </button>
          </div>
        </section>

        {/* Connection Form */}
        <section className="space-y-4">
          <InputField
            label="Nom du serveur"
            placeholder="ex: Broker-Server"
            value={serverName}
            onChange={(e) => setServerName(e.target.value)}
            icon={<Server className="h-5 w-5" />}
          />

          <InputField
            label="Login"
            placeholder="Votre identifiant MT4/MT5"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            icon={<User className="h-5 w-5" />}
          />

          <InputField
            label="Mot de passe investisseur"
            type="password"
            placeholder="Mot de passe en lecture seule"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="h-5 w-5" />}
          />
        </section>

        {/* Info Card */}
        <div className="card-portfolio bg-primary/5 border-primary/20">
          <h3 className="font-semibold mb-2 text-primary">Information importante</h3>
          <p className="text-sm text-soft-text leading-relaxed">
            Utilisez uniquement votre <strong>mot de passe investisseur</strong> (lecture seule). 
            Nous ne pourrons jamais passer d'ordres sur votre compte. Vos fonds restent 100% sécurisés.
          </p>
        </div>

        {/* Connect Button */}
        <Button
          size="lg"
          className="w-full"
          onClick={handleConnect}
          disabled={!serverName || !login || !password}
        >
          Connecter
        </Button>
      </main>
    </div>
  );
};

export default MT5Connect;
