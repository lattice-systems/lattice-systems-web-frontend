import { NgOptimizedImage } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideX } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';

const NAV_ITEMS = [
  { label: 'Servicios', fragment: 'servicios' },
  { label: 'Proyectos', fragment: 'proyectos' },
  { label: 'Nosotros', fragment: 'nosotros' },
  { label: 'Proceso', fragment: 'proceso' },
] as const;

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, NgIcon, HlmButtonImports],
  providers: [provideIcons({ lucideMenu, lucideX })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('mobileMenu', [
      state('closed', style({ height: '0', opacity: 0 })),
      state('open', style({ height: '*', opacity: 1 })),
      transition('closed <=> open', animate('180ms ease-out')),
    ]),
  ],
  template: `
    <header
      class="border-border bg-background/90 sticky top-0 z-40 flex h-18 items-center justify-between border-b px-6 backdrop-blur-md sm:px-10"
    >
      <a href="#top" class="flex shrink-0 items-center gap-2.5">
        <img
          ngSrc="/lattice-logo.png"
          alt=""
          width="600"
          height="600"
          class="h-7 w-auto dark:hidden"
          priority
        />
        <img
          ngSrc="/lattice-logo-dark.png"
          alt=""
          width="600"
          height="600"
          class="hidden h-7 w-auto dark:block"
          priority
        />
        <span class="text-foreground text-lg font-extrabold tracking-tight">Lattice Systems</span>
      </a>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
        @for (item of navItems; track item.fragment) {
          <a
            [href]="'#' + item.fragment"
            class="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            {{ item.label }}
          </a>
        }
        <a hlmBtn size="sm" href="#contacto" class="ml-2">Hablemos</a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        hlmBtn
        variant="ghost"
        size="icon"
        class="md:hidden"
        [attr.aria-expanded]="mobileOpen()"
        aria-controls="mobile-menu"
        aria-label="Abrir menú"
        (click)="toggleMobile()"
      >
        <span class="relative size-5">
          <ng-icon
            name="lucideMenu"
            class="absolute inset-0 transition-all duration-150"
            [class]="mobileOpen() ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'"
          />
          <ng-icon
            name="lucideX"
            class="absolute inset-0 transition-all duration-150"
            [class]="mobileOpen() ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'"
          />
        </span>
      </button>
    </header>

    <div
      id="mobile-menu"
      [@mobileMenu]="mobileOpen() ? 'open' : 'closed'"
      class="border-border bg-background/95 overflow-hidden border-b backdrop-blur-md md:hidden"
    >
      <nav class="flex flex-col gap-0.5 px-6 py-3" aria-label="Menú móvil">
        @for (item of navItems; track item.fragment) {
          <a
            [href]="'#' + item.fragment"
            class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors"
            (click)="mobileOpen.set(false)"
          >
            {{ item.label }}
          </a>
        }
        <a
          hlmBtn
          size="sm"
          href="#contacto"
          class="mt-2"
          (click)="mobileOpen.set(false)"
        >
          Hablemos
        </a>
      </nav>
    </div>
  `,
})
export class Navbar {
  protected readonly navItems = NAV_ITEMS;
  protected readonly mobileOpen = signal(false);

  protected toggleMobile(): void {
    this.mobileOpen.update((v) => !v);
  }
}
