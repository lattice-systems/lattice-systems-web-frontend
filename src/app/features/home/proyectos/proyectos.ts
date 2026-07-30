import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArmchair,
  lucideArrowUpRight,
  lucideBot,
  lucideGitBranch,
  lucideShieldCheck,
} from '@ng-icons/lucide';

const CASE_STUDIES = [
  {
    icon: 'lucideShieldCheck',
    title: 'Sistema de gestión de credenciales',
    problem: 'Los procesos de validación de credenciales eran manuales y propensos a errores.',
    solution:
      'Desarrollamos un sistema interno para emitir, validar y controlar credenciales en un solo lugar.',
    result: 'Validación centralizada y trazable, sin hojas de cálculo ni procesos manuales.',
    rotate: 15,
  },
  {
    icon: 'lucideArmchair',
    title: 'Mini ERP para mueblería',
    problem:
      'Productos, clientes, ventas e inventario se gestionaban por separado, sin visibilidad conjunta.',
    solution:
      'Construimos un ERP a medida para centralizar productos, clientes, ventas, inventario y administración.',
    result: 'Una sola plataforma para operar el negocio día a día.',
    rotate: -12,
  },
  {
    icon: 'lucideGitBranch',
    title: 'Captación de leads con n8n',
    problem: 'Los prospectos llegaban por distintos canales sin un proceso claro de seguimiento.',
    solution:
      'Diseñamos automatizaciones con n8n para atraer, organizar y procesar leads de forma continua.',
    result: 'Un flujo automatizado que capta y da seguimiento a prospectos sin intervención manual.',
    rotate: 22,
  },
] as const;

@Component({
  selector: 'app-proyectos',
  imports: [NgIcon],
  providers: [
    provideIcons({ lucideBot, lucideArrowUpRight, lucideShieldCheck, lucideArmchair, lucideGitBranch }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="proyectos" class="bg-muted py-16">
      <div class="mx-auto flex max-w-5xl flex-col gap-8 px-6 sm:px-10">
        <div class="flex flex-col gap-1.5">
          <h2 class="text-foreground text-3xl font-bold tracking-tight">Proyectos</h2>
          <p class="text-muted-foreground">Algunos de los sistemas que hemos construido.</p>
        </div>

        <!-- Featured: SpaceAI -->
        <div class="bg-primary relative flex flex-wrap items-center gap-8 overflow-hidden rounded-md p-10">
          <div
            class="absolute size-55 rounded-[48px] border-3 border-white/18"
            style="top: -60px; right: -60px; transform: rotate(20deg)"
            aria-hidden="true"
          ></div>
          <div
            class="absolute size-55 rounded-[48px] border-3 border-white/10"
            style="top: -20px; right: 20px; transform: rotate(-10deg)"
            aria-hidden="true"
          ></div>
          <div class="relative flex min-w-80 flex-1 flex-col gap-3.5">
            <span
              class="w-fit rounded bg-white/12 px-2.5 py-1 text-xs font-semibold tracking-wider text-white/65 uppercase"
            >
              Producto propio
            </span>
            <div class="flex items-center gap-3">
              <div class="flex size-11 items-center justify-center rounded-lg bg-white/12">
                <ng-icon name="lucideBot" size="22" class="text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white">SpaceAI</h3>
            </div>
            <p class="max-w-lg text-base leading-relaxed text-white/75">
              Nuestra plataforma propia de inteligencia artificial, automatización y gestión
              inteligente de espacios.
            </p>
            <a
              href="https://latticesystems.dev/spaceai"
              target="_blank"
              rel="noopener"
              class="mt-1 inline-flex w-fit items-center gap-1.5 border-b border-white/40 pb-0.5 text-sm font-medium text-white"
            >
              Ver SpaceAI
              <ng-icon name="lucideArrowUpRight" size="16" />
            </a>
          </div>
        </div>

        <!-- Case studies -->
        <div class="grid gap-5" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))">
          @for (project of caseStudies; track project.title) {
            <div class="border-border bg-card relative flex flex-col gap-4 overflow-hidden rounded-md border p-7">
              <div
                class="border-border absolute size-27 rounded-[26px] border-2"
                [style]="'top: -30px; right: -30px; transform: rotate(' + project.rotate + 'deg)'"
                aria-hidden="true"
              ></div>
              <div class="bg-muted relative flex size-10 items-center justify-center rounded-md">
                <ng-icon [name]="project.icon" size="20" class="text-primary" />
              </div>
              <h3 class="text-foreground text-lg font-semibold">{{ project.title }}</h3>
              <div class="flex flex-col gap-2.5">
                <div>
                  <span class="text-muted-foreground mb-0.5 block text-xs font-semibold tracking-wider uppercase">
                    Problema
                  </span>
                  <p class="text-subtle-foreground text-sm leading-relaxed">{{ project.problem }}</p>
                </div>
                <div>
                  <span class="text-muted-foreground mb-0.5 block text-xs font-semibold tracking-wider uppercase">
                    Solución
                  </span>
                  <p class="text-subtle-foreground text-sm leading-relaxed">{{ project.solution }}</p>
                </div>
                <div>
                  <span class="text-muted-foreground mb-0.5 block text-xs font-semibold tracking-wider uppercase">
                    Resultado
                  </span>
                  <p class="text-foreground text-sm leading-relaxed">{{ project.result }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Proyectos {
  protected readonly caseStudies = CASE_STUDIES;
}
