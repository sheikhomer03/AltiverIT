"use client";

import { useActionState, type ReactNode } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { Icon } from "@/components/ui/icon";
import { contactPage, contactTopics } from "@/content/contact";
import {
  HONEYPOT_FIELD,
  type ContactField,
  type ContactFormState,
} from "@/lib/contact-form";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle" };

const controlClasses =
  "block w-full rounded-md border bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink-900 transition-colors placeholder:text-ink-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20 focus:outline-none";

type FieldProps = {
  name: ContactField;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: (props: {
    id: string;
    name: ContactField;
    required?: boolean;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
    className: string;
  }) => ReactNode;
};

/** Label, control and error message wired together for accessibility. */
function Field({ name, label, required, error, className, children }: FieldProps) {
  const id = `contact-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required ? <span className="text-brand-600"> *</span> : null}
      </label>
      {children({
        id,
        name,
        required,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
        className: cn(controlClasses, error ? "border-red-500" : "border-ink-900/15"),
      })}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);
  const { form } = contactPage;
  const { fields } = form;
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div aria-live="polite">
        {state.status === "success" ? (
          <div className="flex gap-3 rounded-md border border-brand-200 bg-brand-50 p-4">
            <Icon name="checkCircle" className="mt-0.5 text-brand-600" />
            <div>
              <p className="font-semibold text-ink-900">{form.success.title}</p>
              <p className="mt-0.5 text-sm text-ink-600">{form.success.description}</p>
            </div>
          </div>
        ) : null}
        {state.status === "error" && state.message ? (
          <p className="rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {state.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={HONEYPOT_FIELD}>Leave this field empty</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label={fields.name.label} required error={errors.name}>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="name"
              placeholder={fields.name.placeholder}
              defaultValue={values.name}
            />
          )}
        </Field>
        <Field name="email" label={fields.email.label} required error={errors.email}>
          {(props) => (
            <input
              {...props}
              type="email"
              autoComplete="email"
              placeholder={fields.email.placeholder}
              defaultValue={values.email}
            />
          )}
        </Field>
        <Field name="company" label={fields.company.label} error={errors.company}>
          {(props) => (
            <input
              {...props}
              type="text"
              autoComplete="organization"
              placeholder={fields.company.placeholder}
              defaultValue={values.company}
            />
          )}
        </Field>
        <Field name="phone" label={fields.phone.label} error={errors.phone}>
          {(props) => (
            <input
              {...props}
              type="tel"
              autoComplete="tel"
              placeholder={fields.phone.placeholder}
              defaultValue={values.phone}
            />
          )}
        </Field>
      </div>

      <Field name="topic" label={fields.topic.label} required error={errors.topic}>
        {({ className, ...props }) => (
          <div className="relative">
            <select
              {...props}
              className={cn(className, "appearance-none pr-10")}
              defaultValue={values.topic ?? contactTopics[0]}
            >
              {contactTopics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <Icon
              name="chevronRight"
              className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 rotate-90 text-ink-500"
            />
          </div>
        )}
      </Field>

      <Field name="message" label={fields.message.label} required error={errors.message}>
        {(props) => (
          <textarea
            {...props}
            rows={6}
            placeholder={fields.message.placeholder}
            defaultValue={values.message}
            className={cn(props.className, "resize-y")}
          />
        )}
      </Field>

      <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-500">{form.description}</p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-brand-600 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? form.submitting : form.submit}
          {pending ? null : <Icon name="arrowRight" className="size-4" />}
        </button>
      </div>
    </form>
  );
}
