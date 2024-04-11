/**
 * Debounces a function
 * @template T
 * @param {T} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @param {boolean} [immediate=false] - Whether to execute the function immediately
 * @returns {(...args: Parameters<T>) => void} - The debounced function
 */

export const debounce = <T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined = undefined;

  return function debounced(...args: Parameters<T>) {
    const executeFunc = () => func(...args);

    clearTimeout(timeoutId);

    if (immediate && timeoutId === undefined) {
      executeFunc();
    }

    timeoutId = setTimeout(executeFunc, delay);
  };
};
