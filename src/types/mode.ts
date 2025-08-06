export enum ModeType {
  View = 'view',
  Edit = 'edit'
}

export const ModeTypeLabels: Record<ModeType, string> = {
  [ModeType.View]: 'Режим просмотра',
  [ModeType.Edit]: 'Режим редактирования'
};