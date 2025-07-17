import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-32 bg-gray-900 text-white relative overflow-hidden">
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="grid-pattern"></div>
      </div>
      
      <div class="container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Professional Experience
          </h2>
          <div class="w-20 h-px bg-purple-400 mx-auto"></div>
        </div>
        
        <div class="max-w-6xl mx-auto space-y-16">
          <!-- SnelStart Experience -->
          <div class="experience-card group">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
              <div>
                <h3 class="text-3xl font-bold text-white mb-2">
                  Application Developer (Full-Stack)
                </h3>
                <p class="text-xl text-purple-400 font-medium">SnelStart</p>
              </div>
              <span class="status-badge status-duration mt-4 md:mt-0">
              (Decemeber 2022 - June 2025)
              </span>
            </div>
            
            <div class="space-y-6">
              <div class="project-section">
                <h4 class="text-xl font-semibold text-white mb-4">Migration from Legacy VB.NET to .NET 8 Web App (Polaris)</h4>
                <ul class="text-gray-300 space-y-3">
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Leading migration of SnelStart's desktop application (VB.NET) to modern web architecture using .NET 8 and Angular 17
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Worked across Purchases, Sales, and Relation Management domains
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Implemented Diva Messaging system leveraging Redis for asynchronous communication
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Developed secured endpoints for purchase order CRUD operations
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Built document generation features for invoices and order confirmations
                  </li>
                </ul>
              </div>

              <div class="project-section">
                <h4 class="text-xl font-semibold text-white mb-4">Feedback Forum</h4>
                <ul class="text-gray-300 space-y-3">
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Led end-to-end development of dynamic feedback platform for user collaboration
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Designed management portal for administrators with approval workflows
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Developed RESTful APIs with .NET Core and Angular frontend
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Used Azure ARM templates for automated resource provisioning
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Integrated Azure Communication Service for email notifications
                  </li>
                </ul>
              </div>

              <div class="project-section">
                <h4 class="text-xl font-semibold text-white mb-4">Energy App</h4>
                <ul class="text-gray-300 space-y-3">
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Led development of employee exhaustion tracking application
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Implemented time-triggered Azure Functions for automated monthly reports
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Integrated Azure Key Vault, Blob Storage, App Service, and Application Insights
                  </li>
                  <li class="flex items-start">
                    <span class="text-purple-400 mr-3 mt-1">→</span>
                    Implemented Azure Active Directory for authentication and access control
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Capium Experience -->
          <div class="experience-card group">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-8">
              <div>
                <h3 class="text-3xl font-bold text-white mb-2">
                  Software Engineer
                </h3>
                <p class="text-xl text-purple-400 font-medium">Capium</p>
              </div>
              <span class="status-badge status-duration mt-4 md:mt-0">
              (June 2022 - November 2022)
              </span>
            </div>
            
            <div class="space-y-4">
              <h4 class="text-xl font-semibold text-white mb-4">Bookkeeping Domain Development</h4>
              <ul class="text-gray-300 space-y-3">
                <li class="flex items-start">
                  <span class="text-purple-400 mr-3 mt-1">→</span>
                  Developed and maintained bookkeeping domain using ASP.NET MVC
                </li>
                <li class="flex items-start">
                  <span class="text-purple-400 mr-3 mt-1">→</span>
                  Diagnosed and resolved production issues to enhance application stability
                </li>
                <li class="flex items-start">
                  <span class="text-purple-400 mr-3 mt-1">→</span>
                  Implemented comprehensive unit testing for high code quality
                </li>
                <li class="flex items-start">
                  <span class="text-purple-400 mr-3 mt-1">→</span>
                  Conducted troubleshooting to optimize performance and system efficiency
                </li>
                <li class="flex items-start">
                  <span class="text-purple-400 mr-3 mt-1">→</span>
                  Collaborated with cross-functional teams for requirement analysis and solution design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .grid-pattern {
      background-image: 
        linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px);
      background-size: 50px 50px;
    }
    
    .experience-card {
      @apply bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8 relative overflow-hidden
             hover:border-purple-500/50 transition-all duration-500;
    }
    
    .status-badge {
      @apply px-4 py-2 text-sm font-medium border;
      letter-spacing: 0.5px;
    }
    
    .status-current {
      @apply border-green-500/50 text-green-400 bg-green-500/10;
    }
    
    .status-duration {
      @apply border-purple-500/50 text-purple-400 bg-purple-500/10;
    }
    
    .project-section {
      @apply p-6 bg-gray-800/30 border border-gray-700/30 mb-6 
             hover:border-purple-500/30 hover:bg-gray-800/50 transition-all duration-300;
    }
  `]
})
export class ExperienceComponent {}