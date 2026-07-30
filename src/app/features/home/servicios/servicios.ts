import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCode2, lucideGlobe, lucidePlug, lucideRefreshCw } from '@ng-icons/lucide';

const SERVICES = [
  {
    icon: 'lucideGlobe',
    title: 'Sitios web',
    description: 'Sitios diseñados y desarrollados a medida, rápidos y fáciles de mantener.',
  },
  {
    icon: 'lucideCode2',
    title: 'Software a medida',
    description: 'Aplicaciones y herramientas internas construidas para tu operación.',
  },
  {
    icon: 'lucideRefreshCw',
    title: 'Automatización de procesos',
    description: 'Flujos de trabajo automatizados que eliminan tareas repetitivas.',
  },
  {
    icon: 'lucidePlug',
    title: 'Integraciones tecnológicas',
    description: 'Conectamos tus sistemas y datos para que trabajen juntos.',
  },
] as const;

@Component({
  selector: 'app-servicios',
  imports: [NgIcon],
  providers: [provideIcons({ lucideGlobe, lucideCode2, lucideRefreshCw, lucidePlug })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="servicios" class="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-16 sm:px-10">
      <div class="flex flex-col gap-1.5">
        <h2 class="text-foreground text-3xl font-bold tracking-tight">Servicios</h2>
        <p class="text-muted-foreground">Qué hacemos para tu organización.</p>
      </div>
      <div class="grid gap-4" style="grid-template-columns: repeat(auto-fit, minmax(230px, 1fr))">
        @for (service of services; track service.title) {
          <div class="border-border bg-card flex flex-col gap-3 rounded-md border p-6">
            <div class="bg-muted flex size-10 items-center justify-center rounded-md">
              <ng-icon [name]="service.icon" size="20" class="text-primary" />
            </div>
            <span class="text-foreground text-lg font-semibold">{{ service.title }}</span>
            <p class="text-muted-foreground text-sm leading-relaxed">{{ service.description }}</p>
          </div>
        }
      </div>
    </section>
  `,
})
export class Servicios {
  protected readonly services = SERVICES;
}
