import React from 'react';
import { NewsletterSignup } from './newsletter-signup';
import { TrendingPosts } from './trending-posts';
import { AdPlaceholder } from './ad-placeholder';

export function Sidebar() {
  return (
    <aside className="space-y-6">
      <NewsletterSignup />
      <TrendingPosts />
      <AdPlaceholder />
    </aside>
  );
}