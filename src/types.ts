/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface Activity {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  summary: string;
  content: string;
  imageUrl: string;
  readTime: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
