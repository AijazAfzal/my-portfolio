import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="py-32 bg-gray-900 text-white relative overflow-hidden">
      
      <div class="container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Education & Certifications
          </h2>
          <div class="w-20 h-px bg-purple-400 mx-auto"></div>
        </div>
        
        <div class="max-w-5xl mx-auto space-y-16">
          <!-- Education -->
          <div class="education-card">
            <div class="mb-8">
              <h3 class="text-4xl font-bold text-white mb-2">
                Education
              </h3>
            </div>
            
            <div class="space-y-12">
              <div class="education-item">
                <div class="flex items-start space-x-6">
                  <div class="education-dot"></div>
                  <div class="flex-1">
                    <h4 class="text-2xl font-semibold text-white mb-2">
                      Bachelor of Engineering
                    </h4>
                    <p class="text-purple-400 font-medium text-lg">Osmania University</p>
                    <div class="flex items-center mt-4">
                      <span class="grade-badge">
                        GPA: 7.4
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="education-item">
                <div class="flex items-start space-x-6">
                  <div class="education-dot"></div>
                  <div class="flex-1">
                    <h4 class="text-2xl font-semibold text-white mb-2">
                      Science International
                    </h4>
                    <p class="text-purple-400 font-medium text-lg">Indian School (CBSE)</p>
                    <div class="flex items-center mt-4">
                      <span class="grade-badge">
                        GPA: 7.5
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div class="education-card">
            <div class="mb-8">
              <h3 class="text-4xl font-bold text-white mb-2">
                Certifications
              </h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="certification-item">
                <div class="certification-card">
                  <h4 class="font-bold text-white text-xl mb-3">
                    Cisco DevNet Associate
                  </h4>
                  <p class="text-gray-400">Networking & Development</p>
                </div>
              </div>
              
              <div class="certification-item">
                <div class="certification-card">
                  <h4 class="font-bold text-white text-xl mb-3">
                    Foundational C# with Microsoft
                  </h4>
                  <p class="text-gray-400">Programming Fundamentals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .education-card {
      @apply bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 
             hover:border-purple-500/50 transition-all duration-500;
    }
    
    .education-item {
      @apply p-6 bg-gray-800/30 border border-gray-700/30 
             hover:border-purple-500/30 hover:bg-gray-800/50 transition-all duration-300;
    }
    
    .education-dot {
      @apply w-3 h-3 bg-purple-400 mt-3 flex-shrink-0;
    }
    
    .grade-badge {
      @apply px-3 py-1 text-sm font-medium border border-purple-500/50 
             text-purple-400 bg-purple-500/10;
    }
    
    .certification-card {
      @apply p-6 bg-gray-800/30 border border-gray-700/30 
             hover:border-purple-500/30 hover:bg-gray-800/50 transition-all duration-300;
    }
  `]
})
export class EducationComponent {}