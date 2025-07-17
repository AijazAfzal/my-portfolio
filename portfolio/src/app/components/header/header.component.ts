import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold text-white">
            <span class="text-purple-400">YN</span> Portfolio
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#experience" class="nav-link">Experience</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#education" class="nav-link">Education</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <button class="md:hidden text-white">
            <div class="menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen bg-gray-900 text-white relative overflow-hidden flex items-center">
      <!-- Animated Background Elements -->
      <div class="absolute inset-0">
        <div class="floating-element floating-element-1"></div>
        <div class="floating-element floating-element-2"></div>
        <div class="floating-element floating-element-3"></div>
      </div>
      
      <!-- Hand Gestures -->
      <div class="absolute top-20 left-10 hand-gesture hand-left">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M15 25C15 20 18 15 25 15C32 15 35 20 35 25V35" stroke="#8B5CF6" stroke-width="3" fill="none"/>
          <path d="M35 35C35 30 38 25 45 25C52 25 55 30 55 35V45" stroke="#8B5CF6" stroke-width="3" fill="none"/>
          <circle cx="20" cy="20" r="8" fill="#F59E0B"/>
        </svg>
      </div>
      
      <div class="absolute bottom-20 right-10 hand-gesture hand-right">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M45 25C45 20 42 15 35 15C28 15 25 20 25 25V35" stroke="#8B5CF6" stroke-width="3" fill="none"/>
          <path d="M25 35C25 30 22 25 15 25C8 25 5 30 5 35V45" stroke="#8B5CF6" stroke-width="3" fill="none"/>
          <circle cx="40" cy="20" r="8" fill="#10B981"/>
        </svg>
      </div>
    
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="max-w-4xl">
          <div class="space-y-8">
            <!-- Main Heading -->
            <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span class="block opacity-0 animate-slide-up" style="animation-delay: 0.2s">crafting digital</span>
              <span class="block opacity-0 animate-slide-up" style="animation-delay: 0.4s">experiences with</span>
              <span class="block text-purple-400 opacity-0 animate-slide-up" style="animation-delay: 0.6s">modern tech</span>
              <span class="block opacity-0 animate-slide-up" style="animation-delay: 0.8s">is my calling.</span>
            </h1>
            
            <!-- Subtitle -->
            <p class="text-xl text-gray-400 max-w-2xl opacity-0 animate-fade-in" style="animation-delay: 1s">
              Full-Stack Developer specializing in .NET, Angular, and Azure Cloud Services
            </p>
            
            <!-- CTA Button -->
            <div class="opacity-0 animate-fade-in" style="animation-delay: 1.2s">
              <a href="#experience" class="cta-button group">
                <span>VIEW PROJECTS</span>
                <div class="arrow-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div class="scroll-line"></div>
        <div class="scroll-text">SCROLL</div>
      </div>
    </section>
  `,
  styles: [`
    .nav-link {
      @apply text-gray-300 hover:text-white font-medium transition-all duration-300 relative;
      font-size: 14px;
      letter-spacing: 0.5px;
    }
    
    .nav-link:hover::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 1px;
      background: #8B5CF6;
    }

    .menu-icon {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .menu-icon span {
      width: 20px;
      height: 2px;
      background: white;
      transition: all 0.3s;
    }

    .floating-element {
      position: absolute;
      background: linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1));
      border-radius: 50%;
      animation: float 8s ease-in-out infinite;
    }

    .floating-element-1 {
      width: 100px;
      height: 100px;
      top: 30%;
      left: 20%;
      animation-delay: 0s;
    }

    .floating-element-2 {
      width: 60px;
      height: 60px;
      top: 60%;
      right: 30%;
      animation-delay: 3s;
    }

    .floating-element-3 {
      width: 80px;
      height: 80px;
      bottom: 40%;
      left: 60%;
      animation-delay: 6s;
    }

    .hand-gesture {
      animation: handFloat 4s ease-in-out infinite;
    }

    .hand-left {
      animation-delay: 0s;
    }

    .hand-right {
      animation-delay: 2s;
    }

    .progress-circle {
      animation: rotate 10s linear infinite;
    }

    .progress-bar {
      animation: progressFill 3s ease-in-out infinite;
    }

    .cta-button {
      @apply inline-flex items-center space-x-3 bg-transparent border border-gray-600 
             text-white px-8 py-4 font-medium tracking-wider text-sm
             hover:border-purple-400 hover:text-purple-400 transition-all duration-300;
      letter-spacing: 2px;
    }

    .arrow-icon {
      @apply transform group-hover:translate-x-1 transition-transform duration-300;
    }

    .scroll-indicator {
      @apply flex flex-col items-center space-y-2;
    }

    .scroll-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, transparent, #8B5CF6, transparent);
      animation: scrollLine 2s ease-in-out infinite;
    }

    .scroll-text {
      @apply text-xs text-gray-500 tracking-widest;
      writing-mode: vertical-rl;
      letter-spacing: 3px;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
      50% { transform: translateY(-30px) rotate(180deg); opacity: 0.6; }
    }

    @keyframes handFloat {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    @keyframes progressFill {
      0% { stroke-dashoffset: 220; }
      50% { stroke-dashoffset: 66; }
      100% { stroke-dashoffset: 220; }
    }

    @keyframes scrollLine {
      0%, 100% { opacity: 0; }
      50% { opacity: 1; }
    }

    .animate-slide-up {
      animation: slideUp 1s ease-out forwards;
    }

    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
    }

    @keyframes slideUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  ngOnInit() {
    // Add any initialization logic here
  }
}