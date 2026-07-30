import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLinkedin, lucideMail } from '@ng-icons/lucide';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, NgIcon],
  providers: [provideIcons({ lucideMail, lucideLinkedin })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="border-border border-t">
      <div
        class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10"
      >
        <a href="#top" class="flex items-center gap-2">
          <img
            ngSrc="/lattice-logo.png"
            alt=""
            width="600"
            height="600"
            class="h-5 w-auto dark:hidden"
          />
          <img
            ngSrc="/lattice-logo-dark.png"
            alt=""
            width="600"
            height="600"
            class="hidden h-5 w-auto dark:block"
          />
          <span class="text-foreground text-sm font-bold">Lattice Systems</span>
        </a>

        <div class="flex items-center gap-4">
          <a
            href="mailto:hola@latticesystems.dev"
            class="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Correo de Lattice Systems"
          >
            <ng-icon name="lucideMail" size="18" />
          </a>
          <a
            href="https://www.linkedin.com/company/lattice-systems"
            target="_blank"
            rel="noopener noreferrer"
            class="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Lattice Systems en LinkedIn"
          >
            <ng-icon name="lucideLinkedin" size="18" />
          </a>
        </div>

        <p class="text-muted-foreground text-xs">
          © {{ year }} Lattice Systems. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
