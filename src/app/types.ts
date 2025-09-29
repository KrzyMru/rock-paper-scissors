export const shapes = ['rock', 'paper', 'scissors'] as const;
type Shape = typeof shapes[number];

export type { Shape }