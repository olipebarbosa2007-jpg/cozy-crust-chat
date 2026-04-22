import { Wheat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "./WhatsAppFloat";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent">
            <Wheat className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">Pão da Casa</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#produtos" className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary">Produtos</a>
          <a href="#sobre" className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary">Sobre</a>
          <a href="#contato" className="text-sm font-medium text-foreground/80 transition-smooth hover:text-primary">Contato</a>
        </nav>
        <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href={buildWhatsAppLink("Olá! Gostaria de fazer um pedido")} target="_blank" rel="noopener noreferrer">
            Pedir agora
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
