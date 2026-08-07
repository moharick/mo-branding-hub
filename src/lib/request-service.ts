const EVENT = "mo:request-service";

export function requestService(service: string) {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: service }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export function onRequestService(handler: (service: string) => void) {
  const listener = (event: Event) => handler((event as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
