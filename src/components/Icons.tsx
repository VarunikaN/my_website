export function IconMail({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  );
}

export function IconPhone({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M6.5 3.5l3 1.2a1 1 0 01.6.8l.4 3.2a1 1 0 01-.3.9L8.5 11.5a12 12 0 005 5l1.9-1.7a1 1 0 01.9-.3l3.2.4a1 1 0 01.8.6l1.2 3a1 1 0 01-.5 1.2A16 16 0 013.8 5a1 1 0 011.2-.5z" />
    </svg>
  );
}

export function IconGithub({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 011-2.7 3.6 3.6 0 01.1-2.7s.8-.3 2.8 1a9.6 9.6 0 015 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 01.1 2.7 3.9 3.9 0 011 2.7c0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0012 2z" />
    </svg>
  );
}

export function IconLinkedin({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 112.5 6a2.5 2.5 0 012.48-2.5zM3 8.75h3.96V21H3zM9.26 8.75H13v1.67h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.69 2.6 4.69 6V21h-3.96v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9.26z" />
    </svg>
  );
}
