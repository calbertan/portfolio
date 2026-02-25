import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Kitchen-Sink",
    description:
      "My personal homelab project, a Kubernetes cluster running a variety of self-hosted applications and services",
    image: "/project_kitchen.png",
    tags: ["Kubernetes", "Docker", "ArgoCD", "Helm", "Linux"],
    github: "https://github.com/calbertan/kitchen-sink",
  },
  {
    title: "Anon-forum",
    description:
      "A website to share you innermost, unhinged tasked anonymously, or proudly owned",
    image: "/project_anon.png",
    tags: ["Next.js", "Tailwind", "MongoDB"],
    link: "https://anon-forum.vercel.app",
    github: "https://github.com/calbertan/anon-forum",
  },
  {
    title: "Syscourse",
    description:
      "Educational resource platform hosted in GCP's Kubernetes Engine",
    image: "/project_syscourse.png",
    tags: ["GCP", "Kubernetes", "Python", "Flask"],
    github: "https://github.com/calbertan/sys-course-content-sharing-platform",
  },
  {
    title: "Cloud Hosted MERN Checklist",
    description:
      "A containerized full-stack MERN application with steps on how to deploy to Openshift",
    image: "/project_openshift.png",
    tags: ["Docker", "Openshift", "MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/calbertan/Checklist-Mern",
  },
  {
    title: "CShell",
    description:
      "A CLI that mimics the Linux/UNIX command line that allows the storing of variables and listing of directories",
    image: "/project_cshell.png",
    tags: ["C", "Linux"],
    github: "https://github.com/calbertan/CShell",
  },
  {
    title: "Weatherly",
    description:
      "A weather app complemented with a CI/CD pipeline using Github Actions",
    image: "/project_weatherly.png",
    tags: ["C", "Linux"]
  },
];


export const Projects = () => {
	return (
		<section id='projects' className="relative overflow-hidden">
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<h1 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-in text-primary">
					Projects
				</h1>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mx-auto max-w-4xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden animate-fade-in md:row-span-1 bg-muted mb-8 glow-border-muted"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
										bg-gradient-to-t from-card via-card/50
										to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									{project.link && (
										<a
											href={project.link} target="_blank"
											className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
										>
											<ArrowUpRight className="w-5 h-5" />
										</a>
									)}
                  <a
                    href={project.github} target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer text-xl font-semibold hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                  {project.link && (
                    <ArrowUpRight
                      className="w-5 h-5 
                    		text-muted-foreground hover:text-primary
                        hover:translate-x-1 
                        hover:-translate-y-1 transition-all
                        cursor-pointer"
                      onClick={() => window.open(project.link, '_blank')}
                    />
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

			</div>
		</section>
	)
}