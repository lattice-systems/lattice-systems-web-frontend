import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-hero',
  imports: [HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeSlideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
  template: `
    <section
      class="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-14 px-6 py-22 sm:px-10 sm:py-24"
    >
      <div @fadeSlideIn class="flex max-w-xl flex-1 flex-col gap-6" style="flex-basis: 460px">
        <span class="text-muted-foreground text-[13px] font-semibold tracking-wider uppercase">
          Desarrollo de software a medida
        </span>
        <h1 class="text-foreground text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
          Software a la medida de tu operación
        </h1>
        <p class="text-subtle-foreground max-w-md text-base leading-relaxed sm:text-lg">
          Diseñamos, desarrollamos e implementamos sistemas, automatizaciones e integraciones que
          hacen crecer tu negocio.
        </p>
        <div class="mt-2 flex flex-wrap gap-3">
          <a hlmBtn size="lg" href="#contacto">Hablemos</a>
          <a hlmBtn size="lg" variant="outline" href="#proyectos">Ver proyectos</a>
        </div>
      </div>

      <div class="flex flex-1 items-center justify-center" style="flex-basis: 320px">
        <div class="relative size-80" aria-hidden="true">
          <div
            class="border-primary absolute size-50 rounded-[44px] border-3"
            style="top: 30px; left: 30px; transform: rotate(18deg)"
          ></div>
          <div
            class="border-slate-300 absolute size-50 rounded-[44px] border-3"
            style="top: 90px; left: 90px; transform: rotate(-14deg)"
          ></div>
          <div
            class="border-primary absolute size-50 rounded-[44px] border-3 opacity-35"
            style="top: 60px; left: 60px; transform: rotate(45deg)"
          ></div>
        </div>
      </div>
    </section>
  `,
})
export class Hero {}
