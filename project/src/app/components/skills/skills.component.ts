import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-32 bg-gray-800 text-white relative overflow-hidden">
      
      <div class="container mx-auto px-6">
        <div class="text-center mb-20">
          <h2 class="text-5xl md:text-6xl font-bold mb-6 text-white">
            Technical Skills
          </h2>
          <div class="w-20 h-px bg-purple-400 mx-auto"></div>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                Programming Languages
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of programmingLanguages; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>

            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                Frameworks
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of frameworks; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>

            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                Frontend Technologies
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of frontendTech; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>

            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                Databases
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of databases; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>

            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                ORM Technologies
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of ormTech; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>

            <div class="skill-category group">
              <h3 class="text-2xl font-bold mb-6 text-white">
                Version Control
              </h3>
              <div class="flex flex-wrap gap-4">
                <span *ngFor="let skill of versionControl; let i = index" 
                      class="skill-tag"
                      [style.animation-delay]="(i * 0.1) + 's'">
                  {{skill}}
                </span>
              </div>
            </div>
          </div>

          <div class="mt-20">
            <div class="text-center mb-12">
              <h3 class="text-4xl font-bold mb-6 text-white">
                Azure Cloud Services
              </h3>
              <div class="w-16 h-px bg-purple-400 mx-auto"></div>
            </div>
            <div class="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8">
              <div class="flex flex-wrap gap-6 justify-center">
                <span *ngFor="let service of azureServices; let i = index" 
                      class="azure-tag"
                      [style.animation-delay]="(i * 0.05) + 's'">
                  {{service}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skill-category {
      @apply transition-all duration-300;
    }
    
    .skill-tag {
      @apply px-4 py-2 text-sm font-medium inline-block border border-gray-600 text-gray-300
             hover:border-purple-400 hover:text-purple-400 transition-all duration-300;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .azure-tag {
      @apply px-4 py-2 text-sm font-medium inline-block bg-purple-500/20 border border-purple-500/50 
             text-purple-300 hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300;
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    
    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class SkillsComponent {
  programmingLanguages = ['C#', 'JavaScript', 'TypeScript', 'Python', 'C'];
  frameworks = ['ASP.NET', 'MVC', '.NET/.NET Core', 'Angular'];
  frontendTech = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Angular'];
  databases = ['MS SQL Server', 'PostgreSQL', 'MongoDB', 'DynamoDB'];
  ormTech = ['Entity Framework', 'Dapper', 'ADO.NET'];
  versionControl = ['Git', 'TFS', 'Bitbucket'];
  azureServices = [
    'App Service', 'Azure Functions', 'Azure SQL', 'Azure Blob Storage',
    'Azure AD', 'Azure DevOps', 'Azure Communication Service', 'Azure App Insights',
    'Azure Logic Apps', 'ARM Templates'
  ];
}