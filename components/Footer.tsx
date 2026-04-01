"use client"

import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              NeuraBay
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              AI-powered digital solutions for modern businesses. 
              We transform ideas into scalable products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/technologies" className="text-gray-400 hover:text-white transition-colors">Technologies</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">E-commerce</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>hello@neurabay.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          © 2024 NeuraBay. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

