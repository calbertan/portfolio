'use client';

import { Button } from '../components/Button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useRef } from 'react';

export const About = () => {
	const [showEmail, setShowEmail] = useState(false);
	const email = 'christopher.albertan@gmail.com';
	const timeoutRef = useRef(null);

	const handleMouseLeave = () => {
		const selection = window.getSelection().toString();
		if (selection.length > 0) {
			return;
		}
		timeoutRef.current = setTimeout(() => {
			setShowEmail(false);
		}, 500);
	};

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setShowEmail(true);
	};

	return (
		<section className="mx-auto max-w-4xl relative min-h-screen flex items-center overflow-hidden">
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					
					{/* Left Column */}
					<div className="space-y-4 mx-auto">
						{/* Tag */}
						<div className="animate-fade-in">
							<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-primary text-background">
								<span className="w-2 h-2 bg-background rounded-full animate-pulse "/>
									Software Engineer · DevOps Specialist 
							</span>
						</div>

						{/* About */}
						<div>
							<h1 className="pb-2 text-2xl lg:text-3xl leading-tight animate-fade-in animation-delay-100">
								Hi! 
								<br/>
								I'm <span className="text-primary">Chris</span>topher Albert Tan
							</h1>
							<p className="pb-2 text-md max-w-lg animate-fade-in animation-delay-300">
								My journey started when I worked as a DevOps Specialist for the Cloud Services
								branch of the BC Government. Getting hands-on with enterprise cloud platforms
								and automation as my introduction to the industry was an experience that reshaped
								my trajectory and sparked my passion for DevOps.
							</p>
							<p className="pb-2 text-md max-w-lg animate-fade-in animation-delay-400">
								As an ongoing hobby project, I am currently doing a deep dive into Kubernetes, 
								exploring its architecture and automating deployments within my homelab to host 
								and manage services.
							</p>
							<p className="text-md max-w-lg animate-fade-in animation-delay-500">
								Other sidequests include bouldering, Pump-it-up, and playing the piano :) 
							</p>
						</div>

						{/* Buttons */}
						<div className="animate-fade-in animation-delay-600">
							<a href="/Resume_Christopher_Tan.pdf" download>
								<Button size='default'>
									Resume <Download className="w-5 h-5"/>
								</Button>
							</a>
						</div>

						{/* Socials */}
						<div>
							<div className="relative inline-block">
								<span>
									The best way to reach me is through {' '}
									<span 
										className="text-primary font-bold cursor-pointer relative inline-block "
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
									>
										<a href={`mailto:${email}`} className="text-primary font-bold cursor-pointer"
										>
											email
										</a>
										<div
											className={`
												absolute bottom-full left-1/2 -translate-x-1/2 mb-2
												bg-primary text-background px-3 py-2 rounded
												whitespace-nowrap text-sm z-50 cursor-text
												transition-all duration-300 ease-in-out
												${showEmail
													? "opacity-100 translate-y-0 pointer-events-auto"
													: "opacity-0 translate-y-2 pointer-events-none"}
											`}
										>
											{email}
											<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-primary border-t-primary border-r-transparent border-b-transparent border-l-transparent" />
										</div>
									</span>
								</span>
							</div>
							<div className="flex items-center gap-4 animate-fade-in animation-delay-700">
								{[
									{icon: Github, href: 'https://github.com/calbertan', target:'_blank'},
									{icon: Linkedin, href: 'https://www.linkedin.com/in/calbertan/', target:'_blank'},
									{icon: Mail, href: 'mailto:christopher.albertan@gmail.com', target:''}
								].map((social, index, target) => (
								<a key={index} href={social.href} className='text-foreground hover:text-primary hover:scale-125 transition-all duration-300' target={social.target}>
										{<social.icon className='w-5 h-5 mt-2'/>}
									</a>
								))}
							</div>
						</div>

					</div>

					{/* right column */}
					<div className='relative animate-fade-in animation-delay-800'>
						<div className='relative max-w-md mx-auto p-2'>
								<img src='/me.png' alt="Christopher Albert Tan" className='w-full aspect-[4/5] object-cover rounded-2xl glow-border'/>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
}