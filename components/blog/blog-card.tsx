import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishDate: string;
  readingTime: string;
  category: string;
  image: string;
  slug?: string;
}

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'compact';
}

export function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const href = post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`;

  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Link href={href}>
          <Card className="group hover:shadow-md transition-all cursor-pointer">
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Badge variant="secondary" className="text-xs mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <Clock className="h-3 w-3 ml-1" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href}>
        <Card className="h-full group hover:shadow-lg transition-all cursor-pointer">
          <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-xs">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
            </div>
            <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="line-clamp-3">
              {post.excerpt}
            </CardDescription>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="text-xs">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}