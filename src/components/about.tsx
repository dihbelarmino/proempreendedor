"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ChevronRight, Star, Clock, Calendar, Users, Award, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const courseTopics = [
    {
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: "Análise de Perfil Comportamental (DISC)",
      description: "Entenda os comportamentos de sua equipe e clientes, ajustando seu estilo de liderança e comunicação para um ambiente mais produtivo."
    },
    {
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: "Cultura da Empresa",
      description: "Aprenda a criar e fortalecer a cultura organizacional, alinhando valores e objetivos, e promovendo um ambiente que engaja e motiva."
    },
    {
      icon: <BarChart className="h-6 w-6 text-orange-500" />,
      title: "Planejamento Financeiro",
      description: "Desenvolva habilidades para gerenciar as finanças com ferramentas práticas de fluxo de caixa, projeções financeiras e análise de investimentos."
    },
    {
      icon: <Star className="h-6 w-6 text-orange-500" />,
      title: "Canais de Vendas e Negociação",
      description: "Descubra como diversificar seus canais de vendas e aprimore suas habilidades de negociação com fornecedores, clientes e parceiros."
    }
  ];

  const programSchedule = [
    {
      day: "DIA 1",
      title: "FUNDAMENTOS DO EMPRESÁRIO MODERNO",
      blocks: [
        {
          time: "08h00 – 12h30",
          name: "BLOCO 1 – Comunicação e Mentalidade Empreendedora",
          facilitator: "com Dennis Amanthea – desenvolvedor de CPF",
          topics: [
            "Técnicas de persuasão e influência",
            "Linguagem Não Verbal no dia a dia empresarial",
            "Como Gravar Vídeos com autenticidade e naturalidade",
            "Ferramenta de Feedback para equipes",
            "Soft Skills e Mentalidade de Crescimento"
          ]
        },
        {
          time: "14h00 – 18h30",
          name: "BLOCO 2 – Estratégia Comercial e Financeira",
          facilitator: "com Raphael Soares – desenvolvedor de CNPJ",
          topics: [
            "Planejamento Estratégico com base em Análise de Perfil Comportamental",
            "Planejamento Financeiro Empresarial (Fluxo, Margem, Meta)",
            "Fundamentos da Venda Complexa: Jornada, Objeções, Fechamento",
            "Atividade de Diagnóstico Comercial e Financeiro"
          ]
        }
      ]
    },
    {
      day: "DIA 2",
      title: "ESCALADA ESTRUTURAL DO NEGÓCIO",
      blocks: [
        {
          time: "08h00 – 12h30",
          name: "BLOCO 3 – Estrutura e Liderança Empresarial",
          facilitator: "com Raphael Soares",
          topics: [
            "Como contratar com método (Perfil e Cultura)",
            "Contrato de Expectativa para times de alta performance",
            "Construção de Organograma Estratégico",
            "Cultura na prática: valores, rituais e comportamento",
            "Delegação com responsabilidade"
          ]
        },
        {
          time: "14h00 – 18h30",
          name: "BLOCO 4 – Alta Performance Comunicacional e Impacto",
          facilitator: "com Dennis Amanthea",
          topics: [
            "Autorresponsabilidade empresarial e cultura de autorresponsabilidade",
            "Brainstorm estratégico para resolver desafios da empresa",
            "Ferramentas de Gerenciamento Emocional do empresário",
            "Construção de uma Rotina Digital de Sucesso"
          ]
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Este treinamento transformou minha visão de negócio. Implementei várias ferramentas e o resultado foi imediato!",
      name: "Carlos Oliveira",
      role: "Empresário"
    },
    {
      quote: "Após o PROEMPREENDEDOR, consegui estruturar minha equipe, definir melhor os processos e aumentar o faturamento em 40%.",
      name: "Márcia Santos",
      role: "CEO"
    }
  ];

  const benefitsList = [
    "Transforme sua visão de gestão empresarial e conquiste resultados duradouros",
    "Construa uma cultura forte que engaja e motiva sua equipe para o sucesso",
    "Gerencie suas finanças com precisão e assegure a sustentabilidade do seu negócio",
    "Aprenda a liderar com eficácia, adaptando-se aos comportamentos da equipe",
    "Crie estratégias de marketing eficazes para atrair e reter clientes fiéis",
    "Monte uma equipe de alta performance com processos de contratação eficazes",
    "Estabeleça expectativas claras com sua equipe para garantir alinhamento e resultados",
    "Melhore a comunicação interna e construa um ambiente mais produtivo",
    "Desenvolva uma mentalidade de crescimento, enfrentando desafios como oportunidades",
    "Implemente uma rotina de alta performance, garantindo consistência no sucesso"
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white text-zinc-900"
    >
      <div className="container-custom">
        {/* Introdução */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            O <span className="text-orange-600">PRO</span>EMPREENDEDOR
          </h2>
          <p className="text-lg text-zinc-700 mb-8">
            Uma IMERSÃO PRESENCIAL PRÁTICA E COMPLETA, desenvolvida para capacitar empresários com ferramentas práticas para expandir suas habilidades e alcançar o sucesso. Com mais de 20 estratégias e técnicas aplicáveis, o curso prepara você para transformar a gestão da sua empresa e obter resultados exponenciais.
          </p>
        </div>

        {/* O que você vai aprender */}
        <div
          className={`mb-24 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">
              O que você vai aprender <span className="text-orange-600">(na prática!)</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseTopics.map((topic, index) => (
              <Card
                key={`topic-${index}`}
                className={`border-2 border-zinc-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white`}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{topic.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-black">{topic.title}</h4>
                  <p className="text-zinc-700">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cronograma da Imersão */}
        <div
          className={`bg-zinc-900 rounded-xl p-8 mb-24 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Cronograma da <span className="text-orange-500">Imersão</span>
            </h3>
            <p className="text-gray-400">
              A Estrutura do PROEMPREENDEDOR possui o seguinte cronograma, para seu planejamento:
            </p>
          </div>

          <div className="space-y-12">
            {programSchedule.map((day, dayIndex) => (
              <div key={`day-${dayIndex}`} className="mb-8 last:mb-0">
                <div className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-t-lg">
                  <Calendar className="h-5 w-5 mr-2" />
                  <h4 className="text-xl font-bold">{day.day} – {day.title}</h4>
                </div>

                <div className="space-y-8 mt-6">
                  {day.blocks.map((block, blockIndex) => (
                    <div key={`block-${dayIndex}-${blockIndex}`} className="bg-zinc-800 p-6 rounded-lg border-l-4 border-orange-500">
                      <div className="flex items-center mb-3">
                        <Clock className="text-orange-500 h-5 w-5 mr-2" />
                        <span className="text-white font-medium">{block.time}</span>
                      </div>
                      <h5 className="text-xl font-bold mb-2 text-white">{block.name}</h5>
                      <p className="text-orange-400 mb-4 italic">{block.facilitator}</p>

                      <ul className="space-y-2">
                        {block.topics.map((topic, topicIndex) => (
                          <li key={`topic-${dayIndex}-${blockIndex}-${topicIndex}`} className="flex items-start text-gray-300">
                            <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios */}
        <div
          className={`mb-24 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Benefícios do <span className="text-orange-600">Treinamento</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {benefitsList.map((benefit, index) => (
              <div key={`benefit-${index}`} className="flex items-start">
                <Check className="text-orange-600 h-6 w-6 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-zinc-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-black">
              O que estão <span className="text-orange-600">falando</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={`testimonial-${index}`} className="bg-zinc-100 p-6 rounded-lg border-l-4 border-orange-500">
                <p className="text-lg italic mb-4 text-zinc-800">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-zinc-900">{testimonial.name}</p>
                    <p className="text-sm text-zinc-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preços */}
        <div
          className={`bg-zinc-900 rounded-xl p-8 mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2 text-white">
              Investimento
            </h3>
            <p className="text-gray-400">
              Escolha o melhor plano para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* LOTE 1 */}
            <Card className="border-2 border-orange-500 bg-zinc-800 shadow-lg overflow-hidden">
              <div className="bg-orange-600 py-2 px-6 text-white font-bold text-center">
                LOTE 1 - ATUAL
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-400 line-through mb-1">R$ 1.997,00</p>
                  <p className="text-3xl font-bold text-white">R$ 1.497,00</p>
                  <p className="text-sm text-gray-400">ou 12x de R$ 153,01</p>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  GARANTIR MINHA VAGA
                </Button>
              </CardContent>
            </Card>

            {/* LOTE 2 */}
            <Card className="border border-zinc-700 bg-zinc-800 shadow-lg overflow-hidden">
              <div className="bg-zinc-700 py-2 px-6 text-white font-bold text-center">
                LOTE 2 - EM BREVE
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-500 mb-1">Valor integral</p>
                  <p className="text-3xl font-bold text-white">R$ 1.997,00</p>
                  <p className="text-sm text-gray-400">ou 12x de R$ 204,42</p>
                </div>
                <Button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white" disabled>
                  EM BREVE
                </Button>
              </CardContent>
            </Card>


          </div>
        </div>

        {/* Garantia */}
        <div className="bg-zinc-100 p-8 rounded-xl border-2 border-orange-500 text-center mb-16">
          <h3 className="text-2xl font-bold mb-4 text-black">
            Ou você AMA o PROEMPREENDEDOR ou devolvemos seu dinheiro
          </h3>
          <p className="text-lg mb-6 text-zinc-700">
            Experimente agora o PRO EMPREENDEDOR SEM RISCOS!
          </p>
          <p className="text-zinc-700 max-w-2xl mx-auto">
            Se por qualquer razão achar que o investimento não valeu a pena, ou que seu problema ainda não foi resolvido, é só entrar em contato com a gente e receberá de volta 100% do valor pago sem a menor burocracia.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-black">
            Não perca essa oportunidade de transformar seu negócio
          </h3>
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-6 rounded-full transform transition-all hover:scale-105 shadow-lg"
          >
            GARANTA SUA VAGA AGORA
          </Button>

          <p className="mt-4 text-zinc-600">
            Vagas limitadas para a imersão dos dias 31/05 e 01/06 de 2025
          </p>
        </div>
      </div>
    </section>
  );
}