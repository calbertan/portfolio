'use client';

import { Button } from '../components/Button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
	{href: '#projects', label: 'Projects'},
	{href: '#experience', label: 'Experience'},
]

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<header className="fixed top-0 left-0 right-0 bg-background py-2 z-50 border-b-1 border-muted">
			<nav className="container mx-auto px-6 flex items-center justify-between">
				<a href='#' className="hover:opacity-80 transition-opacity">
					<img src="/favicon.png" alt="Logo" className="h-12 w-12" />
				</a>


				{/* Desktop Nav */}
				<div className="hidden md:flex items-center gap-1">
					<div className="px-2 p-1 flex items-center gap-2">
						{navLinks.map((link, index) => (
							<a href={link.href} key={index} className="px-4 py-2 text-sm hover:text-primary">
								{link.label}
							</a>
						))}
					</div>
				</div>


				<div className="hidden md:block">
					<a href="mailto:christopher.albertan@gmail.com">
						<Button size="sm">Get in touch</Button>
					</a>
				</div>

				{/* Mobile Nav */}
				<button className='cursor-pointer md:hidden text-foreground' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

			</nav>

			{/* Mobile menu */}
			{isMobileMenuOpen && (
				<div className='md:hidden animate-fade-in'>
					<div className="container mx-auto px-6 pt-2 flex flex-col gap-4">
						{navLinks.map((link, index) => (
							<a href={link.href} key={index} className="text-lg text-foreground hover:text-primary border-t border-muted pt-4 hover:border-muted">
								{link.label}
							</a>
						))}

						<a href="mailto:christopher.albertan@gmail.com">
							<Button size="sm">Get in touch</Button>
						</a>
					</div>
				</div>
			)}

		</header>
	);
}