const experiences = [
  {
    period: "May 2024 - Dec 2024",
    role: "Cloud DevOps Engineer Co-op",
    company: "Samsung Electronics",
    description:
      "",
    techstack: ["Terraform", "AWS", "Kubernetes", "ArgoCD", "Helm", "Python"],
    current: true,
  },
  {
     period: "May 2023 - Dec 2023",
    role: "DevOps Specialist Co-op",
    company: "BCGov, Cloud Services Branch",
    description:
      "",
    techstack: ["Openshift", "Docker", "Ansible", "Github Actions", "Tekton", "Typescript", "React"],
    current: true,
  },
];

export const Experience = () => {
	return (
	<section id="experience" className="py-4 relative overflow-hidden">
		<div className="container mx-auto px-6 pb-32 relative z-10 max-w-5xl">
			{/* header */}
			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-xl mb-16">
					<span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
						Experience
					</span>
					<h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
						Be a part of my career journey
					</h2>
				</div>
			</div>
			
			{/* timeline */}
			<div className="relative">
				<div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2" />

				{/* experience */}
				<div className="space-y-12">
					{experiences.map((exp, idx) =>
						<div key={idx} className="relative grid md:grid-cols-2 gap-8 animate-fade-in">

							{/* timeline dot */}
							<div className="absolute"></div>

							{/* content */}
						  <div className={`pl-12 md:px-8 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}`}>
								<div className="bg-muted p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
									<span className="text-sm text-secondary font-medium">{exp.period}</span>
									<h3 className="text-sm font-semibold mt-1">{exp.role}</h3>
									<p className="">{exp.company}</p>
									<p className="">{exp.description}</p>
									<div className={`flex flex-wrap gap-2 mt-1 ${
											idx % 2 === 0 ? "md:justify-end": ""
										}`}
									>
										{exp.techstack.map((tech, techIdx) => 
										<span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full bg-secondary text-background">
											{tech}
										</span>
									)}
									</div>
								</div>
							</div>

						</div>
					)}
				</div>

			</div>

		</div>
	</section>
	)
}