'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/layout/container';
import { PageTransition } from '@/components/layout/page-transition';
import { FeaturedPostCard } from '@/components/blog/featured-post-card';
import { BlogCard } from '@/components/blog/blog-card';
import { Sidebar } from '@/components/sidebar/sidebar';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const featuredPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Next.js 14 App Router',
    excerpt: 'Discover the power of Next.js 14 with the new App Router, server components, and enhanced performance features.',
    category: 'Next.js',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
    excerpt: 'Learn advanced TypeScript patterns, utility types, and best practices for building scalable applications.',
    category: 'TypeScript',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Building Beautiful UIs with Tailwind CSS and Framer Motion',
    excerpt: 'Create stunning, responsive interfaces with Tailwind CSS and add smooth animations with Framer Motion.',
    category: 'UI/UX',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const latestPosts = [
  {
    id: 4,
    title: 'React Server Components: A Deep Dive',
    excerpt: 'Understanding React Server Components and how they revolutionize the way we build React applications.',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-20',
    readingTime: '8 min read',
    category: 'React',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    title: 'CSS Grid Layout: From Basics to Advanced',
    excerpt: 'Master CSS Grid with practical examples and learn how to create complex layouts with ease.',
    author: {
      name: 'Mike Chen',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-18',
    readingTime: '12 min read',
    category: 'CSS',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    title: 'Node.js Performance Optimization Techniques',
    excerpt: 'Learn essential techniques to optimize your Node.js applications for better performance and scalability.',
    author: {
      name: 'Alex Rodriguez',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-15',
    readingTime: '10 min read',
    category: 'Node.js',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    title: 'Database Design Patterns for Modern Applications',
    excerpt: 'Explore essential database design patterns and best practices for building scalable modern applications.',
    author: {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-12',
    readingTime: '15 min read',
    category: 'Database',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    title: 'GraphQL vs REST: Choosing the Right API Architecture',
    excerpt: 'Compare GraphQL and REST APIs to make informed decisions about your application architecture.',
    author: {
      name: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-10',
    readingTime: '9 min read',
    category: 'API',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    title: 'Microservices Architecture: Best Practices and Pitfalls',
    excerpt: 'Learn how to design and implement microservices architecture while avoiding common pitfalls.',
    author: {
      name: 'Lisa Wang',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    },
    publishDate: '2024-01-08',
    readingTime: '14 min read',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section with Featured Posts */}
        <section className="py-12 lg:py-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
          <Container>
            <div className="text-center space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  <span>Featured Articles</span>
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  Latest in{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Web Development
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Discover cutting-edge tutorials, insights, and best practices from industry experts.
                </p>
              </motion.div>
            </div>

            {/* Featured Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredPosts.map((post, index) => (
                <FeaturedPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </Container>
        </section>

        {/* Main Content with Sidebar */}
        <section className="py-12">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center justify-between">
                  <motion.h2 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold"
                  >
                    Latest Posts
                  </motion.h2>
                  <Link href="/blog">
                    <Button variant="outline" className="group">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Latest Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>

                {/* Load More Button */}
                <div className="text-center pt-8">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="group">
                      Load More Posts
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Sidebar />
                </motion.div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
}