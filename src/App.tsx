import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { 
  Zap, 
  Activity, 
  Award, 
  TrendingUp, 
  Check, 
  Flame, 
  Star, 
  Clock, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  Dumbbell, 
  Apple, 
  MessageCircle, 
  Users, 
  Target, 
  Smartphone, 
  ChevronLeft, 
  ChevronRight,
  Instagram,
  Heart,
  ChevronDown,
  Info,
  Sparkles,
  Timer,
  UserCheck,
  HeartPulse,
  Moon,
  Key,
  Camera,
  ClipboardList,
  CalendarDays,
  MapPin,
  Eye,
  Scale,
  Calendar,
  Ruler,
  Video,
  Phone,
  MoreVertical,
  Paperclip,
  Mic,
  Quote,
  Play,
  Pause
} from "lucide-react";

export default function App() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdw-7EirTH9BSH8Jwa6fxkIkry2V3_4s2VVK2gtPL9_QVevIQ/viewform";

  const beforeAfterResults = [
    {
      id: 1,
      name: "Landra",
      status: "online",
      chat: [
        { sender: "coach", text: "Então pronto, amanhã começamos!", time: "21:00" },
        { sender: "student", text: "Pro finalizar tô amando cada treino 💪 Braga tu é nota 11 não é nem 10... que Deus abençoe cada vez mais você, é um ótimo profissional, show parabéns amigo, você me ensinou a voltar amar musculação, pq eu só vivia pro Cross, por isso lasquei meus joelhos, mas já deu tudo certo ✅", time: "21:01" },
        { sender: "student", isImage: true, beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=450&h=550", afterImg: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=450&h=550", time: "21:02" },
        { sender: "student", text: "Gratidão 🙏", time: "21:03" },
        { sender: "coach", text: "Conte sempre comigo! Tamo junto nessa jornada.", time: "21:04" }
      ]
    },
    {
      id: 2,
      name: "Priscila Melo",
      status: "visto por último hoje",
      chat: [
        { sender: "student", text: "Oi Vitor! Queria te passar meu feedback do primeiro mês. Mesmo com a rotina cansativa o Braga conciliou meus treinos e tivemos um resultado incrível! Gratidão!", time: "22:00" },
        { sender: "student", isImage: true, beforeImg: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=450&h=550", afterImg: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=450&h=550", time: "22:01" },
        { sender: "student", text: "Meu Deus. Nem acredito q consegui sair desse corpo pós parto kkkkk", time: "22:02" },
        { sender: "student", text: "Pós um ano e meio de parto", time: "22:03" },
        { sender: "student", text: "Kkkkkkk", time: "22:03" },
        { sender: "coach", text: "Mérito seu 👏 Orgulho demais! Seu esforço valeu cada minuto.", time: "22:04" }
      ]
    },
    {
      id: 3,
      name: "Isabel Cavalcante",
      status: "online",
      chat: [
        { sender: "student", text: "Tão satisfatório ver essas gordurinhas irem embora 😭😭😭 obrigada por me colocar na direção certa, você é incrível", time: "13:12" },
        { sender: "student", isImage: true, beforeImg: "https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/35bbaaf5a56f11ce7d56689ff8f01ffc.jpg", afterImg: "https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/e5582caf354755cbf3c37c603155306d.jpg", time: "13:13" },
        { sender: "student", text: "Olha essa barriga cheia de celulite dando adeus aos poucos 😭🙏", time: "13:13" },
        { sender: "student", text: "Eu tava sem coragem de tirar as fotos porque não achei que tinha evoluído o suficiente", time: "13:14" },
        { sender: "coach", text: "Incrível demais Isabel! O processo é exatamente esse. Parabéns pelo foco!", time: "13:15" }
      ]
    },
    {
      id: 4,
      name: "Valéria Albuquerque",
      status: "online",
      chat: [
        { sender: "student", text: "Eu tinha vergonha de ir treinar no início... O app me deu a segurança de saber exatamente o que fazer. Sem parecer perdida na academia.", time: "10:20" },
        { sender: "student", isImage: true, beforeImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=450&h=550", afterImg: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=450&h=550", time: "10:21" },
        { sender: "coach", text: "Que depoimento maravilhoso! Fazer musculação com direcionamento muda tudo.", time: "10:22" },
        { sender: "student", text: "Com certeza, agora ninguém me segura! 💪", time: "10:23" }
      ]
    },
    {
      id: 5,
      name: "Verônica",
      status: "visto por último hoje",
      chat: [
        { sender: "student", text: "Já tinha tentado de tudo antes, mas pela primeira vez consegui manter o resultado por mais de 6 meses. O treino se adapta ao meu dia a dia.", time: "18:45" },
        { sender: "student", isImage: true, beforeImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=450&h=550", afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=450&h=550", time: "18:46" },
        { sender: "coach", text: "Muito feliz por ver sua constância! Você conquistou um novo estilo de vida.", time: "18:48" }
      ]
    },
    {
      id: 6,
      name: "Camila Santos",
      status: "online",
      chat: [
        { sender: "student", text: "Vitor, vim te agradecer! Consegui bater minha meta de definição para a viagem. O protocolo de cargas fez toda a diferença, nunca tinha treinado assim antes.", time: "09:15" },
        { sender: "student", isImage: true, beforeImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=450&h=550", afterImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=450&h=550", time: "09:16" },
        { sender: "coach", text: "Incrível, Camila! Fico extremamente orgulhoso da sua dedicação. Aproveite muito a viagem de cabeça erguida e com o físico impecável!", time: "09:18" },
        { sender: "student", text: "Obrigada de verdade! O melhor investimento que já fiz.", time: "09:20" }
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Interactive Application Form States
  const [appFormStep, setAppFormStep] = useState(1);
  const [appFormData, setAppFormData] = useState({
    tipoProcura: "",
    nome: "",
    idade: "",
    estado: "",
    cidade: "",
    customEstado: "",
    customCidade: "",
    regiaoIncomoda: "",
    resultado90Dias: "",
    historicoPersonal: "",
    nutricionista: "",
    compromisso3Meses: "",
    whatsapp: "",
    focoPrincipal: ""
  });
  const [appFormSubmitted, setAppFormSubmitted] = useState(false);

  // Dynamic Brazilian States & Cities States (IBGE API Integration)
  const [estadosBr, setEstadosBr] = useState<{ sigla: string; nome: string }[]>([]);
  const [cidadesBr, setCidadesBr] = useState<string[]>([]);
  const [loadingEstados, setLoadingEstados] = useState(false);
  const [loadingCidades, setLoadingCidades] = useState(false);

  // Fetch all Brazilian states on mount
  useEffect(() => {
    const fetchEstados = async () => {
      setLoadingEstados(true);
      try {
        const res = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
        if (!res.ok) throw new Error("Falha ao buscar estados");
        const data = await res.json();
        const formatted = data.map((est: any) => ({
          sigla: est.sigla,
          nome: est.nome
        }));
        setEstadosBr(formatted);
      } catch (err) {
        console.error("Erro ao buscar estados:", err);
        // Robust fallback states in case of network issue
        setEstadosBr([
          { sigla: "CE", nome: "Ceará" },
          { sigla: "SP", nome: "São Paulo" },
          { sigla: "RJ", nome: "Rio de Janeiro" },
          { sigla: "MG", nome: "Minas Gerais" },
          { sigla: "BA", nome: "Bahia" },
          { sigla: "PR", nome: "Paraná" },
          { sigla: "RS", nome: "Rio Grande do Sul" },
          { sigla: "PE", nome: "Pernambuco" },
          { sigla: "SC", nome: "Santa Catarina" },
          { sigla: "GO", nome: "Goiás" }
        ]);
      } finally {
        setLoadingEstados(false);
      }
    };
    fetchEstados();
  }, []);

  // Fetch cities whenever the state changes
  useEffect(() => {
    if (!appFormData.estado || appFormData.estado === "Outro") {
      setCidadesBr([]);
      return;
    }
    const fetchCidades = async () => {
      setLoadingCidades(true);
      try {
        const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${appFormData.estado}/municipios`);
        if (!res.ok) throw new Error("Falha ao buscar cidades");
        const data = await res.json();
        const names = data.map((cid: any) => cid.nome).sort((a: string, b: string) => a.localeCompare(b));
        setCidadesBr(names);
      } catch (err) {
        console.error("Erro ao buscar cidades:", err);
        // Fallback basic cities for Ceará in case of API offline
        if (appFormData.estado === "CE") {
          setCidadesBr(["Itarema", "Fortaleza", "Acaraú", "Sobral", "Itapipoca", "Camocim", "Cruz", "Marco"]);
        } else {
          setCidadesBr([]);
        }
      } finally {
        setLoadingCidades(false);
      }
    };
    fetchCidades();
  }, [appFormData.estado]);

  // Helper functions for the Interactive Form
  const isStepValid = () => {
    if (appFormStep === 1) return !!appFormData.tipoProcura;
    if (appFormStep === 2) {
      const isNomeValid = appFormData.nome.trim().length >= 2;
      const isIdadeValid = appFormData.idade.trim().length > 0;
      const isEstadoValid = appFormData.estado === "Outro" 
        ? !!appFormData.customEstado?.trim() 
        : !!appFormData.estado;
      const isCidadeValid = appFormData.cidade === "Outra" 
        ? !!appFormData.customCidade?.trim() 
        : !!appFormData.cidade;
      
      return isNomeValid && isIdadeValid && isEstadoValid && isCidadeValid;
    }
    if (appFormStep === 3) return appFormData.regiaoIncomoda.trim().length >= 2 && appFormData.resultado90Dias.trim().length >= 2;
    if (appFormStep === 4) return !!appFormData.historicoPersonal && !!appFormData.nutricionista;
    if (appFormStep === 5) return !!appFormData.compromisso3Meses && appFormData.whatsapp.trim().length >= 8;
    if (appFormStep === 6) return !!appFormData.focoPrincipal;
    return false;
  };

  const getFormattedLocation = () => {
    const sigla = appFormData.estado;
    if (sigla === "Outro") return `${appFormData.customCidade} / ${appFormData.customEstado}`;
    const found = estadosBr.find(e => e.sigla === sigla);
    const finalEstado = found ? `${found.nome} (${found.sigla})` : sigla;
    const finalCidade = appFormData.cidade === "Outra" ? appFormData.customCidade : appFormData.cidade;
    return `${finalCidade} / ${finalEstado}`;
  };

  const handleNextStep = () => {
    if (isStepValid()) {
      setAppFormStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    setAppFormStep(prev => Math.max(1, prev - 1));
  };

  const handleFormSubmit = () => {
    if (!isStepValid()) return;
    setAppFormSubmitted(true);

    const text = `📋 *NOVA APLICAÇÃO - TEAM VITOR COUTO*

👤 *Nome:* ${appFormData.nome} (${appFormData.idade} anos)
📍 *Localização:* ${getFormattedLocation()}
📱 *WhatsApp:* ${appFormData.whatsapp}

🎯 *Escolha do Aluno:*
• Procura esse acompanhamento? *${appFormData.tipoProcura}*
• Formato/Foco Escolhido: *${appFormData.focoPrincipal}*

💪 *Objetivos e Corpo:*
• Região que mais incomoda: *${appFormData.regiaoIncomoda}*
• Resultado desejado em 90 dias: *${appFormData.resultado90Dias}*

👟 *Histórico e Rotina:*
• Já teve Personal antes? *${appFormData.historicoPersonal}*
• Tem Acompanhamento de Nutricionista? *${appFormData.nutricionista}*

🔥 *Compromisso de Evolução:*
• Disposto(a) a investir 3 meses? *${appFormData.compromisso3Meses}*`;

    const waUrl = `https://wa.me/5588999999999?text=${encodeURIComponent(text)}`;
    
    // Redirect after a brief moment
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  // Active step scroll observer (scroll spy & continuous smooth progress)
  useEffect(() => {
    const handleScroll = () => {
      const element = timelineRef.current;
      if (!element) return;

      const steps = element.querySelectorAll("[data-step]");
      if (steps.length === 0) return;

      const viewportHeight = window.innerHeight;
      // Define a custom trigger point: 45% of screen height is the center focal line
      const triggerPoint = viewportHeight * 0.45;

      const firstStep = steps[0];
      const lastStep = steps[steps.length - 1];
      
      const firstRect = firstStep.getBoundingClientRect();
      const lastRect = lastStep.getBoundingClientRect();

      // Start calculating progress from Step 1 center to Step 5 center
      const startY = firstRect.top + firstRect.height / 2;
      const endY = lastRect.top + lastRect.height / 2;
      const totalSpan = endY - startY;

      const currentPos = triggerPoint - startY;
      
      let progress = 0;
      if (totalSpan > 0) {
        progress = (currentPos / totalSpan) * 100;
      }
      progress = Math.max(0, Math.min(100, progress));
      setScrollProgress(progress);

      // Dynamically calculate active step based on triggerPoint position
      let currentActive = 1;
      steps.forEach((stepEl) => {
        const stepNum = parseInt(stepEl.getAttribute("data-step") || "1", 10);
        const stepRect = stepEl.getBoundingClientRect();
        const stepCenter = stepRect.top + stepRect.height / 2;

        if (triggerPoint >= stepCenter - 15) {
          currentActive = stepNum;
        }
      });
      setActiveStep(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Responsive Carousel Width
  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Safe boundary clamp for carousel
  useEffect(() => {
    const maxIndex = beforeAfterResults.length - 1;
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCount, beforeAfterResults.length, currentIndex]);

  // Autoplay Carousel every 4 seconds (resets on manual interaction)
  useEffect(() => {
    const maxIndex = beforeAfterResults.length - 1;
    if (maxIndex <= 0 || isAutoplayPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [visibleCount, beforeAfterResults.length, isAutoplayPaused, currentIndex]);

  const faqs = [
    {
      question: "Como funciona a entrega dos treinos?",
      answer: "Após confirmar seu plano e responder a anamnese postural e comportamental, seu treino personalizado é estruturado de forma cirúrgica e liberado em nosso aplicativo exclusivo (MFIT) em até 3 a 5 dias úteis. Cada exercício inclui vídeos gravados por mim demonstrando a execução ideal."
    },
    {
      question: "Não sei fazer os exercícios. Como vou aprender?",
      answer: "Você não estará só. No aplicativo MFIT, todo exercício tem um vídeo demonstrativo em alta definição. Além disso, você tem suporte direto comigo via WhatsApp. Você pode gravar vídeos da sua execução durante o treino e me enviar para que eu faça correções técnicas precisas."
    },
    {
      question: "Qual é a duração e renovação do treino?",
      answer: "Sua periodização de treino é completamente renovada a cada 30 dias. Antes de montar o próximo ciclo, fazemos um feedback detalhado da sua evolução, pesos, dores e progresso para ajustar os estímulos e garantir resultados contínuos."
    },
    {
      question: "Como funciona o suporte direto?",
      answer: "O suporte é direto no meu WhatsApp pessoal. Não trabalhamos com assistentes virtuais ou robôs. Você envia suas dúvidas sobre exercícios, cargas, ajustes de rotina caso viaje ou mude de academia, e eu respondo com feedbacks técnicos."
    },
    {
      question: "Moro em Itarema. Posso fazer a avaliação física presencial?",
      answer: "Com certeza! Se você reside ou está de passagem por Itarema - Ceará, pode selecionar a modalidade com avaliação física presencial em meu consultório. Utilizaremos adipometria e perimetria de alta definição para coletar seus dados anatômicos exatos."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f14] text-slate-100 selection:bg-[#06A7D9] selection:text-white font-sans antialiased scroll-smooth">
      
      {/* Premium Notification Strip */}
      <div className="bg-[#06A7D9] text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wider uppercase flex items-center justify-center space-x-2 border-b border-white/10">
        <span className="text-[11px] sm:text-xs font-black">⚠️ VAGAS LIMITADAS PARA ACOMPANHAMENTO INDIVIDUAL COM VITOR COUTO</span>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#06080c] to-[#0d0f14]">
        {/* Subtle cyan glow in background */}
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[#06A7D9]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            
            {/* Left Column - Conversion Details */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center space-x-2 bg-slate-900/80 border border-white/10 px-3 py-1.5 rounded-lg text-[#06A7D9] text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06A7D9] animate-pulse" />
                <span>CONSULTORIA ONLINE & PRESENCIAL</span>
              </div>
              
              {/* Corrected header layout with responsive explicit spacing */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase italic leading-[1.1] text-center lg:text-left">
                Seu corpo é único. 
                <span className="block mt-2 font-black">
                  Seu{" "}<span className="text-[#06A7D9] not-italic inline-block drop-shadow-[0_0_12px_rgba(6,167,217,0.3)]">treino</span>{" "}também deveria ser.
                </span>
              </h1>
              
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl">
                Eu não envio apenas treinos, seja online ou presencial. Meu trabalho começa com uma avaliação técnica detalhada para identificar exatamente o que você precisa.
              </p>

              {/* Special alert item from reference layout */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-[#06A7D9]/20 flex items-start space-x-3 text-left max-w-xl">
                <Info className="h-5 w-5 text-[#06A7D9] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Para isso, temos uma <strong className="text-[#06A7D9] uppercase font-bold">CONDIÇÃO ESPECIAL</strong> para você na nossa consultoria. Clique abaixo e fale conosco agora mesmo.
                </p>
              </div>

              {/* Hero CTA buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <motion.a
                  href="#formulario"
                  className="inline-flex items-center justify-center rounded-xl bg-[#06A7D9] px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold tracking-widest text-slate-950 uppercase transition-all duration-300 hover:bg-white shadow-lg shadow-[#06A7D9]/20 cursor-pointer text-center"
                  animate={{
                    x: [0, -3, 3, -3, 3, -2, 2, 0, 0],
                    scale: [1, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 1],
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  QUERO A CONDIÇÃO ESPECIAL
                  <ArrowRight className="h-4 w-4 ml-2.5 shrink-0" />
                </motion.a>
                <a
                  href="#resultados"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/50 px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold tracking-wider text-slate-300 hover:text-white transition hover:bg-slate-800 cursor-pointer text-center"
                >
                  VER ANTES E DEPOIS
                </a>
              </div>
            </div>

            {/* Right Column - Premium Portrait with Authority Metrics */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex flex-col items-center w-full">
              <div className="relative w-full max-w-md h-[380px] sm:h-[500px] md:h-[580px] lg:h-[480px] xl:h-[550px] flex items-end justify-center">
                
                {/* Column background block behind trainer portrait */}
                <div className="absolute inset-x-0 bottom-0 top-[12%] w-full bg-gradient-to-b from-slate-950 to-[#0e1118] rounded-3xl z-0 overflow-hidden flex flex-col items-center pt-8 border border-white/5" />

                {/* CREF badge - on desktop floats top right, on mobile sits elegantly below the metrics card */}
                <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:translate-x-0 sm:top-[16%] sm:right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[9px] font-bold text-slate-300 tracking-wider z-20 shadow-lg">
                  CREF 021359 - G/CE
                </div>

                {/* Main Trainer Portrait Image */}
                <div className="absolute inset-x-0 bottom-0 h-[104%] flex items-end justify-center z-10 pointer-events-none">
                  <img 
                    src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/3337364020d8a311422f607e9b417d42.png" 
                    alt="Treinador Vitor Couto" 
                    referrerPolicy="no-referrer"
                    className="h-full w-auto object-contain object-bottom pointer-events-auto filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.95)] hover:scale-[1.01] transition-all duration-700 ease-in-out"
                  />
                </div>

                {/* Floating Metric Card */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-950/95 backdrop-blur-md p-4 rounded-xl border border-white/10 z-20 shadow-2xl">
                  <div className="grid grid-cols-3 gap-2 w-full text-center">
                    <div>
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-[#06A7D9]">+150</div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Alunos</div>
                    </div>
                    <div className="border-l border-white/10 pl-2">
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-white">100%</div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Personalizado</div>
                    </div>
                    <div className="border-l border-white/10 pl-2">
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-[#06A7D9]">Itarema</div>
                      <div className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Ceará</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: O QUE VOCÊ VAI CONQUISTAR? */}
      <section className="py-12 sm:py-20 lg:py-24 bg-slate-950 border-t border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono bg-slate-900 border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
              SEU NOVO ESTILO DE VIDA
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              O que você vai conquistar?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Flame className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  QUEIMA DE GORDURA
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Emagrecimento definitivo sem efeito sanfona.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Flame className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Dumbbell className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  DEFINIÇÃO MUSCULAR
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Corpo firme, tonificado e estético.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Dumbbell className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  AUTOESTIMA ALTA
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Sinta-se poderosa e confiante no espelho.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Sparkles className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  ENERGIA TOTAL
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Mais disposição para o trabalho e rotina.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Zap className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Timer className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  TREINOS PRÁTICOS
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Rápidos e adaptáveis ao seu dia a dia.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Timer className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <UserCheck className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  ACOMPANHAMENTO
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Você não estará sozinha nessa jornada.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <UserCheck className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 7 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <HeartPulse className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  ZERO DORES
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Fortalecimento que elimina desconfortos.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <HeartPulse className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>

            {/* Card 8 */}
            <div className="relative bg-gradient-to-br from-[#13141c] to-[#0e0f15] p-6 sm:p-7 rounded-xl border border-white/5 border-l-4 border-l-[#06A7D9] hover:border-[#06A7D9]/30 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between min-h-[170px]">
              <div className="relative z-10 text-left">
                <div className="text-[#06A7D9] mb-5">
                  <Moon className="h-7 w-7" />
                </div>
                <h3 className="text-base sm:text-lg font-black tracking-wider text-white uppercase italic leading-tight">
                  SONO REPARADOR
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-medium">
                  Durma melhor e acorde renovada.
                </p>
              </div>
              <div className="absolute right-[-15px] bottom-[-25px] text-slate-500/[0.04] group-hover:text-[#06A7D9]/[0.05] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out pointer-events-none">
                <Moon className="w-36 h-36 stroke-[0.75]" />
              </div>
            </div>
          </div>

          {/* Full-width elegant highlight banner below the cards */}
          <div className="mt-12 max-w-6xl mx-auto rounded-2xl bg-gradient-to-r from-[#06A7D9]/20 to-slate-900 border border-[#06A7D9]/20 p-6 sm:p-8 text-center sm:text-left">
            <h4 className="text-sm font-black tracking-wider text-[#06A7D9] uppercase italic mb-2">
              E O MELHOR: SEM TREINOS INTERMINÁVEIS, LONGOS OU EXTENSOS!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Sem precisar morar na academia. Os treinos são feitos sob medida para você, considerando sua rotina real e o que traz resultados definitivos.
            </p>
          </div>

        </div>
      </section>

      {/* Section 3: DEFINA SEU PONTO DE PARTIDA */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#0d0f14] relative">
        <div className="absolute top-1/3 right-1/4 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#06A7D9]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono bg-slate-900 border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
              O MÉTODO É ÚNICO
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              Defina seu ponto de partida
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              A excelência técnica de Vitor Couto está disponível em duas modalidades. Escolha como deseja realizar sua avaliação inicial para começarmos o seu projeto:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {/* Column 1 - Avaliação Online */}
            <div className="bg-[#12141c] rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#06A7D9]/30 transition-all duration-300">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-[#06A7D9]/10 text-[#06A7D9] text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-wider">
                    À DISTÂNCIA
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic flex items-center gap-2 mb-4">
                  <Smartphone className="h-5 w-5 text-[#06A7D9]" /> AVALIAÇÃO ONLINE
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Ideal para quem quer praticidade e liberdade geográfica. Você envia fotos e vídeos guiados, e eu realizo a análise biomecânica e postural à distância com precisão profissional.
                </p>
              </div>
              <a 
                href="#etapa-2"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 hover:bg-[#06A7D9] border border-[#06A7D9]/20 hover:text-slate-950 px-6 py-4 text-xs font-bold tracking-wider text-[#06A7D9] uppercase transition-all duration-300"
              >
                VER COMO FUNCIONA
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>

            {/* Column 2 - Avaliação Presencial */}
            <div className="bg-[#12141c] rounded-2xl border border-[#06A7D9]/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#06A7D9]/50 transition-all duration-300">
              <div>
                <div className="mb-4">
                  <span className="inline-block bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-wider">
                    PRESENCIAL
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic flex items-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-emerald-400" /> AVALIAÇÃO PRESENCIAL
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium">
                  Uma experiência clínica completa. Você agenda um horário no meu consultório em Itarema para realizarmos a avaliação física utilizando equipamentos de alta tecnologia e análise corporal ao vivo.
                </p>
              </div>
              <a 
                href="#postural-presencial"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 hover:from-white hover:to-white border border-white/10 hover:text-slate-950 px-6 py-4 text-xs font-bold tracking-wider text-slate-300 uppercase transition-all duration-300"
              >
                VER DETALHES PRESENCIAIS
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Section 4: COMO FUNCIONA */}
      <section id="como-funciona" className="py-12 sm:py-20 lg:py-24 bg-slate-950 border-t border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono bg-slate-900 border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
              O PASSO A PASSO
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              Como funciona
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Aqui tudo é simples, prático e pensado pra você. Olha só como funciona:
            </p>
          </div>

          {/* Timeline / Stepper Column Layout */}
          <div ref={timelineRef} className="max-w-3xl mx-auto relative space-y-12 sm:space-y-16">
            
            {/* Background progress track with nested active highlight line */}
            <div className="absolute left-[24px] sm:left-[32px] top-6 bottom-6 w-[2px] bg-slate-800 -translate-x-1/2">
              <div 
                className="w-full bg-[#06A7D9] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(6,167,217,0.6)] rounded-full" 
                style={{ 
                  height: `${scrollProgress}%`
                }} 
              />
            </div>

            {/* Step 1 */}
            <div 
              data-step="1" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 ${
                activeStep === 1 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 1 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 1 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 1 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <Key className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 1 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Fechando o plano
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 1 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Assim que confirmar sua inscrição, você recebe no e-mail seu login e senha para acessar o <strong className="text-white">MFITPERSONAL</strong>, meu App exclusivo de treinos. É por lá que você terá acesso ao plano, vídeos e acompanhamento inicial.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              id="etapa-2"
              data-step="2" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 scroll-mt-24 ${
                activeStep === 2 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 2 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 2 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 2 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <Camera className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 2 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Avaliação
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 2 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Peço algumas fotos (frente, costas e perfil) em um fundo neutro para analisar seu corpo e criar seu treino sob medida.
                </p>
                
                {/* Regional physical evaluation sub-card exactly like screenshot */}
                <div className={`mt-4 p-4 rounded-r-lg border-l-2 text-xs transition-all duration-300 max-w-lg ${
                  activeStep === 2 
                    ? "bg-[#06A7D9]/5 border-[#06A7D9] text-slate-200" 
                    : "bg-slate-900/10 border-white/5 text-slate-500"
                }`}>
                  <div className="flex items-center gap-1.5 mb-1 font-bold">
                    <MapPin className={`h-4 w-4 ${activeStep === 2 ? "text-[#06A7D9]" : "text-slate-500"}`} />
                    <span className={activeStep === 2 ? "text-[#06A7D9]" : "text-slate-400"}>Itarema - Ceará</span>
                  </div>
                  <p className={`leading-relaxed ${activeStep === 2 ? "text-slate-300" : "text-slate-500"}`}>
                    Se você for da região, podemos agendar uma avaliação física presencial no consultório.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              data-step="3" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 ${
                activeStep === 3 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 3 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 3 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 3 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <ClipboardList className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 3 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Anamnese
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 3 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Você responde um questionário rápido sobre rotina, objetivos e particularidades. Assim consigo montar um plano totalmente adaptado à sua vida.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div 
              data-step="4" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 ${
                activeStep === 4 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 4 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 4 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 4 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 4 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Entrega dos treinos
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 4 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Em até 3 a 5 dias úteis após a avaliação e confirmação do pagamento, seu treino personalizado fica pronto no App. Cada exercício vem com vídeo explicativo para você executar sem dúvidas.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div 
              data-step="5" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 ${
                activeStep === 5 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 5 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 5 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 5 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 5 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Suporte direto
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 5 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Precisa de ajustes no treino? É só me chamar no WhatsApp. Eu acompanho de perto e faço as adaptações necessárias conforme sua evolução.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div 
              data-step="6" 
              className={`relative flex gap-5 sm:gap-8 items-start text-left transition-all duration-500 py-2 ${
                activeStep === 6 
                  ? "opacity-100 scale-[1.01]" 
                  : activeStep > 6 
                    ? "opacity-85" 
                    : "opacity-30"
              }`}
            >
              <div className={`relative z-10 flex-shrink-0 h-12 w-12 sm:h-16 sm:w-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                activeStep === 6 
                  ? "bg-black text-[#06A7D9] border-[#06A7D9] shadow-[0_0_20px_rgba(6,167,217,0.45)] scale-110" 
                  : activeStep > 6 
                    ? "bg-black text-[#06A7D9]/70 border-[#06A7D9]/40" 
                    : "bg-[#0d0f14] text-slate-600 border-white/5"
              }`}>
                <CalendarDays className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex-1 py-1 sm:py-3">
                <h3 className={`text-xl sm:text-2xl font-bold leading-none transition-all duration-300 ${
                  activeStep === 6 ? "text-[#06A7D9]" : "text-white"
                }`}>
                  Duração
                </h3>
                <p className={`mt-3 text-xs sm:text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                  activeStep === 6 ? "text-slate-100" : "text-slate-400"
                }`}>
                  Seu treino é renovado a cada 30 dias. Antes de montar o próximo ciclo, conversamos sobre sua experiência anterior pra garantir que você continue evoluindo no caminho certo.
                </p>
              </div>
            </div>

          </div>

          {/* Stepper summary highlight */}
          <div className="mt-16 max-w-2xl mx-auto rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#06A7D9]/20 p-6 text-center shadow-xl">
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              👉 <strong className="text-[#06A7D9] uppercase italic">Resumindo:</strong> você terá um treino feito só pra você, acompanhamento de perto e praticidade total. É só dar o primeiro passo e começar sua transformação. 🚀
            </p>
          </div>

        </div>
      </section>



      {/* Section 5: AVALIAÇÃO ONLINE (Postural Guide with 4 photo layout) */}
      <section id="postural-online" className="py-12 sm:py-20 lg:py-24 bg-[#0d0f14] relative">
        <div className="absolute top-1/2 left-0 w-[280px] h-[280px] bg-[#06A7D9]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono bg-slate-900 border border-white/10 px-3.5 py-1.5 rounded-full shadow-sm">
              Protocolo de Avaliação
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              Avaliação Biomecânica Online
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Minha tecnologia permite analisar sua estrutura corporal e movimento com precisão. Basta seguir o guia de fotos abaixo:
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center max-w-6xl mx-auto">
            
            {/* Left side: 4 small frames */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-[#12141c] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                <div className="h-32 sm:h-48 md:h-56 lg:h-40 xl:h-48 bg-slate-900 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">FRENTE</span>
                  </div>
                  <Dumbbell className="h-10 w-10 text-slate-700 absolute opacity-30" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto de Frente</h4>
                <p className="text-[10px] text-slate-400 mt-1">Braços esticados ao lado do corpo.</p>
              </div>

              <div className="bg-[#12141c] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                <div className="h-32 sm:h-48 md:h-56 lg:h-40 xl:h-48 bg-slate-900 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">COSTAS</span>
                  </div>
                  <Dumbbell className="h-10 w-10 text-slate-700 absolute opacity-30" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Foto de Costas</h4>
                <p className="text-[10px] text-slate-400 mt-1">Cabelo amarrado se comprido.</p>
              </div>

              <div className="bg-[#12141c] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                <div className="h-32 sm:h-48 md:h-56 lg:h-40 xl:h-48 bg-slate-900 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">PERFIL DIR.</span>
                  </div>
                  <Dumbbell className="h-10 w-10 text-slate-700 absolute opacity-30" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Perfil Direito</h4>
                <p className="text-[10px] text-slate-400 mt-1">De lado, coluna na postura normal.</p>
              </div>

              <div className="bg-[#12141c] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                <div className="h-32 sm:h-48 md:h-56 lg:h-40 xl:h-48 bg-slate-900 rounded-lg flex items-center justify-center mb-3 relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end justify-center pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">PERFIL ESQ.</span>
                  </div>
                  <Dumbbell className="h-10 w-10 text-slate-700 absolute opacity-30" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Perfil Esquerdo</h4>
                <p className="text-[10px] text-slate-400 mt-1">De lado oposto para comparar simetria.</p>
              </div>
            </div>

            {/* Right side: instructions */}
            <div className="lg:col-span-6 text-left">
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">
                Guia de Fotos Simples
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Você não precisa de equipamentos profissionais de fotografia. Basta pedir para alguém tirar essas 4 fotos rápidas em um fundo neutro contra a luz.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 flex items-start space-x-3">
                  <div className="h-8 w-8 bg-[#06A7D9]/10 rounded-lg flex items-center justify-center text-[#06A7D9] shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Envio 100% Digital</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                      Seus dados e fotos de progresso ficam sob absoluto sigilo e criptografia dentro do nosso aplicativo de treino.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-white/5 flex items-start space-x-3">
                  <div className="h-8 w-8 bg-[#06A7D9]/10 rounded-lg flex items-center justify-center text-[#06A7D9] shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Correção Postural Integrada</h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1 leading-relaxed">
                      Com as fotos identifico desvios, como rotação de pélvis ou ombros caídos, ajustando o volume dos exercícios para corrigir sua postura.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 6: PRECISÃO CIRÚRGICA (Presencial details) */}
      <section id="postural-presencial" className="py-12 sm:py-20 lg:py-24 bg-slate-950 border-t border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center max-w-6xl mx-auto">
            
            {/* Left Column - info */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#06A7D9]/20 bg-[#06A7D9]/10 text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06A7D9] animate-pulse" />
                Avaliação Presencial
              </span>
              
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tight leading-none">
                Precisão <br />
                <span className="text-[#06A7D9]">Cirúrgica.</span>
              </h2>
              
              <div className="border-l-2 border-[#06A7D9] pl-4 mt-6">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                  Esta modalidade une o melhor dos dois mundos: a inteligência do nosso aplicativo de treino com a precisão milimétrica da coleta de dados feita pessoalmente por mim.
                </p>
              </div>

              {/* 3 Interactive Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                {/* Card 1 */}
                <div className="bg-[#12141c] p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-[#06A7D9]/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-[#06A7D9]/10 rounded-lg text-[#06A7D9] shrink-0">
                      <Ruler className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black tracking-wider text-white uppercase">ADIPOMETRIA + PERIMETRIA</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Medição exata da espessura das dobras cutâneas feita por mim.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#12141c] p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-[#06A7D9]/20 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-[#06A7D9]/10 rounded-lg text-[#06A7D9] shrink-0">
                      <Eye className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black tracking-wider text-white uppercase">OLHO NO OLHO</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Análise postural ao vivo para identificar desvios invisíveis.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#12141c] p-5 rounded-xl border border-white/5 flex flex-col justify-between hover:border-[#06A7D9]/20 transition-all duration-300 sm:col-span-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-[#06A7D9]/10 rounded-lg text-[#06A7D9] shrink-0">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-black tracking-wider text-white uppercase">APP PREMIUM</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Seu planejamento completo disponível na palma da sua mão 24h por dia.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Image & CTA */}
            <div className="lg:col-span-5 relative flex flex-col items-center w-full">
              <div className="relative w-full max-w-sm sm:max-w-md bg-[#12141c] p-3 rounded-2xl border border-white/5 shadow-2xl overflow-hidden group">
                <img 
                  src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/fade890a2580edf8120ebb8589d3a682.png" 
                  alt="Vitor Couto Presencial" 
                  referrerPolicy="no-referrer"
                  className="w-full h-80 xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[400px] xl:h-[480px] object-cover rounded-xl object-top filter contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Location overlay label from reference layout */}
                <div className="absolute bottom-4 inset-x-4 sm:bottom-6 sm:inset-x-6 bg-slate-950/90 backdrop-blur-md px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-white/10 flex flex-col xs:flex-row items-center justify-between gap-2 shadow-xl">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-[#06A7D9]" />
                    <span className="text-[10px] font-black tracking-widest text-[#06A7D9] uppercase italic">ITAREMA - CEARÁ</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wide">AGENDA ABERTA</span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button underneath image */}
              <div className="mt-5">
                <a 
                  href={`https://wa.me/5588999999999?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação presencial no consultório.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#06A7D9] hover:bg-white text-slate-950 py-4 px-6 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-[1.01] shadow-lg shadow-[#06A7D9]/25"
                >
                  <Calendar className="h-4 w-4" />
                  Agendar no Consultório
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7: TESTIMONIALS CAROUSEL ("RESULTADOS REAIS") */}
      <section id="resultados" className="py-12 sm:py-20 lg:py-24 bg-[#0a0c10] overflow-hidden relative">
        {/* Subtle decorative background lights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#06A7D9]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#06A7D9]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tight leading-none">
              RESULTADOS <span className="text-[#06A7D9]">REAIS</span>
            </h2>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] text-[#06A7D9] font-black uppercase mt-3 leading-none font-mono">
              O QUE OS ALUNOS DIZEM
            </p>
          </div>

          {/* Carousel Viewport Container */}
          <div className="relative max-w-6xl mx-auto px-4 md:px-12">
            
            {/* Carousel track */}
            <div className="overflow-hidden w-full py-6 select-none">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ 
                  transform: `translate3d(${-currentIndex * (100 / visibleCount) + (visibleCount === 3 ? 33.3333 : visibleCount === 2 ? 25 : 0)}%, 0, 0)` 
                }}
              >
                {beforeAfterResults.map((result, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div 
                      key={result.id} 
                      onClick={() => {
                        if (!isActive) {
                          setCurrentIndex(idx);
                        }
                      }}
                      className={`w-full md:w-1/2 lg:w-1/3 shrink-0 px-4 transition-all duration-500 ease-in-out cursor-pointer relative ${
                        isActive 
                          ? "opacity-100 scale-100 blur-0 z-10" 
                          : "opacity-35 scale-[0.94] blur-[2px] md:blur-[3px] hover:opacity-50 hover:blur-[1px] z-0"
                      }`}
                    >
                      {/* WhatsApp Card Inner Wrapper for responsive max-width layout on mobile */}
                      <div className="relative max-w-[310px] xs:max-w-[340px] sm:max-w-[380px] md:max-w-none mx-auto">
                        
                        {/* Quote Badge for Active Slide */}
                        {isActive && (
                          <div className="absolute -top-3 -right-3 bg-[#06A7D9] text-slate-950 p-2.5 rounded-full flex items-center justify-center shadow-lg shadow-[#06A7D9]/30 z-30 transform hover:scale-110 transition-transform duration-300">
                            <Quote className="h-4 w-4 fill-current rotate-180" />
                          </div>
                        )}

                        {/* WhatsApp Mock Container */}
                        <div className={`relative bg-[#111b21] rounded-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-500 ${
                          isActive ? "border-2 border-[#06A7D9]" : "border border-white/5"
                        }`}>
                          
                          {/* WhatsApp Header */}
                          <div className="bg-[#202c33] px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center justify-between border-b border-black/10 select-none shrink-0">
                            <div className="flex items-center space-x-2.5 sm:space-x-3">
                              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-700/80 border border-white/10 flex items-center justify-center font-black text-white text-xs sm:text-sm tracking-wider uppercase shadow-inner">
                                {result.name[0]}
                              </div>
                              <div className="text-left">
                                <span className="block text-xs sm:text-sm font-bold text-slate-100 leading-tight">{result.name}</span>
                                <span className="block text-[9px] sm:text-[10px] text-[#00e676] font-semibold leading-none mt-0.5 sm:mt-1 animate-pulse">
                                  {result.status}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2.5 sm:space-x-3 text-slate-400">
                              <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#06A7D9] transition-colors" />
                              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#06A7D9] transition-colors" />
                              <MoreVertical className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#06A7D9] transition-colors" />
                            </div>
                          </div>

                          {/* WhatsApp Chat Body */}
                          <div className="h-[280px] xs:h-[320px] sm:h-[360px] md:h-[400px] p-3 sm:p-4 overflow-y-auto space-y-3 sm:space-y-3.5 bg-[#0b141a] scrollbar-none relative flex flex-col justify-end" style={{ backgroundImage: "radial-gradient(circle at center, rgba(11,20,26,0.85) 0%, rgba(11,20,26,1) 100%)" }}>
                            {/* Messages */}
                            {result.chat.map((msg, mIdx) => {
                              if (msg.isImage) {
                                return (
                                  <div key={mIdx} className="flex flex-col items-start my-1.5 sm:my-2">
                                    <div className="bg-[#202c33] p-1 sm:p-1.5 rounded-2xl max-w-[92%] border border-white/5 shadow-lg">
                                      <div className="grid grid-cols-2 gap-1 sm:gap-1.5 rounded-xl overflow-hidden relative border border-white/5 bg-slate-900">
                                        <div className="relative">
                                          <span className="absolute top-1.5 left-1.5 z-10 bg-black/85 text-[6px] sm:text-[7px] font-bold uppercase text-slate-200 tracking-widest px-1.5 py-0.5 rounded">
                                            Antes
                                          </span>
                                          <img src={msg.beforeImg} alt="Antes" className="w-full h-24 xs:h-28 sm:h-32 md:h-40 object-cover object-center" />
                                        </div>
                                        <div className="relative">
                                          <span className="absolute top-1.5 right-1.5 z-10 bg-[#06A7D9] text-[6px] sm:text-[7px] font-black uppercase text-slate-950 tracking-widest px-1.5 py-0.5 rounded">
                                            Depois
                                          </span>
                                          <img src={msg.afterImg} alt="Depois" className="w-full h-24 xs:h-28 sm:h-32 md:h-40 object-cover object-center" />
                                        </div>
                                      </div>
                                      <div className="flex justify-end items-center mt-1 sm:mt-1.5 space-x-1 px-1">
                                        <span className="text-[8px] sm:text-[9px] text-slate-400 font-medium font-mono">{msg.time}</span>
                                        <span className="text-[#53bdeb] text-xs leading-none">✓✓</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              }

                              const isCoach = msg.sender === "coach";
                              return (
                                <div key={mIdx} className={`flex ${isCoach ? "justify-end" : "justify-start"}`}>
                                  <div className={`py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-2xl max-w-[88%] text-left relative shadow-md ${
                                    isCoach 
                                      ? "bg-[#005c4b] text-slate-100 rounded-tr-none" 
                                      : "bg-[#202c33] text-slate-100 rounded-tl-none"
                                  }`}>
                                    <p className="text-[10px] sm:text-xs font-medium leading-relaxed pb-2.5 pr-4 font-sans">{msg.text}</p>
                                    <div className="absolute bottom-1 right-2 flex items-center space-x-1 select-none">
                                      <span className="text-[7px] sm:text-[8px] text-white/50 font-mono leading-none">{msg.time}</span>
                                      {isCoach && <span className="text-[#53bdeb] text-[9px] sm:text-[10px] leading-none">✓✓</span>}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* WhatsApp Message Input Bar */}
                          <div className="bg-[#202c33] px-2.5 sm:px-3 py-2 sm:py-2.5 flex items-center space-x-1.5 sm:space-x-2 border-t border-black/10 select-none shrink-0">
                            <div className="flex-1 bg-[#2a3942] rounded-full px-3.5 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs text-left text-slate-400 flex items-center justify-between">
                              <span>Mensagem...</span>
                              <div className="flex items-center space-x-2 sm:space-x-2.5 text-slate-400">
                                <Paperclip className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#06A7D9] transition-colors" />
                                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-[#06A7D9] transition-colors" />
                              </div>
                            </div>
                            <div className="w-7 h-7 sm:w-8.5 sm:h-8.5 rounded-full bg-[#00a884] flex items-center justify-center text-white shrink-0 shadow-md">
                              <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Left Navigation Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev > 0 ? prev - 1 : beforeAfterResults.length - 1));
              }}
              className="hidden md:flex absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/80 hover:bg-[#06A7D9] border border-white/10 hover:border-[#06A7D9] text-white hover:text-slate-950 w-11 h-11 rounded-full items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Navigation Arrow */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex((prev) => (prev < beforeAfterResults.length - 1 ? prev + 1 : 0));
              }}
              className="hidden md:flex absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/80 hover:bg-[#06A7D9] border border-white/10 hover:border-[#06A7D9] text-white hover:text-slate-950 w-11 h-11 rounded-full items-center justify-center transition-all duration-300 shadow-xl focus:outline-none"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

          </div>

          {/* Dot Indicators for 6 cards */}
          <div className="flex justify-center items-center space-x-2.5 mt-6">
            {beforeAfterResults.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  dotIdx === currentIndex ? "w-8 bg-[#06A7D9]" : "w-2.5 bg-white/25 hover:bg-white/40"
                }`}
                aria-label={`Ir para o depoimento ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Pause/Play button */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setIsAutoplayPaused(!isAutoplayPaused)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#06A7D9]/30 bg-black/40 hover:bg-[#06A7D9]/10 text-[#06A7D9] hover:text-white text-xs font-black tracking-widest uppercase transition-all duration-300"
            >
              {isAutoplayPaused ? (
                <>
                  <Play className="h-3.5 w-3.5 fill-current" />
                  Retomar Rotação
                </>
              ) : (
                <>
                  <Pause className="h-3.5 w-3.5 fill-current" />
                  Pausar Rotação
                </>
              )}
            </button>
          </div>

          {/* Golden CTA Button */}
          <div className="mt-10 text-center">
            <a 
              href="#formulario"
              className="inline-flex items-center justify-center rounded-xl bg-[#06A7D9] hover:bg-white text-slate-950 px-10 py-4.5 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#06A7D9]/20"
            >
              Quero ser o próximo
            </a>
          </div>

        </div>
      </section>

      {/* Section 8: MUITO MAIS QUE APENAS TREINO (Trainer bio profile) */}
      <section className="py-12 sm:py-20 lg:py-24 bg-slate-950 border-t border-b border-white/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center max-w-6xl mx-auto">
            
            {/* Left Column - Large Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Glowing decorative border in client's cyan palette */}
                <div className="absolute -inset-1.5 bg-[#06A7D9]/20 rounded-2xl blur-md group-hover:bg-[#06A7D9]/30 transition-all duration-500" />
                <div className="relative bg-[#0d0f14] p-3 rounded-2xl border border-white/5 shadow-[0_0_25px_rgba(6,167,217,0.1)]">
                  <img 
                    src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/fade890a2580edf8120ebb8589d3a682.png" 
                    alt="Vitor Couto" 
                    referrerPolicy="no-referrer"
                    className="w-full h-80 xs:h-[400px] sm:h-[450px] md:h-[500px] lg:h-[400px] xl:h-[480px] object-cover rounded-xl object-top shadow-md"
                  />
                  {/* Experience Badge at the bottom right corner of the image, matching the layout exactly */}
                  <div className="absolute bottom-6 right-6 bg-[#0a0c10]/95 backdrop-blur-md border border-[#06A7D9]/30 px-4 py-2.5 rounded-lg text-right shadow-2xl">
                    <span className="block text-[8px] tracking-[0.2em] text-[#06A7D9] font-black uppercase font-mono">EXPERIÊNCIA</span>
                    <span className="block text-xs font-black text-white uppercase italic leading-none mt-1">DESDE 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Trajectory Narrative */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#06A7D9] font-black uppercase font-mono">
                  — TRAJETÓRIA & PROPÓSITO
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic leading-none tracking-tight">
                  Muito mais que <br />
                  <span className="text-[#06A7D9]">apenas treino</span>
                </h2>
                <p className="mt-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-xl">
                  Minha missão vai além da estética. Como especialista em glúteos e definição abdominal, eu trago a disciplina de atleta jogador de futebol combinada com a ciência da Educação Física para transformar a autoestima de mulheres.
                </p>
              </div>
              
              {/* Timeline Items */}
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-[#06A7D9] flex items-center justify-center bg-[#06A7D9]/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#06A7D9]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase italic flex items-center gap-1.5 leading-none">
                      🎓 Base Sólida (2025)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-medium">
                      Graduado em Educação Física conciliando a rotina de atleta jogador de futebol. A disciplina inegociável nasceu aqui.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-[#06A7D9] flex items-center justify-center bg-[#06A7D9]/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#06A7D9]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase italic flex items-center gap-1.5 leading-none">
                      ❤️ O Combustível (2025)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-medium">
                      Ajudar pessoas a alcançarem o físico dos seus sonhos, melhorando a saúde e elevando ao máximo a sua autoestima.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full border border-[#06A7D9] flex items-center justify-center bg-[#06A7D9]/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#06A7D9]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase italic flex items-center gap-1.5 leading-none">
                      🏆 Especialista (Hoje)
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed font-sans font-medium">
                      Atuando como Personal Trainer, liderei a transformação de mais de 150 vidas através de protocolos de alta performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Statistics Blocks Row */}
              <div className="grid grid-cols-2 gap-4 max-w-lg pt-2">
                {/* Box 1 */}
                <div className="bg-[#0d0f14] p-4 rounded-xl border border-white/5 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-white">
                    <Users className="h-4.5 w-4.5 text-[#06A7D9]" />
                    <span className="text-xl sm:text-2xl font-black leading-none font-mono">+150</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-2 block font-mono">
                    VIDAS TRANSFORMADAS
                  </span>
                </div>

                {/* Box 2 */}
                <div className="bg-[#0d0f14] p-4 rounded-xl border border-white/5 flex flex-col justify-center text-left">
                  <div className="flex items-center gap-2 text-white">
                    <Award className="h-4.5 w-4.5 text-[#06A7D9]" />
                    <span className="text-xl sm:text-2xl font-black leading-none font-mono">100%</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-2 block font-mono">
                    FOCO EM ESTÉTICA FEM.
                  </span>
                </div>
              </div>

              {/* Instagram Follow Button */}
              <div className="pt-2">
                <a 
                  href="https://instagram.com/vitorcoutopersonal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-[#06A7D9]/10 border border-white/10 hover:border-[#06A7D9]/30 text-slate-300 hover:text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md"
                >
                  <Instagram className="h-4.5 w-4.5 text-[#06A7D9]" />
                  <span>Acompanhe no Instagram</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 8.5: Resultados de Antes e Depois com Avaliação */}
      <section className="py-16 sm:py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#06A7D9]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#06A7D9]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono">
              — HISTÓRIAS DE SUCESSO
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase italic leading-none tracking-tight">
              Evoluções <span className="text-[#06A7D9]">Reais</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-semibold uppercase tracking-wide">
              Mulheres que transformaram o corpo e a autoestima com a metodologia de treino certa.
            </p>
          </div>

          {/* 3 Testimonial Cards with Before/After images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Card 1: Landra */}
            <div className="bg-[#12141c] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-end shadow-2xl relative group w-full h-[450px] sm:h-[520px] md:h-[480px] lg:h-[480px] xl:h-[520px] max-w-md lg:max-w-none mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06A7D9]/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              {/* Full background images (Antes x Depois) covering 100% of height */}
              <div className="absolute inset-0 grid grid-cols-2 gap-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=450&h=550" 
                  alt="Antes" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=450&h=550" 
                  alt="Depois" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
              </div>

              {/* Presencial Badge at the top-left */}
              <span className="absolute top-4 left-4 z-20 bg-black/95 border border-[#06A7D9]/50 text-[#06A7D9] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                PRESENCIAL
              </span>

              {/* Black transparent background covering 100% of the card + Bottom Gradient for maximum text legibility */}
              <div className="absolute inset-0 bg-black/55 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />

              {/* Overlay Content positioned at the bottom */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end text-left select-none">
                {/* Location Badge */}
                <div className="flex items-center gap-1 mb-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#06A7D9] fill-[#06A7D9]/10" />
                  <span className="text-[10px] font-extrabold text-[#06A7D9] uppercase tracking-wider">
                    TARAUACÁ, AC
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-xs sm:text-sm text-slate-100 font-bold leading-relaxed mb-3 drop-shadow-md">
                  "Estou amando cada treino! O Vitor é nota 11... você me ensinou a voltar a amar a musculação, porque eu só vivia no Cross e vivia com o joelho lascado. Agora deu tudo certo!"
                </p>

                {/* Rating Stars at the very bottom */}
                <div className="flex gap-0.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 fill-amber-400 drop-shadow" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Priscila Melo */}
            <div className="bg-[#12141c] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-end shadow-2xl relative group w-full h-[450px] sm:h-[520px] md:h-[480px] lg:h-[480px] xl:h-[520px] max-w-md lg:max-w-none mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06A7D9]/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              {/* Full background images (Antes x Depois) covering 100% of height */}
              <div className="absolute inset-0 grid grid-cols-2 gap-[1px]">
                <img 
                  src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=450&h=550" 
                  alt="Antes" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=450&h=550" 
                  alt="Depois" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
              </div>

              {/* 100% Online Badge at the top-left */}
              <span className="absolute top-4 left-4 z-20 bg-black/95 border border-[#06A7D9]/50 text-[#06A7D9] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                100% ONLINE
              </span>

              {/* Black transparent background covering 100% of the card + Bottom Gradient for maximum text legibility */}
              <div className="absolute inset-0 bg-black/55 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />

              {/* Overlay Content positioned at the bottom */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end text-left select-none">
                {/* Location Badge */}
                <div className="flex items-center gap-1 mb-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#06A7D9] fill-[#06A7D9]/10" />
                  <span className="text-[10px] font-extrabold text-[#06A7D9] uppercase tracking-wider">
                    SÃO PAULO, SP
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-xs sm:text-sm text-slate-100 font-bold leading-relaxed mb-3 drop-shadow-md">
                  "Mesmo com a rotina super cansativa, o Vitor conciliou meus treinos e tivemos um resultado incrível! Nem acredito que consegui sair desse corpo pós-parto."
                </p>

                {/* Rating Stars at the very bottom */}
                <div className="flex gap-0.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 fill-amber-400 drop-shadow" />
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Isabel Cavalcante */}
            <div className="bg-[#12141c] rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-end shadow-2xl relative group w-full h-[450px] sm:h-[520px] md:h-[480px] lg:h-[480px] xl:h-[520px] max-w-md md:col-span-2 lg:col-span-1 md:max-w-md lg:max-w-none mx-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06A7D9]/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
              
              {/* Full background images (Antes x Depois) covering 100% of height */}
              <div className="absolute inset-0 grid grid-cols-2 gap-[1px]">
                <img 
                  src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/35bbaaf5a56f11ce7d56689ff8f01ffc.jpg" 
                  alt="Antes" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
                <img 
                  src="https://vitorcoutopersinal.my.canva.site/vitorcoutopersonal/_assets/media/e5582caf354755cbf3c37c603155306d.jpg" 
                  alt="Depois" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.03] saturate-[1.05]" 
                />
              </div>

              {/* Presencial Badge at the top-left */}
              <span className="absolute top-4 left-4 z-20 bg-black/95 border border-[#06A7D9]/50 text-[#06A7D9] text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded">
                PRESENCIAL
              </span>

              {/* Black transparent background covering 100% of the card + Bottom Gradient for maximum text legibility */}
              <div className="absolute inset-0 bg-black/55 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none z-10" />

              {/* Overlay Content positioned at the bottom */}
              <div className="relative z-20 p-5 sm:p-6 flex flex-col justify-end text-left select-none">
                {/* Location Badge */}
                <div className="flex items-center gap-1 mb-2.5">
                  <MapPin className="h-3.5 w-3.5 text-[#06A7D9] fill-[#06A7D9]/10" />
                  <span className="text-[10px] font-extrabold text-[#06A7D9] uppercase tracking-wider">
                    SALVADOR, BA
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-xs sm:text-sm text-slate-100 font-bold leading-relaxed mb-3 drop-shadow-md">
                  "Satisfatório ver essas gordurinhas irem embora! Obrigada por me colocar na direção certa, você é incrível. Olhe essa barriga cheia de celulite dando adeus aos poucos!"
                </p>

                {/* Rating Stars at the very bottom */}
                <div className="flex gap-0.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-400 fill-amber-400 drop-shadow" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button below cards */}
          <div className="mt-12 sm:mt-16 text-center">
            <motion.a
              href="#formulario"
              className="inline-flex items-center justify-center rounded-xl bg-[#06A7D9] px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm font-black tracking-widest text-slate-950 uppercase transition-all duration-300 hover:bg-white shadow-xl shadow-[#06A7D9]/25 cursor-pointer"
              animate={{
                x: [0, -3, 3, -3, 3, -2, 2, 0, 0],
                scale: [1, 1.02, 1.02, 1.02, 1.02, 1.02, 1.02, 1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 1],
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              QUERO TER ESSES RESULTADOS
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2.5 shrink-0" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ Accordions */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#0d0f14] relative">
        <div className="absolute bottom-10 right-10 w-[240px] h-[240px] bg-[#06A7D9]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold tracking-widest text-[#06A7D9] uppercase font-mono">DÚVIDAS FREQUENTES</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight leading-none">
              Perguntas frequentes
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#12141c] rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-[#06A7D9] transition-colors focus:outline-none"
                >
                  <span className="uppercase">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[#06A7D9] shrink-0 transition-transform duration-300 ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === idx ? "max-h-48 border-t border-white/5" : "max-h-0"
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans font-medium text-left">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 10: APPLICATION FORM & FINAL CTA */}
      <section id="formulario" className="py-12 sm:py-20 lg:py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#06A7D9]/5 rounded-full blur-[110px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-3xl px-4 sm:px-6 relative">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white leading-tight">
              Pare de adiar seu resultado
            </h2>
            <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wide leading-relaxed">
              Preencha o formulário de aplicação abaixo para identificarmos seus objetivos e darmos o primeiro passo na sua transformação de alto impacto.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#12141c] p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/5 relative">
            {/* Progress indicator */}
            {!appFormSubmitted && (
              <div className="mb-8">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  <span>Passo {appFormStep} de 6</span>
                  <span className="text-[#06A7D9]">{Math.round(((appFormStep - 1) / 5) * 100)}% concluído</span>
                </div>
                <div className="w-full bg-slate-950/80 rounded-full h-1.5 overflow-hidden border border-white/5">
                  <div 
                    className="bg-gradient-to-r from-[#06A7D9] to-[#00e676] h-full transition-all duration-300 rounded-full" 
                    style={{ width: `${(appFormStep / 6) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {!appFormSubmitted ? (
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                
                {/* Step 1: Alinhamento de Expectativas */}
                {appFormStep === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <Info className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        O que você terá acesso no TEAMVITORCOUTO:
                      </h3>
                    </div>

                    <div className="bg-slate-950/40 border border-white/5 rounded-xl p-4 sm:p-5 space-y-3 font-sans text-xs sm:text-sm text-slate-300">
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Protocolo de treino individual e personalizado</strong> através do APP MFIT</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Planejamento alimentar</strong> elaborado por nutricionista</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Protocolo de mobilidade e alongamento</strong></span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Sono e hidratação</strong> calculada</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Acompanhamento integral</strong> para dúvidas, correção dos movimentos e feedbacks</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Grupo VIP</strong> dos alunos no WhatsApp</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#06A7D9] mt-0.5 shrink-0" />
                        <span><strong>Relatório de progresso</strong></span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs sm:text-sm font-black uppercase italic text-slate-200 tracking-wide">
                        Este é o tipo de acompanhamento que procura? *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setAppFormData(p => ({ ...p, tipoProcura: "SIM" }))}
                          className={`py-4 px-5 rounded-xl border text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            appFormData.tipoProcura === "SIM"
                              ? "bg-[#06A7D9]/15 border-[#06A7D9] text-[#06A7D9] shadow-lg shadow-[#06A7D9]/10"
                              : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          SIM
                        </button>
                        <button
                          type="button"
                          onClick={() => setAppFormData(p => ({ ...p, tipoProcura: "NÃO" }))}
                          className={`py-4 px-5 rounded-xl border text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            appFormData.tipoProcura === "NÃO"
                              ? "bg-red-500/10 border-red-500/50 text-red-400 shadow-lg"
                              : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Perfil Pessoal */}
                {appFormStep === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-6">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <UserCheck className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        Me conte um pouco sobre você
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                          Qual o seu nome completo? *
                        </label>
                        <input
                          type="text"
                          value={appFormData.nome}
                          onChange={(e) => setAppFormData(p => ({ ...p, nome: e.target.value }))}
                          placeholder="Seu nome"
                          className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                        />
                      </div>

                      <div className="space-y-2 text-left">
                        <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                          Qual a sua idade? *
                        </label>
                        <input
                          type="number"
                          value={appFormData.idade}
                          onChange={(e) => setAppFormData(p => ({ ...p, idade: e.target.value }))}
                          placeholder="Ex: 27"
                          className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Estado & Cidade Selector Cards - Responsive layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Estado Card */}
                      <div className="space-y-2 bg-[#1b1e2a]/30 p-3.5 sm:p-4 rounded-xl border border-white/5 text-left">
                        <label className="block text-[11px] sm:text-xs font-black uppercase italic text-slate-300 tracking-wide">
                          Selecione o Estado *
                        </label>
                        <select
                          value={appFormData.estado}
                          onChange={(e) => {
                            const est = e.target.value;
                            setAppFormData(p => ({
                              ...p,
                              estado: est,
                              cidade: "", // Reset city so user must pick one
                              customEstado: est === "Outro" ? "" : p.customEstado,
                              customCidade: ""
                            }));
                          }}
                          className="w-full bg-slate-950/80 border border-white/5 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors cursor-pointer"
                        >
                          <option value="" disabled className="bg-[#12141c] text-slate-400">
                            {loadingEstados ? "Carregando estados..." : "Selecione..."}
                          </option>
                          {estadosBr.map((est) => (
                            <option key={est.sigla} value={est.sigla} className="bg-[#12141c] text-white">
                              {est.nome} ({est.sigla})
                            </option>
                          ))}
                          <option value="Outro" className="bg-[#12141c] text-white">Outro Estado</option>
                        </select>
                      </div>

                      {/* Cidade Card */}
                      <div className="space-y-2 bg-[#1b1e2a]/30 p-3.5 sm:p-4 rounded-xl border border-white/5 text-left">
                        <label className="block text-[11px] sm:text-xs font-black uppercase italic text-slate-300 tracking-wide">
                          Selecione a Cidade *
                        </label>
                        <select
                          value={appFormData.cidade}
                          onChange={(e) => setAppFormData(p => ({
                            ...p,
                            cidade: e.target.value,
                            customCidade: e.target.value === "Outra" ? "" : p.customCidade
                          }))}
                          disabled={!appFormData.estado || appFormData.estado === "Outro"}
                          className="w-full bg-slate-950/80 border border-white/5 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <option value="" disabled className="bg-[#12141c] text-slate-400">
                            {loadingCidades ? "Carregando cidades..." : !appFormData.estado ? "Selecione o Estado primeiro..." : "Selecione..."}
                          </option>
                          {cidadesBr.map((cid) => (
                            <option key={cid} value={cid} className="bg-[#12141c] text-white">
                              {cid}
                            </option>
                          ))}
                          {appFormData.estado && appFormData.estado !== "Outro" && (
                            <option value="Outra" className="bg-[#12141c] text-white">Outra Cidade</option>
                          )}
                        </select>
                      </div>
                    </div>

                    {/* Custom fields if Outro or Outra is selected - Responsive stack */}
                    {(appFormData.estado === "Outro" || appFormData.cidade === "Outra") && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        {appFormData.estado === "Outro" ? (
                          <div className="space-y-2 text-left">
                            <label className="block text-[10px] font-black uppercase italic text-slate-400 tracking-wide">
                              Qual o seu Estado? *
                            </label>
                            <input
                              type="text"
                              value={appFormData.customEstado}
                              onChange={(e) => setAppFormData(p => ({ ...p, customEstado: e.target.value }))}
                              placeholder="Ex: Paraná"
                              className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                            />
                          </div>
                        ) : null}

                        {(appFormData.cidade === "Outra" || appFormData.estado === "Outro") ? (
                          <div className="space-y-2 text-left">
                            <label className="block text-[10px] font-black uppercase italic text-slate-400 tracking-wide">
                              Qual a sua Cidade? *
                            </label>
                            <input
                              type="text"
                              value={appFormData.customCidade}
                              onChange={(e) => setAppFormData(p => ({ ...p, customCidade: e.target.value }))}
                              placeholder="Ex: Itapipoca"
                              className="w-full bg-[#0a0d16]/80 border border-white/5 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                            />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </motion.div>
                )}

                {/* Step 3: Seus Objetivos */}
                {appFormStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-6">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <Target className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        Seus objetivos físicos
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                        Qual região do seu corpo mais te incomoda e você gostaria de melhorá-la? *
                      </label>
                      <input
                        type="text"
                        value={appFormData.regiaoIncomoda}
                        onChange={(e) => setAppFormData(p => ({ ...p, regiaoIncomoda: e.target.value }))}
                        placeholder="Ex: Abdômen, pernas, flancos..."
                        className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                        Qual resultado você gostaria de ter em 90 dias? *
                      </label>
                      <textarea
                        rows={3}
                        value={appFormData.resultado90Dias}
                        onChange={(e) => setAppFormData(p => ({ ...p, resultado90Dias: e.target.value }))}
                        placeholder="Ex: Gostaria de emagrecer 8kg de gordura e tonificar as coxas, tendo mais disposição..."
                        className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors font-sans resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Histórico & Nutrição */}
                {appFormStep === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-6">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <ClipboardList className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        Histórico de treinos e alimentação
                      </h3>
                    </div>

                    <div className="space-y-2.5">
                      <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                        Você já teve acompanhamento com Personal Trainer antes? *
                      </label>
                      <div className="space-y-2">
                        {[
                          "Sim, eu já treinei com personal presencial",
                          "Sim, já fiz acompanhamento (consultoria) online",
                          "Não (nunca fiz consultoria online e nem treinei com personal presencial)"
                        ].map((opt, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setAppFormData(p => ({ ...p, historicoPersonal: opt }))}
                            className={`w-full text-left py-3 px-4 rounded-xl border text-xs font-medium transition-all duration-300 cursor-pointer ${
                              appFormData.historicoPersonal === opt
                                ? "bg-[#06A7D9]/15 border-[#06A7D9] text-[#06A7D9]"
                                : "bg-slate-950/40 border-white/5 text-slate-300 hover:border-white/10 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-2">
                      <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                        Você tem acompanhamento de algum nutricionista? *
                      </label>
                      <div className="space-y-2">
                        {[
                          "Sim, atualmente tenho",
                          "Não, mas pretendo ter, pois acho importante",
                          "Não, e não pretendo ter"
                        ].map((opt, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setAppFormData(p => ({ ...p, nutricionista: opt }))}
                            className={`w-full text-left py-3 px-4 rounded-xl border text-xs font-medium transition-all duration-300 cursor-pointer ${
                              appFormData.nutricionista === opt
                                ? "bg-[#06A7D9]/15 border-[#06A7D9] text-[#06A7D9]"
                                : "bg-slate-950/40 border-white/5 text-slate-300 hover:border-white/10 hover:text-white"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Compromisso e Contato */}
                {appFormStep === 5 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-6">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <Flame className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        Compromisso e Contato
                      </h3>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xs sm:text-sm font-black uppercase italic text-slate-200 tracking-wide leading-relaxed">
                        Para que possa te entregar resultados incríveis. Você está disposta(o) a investir no mínimo em 3 meses de acompanhamento para a sua evolução? *
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setAppFormData(p => ({ ...p, compromisso3Meses: "Sim" }))}
                          className={`py-3.5 px-5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            appFormData.compromisso3Meses === "Sim"
                              ? "bg-[#06A7D9]/15 border-[#06A7D9] text-[#06A7D9] shadow-lg shadow-[#06A7D9]/10"
                              : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          Sim
                        </button>
                        <button
                          type="button"
                          onClick={() => setAppFormData(p => ({ ...p, compromisso3Meses: "Não" }))}
                          className={`py-3.5 px-5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                            appFormData.compromisso3Meses === "Não"
                              ? "bg-red-500/10 border-red-500/50 text-red-400 shadow-lg"
                              : "bg-slate-950/40 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          Não
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="block text-xs font-black uppercase italic text-slate-200 tracking-wide">
                        Qual seu número de WhatsApp com DDD? *
                      </label>
                      <input
                        type="text"
                        value={appFormData.whatsapp}
                        onChange={(e) => setAppFormData(p => ({ ...p, whatsapp: e.target.value }))}
                        placeholder="Ex: (88) 99999-9999"
                        className="w-full bg-slate-950/60 border border-white/5 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#06A7D9] focus:ring-1 focus:ring-[#06A7D9]/30 transition-colors"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 6: Seleção Final de Modalidade / Foco */}
                {appFormStep === 6 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-5"
                  >
                    <div className="text-center mb-4">
                      <div className="h-10 w-10 bg-[#06A7D9]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#06A7D9]/20">
                        <Sparkles className="h-5 w-5 text-[#06A7D9]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-black uppercase italic text-white leading-tight">
                        Selecione o formato que você prefere:
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                        Escolha a opção que mais se alinha com o acompanhamento ideal que você busca no momento:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:gap-4 max-h-[350px] overflow-y-auto pr-1">
                      {((appFormData.cidade === "Itarema" || 
                         (appFormData.cidade === "Outra" && appFormData.customCidade?.trim().toLowerCase() === "itarema") ||
                         (appFormData.estado === "Outro" && appFormData.customCidade?.trim().toLowerCase() === "itarema"))
                        ? [
                            {
                              title: "Consultoria Presencial no Consultório (Itarema)",
                              desc: "Acompanhamento completo presencial de alta performance com avaliação física periódica, bioimpedância e plano individual em meu consultório em Itarema."
                            },
                            {
                              title: "Consultoria Híbrida (Online + Presencial)",
                              desc: "Treinos periodizados no aplicativo MFIT combinados com encontros de avaliação física presencial em meu consultório em Itarema."
                            },
                            {
                              title: "Consultoria 100% Online (TEAMVITORCOUTO)",
                              desc: "Acesso completo ao aplicativo com treinos personalizados e suporte online direto no WhatsApp pessoal para tirar dúvidas e corrigir técnicas."
                            }
                          ]
                        : [
                            {
                              title: "Consultoria 100% Online (TEAMVITORCOUTO)",
                              desc: "Acesso total ao aplicativo MFIT com seus treinos, suporte direto via WhatsApp para correção de técnicas e feedbacks semanais."
                            },
                            {
                              title: "Acompanhamento Premium Individualizado (Online)",
                              desc: "Estratégia completa de alta performance online englobando protocolos de treino personalizados e guias práticos de nutrição e mobilidade."
                            },
                            {
                              title: "Consultoria + Nutrição Integrada (Online)",
                              desc: "A união do seu treino periodizado e focado nos seus pontos fracos com a elaboração de cardápio focado em maximizar resultados em 90 dias."
                            }
                          ]
                      ).map((opt, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setAppFormData(p => ({ ...p, focoPrincipal: opt.title }))}
                          className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 relative overflow-hidden group cursor-pointer ${
                            appFormData.focoPrincipal === opt.title
                              ? "bg-[#06A7D9]/15 border-[#06A7D9] text-[#06A7D9]"
                              : "bg-slate-950/40 border-white/5 text-slate-300 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          <div className={`mt-1 h-4.5 w-4.5 rounded-full border flex items-center justify-center shrink-0 ${
                            appFormData.focoPrincipal === opt.title
                              ? "border-[#06A7D9] bg-[#06A7D9]/20 text-[#06A7D9]"
                              : "border-slate-600 bg-transparent text-transparent"
                          }`}>
                            <Check className="h-3 w-3 stroke-[3]" />
                          </div>
                          <div>
                            <span className="block text-xs sm:text-sm font-black uppercase tracking-wider text-white leading-none mb-1.5">{opt.title}</span>
                            <span className="block text-[11px] text-slate-400 leading-relaxed font-sans font-medium">{opt.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Form Controls */}
                <div className="pt-4 flex items-center justify-between gap-4 border-t border-white/5">
                  {appFormStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="rounded-xl border border-white/15 hover:border-white/30 text-white py-3.5 px-5 text-xs font-black tracking-widest uppercase transition-all duration-300 hover:bg-white/5 cursor-pointer flex items-center space-x-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Voltar</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {appFormStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      disabled={!isStepValid()}
                      className={`rounded-xl py-3.5 px-6 text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                        isStepValid()
                          ? "bg-[#06A7D9] hover:bg-white text-slate-950 cursor-pointer shadow-lg shadow-[#06A7D9]/20 hover:scale-[1.01]"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5"
                      }`}
                    >
                      <span>Avançar</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFormSubmit}
                      disabled={!isStepValid()}
                      className={`rounded-xl py-3.5 px-7 text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center space-x-1.5 ${
                        isStepValid()
                          ? "bg-[#00e676] hover:bg-white text-slate-950 cursor-pointer shadow-lg shadow-[#00e676]/20 hover:scale-[1.01]"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5"
                      }`}
                    >
                      <span>ENVIAR NO WHATSAPP</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  )}
                </div>

              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 px-4 flex flex-col items-center"
              >
                <div className="h-16 w-16 bg-[#00e676]/10 border border-[#00e676]/30 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#00e676]/10">
                  <Check className="h-8 w-8 text-[#00e676]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase italic text-white mb-3 tracking-tight">
                  Aplicação Enviada!
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mb-8 font-sans font-medium">
                  Parabéns por dar esse passo! Suas respostas foram formatadas. Estamos te redirecionando para o WhatsApp do personal <strong>Vitor Couto</strong> para finalizar seu agendamento e análise de forma direta.
                </p>

                <div className="w-full max-w-xs space-y-3">
                  <a
                    href={`https://wa.me/5588999999999?text=${encodeURIComponent(
                      `📋 *NOVA APLICAÇÃO - TEAM VITOR COUTO*\n\n👤 *Nome:* ${appFormData.nome} (${appFormData.idade} anos)\n📍 *Localização:* ${getFormattedLocation()}\n📱 *WhatsApp:* ${appFormData.whatsapp}\n\n🎯 *Escolha do Aluno:*\n• Procura esse acompanhamento? *${appFormData.tipoProcura}*\n• Formato/Foco Escolhido: *${appFormData.focoPrincipal}*\n\n💪 *Objetivos e Corpo:*\n• Região que mais incomoda: *${appFormData.regiaoIncomoda}*\n• Resultado desejado em 90 dias: *${appFormData.resultado90Dias}*\n\n👟 *Histórico e Rotina:*\n• Já teve Personal antes? *${appFormData.historicoPersonal}*\n• Tem Acompanhamento de Nutricionista? *${appFormData.nutricionista}*\n\n🔥 *Compromisso de Evolução:*\n• Disposto(a) a investir 3 meses? *${appFormData.compromisso3Meses}*`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-[#00e676] hover:bg-white text-slate-950 py-4 px-6 text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-[#00e676]/25 flex items-center justify-center space-x-2 font-bold"
                  >
                    <span>ABRIR WHATSAPP MANUALMENTE</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setAppFormStep(1);
                      setAppFormData({
                        tipoProcura: "",
                        nome: "",
                        idade: "",
                        estado: "",
                        cidade: "",
                        customEstado: "",
                        customCidade: "",
                        regiaoIncomoda: "",
                        resultado90Dias: "",
                        historicoPersonal: "",
                        nutricionista: "",
                        compromisso3Meses: "",
                        whatsapp: "",
                        focoPrincipal: ""
                      });
                      setAppFormSubmitted(false);
                    }}
                    className="text-[11px] text-slate-500 hover:text-slate-300 underline font-sans font-semibold cursor-pointer block mx-auto"
                  >
                    Preencher novamente
                  </button>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {/* Footer and sub-footer credit strips */}
      <footer className="bg-slate-950 text-slate-500 font-sans border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="text-xs font-black text-white uppercase italic tracking-wider">
              MÉTODO DE ALTA PERFORMANCE
            </span>
          </div>
          <p className="text-[11px]">© 2026 Vitor Couto Personal - CREF 021359 - G/CE</p>
        </div>

        <div className="bg-[#06080e] border-t border-white/5 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-xs font-normal">
                Desenvolvido por
              </span>
              <a 
                href="https://backfire.agency" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-1.5 group hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://i.imgur.com/XKPIDpU.png" 
                  alt="Backfire Agency" 
                  className="h-5 w-auto object-contain filter drop-shadow-[0_1px_6px_rgba(255,85,0,0.2)]"
                  referrerPolicy="no-referrer"
                />
                <div className="font-extrabold text-xs tracking-wider flex items-center">
                  <span className="text-[#FF5500]">Backfire</span>
                  <span className="text-white ml-1">Agency</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
