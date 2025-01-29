"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="About us background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-600/20" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
            <p className="text-xl opacity-90">
              To spread the love of Christ, build a strong community of believers, and make a positive impact in our local community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Our Vision</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              To spread the love of Christ, build a strong community of believers, and make a positive impact in our local community through service and outreach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <MissionCard
              title="Worship"
              description="Creating an atmosphere of genuine worship where people can encounter God's presence"
            />
            <MissionCard
              title="Community"
              description="Building strong relationships and supporting one another in faith and life"
            />
            <MissionCard
              title="Service"
              description="Reaching out to our community with the love of Christ through practical service"
            />
          </div>
        </div>
      </section>

      {/* Church History Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote={`&ldquo;This church has become my second home. The community here is truly special.&rdquo;`}
              author="Sarah M."
            />
            <TestimonialCard
              quote={`&ldquo;The teaching here has transformed my understanding of God's word and deepened my faith.&rdquo;`}
              author="John D."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function MissionCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}

function Timeline() {
  const events = [
    { year: '2010', description: 'Foundation of Tabernacle of Grace Fellowship' },
    { year: '2015', description: 'Moved to our current location' },
    { year: '2018', description: 'Started community outreach programs' },
    { year: '2020', description: 'Launched online services' },
    { year: '2023', description: 'Expanded youth ministry' },
  ];

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center gap-4"
        >
          <div className="w-24 text-right font-bold text-blue-600 dark:text-blue-400">
            {event.year}
          </div>
          <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />
          <div className="flex-1 p-4 bg-white dark:bg-gray-700 rounded-lg shadow">
            {event.description}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
    >
      <blockquote className="text-lg italic mb-4 text-gray-600 dark:text-gray-300">
        "{quote}"
      </blockquote>
      <p className="font-medium text-gray-800 dark:text-white">- {author}</p>
    </motion.div>
  );
} 