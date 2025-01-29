"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen pt-16">
      <Header />

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  className="w-10 h-10 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              
              <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                Thank You for Your Donation!
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Your generous contribution will help us continue our mission and make a difference in our community.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                <p className="text-blue-800 dark:text-blue-200">
                  "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
                </p>
                <p className="text-blue-600 dark:text-blue-300 mt-2">
                  - 2 Corinthians 9:7
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  A confirmation email has been sent to your inbox with the details of your donation.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  If you have any questions, please don't hesitate to contact us.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-outline"
              >
                Return Home
              </Link>
              <Link
                href="/contact"
                className="btn"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
              Ways to Get Involved
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Join Our Community
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Become part of our church family and participate in our various ministries and activities.
                </p>
                <Link
                  href="/events"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Upcoming Events →
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Volunteer
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Share your time and talents by volunteering in our various outreach programs.
                </p>
                <Link
                  href="/contact"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn More →
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 