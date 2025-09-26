'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CircleCheck as CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    toast.success('Successfully subscribed to newsletter!');
    setEmail('');
  };

  return (
    <Card className="sticky top-4">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
          {isSubscribed ? (
            <CheckCircle className="h-6 w-6 text-green-600" />
          ) : (
            <Mail className="h-6 w-6 text-primary" />
          )}
        </div>
        <CardTitle className="text-lg">
          {isSubscribed ? 'Thank You!' : 'Stay Updated'}
        </CardTitle>
        <CardDescription>
          {isSubscribed 
            ? 'You\'ll receive our latest posts in your inbox.'
            : 'Get the latest posts delivered straight to your inbox.'
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </motion.div>
            <p className="text-xs text-muted-foreground text-center">
              No spam, unsubscribe at any time.
            </p>
          </form>
        ) : (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="h-8 w-8 text-green-600" />
            </motion.div>
            <Button 
              variant="outline" 
              onClick={() => setIsSubscribed(false)}
              className="w-full"
            >
              Subscribe Another Email
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}