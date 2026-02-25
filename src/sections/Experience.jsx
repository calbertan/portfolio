'use client';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const experiences = [
  {
    period: "May 2024 - Dec 2024",
    role: "Cloud DevOps Engineer Co-op",
    company: "Samsung Electronics",
    description:[
			"Leveraged Terraform to destroy legacy clusters and migrate workloads to a newer Amazon EKS environment, ensuring zero downtime by maintaining network components",
			"Developed proof-of-concept applications for multiple Keycloak installations on a local cluster using Minikube",
			"Provisioned Karpenter using Helm charts to automate and scale Kubernetes node management",
			"Implemented monitoring tools using AWS Canary to enhance tracking performance and availability",
			"Built a GitHub Actions pipeline to automate Trivy security scans and deploy applications to Amazon EKS"
		],
    techstack: ["Terraform", "AWS", "Kubernetes", "ArgoCD", "Helm", "Python"],
    current: true,
  },
  {
     period: "May 2023 - Dec 2023",
    role: "DevOps Specialist Co-op",
    company: "BCGov, Cloud Services Branch",
    description:[
			"Created a CI/CD pipeline using Tekton to onboard developers learning OpenShift",
			"Simplified CRUD functionality for Red Hat Advanced Cluster Security (ACS) using Ansible playbook scripts",
			"Designed a multi-stage Dockerfile and CI pipeline to automate container image creation",
			"Developed a registry application using Next.js and TypeScript to visualize services across multiple environments",
			"Created an API endpoint using CHES and Axios to send emails generated with react-email"
		],
    techstack: ["Openshift", "Docker", "Ansible", "Github Actions", "Tekton", "Typescript", "React"],
    current: true,
  },
];

export const Experience = () => {
	const [expandedIdx, setExpandedIdx] = useState(null);
	return (
	<section id="experience" className="py-4 relative overflow-hidden">
		<div className="container mx-auto px-6 pb-16 relative z-10 max-w-4xl">
			{/* header */}
			<div className="container mx-auto md:px-4 relative z-10">
				<div className="max-w-xl mb-12">
					<span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
						Experience
					</span>
					<h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
						Be a part of my journey
					</h2>
				</div>
			</div>
			
			{/* timeline */}
			<div className="relative">
				<div className="timeline-glow absolute left-2 md:left-1/8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2" />

				{/* experience */}
				<div className="space-y-12">
					{experiences.map((exp, idx) =>
						<div key={idx} className="relative grid gap-8 animate-fade-in">

							{/* timeline dot */}
							<div className="absolute"></div>

							{/* content */}
						  {/* <div className={`pl-12 md:px-8 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:col-start-2 md:pl-8'}`}> */}
						  <div className="max-w-lg pl-12 md:pl-48 md:max-w-2xl">	
								<div className="bg-muted p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
									<span className="text-sm text-secondary font-medium">{exp.period}</span>
									<h3 className="text-md font-semibold">{exp.role}</h3>
									<div className="flex items-center justify-between mb-4">
										<p className="text-sm">{exp.company}</p>
										<button
											onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
											className="hover:opacity-75 transition-opacity"
										>
											<ChevronRight 
												className={`cursor-pointer w-4 h-4 transition-transform duration-300 ${expandedIdx === idx ? 'rotate-90' : ''}`}
											/>
										</button>
									</div>
									
									{/* Description dropdown */}
									{expandedIdx === idx && (
										<div className="text-sm mb-4 ml-4 animate-fade-in">
											{exp.description.map((item, i) => (
												<p key={i} className="mb-3">• {item}</p>
											))}
										</div>
									)}
									
									<div className="flex flex-wrap gap-2 mt-4">
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