import { Button } from "@/components/ui/button";
import sourdough from "@/assets/bread-sourdough.jpg";
import cinnamon from "@/assets/bread-cinnamon.jpg";
import cheese from "@/assets/bread-cheese.jpg";
import grain from "@/assets/bread-grain.jpg";
import { buildWhatsAppLink } from "./WhatsAppFloat";

const products = [
  { name: "Pão de Fermentação Natural", desc: "Massa madre, casca crocante e miolo macio. 800g.", price: "R$ 28,00", img: sourdough },
  { name: "Pão Doce com Canela e Uvas", desc: "Receita da vovó, perfeito para o café da tarde.", price: "R$ 32,00", img: cinnamon },
  { name: "Pão de Queijo Artesanal", desc: "Queijo minas curado, polvilho azedo. Dúzia.", price: "R$ 22,00", img: cheese },
  { name: "Pão Multigrãos", desc: "Aveia, linhaça e girassol. Nutritivo e saboroso.", price: "R$ 26,00", img: grain },
];

const Products = () => {
  return (
    <section id="produtos" className="bg-gradient-warm py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nosso cardápio</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">Pães feitos com carinho</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cada pão é único, assado em pequenos lotes para garantir qualidade e frescor.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl bg-card shadow-card-soft transition-smooth hover:-translate-y-2 hover:shadow-warm">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground">{p.name}</h3>
                <p className="mt-2 min-h-[3rem] text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-primary">{p.price}</span>
                  <Button asChild size="sm" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={buildWhatsAppLink(`Olá! Gostaria de pedir: ${p.name}`)} target="_blank" rel="noopener noreferrer">
                      Pedir
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
