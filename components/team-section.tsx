"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/**
 * Componente TeamSection - Seção da equipe de desenvolvimento
 * Apresenta os membros da equipe com efeitos hover e links sociais
 * Implementa acessibilidade e interações suaves
 */
export function TeamSection() {
  // Dados dos membros da equipe
  const teamMembers = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Tech Lead & Full Stack Developer",
      bio: "Especialista em React e Node.js com 8 anos de experiência em desenvolvimento de plataformas educacionais.",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/anasilva",
      linkedin: "https://linkedin.com/in/anasilva-dev",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Game Developer & UX Designer",
      bio: "Desenvolvedor de jogos apaixonado por criar experiências educativas envolventes e acessíveis.",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/carlossantos",
      linkedin: "https://linkedin.com/in/carlos-santos-gamedev",
    },
    {
      id: 3,
      name: "Marina Costa",
      role: "Frontend Developer & UI Designer",
      bio: "Especialista em interfaces acessíveis e design systems, focada em experiência do usuário inclusiva.",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/marinacosta",
      linkedin: "https://linkedin.com/in/marina-costa-frontend",
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      role: "Backend Developer & DevOps",
      bio: "Arquiteto de sistemas escaláveis e especialista em infraestrutura cloud para aplicações educacionais.",
      image: "/placeholder.svg?height=300&width=300",
      github: "https://github.com/pedrooliveira",
      linkedin: "https://linkedin.com/in/pedro-oliveira-backend",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="team-title">
      <div className="container mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 id="team-title" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Conheça Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados por educação e tecnologia, trabalhando juntos para revolucionar o aprendizado de
            programação.
          </p>
        </div>

        {/* Grid dos membros da equipe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
            >
              <CardContent className="p-6 text-center">
                {/* Container da imagem com efeito hover */}
                <div className="relative mb-4 mx-auto w-32 h-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`Foto de ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 128px, 128px"
                  />

                  {/* Overlay que aparece no hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      {/* Link para GitHub */}
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-8 h-8 p-0 opacity-90 hover:opacity-100"
                        asChild
                      >
                        <Link
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub de ${member.name}`}
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </Button>

                      {/* Link para LinkedIn */}
                      <Button
                        size="sm"
                        variant="secondary"
                        className="w-8 h-8 p-0 opacity-90 hover:opacity-100"
                        asChild
                      >
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="w-4 h-4" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Informações do membro */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-sm font-medium text-primary">{member.role}</p>

                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                {/* Links sociais para dispositivos móveis */}
                <div className="flex justify-center space-x-2 mt-4 md:hidden">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub de ${member.name}`}
                    >
                      <Github className="w-4 h-4 mr-1" aria-hidden="true" />
                      GitHub
                    </Link>
                  </Button>

                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin className="w-4 h-4 mr-1" aria-hidden="true" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
