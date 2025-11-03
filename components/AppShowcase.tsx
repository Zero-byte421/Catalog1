"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileCheck, FileText, Stamp, FolderOpen, CheckCircle, Activity, Package, TrendingUp, BarChart, BookOpen, Users, Award, Briefcase, UserCircle, DollarSign, Calendar, HeadphonesIcon, Smartphone, History, Clock } from "lucide-react";
import type { App } from "@/types";
import type { LucideIcon } from "lucide-react";

const featureIconMap: Record<string, LucideIcon> = {
  FileCheck, FileText, Stamp, FolderOpen, CheckCircle,
  Activity, Package, TrendingUp, BarChart,
  BookOpen, Users, Award, Briefcase,
  UserCircle, DollarSign, Calendar, HeadphonesIcon,
  Smartphone, History, Clock
};

interface AppShowcaseProps {
  app: App;
  index: number;
  reverse?: boolean;
}

export default function AppShowcase({ app, index, reverse = false }: AppShowcaseProps) {
  const handleClick = () => {
    if (app.comingSoon) {
      alert(`${app.name} akan segera hadir. Stay tuned!`);
    } else {
      window.open(app.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section 
      className="relative py-20 overflow-hidden"
      style={{ backgroundColor: app.bgColor }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {app.bgPattern === "dots" && (
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "30px 30px"
            }} 
          />
        )}
        {app.bgPattern === "circuit" && (
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "80px 80px"
            }} 
          />
        )}
        {app.bgPattern === "grid" && (
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: "linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)",
              backgroundSize: "40px 40px"
            }} 
          />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:order-2' : 'lg:order-1'} text-white`}
          >
            {/* Logo/Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{app.name.charAt(0)}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{app.name}</h2>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-semibold mb-4 text-white/90"
            >
              {app.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 mb-8 leading-relaxed"
            >
              {app.description}
            </motion.p>

            {/* Application List Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold mb-4">Application list</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {app.features.map((feature, idx) => {
                  const IconComponent = featureIconMap[feature.icon];
                  return (
                    <div key={idx} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-2">
                        {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                      </div>
                      <span className="text-sm text-white/90">{feature.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              onClick={handleClick}
              disabled={app.comingSoon}
              className={`inline-flex items-center px-8 py-4 bg-white text-lg font-semibold rounded-xl transition-all duration-300 ${
                app.comingSoon
                  ? "bg-white/30 text-white/60 cursor-not-allowed"
                  : "bg-white hover:bg-white/90 hover:scale-105 hover:shadow-2xl"
              }`}
              style={{ color: app.comingSoon ? 'white' : app.bgColor }}
            >
              {app.comingSoon ? (
                "Coming Soon"
              ) : (
                <>
                  Buka Aplikasi
                  <ExternalLink className="ml-2 w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Mockup/Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative">
              {/* Browser Window Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Header */}
                <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                    {app.url !== "#coming-soon" ? app.url : `${app.name.toLowerCase()}.telkominfra.com`}
                  </div>
                </div>
                {/* Screenshot Placeholder */}
                <div 
                  className="aspect-video flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${app.bgColor}15, ${app.bgColor}30)`
                  }}
                >
                  <div className="text-center p-8">
                    <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${app.color} rounded-3xl flex items-center justify-center`}>
                      <span className="text-4xl font-bold text-white">{app.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{app.name}</h3>
                    <p className="text-gray-600">Application Preview</p>
                  </div>
                </div>
              </div>

              {/* Coming Soon Badge */}
              {app.comingSoon && (
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-6 py-2 rounded-full font-bold shadow-lg transform rotate-12">
                  Coming Soon
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
