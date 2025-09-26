import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap } from 'lucide-react';

export function AdPlaceholder() {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
      <CardContent className="p-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
            <Zap className="h-8 w-8 text-white" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-100">
              Boost Your Skills
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-200">
              Master modern web development with our comprehensive courses and tutorials.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-300">
              <span>✨ Interactive Learning</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-300">
              <span>🎯 Real-world Projects</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-300">
              <span>🏆 Industry Certification</span>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
              <span>Learn More</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <p className="text-xs text-blue-500 dark:text-blue-400">
            Advertisement
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
}