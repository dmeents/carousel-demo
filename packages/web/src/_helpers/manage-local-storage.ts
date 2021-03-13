export function load(name: string): any {
  const data = localStorage.getItem(name);
  if (!data) return {};
  return JSON.parse(data);
}

export function save(name: string, data: any): void {
  const stringData = JSON.stringify(data);
  localStorage.setItem(name, stringData);
}

export function remove(name: string): void {
  localStorage.removeItem(name);
}
