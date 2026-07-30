import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmAccordionImports } from '@spartan-ng/helm/accordion';

const STEPS = [
  {
    title: 'Descubrimiento',
    content: 'Entendemos tu operación, objetivos y restricciones antes de proponer una solución.',
  },
  {
    title: 'Diseño y prototipado',
    content: 'Diseñamos la solución y la validamos contigo antes de escribir código.',
  },
  {
    title: 'Desarrollo',
    content: 'Construimos e integramos la solución con entregas incrementales.',
  },
  {
    title: 'Lanzamiento y soporte',
    content: 'Publicamos, medimos resultados y damos seguimiento post-lanzamiento.',
  },
] as const;

@Component({
  selector: 'app-proceso',
  imports: [HlmAccordionImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="proceso" class="mx-auto max-w-2xl px-6 py-16 sm:px-10">
      <div class="mb-8 flex flex-col gap-1.5">
        <h2 class="text-foreground text-3xl font-bold tracking-tight">Cómo trabajamos</h2>
        <p class="text-muted-foreground">Un proceso claro, de principio a fin.</p>
      </div>
      <div class="border-border bg-card rounded-md border px-6">
        <div hlmAccordion type="single">
          @for (step of steps; track step.title) {
            <div hlmAccordionItem>
              <hlm-accordion-trigger>{{ step.title }}</hlm-accordion-trigger>
              <hlm-accordion-content>
                <p class="text-muted-foreground text-sm leading-relaxed">{{ step.content }}</p>
              </hlm-accordion-content>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Proceso {
  protected readonly steps = STEPS;
}
