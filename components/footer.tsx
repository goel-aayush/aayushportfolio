import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="#home" className="text-xl font-bold">
              <span className="text-primary">Aayush </span>
              Goel
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Crafting Scalable and Interactive Web Solutions
            </p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/goel-aayush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aayush-goel-4284611b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
