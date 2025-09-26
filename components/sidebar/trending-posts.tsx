import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Eye } from 'lucide-react';

const trendingPosts = [
  {
    id: 1,
    title: 'The Future of Web Development in 2024',
    category: 'Technology',
    views: '12.5k',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Mastering React Server Components',
    category: 'React',
    views: '8.2k',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox: When to Use What',
    category: 'CSS',
    views: '6.8k',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    title: 'Building Scalable APIs with Node.js',
    category: 'Backend',
    views: '5.4k',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export function TrendingPosts() {
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <TrendingUp className="h-5 w-5 text-orange-500" />
          Trending Posts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Link href={`/blog/${post.id}`}>
              <div className="flex gap-3 group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-1 -left-1 w-5 h-5 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <Badge variant="outline" className="text-xs mb-1">
                    {post.category}
                  </Badge>
                  <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors mb-1">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{post.views} views</span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
}