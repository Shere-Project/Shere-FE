export async function request<T extends object>(url: string, options?: RequestInit): Promise<T> {
  const headers: (HeadersInit & { Authorization?: string }) | undefined = options?.headers;
  if (options?.headers) {
    delete options.headers;
  }
  try {
    const res: Response = await fetch(url);
    return (await res.json()) as T;
  } catch (err) {
    return err as T;
  }
}