'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:hello@yoursite.com', icon: Mail },
];

const footerLinks = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Categories', href: '/categories' },
    { name: 'Tags', href: '/tags' },
  ],
  'Resources': [
    { name: 'Authors', href: '/authors' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy', href: '/privacy' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
              >
                <BookOpen className="h-4 w-4" />
              </motion.div>
              <span className="font-bold">Your Site Name</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A modern blog platform built with Next.js, sharing insights on web development, technology, and more.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link key={social.name} href={social.href}>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{social.name}</span>
                      </Button>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest posts delivered right to your inbox.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="sm" className="w-full">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Site Name. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}