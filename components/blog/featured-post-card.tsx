import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface FeaturedPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug?: string;
}

interface FeaturedPostCardProps {
  post: FeaturedPost;
  index: number;
}

export function FeaturedPostCard({ post, index }: FeaturedPostCardProps) {
  const href = post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Link href={href}>
        <Card className="group h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 text-black hover:bg-white">
                {post.category}
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-200 transition-colors">
                {post.title}
              </h3>
              <p className="text-white/90 text-sm line-clamp-2 mb-3">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                <span>Read More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}