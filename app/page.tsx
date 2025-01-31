"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/hero-bg.jpg',
      title: 'Tabernacle of Grace Fellowship',
      subtitle: 'A place of worship and spiritual growth'
    },
    {
      image: '/hero-bg-2.jpg',
      title: 'Join Our Community',
      subtitle: 'Experience the love of Christ together'
    },
    {
      image: '/hero-bg-3.jpg',
      title: 'Grow Your Faith',
      subtitle: 'Deepen your relationship with God'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{ y }}
          >
            <Image
              src={slides[currentSlide].image}
              alt="Church background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-blue-900/40" />
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="relative z-10 text-center text-white px-4"
          style={{ opacity }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 className="text-5xl md:text-6xl font-bold mb-6">
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p className="text-xl md:text-2xl mb-8">
                {slides[currentSlide].subtitle}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          
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
        </motion.div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Daily Bible Verse Section */}
      <section className="py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Daily Bible Verse</h2>
            <blockquote className="text-xl italic text-gray-600 dark:text-gray-300">
              &ldquo;For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.&rdquo;
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
