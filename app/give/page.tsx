"use client";

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';

export default function Give() {
  const [activeTab, setActiveTab] = useState('tithe');
  const [income, setIncome] = useState('');
  const titheAmount = income ? (parseFloat(income) * 0.1).toFixed(2) : '0.00';

  return (
    <main className="min-h-screen pt-16">
      <Header />

      {/* Hero Section with Background Image */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/give-hero.jpg"
            alt="Giving background"
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
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Give to Our Ministry</h1>
            <p className="text-xl opacity-90">
              Support our mission to spread God's love and make a difference in our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-2">
              <TabButton active={activeTab === 'tithe'} onClick={() => setActiveTab('tithe')}>
                Tithe
              </TabButton>
              <TabButton active={activeTab === 'offering'} onClick={() => setActiveTab('offering')}>
                Offering
              </TabButton>
              <TabButton active={activeTab === 'donation'} onClick={() => setActiveTab('donation')}>
                Donation
              </TabButton>
            </div>
          </div>

          {/* Tithe Section */}
          {activeTab === 'tithe' && (
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Pay Your Tithe
                  </h2>
                  <TitheCalculator income={income} setIncome={setIncome} titheAmount={titheAmount} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    
                  </h2>
                  <TitheForm titheAmount={titheAmount} />
                </div>
              </div>
            </div>
          )}

          {/* Offering Section */}
          {activeTab === 'offering' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                Give an Offering
              </h2>
              <OfferingForm />
            </div>
          )}

          {/* Donation Section */}
          {activeTab === 'donation' && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">
                Make a Donation
              </h2>
              <DonationForm />
            </div>
          )}
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
              Other Ways to Give
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Bank Transfer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Bank: Standard Bank<br />
                  Account Name: Tabernacle of Grace Fellowship<br />
                  Account Number: XXXX XXXX XXXX<br />
                  Branch Code: XXXXX
                </p>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  In Person
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  You can also give during our Sunday services or visit our church office during the week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {children}
    </button>
  );
}

function TitheCalculator({ 
  income, 
  setIncome, 
  titheAmount 
}: { 
  income: string; 
  setIncome: (value: string) => void; 
  titheAmount: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
    >
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">
          Enter your income (ZAR)
        </label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          placeholder="0.00"
        />
      </div>
      <div className="bg-gray-50 dark:bg-gray-600 p-4 rounded">
        <p className="text-gray-600 dark:text-gray-300">Your tithe (10%):</p>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          R {titheAmount}
        </p>
      </div>
    </motion.div>
  );
}

function TitheForm({ titheAmount }: { titheAmount: string }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prayerRequest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle PayFast integration here
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Tithe Amount (ZAR)</label>
        <div className="form-input bg-gray-50 dark:bg-gray-800 flex items-center">
          <span className="text-gray-600 dark:text-gray-300">R {titheAmount}</span>
        </div>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Prayer Request (Optional)</label>
        <textarea
          value={formData.prayerRequest}
          onChange={(e) => setFormData({ ...formData, prayerRequest: e.target.value })}
          className="form-input"
          rows={4}
        />
      </div>
      <button type="submit" className="btn w-full">Pay Tithe</button>
    </motion.form>
  );
}

function OfferingForm() {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    prayerRequest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle PayFast integration here
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Amount (ZAR)</label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Prayer Request (Optional)</label>
        <textarea
          value={formData.prayerRequest}
          onChange={(e) => setFormData({ ...formData, prayerRequest: e.target.value })}
          className="form-input"
          rows={4}
        />
      </div>
      <button type="submit" className="btn w-full">Give Offering</button>
    </motion.form>
  );
}

function DonationForm() {
  const [formData, setFormData] = useState({
    amount: '',
    isAnonymous: false,
    name: '',
    email: '',
    prayerRequest: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle PayFast integration here
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg space-y-6"
    >
      <div>
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Amount (ZAR)</label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
          className="form-input"
          required
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="anonymous"
          checked={formData.isAnonymous}
          onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
        />
        <label htmlFor="anonymous" className="ml-2 text-gray-700 dark:text-gray-300">
          Make this donation anonymous
        </label>
      </div>
      {!formData.isAnonymous && (
        <>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="form-input"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Prayer Request (Optional)</label>
            <textarea
              value={formData.prayerRequest}
              onChange={(e) => setFormData({ ...formData, prayerRequest: e.target.value })}
              className="form-input"
              rows={4}
            />
          </div>
        </>
      )}
      <button type="submit" className="btn w-full">Make Donation</button>
    </motion.form>
  );
} 