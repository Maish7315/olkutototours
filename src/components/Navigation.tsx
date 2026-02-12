import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logo from "@/assets/roy (2).png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => localStorage.getItem('selected-language') || 'en');
  const { theme, setTheme } = useTheme();

  const translations = {
    en: {
      destinations: 'Destinations',
      experiences: 'Experiences',
      about: 'About Us',
      reviews: 'Reviews',
      whatsapp: 'WhatsApp',
      helloMessage: "Hello! I'd like to inquire about Kenya safari tours. Can you help me plan my trip?"
    },
    fr: {
      destinations: 'Destinations',
      experiences: 'Expériences',
      about: 'À propos',
      reviews: 'Avis',
      whatsapp: 'WhatsApp',
      helloMessage: "Bonjour! J'aimerais m'informer sur les safaris au Kenya. Pouvez-vous m'aider à planifier mon voyage?"
    },
    es: {
      destinations: 'Destinos',
      experiences: 'Experiencias',
      about: 'Sobre Nosotros',
      reviews: 'Reseñas',
      whatsapp: 'WhatsApp',
      helloMessage: "¡Hola! Me gustaría informarme sobre safaris en Kenia. ¿Puedes ayudarme a planificar mi viaje?"
    },
    de: {
      destinations: 'Ziele',
      experiences: 'Erlebnisse',
      about: 'Über uns',
      reviews: 'Bewertungen',
      whatsapp: 'WhatsApp',
      helloMessage: "Hallo! Ich möchte mich über Kenia-Safaris informieren. Können Sie mir helfen, meine Reise zu planen?"
    },
    zh: {
      destinations: '目的地',
      experiences: '体验',
      about: '关于我们',
      reviews: '评论',
      whatsapp: 'WhatsApp',
      helloMessage: "你好！我想要了解肯尼亚的野生动物园旅行。你能帮我规划我的旅行吗？"
    },
    ja: {
      destinations: '目的地',
      experiences: '体験',
      about: '私たちについて',
      reviews: 'レビュー',
      whatsapp: 'WhatsApp',
      helloMessage: "こんにちは！ケニアのサファリツアーについて問い合わせたいです。旅行の計画をお手伝いいただけますか？"
    },
    ar: {
      destinations: 'الوجهات',
      experiences: 'التجارب',
      about: 'معلومات عنا',
      reviews: 'التقييمات',
      whatsapp: 'واتساب',
      helloMessage: "مرحبا! أود الاستفسار عن رحلات السفاري في كينيا. هل يمكنك مساعدتي في تخطيط رحلتي؟"
    },
    ru: {
      destinations: 'Направления',
      experiences: 'Опыт',
      about: 'О нас',
      reviews: 'Отзывы',
      whatsapp: 'WhatsApp',
      helloMessage: "Здравствуйте! Я хотел бы узнать о сафари-турах в Кению. Можете ли вы помочь мне спланировать поездку?"
    }
  };

  const t = translations[selectedLanguage as keyof typeof translations] || translations.en;

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 't' || event.key === 'T') {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [theme, setTheme]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  ];

  const openWhatsApp = () => {
    const message = encodeURIComponent(t.helloMessage);
    window.open(`https://wa.me/+254118805166?text=${message}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <button
            onClick={() => window.location.href = '/'}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity flex-shrink-0"
          >
            <img
              src={logo}
              alt="Olkutoto Tours & Travel Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            <span className="text-sm sm:text-lg sm:text-xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
              Olkutoto<br className="sm:hidden" />Tours
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('destinations')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t.destinations}
            </button>
            <button
              onClick={() => scrollToSection('experiences')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t.experiences}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {t.reviews}
            </button>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">

            {/* Language Selector */}
            <Select value={selectedLanguage} onValueChange={(value) => {
              setSelectedLanguage(value);
              localStorage.setItem('selected-language', value);
            }}>
              <SelectTrigger className="w-24 sm:w-32 border-primary/20 bg-background/50">
                <Globe className="w-4 h-4 mr-1 sm:mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
                const currentIndex = themes.indexOf(theme);
                const nextIndex = (currentIndex + 1) % themes.length;
                setTheme(themes[nextIndex]);
              }}
              className="w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Sun className={`h-4 w-4 transition-all ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
              <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "rotate-0 scale-100" : theme === "system" ? "rotate-45 scale-75" : "-rotate-90 scale-0"}`} />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* WhatsApp Button */}
            <Button
              onClick={openWhatsApp}
              className="hidden sm:flex bg-accent hover:bg-accent-glow text-accent-foreground glow-adventure transition-bounce hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.whatsapp}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-fade-in-delayed">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('destinations')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Destinations
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Experiences
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-foreground hover:text-primary transition-smooth py-2"
              >
                Reviews
              </button>

              {/* Mobile Controls */}
              <div className="flex items-center justify-between py-2 border-t border-white/10 mt-4 pt-4">
                <Select value={selectedLanguage} onValueChange={(value) => {
                  setSelectedLanguage(value);
                  localStorage.setItem('selected-language', value);
                }}>
                  <SelectTrigger className="w-24 border-primary/20 bg-background/50">
                    <Globe className="w-4 h-4 mr-1" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.code} value={lang.code}>
                        <span className="flex items-center gap-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
                    const currentIndex = themes.indexOf(theme);
                    const nextIndex = (currentIndex + 1) % themes.length;
                    setTheme(themes[nextIndex]);
                  }}
                  className="w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Sun className={`h-4 w-4 transition-all ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`} />
                  <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "rotate-0 scale-100" : theme === "system" ? "rotate-45 scale-75" : "-rotate-90 scale-0"}`} />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>

              <Button
                onClick={openWhatsApp}
                className="w-full bg-accent hover:bg-accent-glow text-accent-foreground mt-4"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Book via WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
