import { CommentDto } from "../../models/comments"

export const createCommentDto = (commentValue: string, comment?: CommentDto) => 
{
  if (comment) {
    return ({
      parentComment: {
        author: comment.author,
        text: comment.text,
        id: comment.id,
      },
      id: String(new Date()),
      text: commentValue,
      rating: { plus: "0", minus: "0" },
      published: { bunin: String(new Date()) }})
  }
  return ({
    id: String(new Date()),
      text: commentValue,
      rating: { plus: "0", minus: "0" },
      published: { bunin: String(new Date())}
  })
}
