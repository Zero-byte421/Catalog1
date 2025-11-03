"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, RefreshCw, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard Terpusat",
    description: "Akses semua aplikasi internal dari satu dashboard yang intuitif dan mudah digunakan.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Sync",
    description: "Data tersinkronisasi secara otomatis di semua perangkat dan platform Anda.",
  },
  {
    icon: Sparkles,
    title: "Personalized Experience",
    description: "Pengalaman yang dipersonalisasi sesuai dengan role dan kebutuhan Anda.",
  },
  {
    icon: Shield,
    title: "Fast & Secure",
    description: "Keamanan tingkat enterprise dengan performa yang cepat dan responsif.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-primary] mb-4">
            Your Everyday Companion
          </h2>
          <p className="text-lg text-[--color-text-secondary] max-w-2xl mx-auto">
            Platform yang dirancang untuk meningkatkan produktivitas dan efisiensi kerja Anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[--color-divider] rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-[--color-primary]" />
              </div>
              <h3 className="text-xl font-semibold text-[--color-text-primary] mb-2">
                {feature.title}
              </h3>
              <p className="text-[--color-text-secondary]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
