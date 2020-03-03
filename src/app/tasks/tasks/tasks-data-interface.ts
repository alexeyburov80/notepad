export interface TasksDataInterface {
  id: number;
  // Название
  name: string;
  // Описание
  description?: string;
  // Чек лист для проверки задачи
  notesList?: string[];
  // Документы
  documents?: File[];
  // Оценка время исполнения < 100
  estimation?: number;
  // Тип оценки времени
  estimationType?: EstimationType;
  // Дедлайн
  dedline?: Date;
  // Критичность
  criticality?: CriticalityType;
  // Теги
  tags?: string;
  // Время начала
  startTime?: Date;
  // Время завершения
  endTime?: Date;
  // Статус
  state?: StateType;
  // Оповещения
  notifications?: Notification[];
}

export enum EstimationType {
  HOURS,
  DAYS,
  WEEKS,
  OF100
}

export enum StateType {
  NEW,
  IN_PROCESS,
  DONE
}

export enum CriticalityType {
  NOTIMPORTANT,
  IMPORTANT,
  VERYIMPORTANT
}

