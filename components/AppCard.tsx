"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileCheck, Radio, Lightbulb, User, Clock } from "lucide-react";
import type { App } from "@/types";

const iconMap = {
  FileCheck,
  Radio,
  Lightbulb,
  User,
  Clock,
};

interface AppCardProps {
  app: App;
  index: number;
}

export default function AppCard({ app, index }: AppCardProps) {
  const IconComponent = iconMap[app.icon];

  const handleClick = () => {
    if (app.comingSoon) {
      alert(`${app.name} akan segera hadir. Stay tuned!`);
    } else {
      window.open(app.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative bg-white rounded-2xl border border-[--color-divider] overflow-hidden hover:shadow-xl hover:shadow-blue-100 transition-all duration-300"
    >
      {/* Gradient Header */}
      <div className={`h-32 bg-gradient-to-br ${app.color} relative overflow-hidden`}>
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          {app.bgPattern === "dots" && (
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }} />
          )}
          {app.bgPattern === "circuit" && (
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px"
            }} />
          )}
          {app.bgPattern === "grid" && (
            <div className="absolute inset-0" style={{
              backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "25px 25px"
            }} />
          )}
        </div>

        {/* Icon */}
        <div className="absolute bottom-4 left-6">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <IconComponent className={`w-8 h-8 bg-gradient-to-br ${app.color} bg-clip-text text-transparent`} style={{
              filter: "drop-shadow(0 0 8px rgba(11, 99, 209, 0.3))"
            }} />
          </div>
        </div>

        {/* Coming Soon Badge */}
        {app.comingSoon && (
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-semibold px-3 py-1 rounded-full">
              Coming Soon
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-[--color-text-primary] mb-2 group-hover:text-[--color-primary] transition-colors">
          {app.name}
        </h3>
        <p className="text-[--color-text-secondary] text-sm mb-6 line-clamp-3">
          {app.description}
        </p>

        {/* Action Button */}
        <button
          onClick={handleClick}
          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            app.comingSoon
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-[--color-primary] text-white hover:bg-[--color-primary-hover] hover:shadow-lg hover:scale-105"
          }`}
          disabled={app.comingSoon}
        >
          {app.comingSoon ? (
            "Coming Soon"
          ) : (
            <>
              Buka Aplikasi
              <ExternalLink className="ml-2 w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
