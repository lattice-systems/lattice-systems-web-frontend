import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCircleCheck, lucideLinkedin, lucideMail } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmTextareaImports } from '@spartan-ng/helm/textarea';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, NgIcon, HlmButtonImports, HlmInputImports, HlmTextareaImports],
  providers: [provideIcons({ lucideMail, lucideLinkedin, lucideCircleCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="contacto" class="bg-muted flex justify-center px-6 py-20 sm:px-10 sm:py-24">
      <div class="flex w-full max-w-4xl flex-wrap gap-16">
        <div class="flex min-w-70 flex-1 flex-col gap-5">
          <div class="flex flex-col gap-3">
            <h2 class="text-foreground text-3xl font-bold tracking-tight">
              Conversemos sobre tu proyecto
            </h2>
            <p class="text-muted-foreground max-w-sm">
              Cuéntanos qué necesitas y te contactaremos en menos de dos días hábiles.
            </p>
          </div>
          <div class="mt-2 flex flex-col gap-3.5">
            <a
              href="mailto:hola@latticesystems.dev"
              class="text-foreground hover:text-primary flex items-center gap-2.5 transition-colors"
            >
              <ng-icon name="lucideMail" size="18" class="text-primary" />
              <span class="text-sm">hola&#64;latticesystems.dev</span>
            </a>
            <a
              href="https://www.linkedin.com/company/lattice-systems"
              target="_blank"
              rel="noopener"
              class="text-foreground hover:text-primary flex items-center gap-2.5 transition-colors"
            >
              <ng-icon name="lucideLinkedin" size="18" class="text-primary" />
              <span class="text-sm">Lattice Systems en LinkedIn</span>
            </a>
          </div>
        </div>

        <div class="border-border bg-card min-w-80 max-w-100 flex-1 rounded-md border p-7">
          @if (!sent()) {
            <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4" novalidate>
              <div class="flex flex-col gap-1.5">
                <label for="contact-name" class="text-foreground text-sm font-medium">Nombre</label>
                <input hlmInput id="contact-name" type="text" formControlName="name" placeholder="Tu nombre" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="contact-email" class="text-foreground text-sm font-medium">Correo</label>
                <input
                  hlmInput
                  id="contact-email"
                  type="email"
                  formControlName="email"
                  placeholder="tucorreo@empresa.com"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="contact-message" class="text-foreground text-sm font-medium">
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  hlmTextarea
                  id="contact-message"
                  formControlName="message"
                  rows="4"
                  placeholder="¿Qué te gustaría construir?"
                ></textarea>
              </div>
              <button hlmBtn type="submit" class="mt-1 w-full">Enviar mensaje</button>
            </form>
          } @else {
            <div class="flex flex-col items-start gap-2">
              <div class="bg-muted flex size-9 items-center justify-center rounded-lg">
                <ng-icon name="lucideCircleCheck" size="18" class="text-primary" />
              </div>
              <p class="text-foreground text-sm font-medium">Gracias — te contactaremos pronto.</p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Contacto {
  private readonly fb = inject(FormBuilder);

  protected readonly sent = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: [''],
  });

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.sent.set(true);
  }
}
