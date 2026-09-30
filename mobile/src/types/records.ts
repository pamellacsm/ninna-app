export type RecordType = 'feeding' | 'sleep' | 'bath' | 'diaper' | 'temp' | 'growth' | 'memory';

export type BabyProfile = {
  id: string;
  name: string;
  birthDate: string;
  sex?: string;
  createdAt: string;
};

export type RoutineRecord = {
  id: string;
  type: RecordType;
  title: string;
  createdAt: string;
  notes?: string;
  value?: string;
  quantity?: string;
};
