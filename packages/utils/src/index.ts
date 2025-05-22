// 类型工具
export type Nullable<T> = T | null
export type Recordable<T = any> = Record<string, T>

// DOM 工具
export function addClass(el: Element, cls: string): void {
  if (!cls || !cls.trim()) return
  if (el.classList) {
    cls.split(' ').forEach(c => el.classList.add(c))
  } else {
    const className = el.getAttribute('class') || ''
    el.setAttribute('class', `${className} ${cls}`)
  }
}

export function removeClass(el: Element, cls: string): void {
  if (!cls || !cls.trim()) return
  if (el.classList) {
    cls.split(' ').forEach(c => el.classList.remove(c))
  } else {
    const className = el.getAttribute('class') || ''
    el.setAttribute('class', className.replace(new RegExp(`(^|\\s)${cls}(\\s|$)`, 'g'), ' ').trim())
  }
}

export function hasClass(el: Element, cls: string): boolean {
  if (!cls || !cls.trim()) return false
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    const className = el.getAttribute('class') || ''
    return new RegExp(`(^|\\s)${cls}(\\s|$)`).test(className)
  }
}

// 对象工具
export function deepMerge<T extends object = any, S extends object = T>(target: T, source: S): T & S {
  const result = { ...target } as T & S
  
  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = target[key]
    
    if (
      sourceValue !== null &&
      typeof sourceValue === 'object' &&
      targetValue !== null &&
      typeof targetValue === 'object'
    ) {
      result[key] = deepMerge(targetValue, sourceValue)
    } else {
      result[key] = sourceValue
    }
  }
  
  return result
}

// 字符串工具
export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')
}

export function camelCase(str: string): string {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

// 数组工具
export function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr))
}

// 函数工具
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null
  
  return function(this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer)
    
    timer = setTimeout(() => {
      fn.apply(this, args)
      timer = null
    }, delay)
  }
}

export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let last = 0
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now()
    
    if (now - last >= delay) {
      fn.apply(this, args)
      last = now
    }
  }
}
