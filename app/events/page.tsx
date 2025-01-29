"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';

interface Event {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Sunday Service',
      date: 'Every Sunday',
      time: '10:00 AM',
      description: 'Join us for our weekly Sunday service filled with worship and teaching.',
      location: 'Main Sanctuary'
    },
    {
      title: 'Youth Conference',
      date: 'June 15-17, 2024',
      time: '9:00 AM - 5:00 PM',
      description: 'Three days of worship, teaching, and fellowship for young people.',
      location: 'Church Hall'
    },
    {
      title: 'Prayer Meeting',
      date: 'Every Wednesday',
      time: '6:30 PM',
      description: 'Mid-week prayer meeting for spiritual growth and community.',
      location: 'Prayer Room'
    },
    {
      title: 'Community Outreach',
      date: 'Last Saturday of every month',
      time: '8:00 AM - 12:00 PM',
      description: 'Serving our local community through various outreach programs.',
      location: 'Various Locations'
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/events-hero.jpg"
            alt="Events background"
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
            <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl opacity-90">Join us in worship, fellowship, and community service</p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Want to join us in service?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contact us for any of our upcoming events to get more information
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </main>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {event.title}
          </h3>
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
            {event.time}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {event.description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <span>📅 {event.date}</span>
          <span>📍 {event.location}</span>
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 dark:bg-gray-600">
        <button className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
          Learn More →
        </button>
      </div>
    </motion.div>
  );
} 