import { getStoredToken } from './storage';

export const API_BASE_URL = 'http://localhost:3000';

export async function apiRequest(path: string, options: RequestInit = {}) {
  const token = await getStoredToken();

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers ?? {}),
    },
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || 'Erro ao processar a requisição');
  }

  return data;
}

export async function loginUser(email: string, password: string) {
  return apiRequest('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function fetchBabyProfile() {
  return apiRequest('/api/babies');
}

export async function saveBabyProfile(payload: Record<string, any>) {
  return apiRequest('/api/babies', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function saveRoutineRecord(payload: Record<string, any>) {
  return apiRequest('/api/records', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}
