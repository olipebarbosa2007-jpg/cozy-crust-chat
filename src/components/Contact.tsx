import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";
import { buildWhatsAppLink } from "./WhatsAppFloat";

const Contact = () => {
  return (
    <section id="contato" className="bg-crust-deep py-24 text-cream">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-wheat">Faça seu pedido</span>
          <h2 className="mt-3 font-serif text-4xl font-bold md:text-5xl">
            Encomende pelo WhatsApp
          </h2>
          <p className="mt-6 text-lg text-cream/80">
            Atendemos com carinho e entregamos quentinho. Mande uma mensagem e combine seu pedido.
          </p>
          <Button asChild size="lg" className="mt-8 bg-whatsapp text-white shadow-float hover:bg-whatsapp-hover transition-smooth">
            <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Conversar no WhatsApp
            </a>
          </Button>
        </div>
        <div className="space-y-6">
          <div className="flex gap-4 rounded-2xl bg-cream/5 p-6 backdrop-blur">
            <Phone className="h-6 w-6 shrink-0 text-wheat" />
            <div>
              <h3 className="font-serif text-lg font-bold">Telefone / WhatsApp</h3>
              <p className="mt-1 text-cream/80">(17) 99618-8243</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl bg-cream/5 p-6 backdrop-blur">
            <Clock className="h-6 w-6 shrink-0 text-wheat" />
            <div>
              <h3 className="font-serif text-lg font-bold">Horário</h3>
              <p className="mt-1 text-cream/80">Terça a domingo • 7h às 19h</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl bg-cream/5 p-6 backdrop-blur">
            <MapPin className="h-6 w-6 shrink-0 text-wheat" />
            <div>
              <h3 className="font-serif text-lg font-bold">Entrega</h3>
              <p className="mt-1 text-cream/80">Entregamos em toda a região. Consulte taxa pelo WhatsApp.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
