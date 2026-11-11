/*
  ============================================
  Utility Helpers — src/lib/utils.ts
  ============================================

  Small helper functions used across the app.
  Keeps component files clean and focused.
*/

/**
 * Conditionally join class names.
 * Filters out falsy values (false, undefined, null, '').
 *
 * Usage:
 *   cn('base-class', isActive && 'active', className)
 *   → "base-class active"
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get user initials from a full name.
 * Used as an avatar fallback when no image is provided.
 *
 * "Udit Sharma" → "US"
 * "Udit"        → "U"
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Format a number with commas for display.
 * 1234 → "1,234"
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

