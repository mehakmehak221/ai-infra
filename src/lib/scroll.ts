const NAV_OFFSET_PX = 80;

/** Scroll to a `#section-id` hash with fixed-nav offset (reliable on mobile). */
export function scrollToHash(
  hash: string,
  behavior: ScrollBehavior = "smooth",
): boolean {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!id) return false;

  const el = document.getElementById(id);
  if (!el) return false;

  const top =
    el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;

  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}
