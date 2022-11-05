import CommentModel from './CommentModel.js';
import CommentsView from './CommentsView.js';

// Comments controller
export default class CommentsController {
  constructor() {
    this.CommentModel = new CommentModel();
    this.CommentsView = new CommentsView();
  }
  getCommentList() {
    return this.CommentModel.getAllComments();
  }
  showAllComments(parentElement) {
    let commentsList = this.getCommentList()
    //console.table(commentsList);
    if(commentsList !="") {
      this.CommentsView.renderAllComments(commentsList, parentElement)
    }  
    return;
  }
  showOneHikeComments(parentElement, name) {
    let comments = this.CommentModel.getOneHikeComments(name);
    this.CommentsView.renderOneHikeComments(parentElement, comments);
    return;
  }

  accessForm() {
    const form = document.forms['comment'];
    const [textarea, button] = form.elements;
    button.disabled = true;
    textarea.addEventListener('input', () => {
        if(textarea.value){
            button.disabled = false;
        }else {
            button.disabled = true;
        }
    })
  }
  saveComments(name, content) {
    let comment = {
      name: name,
      content: content,
      date: new Date()
    }
    console.log(comment);
    this.CommentModel.addComment(comment);
  }
}