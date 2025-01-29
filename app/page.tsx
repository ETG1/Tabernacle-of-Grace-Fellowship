"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Church background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-900/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Tabernacle of Grace Fellowship
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            A place of worship and spiritual growth
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#services"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Join Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Daily Bible Verse Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Daily Bible Verse</h2>
            <blockquote className="text-xl italic text-gray-600 dark:text-gray-300">
              "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
            </blockquote>
            <p className="mt-4 text-gray-500 dark:text-gray-400">John 3:16</p>
          </div>
        </div>
      </section>

      {/* Service Schedule Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Sunday Service Schedule</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ServiceCard
              title="Morning Prayer"
              time="9:00 AM"
              description="Start your day with prayer and meditation"
            />
            <ServiceCard
              title="Main Service"
              time="10:00 AM"
              description="Sunday worship service with praise and teaching"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ title, time, description }: { title: string; time: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{time}</p>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
