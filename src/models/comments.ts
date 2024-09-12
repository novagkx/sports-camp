type AuthorDto = {
    nick?: string;
  };
  type GeneralComment = {
    id: string;
    text: string;
    author?: AuthorDto;
  };
  type RatingDto = { plus: string; minus: string };
  
  type CommentDto = {
    parentComment?: null | GeneralComment;
    published?: { bunin?: string };
    rating?: RatingDto;
  } & GeneralComment;
  
export type {AuthorDto, GeneralComment, CommentDto, RatingDto}