import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLightbulb, lucideShieldCheck, lucideZap } from '@ng-icons/lucide';

const PILLARS = [
  {
    icon: 'lucideLightbulb',
    title: 'Soluciones a medida',
    description: 'Diseñadas para tu operación, no genéricas.',
  },
  {
    icon: 'lucideZap',
    title: 'Entrega ágil',
    description: 'Avances incrementales, sin sorpresas.',
  },
  {
    icon: 'lucideShieldCheck',
    title: 'Código confiable',
    description: 'Construido para durar y escalar.',
  },
] as const;

@Component({
  selector: 'app-nosotros',
  imports: [NgIcon],
  providers: [provideIcons({ lucideLightbulb, lucideZap, lucideShieldCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="nosotros" class="mx-auto flex max-w-5xl flex-wrap gap-16 px-6 py-16 sm:px-10">
      <div class="flex min-w-70 flex-1 flex-col gap-4">
        <h2 class="text-foreground text-3xl font-bold tracking-tight">Quiénes somos</h2>
        <p class="text-subtle-foreground leading-relaxed">
          Somos un equipo de desarrollo enfocado en la transformación digital de organizaciones.
          Construimos sistemas internos, automatizamos procesos y creamos productos propios
          impulsados por inteligencia artificial — como SpaceAI, nuestra plataforma de gestión
          inteligente de espacios. Integramos metodologías ágiles y arquitecturas limpias y
          escalables en cada proyecto que entregamos.
        </p>
      </div>
      <div class="grid min-w-70 flex-1 gap-5">
        @for (pillar of pillars; track pillar.title) {
          <div class="flex items-start gap-3.5">
            <div class="bg-muted flex size-9 shrink-0 items-center justify-center rounded-lg">
              <ng-icon [name]="pillar.icon" size="18" class="text-primary" />
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-foreground text-[15px] font-semibold">{{ pillar.title }}</span>
              <span class="text-muted-foreground text-sm">{{ pillar.description }}</span>
            </div>
          </div>
        }
      </div>
    </section>
  `,
})
export class Nosotros {
  protected readonly pillars = PILLARS;
}
