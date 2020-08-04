export interface Comment {
  id: string;
  author: string;
  text: string;
  created: Date;
  isEdited: boolean;
  liked: string[];
}
