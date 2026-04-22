import { Button } from "@/components/ui/button";
import { ArrowRight, Wheat } from "lucide-react";
import heroBread from "@/assets/hero-bread.jpg";
import { buildWhatsAppLink } from "./WhatsAppFloat";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBread}
          alt="Pães caseiros recém saídos do forno"
          className="h-full w-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="container relative z-10 flex min-h-[88vh] flex-col items-start justify-center py-24">
        <div className="inline-flex items-center gap-2 rounded-full bg-cream/90 px-4 py-1.5 text-sm font-medium text-crust shadow-card-soft">
          <Wheat className="h-4 w-4" />
          Feitos à mão, todos os dias
        </div>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl font-bold leading-tight text-cream md:text-7xl">
          O sabor do <span className="text-wheat">pão caseiro</span> direto do forno até você
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/90 md:text-xl">
          Receitas tradicionais, ingredientes selecionados e fermentação lenta.
          Encomende pelo WhatsApp e receba quentinho.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground shadow-warm hover:opacity-90 transition-smooth">
            <a href={buildWhatsAppLink("Olá! Gostaria de fazer um pedido de pão caseiro")} target="_blank" rel="noopener noreferrer">
              Fazer pedido
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-cream/40 bg-cream/10 text-cream backdrop-blur-sm hover:bg-cream/20 hover:text-cream">
            <a href="#produtos">Ver cardápio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
