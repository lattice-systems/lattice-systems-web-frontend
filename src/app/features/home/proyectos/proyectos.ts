import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArmchair,
  lucideArrowUpRight,
  lucideShieldCheck,
  lucideSparkles,
  lucideWaypoints,
} from '@ng-icons/lucide';
import { LatticeCanvas } from '../../../shared/lattice-canvas';
import { Reveal } from '../../../shared/reveal.directive';

const CASE_STUDIES = [
  {
    icon: 'lucideShieldCheck',
    accent: 1,
    title: 'Sistema de gestión de credenciales',
    problem: 'La validación de credenciales era manual y propensa a errores.',
    solution: 'Un sistema interno para emitir, validar y controlar credenciales en un solo lugar.',
    result: 'Validación centralizada y trazable, sin hojas de cálculo ni procesos manuales.',
    wide: true,
  },
  {
    icon: 'lucideArmchair',
    accent: 3,
    title: 'Mini ERP para mueblería',
    problem: 'Productos, clientes, ventas e inventario vivían separados, sin visibilidad conjunta.',
    solution: 'Un ERP a medida que centraliza productos, clientes, ventas e inventario.',
    result: 'Una sola plataforma para operar el negocio día a día.',
    wide: false,
  },
  {
    icon: 'lucideWaypoints',
    accent: 2,
    title: 'Captación de leads con n8n',
    problem: 'Los prospectos llegaban por distintos canales sin seguimiento claro.',
    solution: 'Automatizaciones con n8n para atraer, organizar y procesar leads en continuo.',
    result: 'Un flujo que capta y da seguimiento a prospectos sin intervención manual.',
    wide: false,
  },
] as const;

@Component({
  selector: 'app-proyectos',
  imports: [NgIcon, LatticeCanvas, Reveal],
  providers: [
    provideIcons({
      lucideSparkles,
      lucideArrowUpRight,
      lucideShieldCheck,
      lucideArmchair,
      lucideWaypoints,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      id="proyectos"
      class="relative isolate mx-auto max-w-6xl overflow-hidden px-6 py-24 sm:px-10 sm:py-32"
    >
      <div
        class="glow par-y -z-10 hidden size-[28rem] opacity-[0.12] md:block"
        style="top: 8rem; left: -8rem; background: var(--accent-1); --par-from: 120px; --par-to: -120px"
        aria-hidden="true"
      ></div>

      <div class="max-w-2xl">
        <h2
          class="text-foreground text-4xl font-extrabold tracking-[-0.02em]"
          style="text-wrap: balance"
          data-reveal
        >
          Sistemas que hemos construido
        </h2>
      </div>

      <!-- Featured: SpaceAI, drenched navy island with its own live lattice -->
      <div
        class="dark border-border bg-card relative mt-12 overflow-hidden rounded-3xl border"
        data-reveal
        revealKind="scale"
      >
        <div class="absolute inset-0 opacity-70" aria-hidden="true">
          <app-lattice [density]="0.8" [interactive]="false" />
        </div>
        <div
          class="absolute inset-0"
          aria-hidden="true"
          style="background: linear-gradient(105deg, rgba(13,26,36,0.94) 30%, rgba(13,26,36,0.35) 100%)"
        ></div>
        <div class="relative grid gap-8 p-8 sm:p-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div class="max-w-lg">
            <span
              class="text-signal border-signal/30 bg-signal-soft inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-[0.2em] uppercase"
            >
              <ng-icon name="lucideSparkles" size="13" />
              Producto propio
            </span>
            <h3 class="text-foreground mt-5 text-3xl font-extrabold tracking-tight">SpaceAI</h3>
            <p class="text-subtle-foreground mt-4 text-base leading-relaxed">
              Nuestra plataforma propia de inteligencia artificial, automatización y gestión
              inteligente de espacios.
            </p>
            <a
              href="https://spaceai.latticesystems.dev"
              target="_blank"
              rel="noopener"
              class="text-foreground signal-underline press mt-6 inline-flex w-fit items-center gap-1.5 pb-1 text-sm font-medium"
            >
              Ver SpaceAI
              <ng-icon name="lucideArrowUpRight" size="16" />
            </a>
          </div>
        </div>
      </div>

      <!-- Case studies: asymmetric grid, first spans full width -->
      <div class="mt-6 grid gap-6 md:grid-cols-2">
        @for (project of caseStudies; track project.title; let i = $index) {
          <article
            class="card-accent border-border bg-card flex flex-col rounded-3xl border p-8"
            [class.md:col-span-2]="project.wide"
            [class.md:flex-row]="project.wide"
            [class.md:items-start]="project.wide"
            [class.md:gap-12]="project.wide"
            [style.--ca]="'var(--accent-' + project.accent + ')'"
            data-reveal
            [revealKind]="project.wide ? '' : 'scale'"
            [revealDelay]="i * 80"
          >
            <div [class.md:w-72]="project.wide" [class.md:shrink-0]="project.wide">
              <span
                class="flex size-11 items-center justify-center rounded-xl border"
                [style.color]="'var(--accent-' + project.accent + ')'"
                [style.background]="'color-mix(in srgb, var(--accent-' + project.accent + ') 12%, transparent)'"
                [style.borderColor]="'color-mix(in srgb, var(--accent-' + project.accent + ') 34%, transparent)'"
              >
                <ng-icon [name]="project.icon" size="20" />
              </span>
              <h3 class="text-foreground mt-5 text-xl font-semibold">{{ project.title }}</h3>
            </div>

            <dl class="mt-5 flex flex-1 flex-col gap-4 md:mt-0">
              <div>
                <dt class="text-muted-foreground font-mono text-[11px] tracking-[0.18em] uppercase">
                  Problema
                </dt>
                <dd class="text-subtle-foreground mt-1 text-sm leading-relaxed">
                  {{ project.problem }}
                </dd>
              </div>
              <div>
                <dt class="text-muted-foreground font-mono text-[11px] tracking-[0.18em] uppercase">
                  Solución
                </dt>
                <dd class="text-subtle-foreground mt-1 text-sm leading-relaxed">
                  {{ project.solution }}
                </dd>
              </div>
              <div class="border-border border-t pt-4">
                <dt
                  class="font-mono text-[11px] tracking-[0.18em] uppercase"
                  [style.color]="'var(--accent-' + project.accent + ')'"
                >
                  Resultado
                </dt>
                <dd class="text-foreground mt-1 text-sm leading-relaxed">{{ project.result }}</dd>
              </div>
            </dl>
          </article>
        }
      </div>
    </section>
  `,
})
export class Proyectos {
  protected readonly caseStudies = CASE_STUDIES;
}
