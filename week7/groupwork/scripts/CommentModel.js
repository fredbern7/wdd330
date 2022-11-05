
let COMMENT_LIST = [];

export default class Comment {
    constructor() {

    }
    CommentList() {
        let commentListString = localStorage.getItem(COMMENT_LIST)
        let commentList = []
        if (commentListString) {
            commentList = JSON.parse(commentListString)
        }
        return commentList;
    }

    getAllComments() {
        return this.CommentList();
    }
    getOneHikeComments(name) {
        let List = this.CommentList();
        let comment = [];
        for (let i = 0; i < List.length; i++) {
            if (List[i].name == name) {
                comment.push(List[i]);
            }
        }    
        return comment;
    }
    addComment(comment) {
        let commentsList = this.CommentList();
        commentsList.push(comment);
        localStorage.setItem(COMMENT_LIST, JSON.stringify(commentsList))

    }
}