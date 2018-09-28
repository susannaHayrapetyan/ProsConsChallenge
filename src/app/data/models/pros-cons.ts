export interface Pros extends Array<string> {
  [index: number]: string;
}

export interface Cons extends Array<string> {
  [index: number]: string;
}

export interface ProsCons {
  cons: Cons;
  pros: Pros;
}
