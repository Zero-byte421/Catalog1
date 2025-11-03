"use client";

import { motion } from "framer-motion";
import AppShowcase from "./AppShowcase";
import appsData from "@/data/apps.json";
import type { App } from "@/types";

export default function ApplicationList() {
  const apps = appsData as App[];

  return (
    <section id="applications" className="bg-white">
      {/* Section Title */}
      <div className="py-20 bg-[--color-background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[--color-text-primary] mb-4">
              Aplikasi Internal
            </h2>
            <p className="text-lg text-[--color-text-secondary] max-w-2xl mx-auto">
              Akses semua aplikasi yang Anda butuhkan untuk bekerja lebih efisien
            </p>
          </motion.div>
        </div>
      </div>

      {/* Application Showcases - Alternating Layout */}
      {apps.map((app, index) => (
        <AppShowcase 
          key={app.id} 
          app={app} 
          index={index} 
          reverse={index % 2 !== 0} 
        />
      ))}

      {/* SSO Section */}
      <div className="py-20 bg-[--color-background]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-hover] rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Single Sign-On (SSO)
            </h3>
            <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
              Securely access your account with Single Sign-On (SSO). One login for all your
              services — fast, safe, and seamless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
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
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
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
                <span>Fast</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <svg
                  className="w-5 h-5"
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
                <span>Seamless</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
