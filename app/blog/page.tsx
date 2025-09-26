'use client';

import React from 'react';
import { Container } from '@/components/layout/container';
import { PageTransition } from '@/components/layout/page-transition';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14 App Router',
    description: 'Learn how to build modern web applications with Next.js 14 and the new App Router architecture.',
    author: 'John Doe',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    tags: ['Next.js', 'React', 'TypeScript'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    title: 'Mastering TypeScript: Advanced Patterns',
    description: 'Explore advanced TypeScript patterns and techniques to write better, more maintainable code.',
    author: 'Jane Smith',
    date: '2024-01-12',
    readTime: '12 min read',
    category: 'Programming',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    title: 'Building Responsive UIs with Tailwind CSS',
    description: 'Create beautiful, responsive user interfaces efficiently using Tailwind CSS utility classes.',
    author: 'Mike Johnson',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Design',
    tags: ['Tailwind CSS', 'CSS', 'UI/UX'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function BlogPage() {
  return (
    <PageTransition>
      <Container className="py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Blog Posts
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Discover the latest articles, tutorials, and insights from our team of developers and tech enthusiasts.
            </motion.p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4 ml-2" />
                      <span>{post.readTime}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {post.category}
                    </Badge>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="line-clamp-3">
                      {post.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="group">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}