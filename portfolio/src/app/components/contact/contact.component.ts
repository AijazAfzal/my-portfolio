import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-32 bg-gray-800 text-white relative overflow-hidden">
      
      <div class="container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <div class="w-20 h-px bg-purple-400 mx-auto"></div>
        </div>
        
        <div class="max-w-2xl mx-auto text-center">
          <p class="text-xl mb-16 text-gray-300 leading-relaxed">
            I'm always interested in new opportunities and challenging projects. 
            Let's connect and discuss how we can work together!
          </p>
          
          <div class="flex flex-col sm:flex-row gap-8 justify-center">
            <a href="mailto:aijazworkspace@gmail.com" class="contact-btn">
              <span>EMAIL</span>
            </a>
            <a href="https://www.linkedin.com/in/aijaz-afzal/" class="contact-btn">
              <span>LINKEDIN</span>
            </a>
            <a href="https://github.com/AijazAfzal" class="contact-btn">
              <span>GITHUB</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="border-t border-gray-700/50 mt-20 pt-8">
        <div class="container mx-auto px-6">
          <p class="text-center text-gray-500 text-sm">
            © 2025 AIJAZ AFZAL.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-btn {
      @apply px-8 py-4 font-medium transition-all duration-300 border border-gray-600 
             text-gray-300 hover:border-purple-400 hover:text-purple-400 
             flex items-center justify-center;
      letter-spacing: 1px;
      font-size: 14px;
    }
  `]
})
export class ContactComponent {}