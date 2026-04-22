import { Clock, Heart, Wheat } from "lucide-react";

const features = [
  { icon: Wheat, title: "Ingredientes selecionados", desc: "Farinhas especiais e fermento natural cultivado em casa." },
  { icon: Clock, title: "Fermentação lenta", desc: "Mais de 24h de descanso para um sabor profundo e digestão leve." },
  { icon: Heart, title: "Feito com amor", desc: "Receita de família passada por três gerações de padeiros." },
];

const About = () => {
  return (
    <section id="sobre" className="py-24">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Nossa história</span>
          <h2 className="mt-3 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Da nossa cozinha para a sua mesa
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Há mais de 15 anos, acordamos antes do sol para preparar os pães mais frescos da cidade.
            Cada fornada é um pedaço da nossa história — feita à mão, com paciência e ingredientes que respeitam você.
          </p>
          <div className="mt-10 space-y-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-3xl shadow-warm">
            <img
              src="/src/assets/hero-bread.jpg"
              alt="Padeiro preparando pães"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-6 shadow-card-soft">
            <div className="font-serif text-4xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">anos de tradição</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
