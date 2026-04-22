import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent">
            <Wheat className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-serif text-lg font-bold text-foreground">Pão da Casa</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Pão da Casa • Feito com ❤️ e farinha</p>
      </div>
    </footer>
  );
};

export default Footer;
