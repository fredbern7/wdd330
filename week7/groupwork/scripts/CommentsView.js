export default class CommentsView {
    renderAllComments(commentsList, parentElement){  
        let commentDiv = document.createElement('div');
        commentDiv.classList.add('commentContainer');
        commentDiv.innerHTML = `
            <h3>Comments.....</h3>
        `;
        commentsList.forEach(comment => {
            let div = document.createElement('div');
            div.classList.add('commentDiv');
            div.innerHTML = `
                <div class="commentContent">
                    <p class="title">${comment.name}</p>
                    <p class="content">Comment: ${comment.content}</p>
                </div>
                <p class="date">${comment.date}</p>
            `;
            commentDiv.appendChild(div);
          })
        parentElement.appendChild(commentDiv);

        return;
    }

    renderOneHikeComments(parentElement, comments){
        let formDiv = document.createElement('div');
        formDiv.classList.add('formDiv');
        formDiv.innerHTML = `<h3>Comments</h3>`
        formDiv.innerHTML = `
            <form name="comment" class="form">
            <textarea class="input" name="comment" placeholder="comment here...."></textarea>
            <button class="commentBtn" type="button">submit</submit>
            </form>
        `;

        parentElement.appendChild(formDiv);
        if (comments != "") {
            let commentDiv = document.createElement('div');
            commentDiv.classList.add('commentContainer');
            commentDiv.innerHTML = `
                <h3>Comments for ${comments[0].name} . . .</h3>
            `;
            comments.forEach(comment => {
                let div = document.createElement('div');
                div.classList.add('commentDiv');
                div.innerHTML = `
                    <div class="commentContent">
                        <p class="title">${comment.name}</p>
                        <p class="content">Comment: ${comment.content}</p>
                    </div>
                    <p class="date">${comment.date}</p>
                `;
            commentDiv.appendChild(div);
            });
            parentElement.appendChild(commentDiv);
        }
    }
}